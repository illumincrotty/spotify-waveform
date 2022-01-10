<script lang="ts">
	import { default_x, default_y } from '$lib/script/utils/accessors';
	import type { mapping } from '$lib/script/utils/scale';
	import type { Writable } from 'svelte/store';

	import { getChartContext } from './pancakeChart.svelte';

	const { x_scale, y_scale } = getChartContext() as {
		x_scale: Writable<mapping>;
		y_scale: Writable<mapping>;
	};

	export let data: [];
	export let x = default_x;
	export let y = default_y;

	$: d = data
		.map((d: { x: number; y: number }, i): string => {
			const _x = $x_scale(x(d, i));
			const _y = $y_scale(y(d, i));

			return `M${_x} ${_y} A0 0 0 0 1 ${_x + 0.0001} ${_y + 0.0001}`;
		})
		.join(' ');
</script>

<slot {d} />
