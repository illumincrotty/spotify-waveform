<script lang="ts">
	import { throttle } from '$lib/script/utils/debounce';

	import Axis from './axis.svelte';
	import Chart from './chart.svelte';
	import Point from './point.svelte';
	import Scatter from './scatter.svelte';
	import Svg from './svg.svelte';

	const generateData = () => {
		const count = 20 || Math.floor(100 * Math.random());
		const highest = 1e6;
		yMaximum = highest;
		xMaximum = count;
		return Array.from({ length: count + 1 }).map((_, index) => {
			return {
				x: Math.floor(count * Math.random()),
				y: Math.floor(highest * Math.random()),
			};
		});
	};

	const formatter = new Intl.NumberFormat('EN-US', {
		notation: 'compact',
		compactDisplay: 'short',
		useGrouping: true,
	});

	let data = [
		{ x: 0, y: 0 },
		{ x: 1, y: 1 },
		{ x: 2, y: 4 },
		{ x: 3, y: 9 },
		{ x: 4, y: 16 },
		{ x: 5, y: 25 },
		{ x: 6, y: 36 },
		{ x: 7, y: 49 },
		{ x: 8, y: 64 },
		{ x: 9, y: 81 },
		{ x: 10, y: 100 },
		{ x: 0, y: 100 },
		{ x: 10, y: 0 },
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

		<Svg>
			<Scatter {data} />
			<Point data={{ x: 8, y: 33 }} />
		</Svg>
	</Chart>
</template>
