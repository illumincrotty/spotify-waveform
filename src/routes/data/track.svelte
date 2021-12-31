<!-- <script lang="ts" context="module">
	import { browser } from '$app/env';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ params, fetch, session, stuff }) => {
		if (browser) {
			return { props: { trackID: params.slug } };
		}

		return {};
	};
</script> -->
<script lang="ts">
	// import { page } from '$app/stores';
	import Page from '$lib/components/page.svelte';
	import TreeView from 'svelte-tree-view/TreeView.svelte';

	import { onMount, tick } from 'svelte';
	import { token } from '$lib/storeSession';
	import { createSpotifyConnection } from '$lib/api';
	import type { pkceToken } from 'tokens';
	import WavyBarChart from '$lib/components/wavyBarChart.svelte';
	import { page } from '$app/stores';
	import OverlayLoading from '$lib/components/overlayLoading.svelte';
	import { goto } from '$app/navigation';

	export let trackID = '';
	let ready = false;
	let spotify: ReturnType<typeof createSpotifyConnection>;
	let trackPromise: ReturnType<typeof spotify['track']> = undefined;
	let trackAnalysisPromise: ReturnType<typeof spotify['audioAnalysis']> =
		undefined;
	let trackFeaturesPromise: ReturnType<typeof spotify['audioFeatures']> =
		undefined;

	let maxLoudness: number[] = undefined;

	let trackName = 'Track Name';
	// let trackAnalysis: Awaited<ReturnType<typeof spotify['audioAnalysis']>>;

	onMount(() => {
		if (trackID === '') {
			const search = new URLSearchParams(window.location.search);
			if (search.has('id')) {
				console.debug(search.get('id'));
				trackID = search.get('id');
			} else {
				history.back();
			}
		}
		console.debug(`id: ${trackID}`);

		if ($token !== 'empty') {
			spotifySetup($token);
		}
		tick().then(() => {
			ready = true;
		});
	});

	const spotifySetup = async (token: pkceToken) => {
		spotify = createSpotifyConnection(token);
		const trackDetails = await spotify.track(trackID);
		trackName = `${trackDetails.name} by ${trackDetails.artists[0].name}`;

		trackPromise = spotify.track(trackID);
		trackFeaturesPromise = spotify.audioFeatures(trackID);
		trackAnalysisPromise = spotify.audioAnalysis(trackID);
		let trackAnalysis = await spotify.audioAnalysis(trackID);

		// const trueMax = Math.min(
		// 	...trackAnalysis.segments.map((segment) => segment.loudness_max)
		// );

		let volumeNormalized = trackAnalysis.segments.map((segment) => {
			return {
				time: segment.start,
				duration: segment.duration,
				loud:
					1 - Math.min(Math.max(segment.loudness_max, -35), 0) / -35,
			};
		});

		maxLoudness = volumeNormalized.map((value) => value.loud);

		const timeNormalized: number[] = [];
		let current = 0;
		console.log(`Duration: ${trackAnalysis.track.duration}`);
		for (let i = 0; i < 100; i++) {
			const desired = (trackAnalysis.track.duration / 100) * i;
			console.log(desired);
			while (
				volumeNormalized.length - 1 > current &&
				volumeNormalized[current + 1].time <= desired
			) {
				current += 1;
			}
			timeNormalized.push(volumeNormalized[current].loud);
		}

		maxLoudness = timeNormalized;

		console.log(volumeNormalized);
		console.log(timeNormalized);
	};
	const theme = {
		'scheme': 'google',
		'author': 'seth wright (http://sethawright.com)',
		'base00': 'var(--bg)',
		'base01': '#282a2e',
		'base02': '#373b41',
		'base03': '#969896',
		'base04': '#b4b7b4',
		'base05': '#c5c8c6',
		'base06': '#e0e0e0',
		'base07': '#ffffff',
		'base08': 'var(--t3)',
		'base09': 'var(--t4)',
		'base0A': '#FBA922',
		'base0B': 'var(--t1)',
		'base0C': 'var(--t3)',
		'base0D': 'var(--t3)',
		'base0E': 'var(--t4)',
		'base0F': '#3971ED',
		'tree-view-font-size': '3rem',
	};
</script>

{#if trackID === ''}
	<OverlayLoading />
{:else}
	<Page title={trackName}>
		{#if maxLoudness}
			<WavyBarChart data={maxLoudness} />
		{/if}
		<!-- {#if ready}
		{#if trackPromise}
			{#await trackPromise}
				<div>Loading...</div>
			{:then trackInfo}
				<TreeView {theme} data={trackInfo} />
			{/await}
		{/if}
		<br />
		{#if trackFeaturesPromise}
			{#await trackFeaturesPromise}
				<div>Loading...</div>
			{:then trackInfo}
				<TreeView {theme} data={trackInfo} />
			{/await}
		{/if}
		<br />
		{#if trackAnalysisPromise}
			{#await trackAnalysisPromise}
				<div>Loading...</div>
			{:then trackInfo}
				<TreeView {theme} data={trackInfo} />
			{/await}
		{/if}
	{/if} -->
		<!-- <slot /> -->
	</Page>
{/if}

<style>
	:global(ul.svelte-tree-view:not(#\9)) {
		--tree-view-font-size: 1em;
		max-width: var(--measure);
	}
</style>
