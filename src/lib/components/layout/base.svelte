<script lang="ts">
	import { themeFlip, themeNumber } from '$lib/storeSession';

	import { onMount } from 'svelte';

	onMount(() => {
		document.documentElement.style.setProperty(
			'--current-theme',
			`${$themeNumber}`
		);
		document.documentElement.style.setProperty(
			'--theme-components',
			`var(--theme-${$themeNumber}-components)`
		);
		document.documentElement.classList.toggle('theme-flip', $themeFlip);
	});
</script>

<slot />

<style lang="postcss">
	@import '$lib/style/cssReset.postcss';
	@import '$lib/style/el.postcss';
	@import '$lib/style/base.postcss';
</style>
