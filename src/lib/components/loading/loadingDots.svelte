<script lang="ts">
	export let size = '3rem';
	const balls = 3;
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="loader"
		viewBox="0 0 {(balls - 1) * 8 + 4} 20"
		style=" margin: calc(-.5*{size} 0 0 calc(-.5*{size}; width: {size}; height: {size};"
	>
		{#each Array.from({ length: balls }) as _, index}
			<circle
				cx={2 + index * 8}
				cy="10"
				r="2"
				style="animation-delay: calc( var(--delay) * {index}); transform-origin: center;"
			/>
		{/each}
	</svg>
</template>

<style lang="postcss">
	.loader {
		margin-left: auto;
		margin-right: auto;
		fill: var(--theme);

		--duration: 0.8s;
		--delay: calc(var(--duration) * 0.1);

		& circle {
			animation: jump var(--duration) ease-in-out infinite;
		}
	}

	@keyframes jump {
		0%,
		80%,
		100% {
			transform: translateY(12.5%);
		}
		40% {
			transform: translateY(-12.5%);
		}
	}
</style>
