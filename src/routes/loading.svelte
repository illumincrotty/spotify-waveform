<script lang="ts">
	import LoadingBoxes from '$lib/components/loadingBoxes.svelte';

	import OverlayLoading from '$lib/components/overlayLoading.svelte';

	import Page from '$lib/components/page.svelte';
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<svelte:body />
<Page title="Loading">
	<OverlayLoading />
	<!-- <LoadingBoxes /> -->
	<div slot="footer" />
</Page>

<style lang="postcss">
</style>
