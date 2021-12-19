<script lang="ts">
	import Header from '$lib/components/header.svelte';
	export const title = 'Example';
	let normalize: HTMLLinkElement;
	function nornmalizeLoaded() {
		normalize.rel = 'stylesheet';
	}
	let y = 0;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<svelte:window bind:scrollY={y} />

<Header links={[{ href: '/tools/generator', label: 'Top Data' }]} />
<slot>
	<!-- <main class="stack center-i" id="page-main" /> -->
</slot>

<style lang="postcss" global>
	@import '$lib/style/cssReset.postcss';
	@import '$lib/style/el.postcss';
	@import '$lib/style/base.postcss';
</style>
