<script context="module" lang="ts">
	export type loadingSymbol = 'spinner' | 'boxes' | 'dots';
</script>

<script lang="ts">
	import LoadingBoxes from './loadingBoxes.svelte';
	import LoadingDots from './loadingDots.svelte';
	import LoadingSpinner from './loadingSpinner.svelte';

	export let size = '10rem';
	export let symbol: loadingSymbol = 'dots';
</script>

<div style="max-width: {size}">
	{#if symbol === 'spinner'}
		<LoadingSpinner {size} />
	{:else if symbol === 'boxes'}
		<LoadingBoxes {size} />
	{:else if symbol === 'dots'}
		<LoadingDots {size} />
	{/if}
</div>
