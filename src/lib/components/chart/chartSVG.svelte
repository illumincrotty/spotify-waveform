<script lang="ts">
	// export let clip = false;
</script>

<svg viewBox="0 0 100 100" preserveAspectRatio="none">
	<slot />
</svg>

<style lang="postcss">
	svg {
		position: absolute;
		isolation: isolate;
		overflow: visible;
		width: 100%;
		height: 100%;
		& * {
			vector-effect: non-scaling-stroke;
		}
	}

	/* svg * {
		vector-effect: non-scaling-stroke;
	} */
</style>
