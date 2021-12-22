<script lang="ts">
	import { base } from '$app/paths';
	import { colorPreference } from '$lib/storeSession';
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.png" />
	<link rel="icon" href="{base}/favicon.svg" type="image/svg+xml" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />

<style lang="postcss">
	@import '$lib/style/cssReset.postcss';
	@import '$lib/style/el.postcss';
	@import '$lib/style/base.postcss';
</style>
