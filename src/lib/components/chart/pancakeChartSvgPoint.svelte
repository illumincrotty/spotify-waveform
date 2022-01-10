<script lang="ts">
	import type { mapping } from '$lib/script/utils/scale';
	import type { Writable } from 'svelte/store';

	import { getChartContext } from './pancakeChart.svelte';

	const { x_scale, y_scale } = getChartContext() as {
		x_scale: Writable<mapping>;
		y_scale: Writable<mapping>;
	};

	export let x: number;
	export let y: number;

	let d: string;
	$: {
		const _x = $x_scale(x);
		const _y = $y_scale(y);

		d = `M${_x} ${_y} A0 0 0 0 1 ${_x + 0.0001} ${_y + 0.0001}`;
	}
</script>

<slot {d} />
