<script lang="ts">
	import { fade } from 'svelte/transition';
	const transition = fade;
</script>

<template>
	<div class="overlay" out:transition={{ duration: 500 }}>
		<slot />
	</div>
</template>

<style lang="postcss">
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		background: var(--overlay);
		color: var(--light);

		/* opacity: 15%; */
		width: 100%;
		height: 100%;
		margin: 0;
		z-index: 4;
	}
</style>
