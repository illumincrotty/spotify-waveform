<script lang="ts">
	export let artists: SpotifyApi.ArtistObjectFull[] = [];
	export let picture = false;
</script>

<ul class="unlist">
	{#each artists as artist}
		<li>
			{#if picture && artist.images.length > 0}
				<img
					src={artist.images[0].url}
					alt="Picture of {artist.name}"
				/>
			{/if}
			<a rel="external" href={artist.external_urls.spotify}
				>{artist.name}</a
			>
		</li>
	{/each}
</ul>

<style>
	li {
		font-size: var(--font-s);
	}
	img {
		display: inline-block;
	}
</style>
