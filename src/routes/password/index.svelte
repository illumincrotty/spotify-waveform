<!-- https://random-word-api.herokuapp.com/word?number=10 -->
<script lang="ts">
	import AddComponent from '$lib/components/addComponent.svelte';
	import Page from '$lib/components/page.svelte';
	import RandomWords from '$lib/components/randomWords.svelte';
	import SingleQuote from '$lib/components/singleQuote.svelte';
	import { onMount } from 'svelte';

	let button: HTMLElement | undefined;

	onMount(() => {
		button = document.getElementById('add_button');
	});

	let x = 0;
	function handleClick() {
		x += 1;
		setTimeout(function () {
			button.scrollIntoView({ block: 'center' });
		}, 100);
	}
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<svelte:body />
<Page title="Random Words" gap="4em">
	<!-- <div class="stack" style="--gap: 5em"> -->
	<ul>
		<RandomWords count={10} />

		{#each { length: x } as _}
			<RandomWords />
		{/each}
	</ul>

	<div id="add_button">
		<AddComponent on:click={handleClick} />
	</div>
	<!-- </div> -->
</Page>
