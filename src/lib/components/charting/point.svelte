<script lang="ts">
	import { getContext } from 'svelte-typed-context';
	import { chartKey } from './keys';

	export let data: { x: number; y: number };

	let { xMapping, yMapping, width, height } = getContext(chartKey);
	let hover = false;
	let focus = false;
</script>

<template>
	<div
		class="point"
		style="left:{$xMapping(data.x)}%; top:{$yMapping(data.y)}%;"
		on:mouseleave={() => {
			hover = false;
		}}
		on:mouseenter={() => {
			hover = true;
		}}
		class:boost={hover || focus}>
		<div
			class="circle"
			tabindex="0"
			class:hover
			data-label="({data.x}, {data.y})"
			on:focus={() => {
				hover = true;
				focus = true;
			}}
			on:blur={() => {
				hover = false;
				focus = false;
			}}>
			<div
				class="tooltip"
				data-translate={`${$xMapping(data.x) > 50 ? 'l' : 'r'}${
					$yMapping(data.y) > 50 ? 't' : 'b'
				}`}>
				<slot name="tooltip" data>
					<div class="element-info">
						<div>
							X: {data.x}
						</div>
						<div>
							Y: {data.y}
						</div>
					</div>
				</slot>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
	.point {
		grid-area: center;
		position: absolute;
		overflow: visible;
		z-index: 4;

		transform: translate(-50%, -50%);
		padding: 5px;
		width: fit-content;
		height: fit-content;
		/* width: 100%;
		height: 100%; */
	}
	.boost {
		z-index: 6;
	}
	.circle {
		width: 10px;
		aspect-ratio: 1;
		background-color: var(--text);
		border-radius: 50%;
		transition: all 0.3s;
		.tooltip {
			visibility: hidden;
		}

		&:hover,
		&:focus-visible,
		&.hover {
			background-color: var(--theme);
			transform: scale(200%);
			.tooltip {
				visibility: visible;
			}
		}

		&:focus {
			background-color: var(--theme);
			transform: scale(200%);
			.tooltip {
				visibility: visible;
			}
		}
	}
	.tooltip {
		position: absolute;
		overflow: visible;
		pointer-events: visible;

		transform: scale(50%);
		display: flex;
		width: max-content;
		height: max-content;

		&[data-translate='lt'] {
			transform-origin: right bottom;
			right: 105%;
			bottom: 0;
		}
		&[data-translate='lb'] {
			transform-origin: right top;
			right: 105%;
			top: 0;
		}
		&[data-translate='rt'] {
			transform-origin: left bottom;
			left: 105%;
			bottom: 0;
		}
		&[data-translate='rb'] {
			transform-origin: left top;
			left: 105%;
			top: 0;
		}
	}
	.element-info {
		display: block;
		height: max-content;
		display: flex;
		flex-direction: column;

		padding: 0.25em;
		background: var(--bg);
		outline: 0.1rem solid;
		align-content: flex-end;
	}
	/* .tooltip {
		isolation: isolate;
		position: absolute;
		overflow: visible;
		height: 20px;
		transform: translate(-10px, -50%);
		z-index: 6;
		width: max-content;
		background: var(--theme);
	} */
</style>
