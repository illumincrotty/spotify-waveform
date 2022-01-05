<script lang="ts">
	import SearchBar from '$lib/components/searchBar.svelte';

	import { token } from '$lib/storeSession';
	import { onMount } from 'svelte';

	import { createSpotifyConnection } from '$lib/script/api';
	import type { mediaOptions } from '$lib/script/api';

	export let spotify: ReturnType<typeof createSpotifyConnection>;
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
	export let value = '';

	$: categoryArray = Array.from(categories);

	/**
	 * search value
	 */
	let prevSearch = '',
		debounce = 500,
		results: SpotifyApi.SearchResponse;

	onMount(() => {
		if (!spotify && $token !== 'empty' && token.valid()) {
			spotify = createSpotifyConnection($token);
		}
		const urlSearch = new URLSearchParams(window.location.search);
		if (urlSearch.has('categories')) {
			console.log(urlSearch.get('categories'));
			categories = new Set(
				urlSearch.get('categories').split(',') as mediaOptions[]
			);
		}
	});

	const handleInput = async () => {
		if (value !== '' && value !== prevSearch) {
			prevSearch = value;
			results = await spotify.search({
				q: value,
				type: categoryArray,
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
	on:clear={() => {
		tracks = [];
		artists = [];
		albums = [];
		playlists = [];
	}}
	on:submit={handleInput}
/>
