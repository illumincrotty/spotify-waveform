<script lang="ts">
	import { createSpotifyConnection } from '$lib/api';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { assets, base } from '$app/paths';
	import { onMount } from 'svelte';

	import type { pkceToken } from 'tokens';
	import { refreshToken } from '$lib/authentication';

	import Page from '$lib/components/page.svelte';
	import Dropdown from '$lib/components/dropdown.svelte';

	import OverlayLogin from '$lib/components/overlayLogin.svelte';
	import OverlayLoading from '$lib/components/overlayLoading.svelte';

	let mounted = false;
	let spotify: ReturnType<typeof createSpotifyConnection>;
	let artistPromise =
		undefined as Promise<SpotifyApi.UsersTopArtistsResponse>;
	let trackPromise = undefined as Promise<SpotifyApi.UsersTopTracksResponse>;

	onMount(() => {
		const potentialToken = sessionStorage.getItem('token_set');
		if (potentialToken) {
			const token = JSON.parse(potentialToken) as pkceToken;
			refreshToken().then(() => {
				spotifySetup(
					JSON.parse(sessionStorage.getItem('token_set')) as pkceToken
				);
			});
		}
		window.setTimeout(() => {
			mounted = true;
		}, 100);
	});
	const spotifySetup = (token: pkceToken) => {
		spotify = createSpotifyConnection(token);

		trackPromise = spotify.topTracks({
			time_range: 'long_term',
		});
		artistPromise = spotify.topArtists({
			time_range: 'long_term',
		});
	};
</script>

<svelte:head><title>Top Spotify info</title></svelte:head>

<Page title="Top Spotify Info">
	{#if mounted}
		{#if spotify}
			<div class="box flexy" style="--gap: 2ch">
				<section class="stack" style="align-items: flex-start;">
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
							<ul class="unlist">
								{#each tracks.items as track}
									<li>
										<a
											rel="external"
											href={track.external_urls.spotify}
											>{track.name}</a
										>
										by
										<a
											rel="external"
											href={track.artists[0].external_urls
												.spotify}
											>{track.artists[0].name}</a
										>
									</li>
								{/each}
							</ul>
						{:catch}
							<div>Failure</div>
						{/await}
					{/if}
				</section>
				<section class="stack " style="align-items: flex-start;">
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
							<ul class="unlist">
								{#each artists.items as artist}
									<li
										transition:fade={{
											delay: 0,
											duration: 500,
											easing: cubicInOut,
										}}
									>
										<a
											rel="external"
											href={artist.external_urls.spotify}
											>{artist.name}</a
										>
									</li>
								{/each}
							</ul>
						{:catch}
							<div>Failure</div>
						{/await}
					{/if}
				</section>
			</div>
		{:else}
			<OverlayLogin url={`tools/generator/`} />
		{/if}
	{:else}
		<OverlayLoading />
	{/if}
</Page>

<style lang="postcss">
	ul {
		line-height: 1.8;
	}
	li {
		font-size: 0.8em;
		white-space: nowrap;
	}
	.flexy {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--gap);
		justify-content: space-evenly;
	}
</style>
