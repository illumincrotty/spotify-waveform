import { SpotifyConnector } from './api';
import { isImprovedSelect } from './dropdown';

const authorization = new URLSearchParams(window.location.search);
const topTracks = document.querySelector('#top-tracks');
const topArtists = document.querySelector('#top-artists');

const usersTopTracksResponsetoList = (
	response: SpotifyApi.UsersTopTracksResponse
) =>
	response.items
		.map((track) => listElementify(trackToLink(track)))
		.join('\n');

const usersTopArtistsResponsetoList = (
	response: SpotifyApi.UsersTopArtistsResponse
) =>
	response.items
		.map((artist) => listElementify(artistToLink(artist)))
		.join('\n');

const listElementify = (input: string) => `<li>${input}</li>`;

const artistToLink = (artist: SpotifyApi.ArtistObjectFull) => {
	return `<a href="${artist.external_urls.spotify}">${artist.name}</a>`;
};

const trackToLink = (track: SpotifyApi.TrackObjectFull) =>
	`<a href="${track.external_urls.spotify}">${track.name}</a> by <a href="${track.artists[0].external_urls.spotify}">${track.artists[0].name}</a>`;
// const trackRequests: Map<string, SpotifyApi.UsersTopTracksResponse> = new Map();
// const artistRequests: Map<string, SpotifyApi.UsersTopTracksResponse> =

const main = async () => {
	if (authorization.get('token')) {
		const spotify = new SpotifyConnector(authorization.get('token'));
		const userProfile = await spotify.me();
		console.log(userProfile);

		// Tracks
		{
			const trackElement = document.querySelector('#tracks');

			const userTopTracks = await spotify.topTracks({
				time_range: 'long_term',
			});

			trackElement.innerHTML =
				usersTopTracksResponsetoList(userTopTracks);
			const asyncRunner = async (input: string) => {
				trackElement.innerHTML = usersTopTracksResponsetoList(
					await spotify.topTracks({
						time_range: input as
							| 'long_term'
							| 'medium_term'
							| 'short_term',
					})
				);
			};

			if (isImprovedSelect(topTracks)) {
				topTracks.subscribe((input: string) => {
					void asyncRunner(input);
				});
			}

			// for (const track of userTopTracks.items) {
			// 	const item = document.createElement('li');
			// 	item.innerHTML = `<a href="${track.external_urls.spotify}">${track.name}</a> by <a href="${track.artists[0].external_urls.spotify}">${track.artists[0].name}</a>`;
			// 	trackElement.append(item);
			// }
		}

		// Artists
		{
			const artistList = document.querySelector('#artists');

			const userTopArtists = await spotify.topArtists({
				time_range: 'long_term',
			});

			artistList.innerHTML =
				usersTopArtistsResponsetoList(userTopArtists);
			const asyncRunner = async (input: string) => {
				artistList.innerHTML = usersTopArtistsResponsetoList(
					await spotify.topArtists({
						time_range: input as
							| 'long_term'
							| 'medium_term'
							| 'short_term',
						limit: 25,
					})
				);
			};

			if (isImprovedSelect(topArtists)) {
				topArtists.subscribe((input: string) => {
					// console.log(input);
					void asyncRunner(input);
				});
			}
		}

		// const artistsElement = document.querySelector(
		// 	'#artists'
		// ) as HTMLUListElement;
		// for (const artist of userTopArtists.items) {
		// 	const item = document.createElement('li');
		// 	item.innerHTML = `<a href="${artist.external_urls.spotify}">${artist.name}</a>`;

		// 	// artistsElement.append(item);
		// }

		const sarah = await spotify.user('128148320');

		console.log(sarah);
	}
};

void main();
export {};
