<script lang="ts">
	import Page from '$lib/components/layout/page.svelte';
	import OverlayLoading from '$lib/components/overlay/overlayLoading.svelte';
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<svelte:body />
<Page title="Loading">
	<OverlayLoading />
	<div slot="footer" />
</Page>

<style lang="postcss">
</style>
