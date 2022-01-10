<script lang="ts">
	import { getContext } from 'svelte-typed-context';
	import { chartKey } from './keys';
	import { get_ticks } from '../chart/chartUtils';

	export let kind: 'y' | 'x';
	export let count: number;

	let { xMin, xMax, yMin, yMax } = getContext(chartKey);
	let ticks: number[];
	let formatter = new Intl.NumberFormat([], {
		notation: 'compact',
	});

	$: {
		const diff = kind === 'y' ? $yMax - $yMin : $xMax - $xMin;
		if (diff > 1) {
			formatter = new Intl.NumberFormat([], {
				notation: 'compact',
			});
		} else {
			formatter = new Intl.NumberFormat([], {
				notation: 'scientific',
			});
		}
	}
	$: {
		ticks =
			kind === 'y'
				? get_ticks($yMin, $yMax, count).reverse()
				: get_ticks($xMin, $xMax, count);
	}
</script>

<template>
	<!-- before -->
	{#if $$slots['label-before'] || kind === 'y'}
		<div class="axis-label {kind === 'y' ? 'left' : 'top'}">
			{#each ticks as value, index}
				<div>
					<slot
						name="label-before"
						{value}
						first={index === 0}
						last={index === count - 1}>
						<div>
							{formatter.format(value)}
						</div>
					</slot>
				</div>
			{/each}
		</div>
	{/if}

	<!-- Ticks  -->
	<div
		class="axis"
		class:horizontal={kind === 'y'}
		class:vertical={kind === 'x'}>
		{#each Array.from({ length: count }) as _, index}
			<!-- <div> -->
			<slot name="tick">
				<div
					class="line"
					class:first={index === 0}
					class:last={index === count - 1} />
			</slot>
			<!-- </div> -->
		{/each}
	</div>

	<!-- After -->
	{#if $$slots['label-after'] || kind === 'x'}
		<div class="axis-label {kind === 'y' ? 'right' : 'bottom'}">
			{#each ticks as value, index}
				<div class="label-after">
					<div>
						<slot
							name="label-after"
							{value}
							first={index === 0}
							last={index === count - 1}>
							<div>
								{formatter.format(value)}
							</div>
						</slot>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</template>

<style lang="postcss">
	.axis {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		grid-area: center;
		&.horizontal {
			flex-direction: column;
		}
	}

	.axis-label {
		width: 100%;
		height: 100%;
		font-size: var(--font-s);
	}
	.top {
		grid-area: top;
	}
	.left {
		grid-area: left;
		text-align: right;
	}
	.right {
		grid-area: right;
		text-align: left;
	}
	.bottom {
		grid-area: bottom;
	}

	.top,
	.bottom,
	.left,
	.right {
		display: flex;
		justify-content: space-between;
	}

	.left,
	.right {
		flex-direction: column;
		& > * {
			height: 1px;
			position: relative;
			transform: translate(0, -0.5em);
		}
	}

	.top,
	.bottom {
		& > * {
			width: 1px;
			overflow: visible;
			& > * {
				width: min-content;
				transform: translateX(-50%);
			}
		}
	}

	.right,
	.bottom {
	}

	/* .tick.label {
		position: relative;
		width: min-content;
		transform: translate(-50%);
	} */

	.line {
		opacity: 50%;
		outline: 1px solid;

		&.first,
		&.last {
			opacity: 100%;
		}
	}
	.vertical .line {
		height: 100%;
	}
</style>
