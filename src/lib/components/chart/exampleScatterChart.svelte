<script lang="ts">
	import ChartBase from './chartBase.svelte';

	const generateData = () => {
		const count = Math.max(Math.floor(100 * Math.random()), 10);
		const highest = Math.max(Math.random() * 1e3, 10);
		return Array.from({ length: count }).map((_, index) => {
			return { x: index, y: highest * Math.random() };
		});
	};

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
	];

	let maxX = 0,
		maxY = 0;

	$: maxX = Math.max(...data.map((d) => d.x));

	$: maxY = Math.max(...data.map((d) => d.y));
</script>

<template>
	<ChartBase
		{data}
		{maxX}
		{maxY}
		on:click={() => {
			data = generateData();
		}} />
</template>
