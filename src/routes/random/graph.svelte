<script lang="ts">
	import ExampleChartV2 from '$lib/components/charting/exampleChartV2.svelte';
	// import ExamplePancakeChart from '$lib/components/chart/examplePancakeChart.svelte';
	// import ExampleScatterChartd3 from '$lib/components/chart/exampleScatterChart.svelte';
	import Page from '../../lib/components/layout/page.svelte';
</script>

<Page title="Graph Testing">
	<div class="chart">
		<h2>Example Chart</h2>
		<ExampleChartV2 />
	</div>
	<!-- <div class="chart">
		<h2>Example Chart Copy</h2>
		<ExampleChartV2 />
	</div> -->

	<!-- <div class="border"> -->
	<!-- <ExamplePancakeChart /> -->
	<!-- </div> -->

	<!-- <div class="chart"> -->
	<!-- <ExampleScatterChartd3 /> -->
	<!-- </div> -->
</Page>

<style lang="postcss">
	/* .border {
		padding: 1em;
		border: 0.1rem solid var(--text);
	} */
	.chart {
		width: 100%;
		padding: 1em;
		/* max-height: 30em; */
		height: 30em;
		margin-left: auto;
		margin-right: auto;
		/* aspect-ratio: 1; */
		border: 0.1rem solid var(--text);
		box-shadow: var(--shadow-elevation-high);
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
