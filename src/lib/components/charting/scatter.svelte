<script lang="ts">
	// context
	import { getContext } from 'svelte-typed-context';
	import { chartKey } from './keys';

	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import Point from './point.svelte';

	type keys = $$Generic<string | number | symbol>;
	type values = $$Generic;

	export let data: { x: number; y: number; meta?: Record<keys, values> }[];
	let { xMapping, yMapping } = getContext(chartKey);

	let circleHovered = false,
		circleSelected = false,
		tooltipHovered = false;
	let currentData: typeof data[0] = { x: 0, y: 0 };

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, _) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 1000,
				easing: quintOut,
				css: (t) => `
                transform: ${transform};
					opacity: ${t};
				`,
			};
		},
	});
</script>

<template>
	{#each data as datum, index (datum)}
		<div
			class="point-wrapper"
			in:receive={{ key: index }}
			out:send={{ key: index }}>
			<Point data={datum} key={index}>
				<svelte:fragment slot="tooltip" let:value>
					<slot name="tooltip" {value} />
				</svelte:fragment>
			</Point>
		</div>
	{/each}

	{#if circleHovered || tooltipHovered || circleSelected || false}
		<div
			class="tooltip"
			style="left:{$xMapping(currentData.x)}%; top:{$yMapping(
				currentData.y
			)}%;"
			on:mouseenter={() => {
				tooltipHovered = true;
			}}
			on:mouseleave={() => {
				tooltipHovered = false;
			}}
			data-translate={`${$xMapping(currentData.x) > 50 ? 'l' : 'r'}${
				$yMapping(currentData.y) > 50 ? 't' : 'b'
			}`}>
			<!-- <slot name="tooltip" data={currentData}>
				<div class="element-info" transition:fade>
					<div>
						X: {currentData.x}
					</div>
					<div>
						Y: {currentData.y}
					</div>
				</div>
			</slot> -->
		</div>
	{/if}
</template>

<style lang="postcss">
	/* svg {
		position: absolute;
		overflow: visible;
		width: 100%;
		height: 100%;
		left: 0;
	} */
	/* circle {
		fill: currentColor;
		transition: all 0.3s;

		&:hover,
		&:focus-visible {
			z-index: 5;
			color: var(--theme);
			r: 10px;
		}

		&:focus {
			color: var(--theme);
			r: 10px;
		}
	} */
</style>
