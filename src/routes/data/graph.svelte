<script lang="ts">
	import { createSpotifyConnection } from '$lib/script/api';
	import { onMount } from 'svelte';

	import { token } from '$lib/storeSession';
	import type { pkceToken } from 'tokens';
	import Page from '$lib/components/layout/page.svelte';
	import ExamplePancakeChart from '$lib/components/chart/examplePancakeChart.svelte';
	import ExampleScatterChartd3 from '$lib/components/chart/exampleScatterChart.svelte';

	let spotify: ReturnType<typeof createSpotifyConnection>;
	// let artistPromise =
	// 	undefined as Promise<SpotifyApi.UsersTopArtistsResponse>;
	let tracks: [SpotifyApi.TrackObjectFull, SpotifyApi.AudioFeaturesObject][] =
		[];

	onMount(() => {
		// if ($token !== 'empty') {
		// 	if (token.valid()) spotifySetup($token);
		// }
	});

	const spotifySetup = async (token: pkceToken) => {
		spotify = createSpotifyConnection(token);

		const topTracks = await spotify.topTracks({
			time_range: 'long_term',
			limit: 50,
		});
		console.log(topTracks);
		const tracksFeatures = await spotify.audioFeaturesMultiTrack(
			topTracks.items.map((track) => track.id)
		);

		console.log(tracksFeatures);

		tracks = topTracks.items.map((track, index) => [
			track,
			tracksFeatures.audio_features[index],
		]);

		console.log(tracks);
	};

	let data;
	$: {
		data = [
			{
				name: 'Track Data',
				data: tracks.map((track) => {
					return {
						x: track[1].acousticness,
						y: track[1].energy,
						meta: {
							name: track[0].name,
							artist: [
								track[0].artists.map((artist) => artist.name),
							],
						},
					};
				}),
			},
		];
		console.log(data);
	}
</script>

<svelte:head><title>Top Spotify info</title></svelte:head>

<Page title="Spotify Top Track Graphs">
	<section class="stack" style="align-items: flex-start;">
		<h2>Top Tracks</h2>
		<div id="d3chart">
			<!-- <ExampleScatterChartd3 /> -->
		</div>

		<div id="chart-holder">
			<!-- <ExamplePancakeChart /> -->
		</div>
	</section>
</Page>

<style lang="postcss">
	/* div {
		width: 100%;
	} */
	#d3chart {
		width: 100%;
		max-width: var(--measure);
		aspect-ratio: 5/3;
	}
</style>
