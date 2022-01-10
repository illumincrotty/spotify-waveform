<script lang="ts">
	import { linearMap } from '$lib/script/utils/scale';
	import { setContext } from 'svelte-typed-context';
	import { chartKey } from './chartContextKeys';
	import Axis from '$lib/components/chart/axis.svelte';
	import SVG from '$lib/components/chart/chartSVG.svelte';

	export let data: { x: number; y: number }[];
	// export let width: number;
	// export let height: number;

	// setContext(chartKey, {

	// });

	import { writable, derived, Writable } from 'svelte/store';
	import { pointAbsolute, pointToSvgPath } from './chartUtils';

	export let x1 = 0;
	export let y1 = 0;
	export let maxX = 10;
	export let maxY = 10;
	export let clip = false;

	let chart: HTMLDivElement;

	const _x1: Writable<number> = writable();
	const _y1: Writable<number> = writable();
	const _x2: Writable<number> = writable();
	const _y2: Writable<number> = writable();

	const width: Writable<number> = writable(10);
	const height: Writable<number> = writable(10);
	const pointer: Writable<pointAbsolute> = writable();

	const handle_mousemove = (e: MouseEvent) => {
		const bcr = chart.getBoundingClientRect();
		const left = e.clientX - bcr.left;
		const top = e.clientY - bcr.top;

		const x = $x_scale_inverse((100 * left) / (bcr.right - bcr.left));
		const y = $y_scale_inverse((100 * top) / (bcr.bottom - bcr.top));
		pointer.set({ x, y, left, top });
	};

	const handle_mouseleave = () => {
		pointer.set(null);
	};

	$: _x1.set(x1);
	$: _y1.set(y1);
	$: _x2.set(maxX);
	$: _y2.set(maxY);

	const x_scale = derived([_x1, _x2], ([$x1, $x2]) => {
		return linearMap([$x1, $x2], [0, 100]);
	});

	const y_scale = derived([_y1, _y2], ([$y1, $y2]) => {
		return linearMap([$y1, $y2], [100, 0]);
	});

	const x_scale_inverse = derived(x_scale, ($x_scale) => $x_scale.inverse());
	const y_scale_inverse = derived(y_scale, ($y_scale) => $y_scale.inverse());

	setContext(chartKey, {
		x1: _x1,
		y1: _y1,
		x2: _x2,
		y2: _y2,
		x_scale,
		y_scale,
		x_scale_inverse,
		y_scale_inverse,
		pointer,
		width,
		height,
	});

	const x = $x_scale;

	// const x = linearMap([0, Math.max(...data.map((d) => d.x))], [0, 100]);
	const y = linearMap([0, Math.max(...data.map((d) => d.y))], [100, 0]);

	// const pointsLine = data.map((d) => `${x(d.x)},${y(d.y)}`).join(' ');
	let pointsScatter = '';
	$: pointsScatter = data
		.map((d, i): string => {
			// const _x = $x_scale(d.x);
			// const _x = x(d.x);
			// const _y = y(d.y);

			const _x = $x_scale(d.x);
			const _y = $y_scale(d.y);
			console.debug(_x, _y);

			return pointToSvgPath(_x, _y);
			// return `M${_x} ${_y} A0 0 0 0 1 ${_x + 0.0001} ${_y + 0.0001}`;
		})
		.join(' ');
</script>

<template>
	<figure class="chart-outer" on:click>
		<div class="chart">
			<!-- x axis -->
			<Axis axisType={'x'} count={5} let:value let:first let:last />

			<!-- y axis -->
			<Axis axisType={'y'} count={5} let:value let:first let:last />

			<!-- <svg viewBox="0 0 100 100" preserveAspectRatio="none"> -->
			<SVG>
				<path class="scatter" d={pointsScatter} />
			</SVG>
			<!-- <polyline
				style="stroke: red; stroke-width: 2"
				points={pointsLine} /> -->
			<!-- </svg> -->
		</div>
	</figure>
</template>

<style lang="postcss">
	.chart-outer {
		width: 100%;
		height: 100%;
		padding: 2em 2em 2em 4.5ch;
	}
	.chart {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		height: 100%;
	}

	path {
		vector-effect: non-scaling-stroke;
		fill: none;
	}

	.scatter {
		stroke: var(--text);
		opacity: 0.9;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 8px;
		fill: none;
	}
</style>
