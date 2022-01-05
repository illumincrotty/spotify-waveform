<script lang="ts">
	import { base } from '$app/paths';

	import Block from './linkBlock.svelte';
	export let data: SpotifyApi.TrackObjectFull;
</script>

<Block href="{base}/data/track?id={data.id}" id={data.uri}>
	{#if data.album.images.length > 0}
		<!-- {#if data.album.images.length > 1}
			<img
				src={data.album.images[data.album.images.length - 2].url}
				alt="Picture of {data.name}"
			/>
		{:else} -->
		<img
			src={data.album.images[data.album.images.length - 1].url}
			alt="Picture of {data.name}"
			width="64"
			height="64"
		/>
		<!-- {/if} -->
	{:else}
		<img
			src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=123"
			alt="Placeholder image for {data.name}"
		/>
	{/if}
	<label for={data.uri}>{data.name} by {data.artists[0].name}</label>
</Block>
