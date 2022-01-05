<script lang="ts">
	import Block from './linkBlock.svelte';

	export let data: SpotifyApi.PlaylistObjectSimplified;
</script>

<Block href={data.external_urls.spotify} id={data.uri}>
	{#if data.images.length > 0}
		<img
			src={data.images[data.images.length - 1].url}
			alt="Picture of {data.name}"
			width="64"
			height="64"
		/>
	{:else}
		<img
			src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=123"
			alt="Placeholder of {data.name}"
		/>
	{/if}
	<label for={data.uri}>
		{data.name}
	</label>
</Block>
