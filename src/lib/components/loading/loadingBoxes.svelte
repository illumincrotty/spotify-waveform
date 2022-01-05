<script lang="ts">
	export let size = '3rem';
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="loader"
		viewBox="0 0 20 20"
		style=" margin: calc(-.5*{size} 0 0 calc(-.5*{size}; width: {size}; height: {size};"
	>
		{#each Array.from({ length: 3 }) as _, index}
			<path
				d="M{index * 8} 5h4v10h-4z"
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

		--duration: 1.5s;
		--delay: calc(var(--duration) / 9);
		& path {
			animation: stretch var(--duration) linear infinite;
			box-shadow: var(--shadow-elevation-high);
		}
	}

	@keyframes stretch {
		0%,
		33%,
		100% {
			transform: scaleY(1);
			opacity: 75%;
		}
		66% {
			transform: scaleY(2);
			opacity: 100%;
		}
	}
</style>
