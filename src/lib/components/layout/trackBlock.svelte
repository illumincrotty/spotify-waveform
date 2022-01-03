<script lang="ts">
	import { base } from '$app/paths';

	import Block from './linkBlock.svelte';
	export let data: SpotifyApi.TrackObjectFull;
</script>

<Block href="{base}/data/track?id={data.id}" id={data.uri}>
	{#if data.album.images.length > 0}
		<img
			srcset={data.album.images.map((img) => img.url).join(', ')}
			alt="Picture of {data.name}"
		/>
	{:else}
		<img
			src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=123"
			alt="Placeholder image for {data.name}"
		/>
	{/if}
	<label for={data.uri}>{data.name} by {data.artists[0].name}</label>
</Block>

<style lang="postcss">
	label {
		background-color: transparent;
		display: block;
		pointer-events: none;
	}

	img {
		aspect-ratio: 1;
		object-fit: scale-down;
		border-radius: 50%;
		max-width: 3rem;
	}
</style>
