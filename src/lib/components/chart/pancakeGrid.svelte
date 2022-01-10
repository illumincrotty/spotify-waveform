<script lang="ts">
	import type { Writable } from 'svelte/store';

	import type { mapping } from '$lib/script/utils/scale';
	import { get_ticks } from '$lib/script/utils/ticks';

	import { getChartContext } from './pancakeChart.svelte';

	export let count: number;
	export let ticks: number[] = undefined;
	export let direction: 'horizontal' | 'vertical';

	const { x1, y1, x2, y2, x_scale, y_scale } = getChartContext() as {
		x1: Writable<number>;
		y1: Writable<number>;
		x2: Writable<number>;
		y2: Writable<number>;
		x_scale: Writable<mapping>;
		y_scale: Writable<mapping>;
	};

	const VERTICAL = {};
	const HORIZONTAL = {};

	$: orientation = direction === 'vertical' ? VERTICAL : HORIZONTAL;

	$: _ticks =
		ticks ||
		(orientation === HORIZONTAL
			? get_ticks($y1, $y2, count)
			: get_ticks($x1, $x2, count));

	$: style =
		orientation === HORIZONTAL
			? (n: number, i: number) =>
					`width: 100%; height: 0; top: ${$y_scale(n)}%`
			: (n: number, i: number) =>
					`width: 0; height: 100%; left: ${$x_scale(n)}%`;
</script>

<div class="pancake-grid">
	{#each _ticks as tick, i}
		<div class="pancake-grid-item" style={style(tick, i)}>
			<slot value={tick} first={i === 0} last={i === _ticks.length - 1} />
		</div>
	{/each}
</div>

<style>
	.pancake-grid-item {
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
