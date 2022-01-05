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
	// let artistPromise =
	// 	undefined as Promise<SpotifyApi.UsersTopArtistsResponse>;
	let tracks: SpotifyApi.TrackObjectFull[] = [];

	onMount(() => {
		if ($token !== 'empty') {
			if (token.valid()) spotifySetup($token);
		}
	});

	const spotifySetup = async (token: pkceToken) => {
		spotify = createSpotifyConnection(token);

		const firstResponse = await spotify.topTracks({
			time_range: 'long_term',
			limit: 50,
		});

		console.log(firstResponse);
		tracks = [...firstResponse.items];
		const numberOfTracks = firstResponse.total;
		const responsesPromise: Promise<typeof firstResponse>[] = [];

		for (let i = 50; i < numberOfTracks; i += 50) {
			responsesPromise.push(
				spotify.topTracks({
					time_range: 'long_term',
					limit: 50,
					offset: i,
				})
			);
		}

		const responses = await Promise.all(responsesPromise);
		for (const response of responses) {
			tracks.push(...response.items);
		}

		console.log(tracks);

		// while (response.total > tracks.length) {
		// 	spotify.topTracks({
		// 		time_range: 'long_term',
		// 		offset: tracks.length,
		// 	}).then(

		//     );
		// }
		// artistPromise = await spotify.topArtists({
		// 	time_range: 'long_term',
		// });
	};

	const requestTracks = async (offset: number) => {};
</script>

<svelte:head><title>Top Spotify info</title></svelte:head>

<Page title="Spotify Top Track Graphs">
	<section class="stack" style="align-items: flex-start;">
		<h2>Top Tracks</h2>
		<!-- <Dropdown
			name="Time Scale"
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
		/> -->
	</section>
	<!-- <section class="stack " style="align-items: flex-start;">
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
				<BlockStack component={ArtistBlock} items={artists.items} />
			{:catch}
				<div>Failure</div>
			{/await}
		{:else}
			<div class="placeholder-fullscreen">Loading...</div>
		{/if}
	</section> -->
</Page>

<style lang="postcss">
</style>
