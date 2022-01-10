<script>
	export let clip = false;
</script>

<svg viewBox="0 0 100 100" preserveAspectRatio="none" class:clip>
	<slot />
</svg>

<style lang="postcss">
	svg {
		/* position: absolute; */
		width: 100%;
		height: 100%;
		overflow: visible;
		* {
			vector-effect: non-scaling-stroke;
		}
	}

	.clip {
		overflow: hidden;
	}
</style>
