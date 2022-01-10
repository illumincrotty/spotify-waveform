<script lang="ts">
	import Page from '$lib/components/layout/page.svelte';
	import OverlayLogin from '$lib/components/overlay/overlayLogin.svelte';
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<svelte:body />
<Page title="Loading">
	<div slot="footer" />
	<OverlayLogin />
</Page>
