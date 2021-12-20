<script lang="ts">
	export let size = '3rem';
</script>

<template>
	<svg
		class="spinner"
		viewBox="0 0 50 50"
		style=" margin: calc(-.5*{size} 0 0 calc(-.5*{size}; width: {size}; height: {size};"
	>
		<circle
			class="path bg"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			stroke-width="5"
		/>
		<circle
			class="path rotate"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			stroke-width="5"
		/>
	</svg>
</template>

<style lang="postcss">
	.spinner {
		animation: rotate 2s linear infinite;
		z-index: 5;
		margin-left: auto;
		margin-right: auto;
		stroke: var(--theme);

		& .path {
			stroke-linecap: round;
		}
		.bg {
			opacity: 25%;
		}

		& .rotate {
			animation: dash 1.5s ease-in-out infinite;
		}
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
</style>
