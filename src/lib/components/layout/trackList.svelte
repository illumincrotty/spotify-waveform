<script lang="ts">
	import { base } from '$app/paths';
	export let tracks: SpotifyApi.TrackObjectFull[] = [];
</script>

<ul class="unlist">
	{#each tracks as track}
		<li>
			<a href="{base}/data/track?id={track.id}">{track.name}</a>
			by
			<a rel="external" href={track.artists[0].external_urls.spotify}
				>{track.artists[0].name}</a
			>
		</li>
	{/each}
</ul>

<style>
	li {
		font-size: var(--font-s);
	}
</style>
