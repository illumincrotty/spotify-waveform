<script lang="ts">
	import type { mapping } from '$lib/script/utils/scale';
	import type { Writable } from 'svelte/store';

	import { getChartContext } from './pancakeChart.svelte';

	const { x_scale, y_scale } = getChartContext() as {
		x_scale: Writable<mapping>;
		y_scale: Writable<mapping>;
	};

	export let x;
	export let y;
</script>

<div class="pancake-point" style="left: {$x_scale(x)}%; top: {$y_scale(y)}%">
	<slot />
</div>

<style>
	.pancake-point {
		position: absolute;
		width: 0;
		height: 0;
	}
</style>
