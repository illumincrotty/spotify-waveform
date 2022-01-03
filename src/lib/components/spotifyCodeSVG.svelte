<script lang="ts">
	import { onMount } from 'svelte';

	export let uri;
	export let svgClass = 'svg-spotify-code';
	let svg = undefined;

	onMount(() => {
		getCode();
	});

	const getCode = async () => {
		const response = await fetch(
			`https://scannables.scdn.co/uri/plain/svg/262626/white/891/spotify:${uri}`
		);
		const text = await response.text();

		svg = text
			.replace('0 0 400 100"', `50 20 380 60" class="${svgClass}"`)
			.replaceAll('fill="#ffffff"', '')
			.replace(
				'<rect x="0" y="0" width="400" height="100" fill="#262626"/>',
				'<rect rx="3.36" ry="3.36" y="20" height="60" x="50" width="30"></rect>'
			)
			.replace('width="891"', '')
			.replace('height="222"', '')
			.replace(
				/<g.*g>/,
				'<rect rx="3.36" ry="3.36" y="20" height="60" width="30" x="400"></rect>'
			);
	};
</script>

{#if svg}
	{@html svg}
{:else}
	<img
		src="https://scannables.scdn.co/uri/plain/svg/262626/white/1000/spotify:{uri}"
		alt="Spotify Scannable link"
	/>
{/if}

<style lang="postcss">
	:global(svg.svg-spotify-code) {
		background-color: var(--text);
		fill: var(--bg);
		padding: var(--padding);
		width: 100%;
	}
</style>
