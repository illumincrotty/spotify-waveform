<script lang="ts">
	import { linearMap, mapping } from '$lib/script/utils/scale';

	import { chartKey } from './keys';
	import { setContext } from 'svelte-typed-context';
	import { Writable, writable } from 'svelte/store';

	export let xMinimum = 0,
		xMaximum = 100,
		yMinimum = 0,
		yMaximum = 100;

	const width = writable(1),
		height = writable(1),
		xMin: Writable<number> = writable(xMinimum),
		xMax: Writable<number> = writable(xMaximum),
		yMin: Writable<number> = writable(yMinimum),
		yMax: Writable<number> = writable(yMaximum),
		xMapping: Writable<mapping> = writable(),
		yMapping: Writable<mapping> = writable();

	$: {
		xMin.set(xMinimum);
		xMax.set(xMaximum);
		yMin.set(yMinimum);
		yMax.set(yMaximum);
		xMapping.set(linearMap([$xMin, $xMax], [0, 100]));
		yMapping.set(linearMap([$yMin, $yMax], [100, 0]));
	}

	setContext(chartKey, {
		xMin,
		xMax,
		yMin,
		yMax,
		xMapping,
		yMapping,
		width,
		height,
	});
</script>

<template>
	<div class="outer" on:click>
		<div
			class="svg-filler"
			bind:clientWidth={$width}
			bind:clientHeight={$height} />

		<slot />
	</div>
</template>

<style lang="postcss">
	.outer {
		width: 100%;
		height: 100%;
		position: relative;
		display: grid;
		grid-template-areas: '. top .' 'left center right' '. bottom .';
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
		align-items: center;
		justify-items: center;
		text-align: center;
		gap: 0.5em;
		contain: layout style size;
		font-size: var(--font-s);
	}

	.svg-filler {
		pointer-events: none;
		width: 100%;
		height: 100%;
		grid-area: center;
		text-align: left;
	}
</style>
