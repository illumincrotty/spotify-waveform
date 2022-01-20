<script lang="ts">
	import BlockStack from '$lib/components/layout/blockStack.svelte';
	import ArtistBlock from '$lib/components/layout/artistBlock.svelte';
	import TrackBlock from '$lib/components/layout/trackBlock.svelte';

	import AlbumBlock from '$lib/components/layout/albumBlock.svelte';
	import PlaylistBlock from '$lib/components/layout/playlistBlock.svelte';
	import { slide } from 'svelte/transition';
	import type { mediaOptions } from '$lib/script/api';

	export let categories: Set<mediaOptions> = new Set([
		'track',
		'artist',
		'album',
		'playlist',
	]);

	export let tracks: SpotifyApi.TrackObjectFull[] = [];
	export let artists: SpotifyApi.ArtistObjectFull[] = [];
	export let albums: SpotifyApi.AlbumObjectSimplified[] = [];
	export let playlists: SpotifyApi.PlaylistObjectSimplified[] = [];
</script>

{#if tracks.length > 0 && categories.has('track')}
	<section transition:slide>
		<h2>Tracks</h2>
		<div class="box">
			<BlockStack
				component={TrackBlock}
				items={tracks}
				limit={5}
				limitButton={true} />
		</div>
	</section>
{/if}

{#if artists.length > 0 && categories.has('artist')}
	<section transition:slide>
		<h2>Artists</h2>
		<div class="box">
			<BlockStack
				component={ArtistBlock}
				items={artists}
				limit={5}
				limitButton={true} />
		</div>
	</section>
{/if}

{#if albums.length > 0 && categories.has('album')}
	<section transition:slide>
		<h2>Albums</h2>
		<div class="box">
			<BlockStack
				component={AlbumBlock}
				items={albums}
				limit={5}
				limitButton={true} />
		</div>
	</section>
{/if}

{#if playlists.length > 0 && categories.has('album')}
	<section transition:slide>
		<h2>Playlists</h2>
		<div class="box">
			<BlockStack
				component={PlaylistBlock}
				items={playlists}
				limit={5}
				limitButton={true} />
		</div>
	</section>
{/if}

<style>
	section {
		padding: var(--padding);
	}
	h2 {
		position: sticky;
		top: 0;
		background-color: var(--text);
		color: var(--bg);
		padding-top: 0.25em;
		padding-bottom: 0.25em;
		padding-left: 0.25em;

		box-shadow: var(--shadow-elevation-high);
		z-index: 15;
	}
</style>
