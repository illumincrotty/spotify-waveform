<script lang="ts">
	// context
	import { getContext } from 'svelte-typed-context';
	import { chartKey } from './keys';

	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import Point from './point.svelte';

	let { xMapping, yMapping } = getContext(chartKey);
	export let data: { x: number; y: number }[];

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
	{#each data as d, i (d)}
		<Point data={d} />
	{/each}

	<!-- <svg>
		{#each data as d, i (d)}
			<circle
				cx={`${$xMapping(d.x)}%`}
				cy={`${$yMapping(d.y)}%`}
				r={'5px'}
				tabindex="0"
				on:focus={() => activehandler(d)}
				on:mouseover={() => activehandler(d)}
				in:receive|local={{ delay: i * 5, key: i }}
				out:send|local={{ delay: i * 5, key: i }} />
		{/each}
	</svg> -->
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
