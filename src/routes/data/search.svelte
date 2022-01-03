<script lang="ts">
	import Page from '$lib/components/layout/page.svelte';

	import BlockStack from '$lib/components/layout/blockStack.svelte';
	import ArtistBlock from '$lib/components/layout/artistBlock.svelte';
	import TrackBlock from '$lib/components/layout/trackBlock.svelte';

	import Search from '$lib/components/search.svelte';

	import { createSpotifyConnection } from '$lib/script/api';

	import { token } from '$lib/storeSession';
	import { onMount } from 'svelte';
	import AlbumBlock from '$lib/components/layout/albumBlock.svelte';
	import PlaylistBlock from '$lib/components/layout/playlistBlock.svelte';

	let value = '';
	let spotify: ReturnType<typeof createSpotifyConnection>;
	let results: SpotifyApi.SearchResponse = undefined;

	let tracks: SpotifyApi.TrackObjectFull[] = [];
	let artists: SpotifyApi.ArtistObjectFull[] = [];
	let albums: SpotifyApi.AlbumObjectSimplified[] = [];
	let playlists: SpotifyApi.PlaylistObjectSimplified[] = [];

	let debounce = 1000;

	onMount(() => {
		if ($token !== 'empty' && token.valid()) {
			spotify = createSpotifyConnection($token);
		}
	});

	const handleInput = async () => {
		results = await spotify.search({
			q: value,
			type: ['track', 'artist', 'album', 'playlist'],
		});

		console.debug(results);

		tracks = results.tracks.items;
		artists = results.artists.items;
		albums = results.albums.items;
		playlists = results.playlists.items;
		console.log(artists[0].images);
	};
</script>

<Page title="Search">
	<Search
		slot="header"
		id="spotify-search"
		label="Spotify Search"
		placeholder="Search Spotify"
		bind:value
		{debounce}
		on:type={handleInput}
		on:submit={handleInput}
	/>

	{#if tracks.length > 0}
		<h2>Tracks</h2>
		<BlockStack
			component={TrackBlock}
			items={tracks}
			limit={5}
			limitButton={true}
		/>
		<!-- <TrackListPretty {tracks} limit={limitTracks} limitButton={true} /> -->
	{/if}

	{#if artists.length > 0}
		<h2>Artists</h2>
		<BlockStack
			component={ArtistBlock}
			items={artists}
			limit={5}
			limitButton={true}
		/>
		<!-- <ArtistListPretty {artists} /> -->
	{/if}

	{#if albums.length > 0}
		<h2>Albums</h2>
		<BlockStack
			component={AlbumBlock}
			items={albums}
			limit={5}
			limitButton={true}
		/>
		<!-- <ArtistListPretty {artists} /> -->
	{/if}

	{#if playlists.length > 0}
		<h2>Playlists</h2>
		<BlockStack
			component={PlaylistBlock}
			items={playlists}
			limit={5}
			limitButton={true}
		/>
		<!-- <ArtistListPretty {artists} /> -->
	{/if}
</Page>
