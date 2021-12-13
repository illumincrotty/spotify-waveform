<script lang="ts">
	import { SpotifyConnector } from '$lib/api';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import Dropdown from '$lib/components/dropdown.svelte';
	import Page from '$lib/components/page.svelte';
	import { onMount } from 'svelte';
	let spotify: SpotifyConnector;

	$: artistPromise = undefined as Promise<SpotifyApi.UsersTopArtistsResponse>;
	$: trackPromise = undefined as Promise<SpotifyApi.UsersTopTracksResponse>;

	onMount(() => {
		const authorization = new URLSearchParams(window.location.search);
		console.log(authorization.get('token'));
		spotify = new SpotifyConnector(authorization.get('token'));
		console.log(spotify.head.get('Authorization'));
		trackPromise = spotify.topTracks({
			time_range: 'long_term',
		});
		artistPromise = spotify.topArtists({
			time_range: 'long_term',
		});
	});
</script>

<svelte:head><title>Generation</title></svelte:head>

<svelte:body />
<Page title="Generator">
	<div id="top" class="cols">
		<div>
			<Dropdown
				name="Top Tracks"
				id="top-tracks"
				options={[
					{ label: 'Short Term', value: 'short_term' },
					{ label: 'Medium Term', value: 'medium_term' },
					{ label: 'Long Term', value: 'long_term' },
				]}
				placeHolder={2}
				on:change={(e) => {
					trackPromise = spotify.topTracks({
						time_range: e.detail.value,
					});
				}}
			/>
			{#if trackPromise instanceof Promise}
				{#await trackPromise}
					<div>Loading...</div>
				{:then tracks}
					<ul>
						{#each tracks.items as track}
							<li transition:fade={{ delay: 0, duration: 500 }}>
								<a href={track.external_urls.spotify}
									>{track.name}</a
								>
								by
								<a href={track.artists[0].external_urls.spotify}
									>{track.artists[0].name}</a
								>
							</li>
						{/each}
					</ul>
				{:catch}
					<div>Failure</div>
				{/await}
			{/if}
		</div>
		<div>
			<Dropdown
				name="Top Artists"
				id="top-artists"
				options={[
					{ label: 'Short Term', value: 'short_term' },
					{ label: 'Medium Term', value: 'medium_term' },
					{ label: 'Long Term', value: 'long_term' },
				]}
				placeHolder={2}
				on:change={(e) => {
					artistPromise = spotify.topArtists({
						time_range: e.detail.value,
					});
				}}
			/>
			{#if artistPromise instanceof Promise}
				{#await artistPromise}
					<div>Loading...</div>
				{:then artists}
					<ul>
						{#each artists.items as artist}
							<li
								transition:fade={{
									delay: 0,
									duration: 500,
									easing: cubicInOut,
								}}
							>
								<a href={artist.external_urls.spotify}
									>{artist.name}</a
								>
							</li>
						{/each}
					</ul>
				{:catch}
					<div>Failure</div>
				{/await}
			{/if}
		</div>
	</div>
</Page>

<style lang="postcss">
	li {
		font-size: 0.8em;
	}
</style>
