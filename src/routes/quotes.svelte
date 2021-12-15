<script lang="ts">
	import AddComponent from '$lib/components/addComponent.svelte';
	import Page from '$lib/components/page.svelte';
	import SingleQuote from '$lib/components/singleQuote.svelte';
	import { onMount } from 'svelte';

	let button: HTMLElement | undefined;

	onMount(() => {
		button = document.getElementById('add_button');
	});

	let x = 1;
	function handleClick() {
		x += 1;
		setTimeout(function () {
			button.scrollIntoView({ block: 'center' });
		}, 100);
	}
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<svelte:body />
<Page title="Quotes" gap="4em">
	{#each { length: x } as _}
		<SingleQuote />
	{/each}
	<div id="add_button">
		<AddComponent on:click={handleClick} />
	</div>
</Page>
