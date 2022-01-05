<script lang="ts">
	import BlockStack from '$lib/components/layout/blockStack.svelte';
	import ArtistBlock from '$lib/components/layout/artistBlock.svelte';
	import TrackBlock from '$lib/components/layout/trackBlock.svelte';

	import SearchBar from '$lib/components/searchBar.svelte';

	import { createSpotifyConnection, mediaOptions } from '$lib/script/api';

	import { token } from '$lib/storeSession';
	import { onMount } from 'svelte';
	import AlbumBlock from '$lib/components/layout/albumBlock.svelte';
	import PlaylistBlock from '$lib/components/layout/playlistBlock.svelte';
	import { slide } from 'svelte/transition';

	export let spotify: ReturnType<typeof createSpotifyConnection>;
	export let categories: mediaOptions[] = [
		'track',
		'artist',
		'album',
		'playlist',
	];

	let value = '',
		prevSearch = '';
	let results: SpotifyApi.SearchResponse = undefined;

	let tracks: SpotifyApi.TrackObjectFull[] = [];
	let artists: SpotifyApi.ArtistObjectFull[] = [];
	let albums: SpotifyApi.AlbumObjectSimplified[] = [];
	let playlists: SpotifyApi.PlaylistObjectSimplified[] = [];

	let debounce = 500;

	onMount(() => {
		if (!spotify && $token !== 'empty' && token.valid()) {
			spotify = createSpotifyConnection($token);
		}
		const urlSearch = new URLSearchParams(window.location.search);
		if (urlSearch.has('categories')) {
			console.log(urlSearch.get('categories'));
			categories = urlSearch
				.get('categories')
				.split(',') as mediaOptions[];
		}
	});

	const handleInput = async () => {
		if (value !== '' && value !== prevSearch) {
			prevSearch = value;
			results = await spotify.search({
				q: value,
				type: categories,
			});

			tracks = results.tracks.items ?? [];
			artists = results.artists.items ?? [];
			albums = results.albums.items ?? [];
			playlists = results.playlists.items ?? [];
		}
	};
</script>

<SearchBar
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
	<section transition:slide>
		<h2>Tracks</h2>
		<BlockStack
			component={TrackBlock}
			items={tracks}
			limit={5}
			limitButton={true}
		/>
	</section>
	<!-- <TrackListPretty {tracks} limit={limitTracks} limitButton={true} /> -->
{/if}

{#if artists.length > 0}
	<section transition:slide>
		<h2>Artists</h2>
		<BlockStack
			component={ArtistBlock}
			items={artists}
			limit={5}
			limitButton={true}
		/>
	</section>
	<!-- <ArtistListPretty {artists} /> -->
{/if}

{#if albums.length > 0}
	<section transition:slide>
		<h2>Albums</h2>
		<BlockStack
			component={AlbumBlock}
			items={albums}
			limit={5}
			limitButton={true}
		/>
	</section>
	<!-- <ArtistListPretty {artists} /> -->
{/if}

{#if playlists.length > 0}
	<section transition:slide>
		<h2>Playlists</h2>
		<BlockStack
			component={PlaylistBlock}
			items={playlists}
			limit={5}
			limitButton={true}
		/>
		<!-- <ArtistListPretty {artists} /> -->
	</section>
{/if}
