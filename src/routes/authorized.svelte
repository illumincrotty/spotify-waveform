<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// (window.opener as Window).postMessage(window.location.hash);
		(window.opener as Window).postMessage(
			window.location.href.split('authorized')[1].slice(1)
		);
		window.close();
	});

	export {};
</script>

<svelte:head><title>Authorization</title></svelte:head>
<svelte:body />
<h1>Approved</h1>
