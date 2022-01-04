<script lang="ts">
	import Block from './linkBlock.svelte';

	export let data: SpotifyApi.AlbumObjectSimplified;
</script>

<Block href={data.external_urls.spotify} id={data.uri}>
	{#if data.images.length > 0}
		<img
			srcset={data.images.map((img) => img.url).join(', ')}
			alt="Picture of {data.name}"
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
