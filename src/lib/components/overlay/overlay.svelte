<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<template>
	<div class="fill blur" transition:fade />
	<div class="fill overlay" transition:fade={{ duration: 500 }}>
		<slot />
	</div>
</template>

<style lang="postcss">
	.fill {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
	}
	.overlay {
		background: transparent;
		color: var(--light);
	}

	.blur {
		background: rgb(var(--overlay-components) / 0.5);
		/* background: rgb(var(--anti-overlay-components) / 0.8); */
		backdrop-filter: blur(0.5em);
	}
</style>
