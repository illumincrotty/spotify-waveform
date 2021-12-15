<!-- https://random-word-api.herokuapp.com/word?number=10 -->
<script lang="ts">
	import AddComponent from '$lib/components/addComponent.svelte';
	import Page from '$lib/components/page.svelte';
	import { onMount } from 'svelte';
	import { getRandomWord } from '$lib/getRandomWord';

	let button: HTMLElement | undefined;
	let words = [];

	onMount(() => {
		button = document.getElementById('add_button');
		asyncMount();
	});

	const asyncMount = async () => {
		words = [...(await getRandomWord(10))];
	};

	function handleClick() {
		getRandomWord(1).then((additionalWords) => {
			words = [...words, ...additionalWords];
			setTimeout(function () {
				button.scrollIntoView({ block: 'center' });
			}, 100);
		});
	}
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<svelte:body />
<Page title="Random Words" gap="4em">
	<!-- <div class="stack" style="--gap: 5em"> -->
	<ul class="centered">
		{#each words as word}
			<li>
				{word}
			</li>
		{/each}
	</ul>

	<div id="add_button">
		<AddComponent on:click={handleClick} />
	</div>
	<!-- </div> -->
</Page>

<style lang="postcss">
	ul {
		width: fit-content;
		& > li {
			width: min-content;
		}
	}
</style>
