<script lang="ts">
	import Page from '$lib/components/layout/page.svelte';
	import AddButton from '$lib/components/button/buttonPlus.svelte';
	import SingleQuote from '$lib/components/random/singleQuote.svelte';

	let button: HTMLElement | undefined;
	let x = 1;

	function handleClick() {
		x += 1;
		setTimeout(function () {
			if (button) {
				button.scrollIntoView({ block: 'center' });
			}
		}, 100);
	}
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<Page title="Quotes">
	{#each { length: x } as _}
		<SingleQuote />
	{/each}
	<div class="center-i" bind:this={button}>
		<AddButton on:click={handleClick} />
	</div>
</Page>
