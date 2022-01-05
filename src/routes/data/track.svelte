<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from '$lib/storeSession';
	import { createSpotifyConnection } from '$lib/script/api';

	import Page from '$lib/components/layout/page.svelte';
	import OverlayLoading from '$lib/components/overlay/overlayLoading.svelte';
	import WaveChart from '$lib/components/chart/chartCenteredBar.svelte';
	import { processAudioAnalysis } from '$lib/script/trackAnalysis';
	import JsonView from '$lib/components/random/jsonView.svelte';
	import Loader from '$lib/components/loading/loader.svelte';
	import SpotifyCodeSvg from '$lib/components/spotifyCodeSVG.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	export let trackID = '';

	let spotify: ReturnType<typeof createSpotifyConnection>;
	let trackPromise: ReturnType<typeof spotify['track']> = undefined;
	let trackAnalysisPromise: ReturnType<typeof spotify['audioAnalysis']> =
		undefined;
	let trackFeaturesPromise: ReturnType<typeof spotify['audioFeatures']> =
		undefined;

	let maxLoudness: number[] = undefined;

	let trackName = '';
	// let trackAnalysis: Awaited<ReturnType<typeof spotify['audioAnalysis']>>;

	onMount(() => {
		if (trackID === '') {
			const search = new URLSearchParams(window.location.search);
			if (search.has('id')) {
				console.debug(search.get('id'));
				trackID = search.get('id');

				if ($token !== 'empty' && token.valid()) {
					spotify = createSpotifyConnection($token);
					spotify.track(trackID).then((trackDetails) => {
						trackName = `${trackDetails.name} by ${trackDetails.artists[0].name}`;
					});
					void asyncMount();
				}
			} else {
				goto(`${base}/data/search?categories=track`);
			}
		}
	});

	const asyncMount = async () => {
		trackPromise = spotify.track(trackID);
		trackFeaturesPromise = spotify.audioFeatures(trackID);
		trackAnalysisPromise = spotify.audioAnalysis(trackID);

		maxLoudness = processAudioAnalysis(
			await spotify.audioAnalysis(trackID)
		);
	};
</script>

<Page title={trackName || 'Track Analysis'}>
	{#if (trackID === '' || trackName === '') && spotify}
		<OverlayLoading />
	{:else}
		<h2>Spotify Code</h2>
		<SpotifyCodeSvg uri="track:{trackID}" />

		{#if maxLoudness}
			<h2>Track Waveform</h2>

			<WaveChart data={maxLoudness} />
		{/if}

		{#if trackPromise}
			<h2>Track Details</h2>
			{#await trackPromise}
				<Loader />
			{:then features}
				<JsonView data={features} />
			{/await}
		{/if}
		{#if trackFeaturesPromise}
			<h2>Track Features</h2>
			{#await trackFeaturesPromise}
				<Loader />
			{:then features}
				<JsonView data={features} />
			{/await}
		{/if}
		{#if trackAnalysisPromise}
			<h2>Track Analysis</h2>

			{#await trackAnalysisPromise}
				<Loader />
			{:then analysis}
				<JsonView data={analysis} />
			{/await}
		{/if}
	{/if}
</Page>
