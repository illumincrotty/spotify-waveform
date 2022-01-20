<script lang="ts">
	import { getContext } from 'svelte-typed-context';
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade, slide } from 'svelte/transition';
	import { chartKey } from './keys';
	type keys = $$Generic<string | number | symbol>;
	type values = $$Generic;

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, _) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 1000,
				easing: quintOut,
				css: (t) => `
                transform: ${transform};
					opacity: ${t};
				`,
			};
		},
	});

	export let data: { x: number; y: number; meta?: Record<keys, values> };
	export let key: any = 1;
	export let animation: ReturnType<typeof crossfade> = [send, receive];

	let { xMapping, yMapping } = getContext(chartKey);
	let timer = -1;
	let circleHovered = false,
		circleSelected = false,
		tooltipHovered = false;

	const circleFocus = () => {
		circleHovered = true;
		circleSelected = false;
		console.log('hover');
		clearTimeout(timer);
	};
	const circleUnfocus = () => {
		const thisTimer = window.setTimeout(() => {
			if (timer === thisTimer) {
				circleHovered = false;
			}
		}, 100);
		timer = thisTimer;
	};
</script>

<template>
	<div
		class="circle"
		tabindex={0}
		style="left:{$xMapping(data.x)}%; top: {$yMapping(data.y)}%;"
		class:current={circleHovered || tooltipHovered}
		on:mouseenter={circleFocus}
		on:mouseleave={circleUnfocus}
		on:click={() => {
			circleSelected = true;
		}}
		on:focus={circleFocus}
		on:blur={() => {
			circleUnfocus();
			circleSelected = false;
		}} />
	<div
		style="left:{$xMapping(data.x)}%; top: {$yMapping(data.y)}%;"
		data-translate={`${$xMapping(data?.x ?? 0) > 50 ? 'l' : 'r'}${
			$yMapping(data?.y ?? 0) > 50 ? 't' : 'b'
		}`}
		class="tooltip"
		on:mouseenter={() => {
			tooltipHovered = true;
		}}
		on:mouseleave={() => {
			tooltipHovered = false;
		}}>
		{#if circleHovered || tooltipHovered || circleSelected}
			<slot name="tooltip" value={data}>
				<div class="element-info" transition:fade>
					<div>
						X: {data.x}
					</div>
					<div>
						Y: {data.y}
					</div>
				</div>
			</slot>
		{/if}
	</div>
	<!--  -->

	<!-- 
		<div>Testing</div>
		{#if circleHovered || tooltipHovered || circleSelected}
			<div
				class="tooltip"
				on:mouseenter={() => {
					tooltipHovered = true;
				}}
				on:mouseleave={() => {
					tooltipHovered = false;
				}}
				data-translate={`${$xMapping(data?.x ?? 0) > 50 ? 'l' : 'r'}${
					$yMapping(data?.y ?? 0) > 50 ? 't' : 'b'
				}`}>
				<slot name="tooltip" {data}>
					<div class="element-info" transition:fade>
						<div>
							X: {data.x}
						</div>
						<div>
							Y: {data.y}
						</div>
					</div>
				</slot>
			</div>
		{/if}
	 -->
	<!-- </div> -->
</template>

<style lang="postcss">
	.circle {
		border-radius: 50%;
		position: absolute;
		pointer-events: all;
		transition: all 0.3s;
		width: 10px;
		height: 10px;
		background-color: var(--theme);
		transform: translate(-50%, -50%);
		z-index: 1;
		/* transform: translate(-100%, -100%); */

		&:hover,
		&:active,
		&.current {
			fill: var(--theme);
			z-index: 2;
			outline: none;
		}

		&:focus {
			fill: var(--theme);
			z-index: 2;
			outline: none;
		}
	}
	.tooltip {
		position: absolute;
		width: max-content;
		pointer-events: all;
		overflow: visible;
		z-index: 3;
	}

	[data-translate='lt'] {
		transform: translate(-100%, -100%);
	}
	[data-translate='lb'] {
		transform: translate(-100%, 0);
	}
	[data-translate='rt'] {
		transform: translate(0, -100%);
	}
	[data-translate='rb'] {
	}

	.element-info {
		background-color: var(--bg);
		border: 0.1rem solid var(--theme);
		display: flex;
		flex-direction: column;
		width: max-content;
		padding: calc(var(--padding) / 2);
	}
</style>
