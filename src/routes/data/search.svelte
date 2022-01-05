<script lang="ts">
	import Page from '$lib/components/layout/page.svelte';

	import { createSpotifyConnection } from '$lib/script/api';
	import type { mediaOptions } from '$lib/script/api';

	import { token } from '$lib/storeSession';
	import { onMount } from 'svelte';

	import SearchSpotify from '$lib/components/searchSpotify.svelte';
	import SpotifySearchResults from '$lib/components/spotifySearchResults.svelte';

	let spotify: ReturnType<typeof createSpotifyConnection>;

	let categories: Set<mediaOptions> = new Set([
		'track',
		'artist',
		'album',
		'playlist',
	]);
	let tracks: SpotifyApi.TrackObjectFull[] = [];
	let artists: SpotifyApi.ArtistObjectFull[] = [];
	let albums: SpotifyApi.AlbumObjectSimplified[] = [];
	let playlists: SpotifyApi.PlaylistObjectSimplified[] = [];

	onMount(() => {
		if ($token !== 'empty' && token.valid()) {
			spotify = createSpotifyConnection($token);
		}
	});
</script>

<Page title="Search">
	<SearchSpotify
		{spotify}
		slot="header"
		bind:categories
		bind:tracks
		bind:artists
		bind:albums
		bind:playlists
	/>
	<SpotifySearchResults
		{categories}
		{tracks}
		{artists}
		{albums}
		{playlists}
	/>
</Page>
