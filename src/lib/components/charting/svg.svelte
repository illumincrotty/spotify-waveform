<script lang="ts">
	export let svg: SVGElement = undefined;
</script>

<template pres>
	<svg bind:this={svg}>
		<slot />

		<!--  -->
	</svg>
</template>

<style lang="postcss">
	svg {
		pointer-events: none;
		width: 100%;
		height: 100%;
		overflow: visible;
		isolation: isolate;
		position: absolute;
		left: 0;
	}
	/*  */
</style>
