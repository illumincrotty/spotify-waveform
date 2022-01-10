<script lang="ts">
	import { onMount } from 'svelte';
	import ButtonBase from './buttonBase.svelte';

	export let classes = [];

	/**
	 * Open boolean
	 * @type {boolean}
	 */
	export let open = false;
	onMount(() => {
		open = false;
	});
</script>

<ButtonBase
	on:click={() => {
		open = !open;
	}}
	on:click
	{classes}
	buttonLabel="open navigation"
	svgLabel="hamburger menu"
	circle={false}>
	<g class="hamburger" class:is-active={open}>
		<rect class="hamburger-top" x="0" y="0" height="3" width="24" />
		{#if !open}
			<rect class="hamburger-mid" x="0" y="11" height="3" width="24" />
		{/if}
		<rect class="hamburger-bot" x="0" y="21" height="3" width="24" />
	</g>

	<!--  -->
</ButtonBase>

<style lang="postcss">
	.hamburger,
	.hamburger > * {
		transition: transform;
		transition-duration: 0.3s;
		transform-origin: center;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.hamburger-top {
		transform-origin: 12px 1.5px;
	}
	.hamburger-bot {
		transition-property: transform;
		transition-duration: 0.3s;
		transform-origin: 12px 22.5px;
	}
	.hamburger-mid {
		transition-duration: 0.25s;
	}

	.is-active {
		transform: rotate(135deg);

		.hamburger-top {
			/* transform: translateY(8px) rotate(45deg); */
			transform: translateY(10.5px);
			/* fill: red; */
		}
		.hamburger-mid {
			opacity: 0;
			/* transform: rotate(-45deg); */
		}
		.hamburger-bot {
			transform: translateY(-10.5px) rotate(90deg);
			/* transform: translateY(-10px); */
			/* fill: blue; */
			/* transform: translateY(-8px); */
			/* transform: rotate(-45deg); */
			/* transform: rotate(-45deg); */
		}
	}
</style>
