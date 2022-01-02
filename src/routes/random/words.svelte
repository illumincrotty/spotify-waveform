<!-- https://random-word-api.herokuapp.com/word?number=10 -->
<script lang="ts">
	import AddComponent from '$lib/components/button/buttonPlus.svelte';
	import Page from '$lib/components/layout/page.svelte';

	import { onMount } from 'svelte';
	import { getRandomWord } from '$lib/script/getRandomWord';

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
<Page title="Random Words">
	<!-- <div class="stack" style="--gap: 5em"> -->
	<ul class="unlist center-i stack">
		{#each words as word}
			<li>
				{word}
			</li>
		{/each}
		<div id="add_button" class="center">
			<AddComponent on:click={handleClick} />
		</div>
	</ul>

	<!-- </div> -->
</Page>

<style lang="postcss">
	#add_button {
		margin-top: 2ch;
	}
</style>
