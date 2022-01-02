<script lang="ts">
	import Page from '$lib/components/layout/page.svelte';
	import AddButton from '$lib/components/button/buttonPlus.svelte';
	import SingleQuote from '$lib/components/random/singleQuote.svelte';
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
<Page title="Quotes">
	{#each { length: x } as _}
		<SingleQuote />
	{/each}
	<div class="center-i">
		<AddButton on:click={handleClick} />
	</div>
</Page>
