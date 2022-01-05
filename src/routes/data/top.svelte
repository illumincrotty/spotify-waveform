<script lang="ts">
	import { createSpotifyConnection } from '$lib/script/api';
	import { onMount, tick } from 'svelte';

	import { token } from '$lib/storeSession';
	import type { pkceToken } from 'tokens';
	import Page from '$lib/components/layout/page.svelte';
	import Dropdown from '$lib/components/button/dropdown.svelte';
	import TrackBlock from '$lib/components/layout/trackBlock.svelte';
	import BlockStack from '$lib/components/layout/blockStack.svelte';
	import ArtistBlock from '$lib/components/layout/artistBlock.svelte';

	let spotify: ReturnType<typeof createSpotifyConnection>;
	let artistPromise =
		undefined as Promise<SpotifyApi.UsersTopArtistsResponse>;
	let trackPromise = undefined as Promise<SpotifyApi.UsersTopTracksResponse>;
	let mounted = false;

	onMount(() => {
		if ($token !== 'empty') {
			if (token.valid()) spotifySetup($token);
		}
		tick().then(() => {
			mounted = true;
		});
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
		<div class="switcher" style="--gap: 2ch">
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
						<div class="placeholder-fullscreen">Loading...</div>
					{:then tracks}
						<BlockStack
							component={TrackBlock}
							items={tracks.items}
						/>
					{:catch}
						<div>Failure</div>
					{/await}
				{:else}
					<div class="placeholder-fullscreen">Loading...</div>
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
						<div class="placeholder-fullscreen">Loading...</div>
					{:then artists}
						<BlockStack
							component={ArtistBlock}
							items={artists.items}
						/>
					{:catch}
						<div>Failure</div>
					{/await}
				{:else}
					<div class="placeholder-fullscreen">Loading...</div>
				{/if}
			</section>
		</div>
	{/if}
</Page>

<style lang="postcss">
	.placeholder-fullscreen {
		height: 100vh;
	}
</style>
