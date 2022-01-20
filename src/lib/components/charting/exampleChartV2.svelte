<script lang="ts">
	import { throttle } from '$lib/script/utils/debounce';

	import Axis from './axis.svelte';
	import Chart from './chart.svelte';
	import Point from './point.svelte';
	import Scatter from './scatter.svelte';
	import Plot from './plot.svelte';
	import { style } from 'd3';
	import { fade } from 'svelte/transition';
	import { generateID } from '$lib/script/stateGen';
	import { select_value } from 'svelte/internal';

	const generateData = () => {
		const count = 20 || Math.floor(100 * Math.random());
		const highest = 1e6;
		yMaximum = highest;
		xMaximum = count;
		return Array.from({ length: count + 1 }).map((_, index) => {
			return {
				x: Math.floor(count * Math.random()),
				y: Math.floor(highest * Math.random()),
				meta: { id: generateID().slice(0, 8) },
			};
		});
	};

	const formatter = new Intl.NumberFormat('EN-US', {
		notation: 'compact',
		compactDisplay: 'short',
		useGrouping: true,
	});

	let data = [
		{ x: 0, y: 0, meta: { id: 'Ted' } },
		{ x: 1, y: 1, meta: { id: 'Jed' } },
		{ x: 2, y: 4, meta: { id: 'Wed' } },
		{ x: 3, y: 9, meta: { id: 'Led' } },
		{ x: 4, y: 16, meta: { id: 'Ged' } },
		{ x: 5, y: 25, meta: { id: 'Sed' } },
		{ x: 6, y: 36, meta: { id: 'Red' } },
		{ x: 7, y: 49, meta: { id: 'Tim' } },
		{ x: 8, y: 64, meta: { id: 'Bip' } },
		{ x: 9, y: 81, meta: { id: 'Bosh' } },
		{ x: 10, y: 100, meta: { id: 'Bap' } },
		{ x: 0, y: 100, meta: { id: 'Bint' } },
		{ x: 10, y: 0, meta: { id: 'Boop' } },
	];

	let xMaximum = Math.max(...data.map((d) => d.x)),
		yMaximum = Math.max(...data.map((d) => d.y));

	const clickHandler = throttle(() => {
		data = generateData();
	});

	// $: {
	// 	xMaximum = Math.max(...data.map((d) => d.x));
	// }

	// $: {
	// 	// yMaximum = Math.max(...data.map((d) => d.y));
	// 	yMaximum = 1;
	// }
</script>

<template>
	<button on:click={clickHandler}>Reload Data</button>
	<Chart {xMaximum} {yMaximum}>
		<Axis kind={'x'} count={5}>
			<!-- <div slot="label-after" let:value>
				{formatter.format(value)}
			</div> -->
		</Axis>
		<Axis kind={'y'} count={5}>
			<!-- <div slot="label-before" let:value>
				{formatter.format(value)}
			</div> -->
			<!-- <div slot="label-after" /> -->
		</Axis>

		<Plot>
			<Scatter {data}>
				<div slot="tooltip" class="tooltip" let:value transition:fade>
					<data>
						id: {value.meta.id}
					</data>
					<data>
						X: {value.x}
					</data>
					<data>
						Y: {value.y}
					</data>
				</div>
			</Scatter>

			<Point data={{ x: 8, y: 33, meta: { name: 'lucas' } }}>
				<div slot="tooltip" class="tooltip" let:value transition:fade>
					<data> {value.meta.name}</data>
				</div>
			</Point>
		</Plot>
	</Chart>
</template>

<style>
	.tooltip {
		word-break: break-all;
		background-color: var(--bg);
		border: 0.1rem solid var(--theme);
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 12em;
		padding: calc(var(--padding) / 2);
	}
</style>
