<script lang="ts">
	import { base } from '$app/paths';

	import Page from '$lib/components/layout/page.svelte';
</script>

<svg height="0" display="collapse">
	<defs>
		<filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.04"
				result="noise"
				numOctaves="5" />

			<feDiffuseLighting in="noise" surfaceScale="2">
				<feDistantLight azimuth="45" elevation="60" />
			</feDiffuseLighting>
		</filter>
		<filter id="f3">
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.04"
				result="noise"
				numOctaves="5" />
			<feConvolveMatrix
				filterRes="100 100"
				style="color-interpolation-filters:sRGB"
				order="3"
				kernelMatrix="0 -1 0   -1 4 -1   0 -1 0"
				preserveAlpha="true" />
		</filter>
	</defs>
</svg>
<Page title="Paper Texture">
	<div class="paper" />

	<!--  -->
</Page>

<style>
	svg {
		height: 0;
		width: 0;
		margin: 0;
	}
	.paper {
		width: 100%;
		aspect-ratio: 1;
		background: green;
		filter: url(#roughPaper);
	}
</style>
