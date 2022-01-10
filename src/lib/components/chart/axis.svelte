<script lang="ts">
	import { get_ticks } from '$lib/script/utils/ticks';
	import { onMount } from 'svelte';
	import { getContext } from 'svelte-typed-context';
	import { chartKey } from './chartContextKeys';

	export let count = 2;
	export let axisType: 'x' | 'y';
	export let ticks: number[] = undefined;

	const { x1, y1, x2, y2, x_scale, y_scale } = getContext(chartKey);

	onMount(() => {
		console.debug('grid mounted');
		console.debug(get_ticks($x1, $x2, count));
	});

	$: _ticks =
		ticks ||
		(axisType === 'y'
			? get_ticks($y1, $y2, count)
			: get_ticks($x1, $x2, count));

	$: style =
		axisType === 'y'
			? (n: number, i: number) =>
					`width: 100%; height: 0; top: ${$y_scale(n)}%`
			: (n: number, i: number) =>
					`width: 0; height: 100%; left: ${$x_scale(n)}%`;
</script>

<template>
	<div class="grid">
		{#each _ticks as tick, index}
			<div class="grid-item" style={style(tick, index)}>
				<slot
					value={tick}
					first={index === 0}
					last={index === _ticks.length - 1}>
					<span
						class="grid-label {axisType === 'y'
							? 'horizontal'
							: 'vertical'}"
						>{tick}
					</span>
					<div
						class="grid-line {axisType === 'y'
							? 'horizontal'
							: 'vertical'}"
						class:solid={index === 0 ||
							index === _ticks.length - 1} />
				</slot>
			</div>
		{/each}
	</div>
</template>

<style lang="postcss">
	.grid-item {
		position: absolute;
		left: 0;
		top: 0;
	}

	.grid-label {
		line-height: 1;
		position: absolute;
		&.vertical {
			bottom: -1.5em;
			transform: translate(-50%, 0);
		}
		&.horizontal {
			left: -0.5em;
			transform: translate(-100%, -50%);
		}
	}

	.grid-line {
		border-style: dashed;
		border-width: 0;
		opacity: 50%;

		&.solid {
			border-style: solid;
		}

		&.vertical {
			height: 100%;
			border-left-width: 1px;
		}
		&.horizontal {
			width: 100%;
			border-bottom-width: 1px;
		}
	}
</style>
