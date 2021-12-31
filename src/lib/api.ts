import type { pkceToken } from 'tokens';
type timeOptions = 'long' | 'medium' | 'short';

type query = Record<string, number | string | string[]>;

export type limitOption = {
	/**
	 *
	 * The maximum number of items to return.
	 *
	 * Default: 20
	 *
	 * Minimum: 1
	 *
	 * Maximum: 50
	 *
	 * Default value: 20
	 */
	limit?: number;
};

export type pagingOptions = {
	/**
	 * The index of the first item to return.
	 *
	 * Default: 0 (the first item). Use with limit to get the next set of items.
	 */
	offset?: number;
} & limitOption;

export type time_range = {
	/**
	 * Over what time frame the affinities are computed.
	 *
	 * Valid values: long_term (calculated from several years of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks).
	 *
	 * Default: medium_term
	 */
	time_range?: `${timeOptions}_term`;
};

interface AudioAnalysisResponse {
	meta: {
		analyzer_version: string;
		platform: string;
		detailed_status: string;
		status_code: number;
		timestamp: number;
		analysis_time: number;
		input_process: string;
	};

	track: {
		num_samples: number;
		duration: number;
		sample_md5: string;
		offset_seconds: number;
		window_seconds: number;
		analysis_sample_rate: number;
		analysis_channels: number;
		end_of_fade_in: number;
		start_of_fade_out: number;
		loudness: number;
		tempo: number;
		tempo_confidence: number;
		time_signature: number;
		time_signature_confidence: number;
		key: number;
		key_confidence: number;
		mode: number;
		mode_confidence: number;
		codestring: string;
		code_version: number;
		echoprintstring: string;
		echoprint_version: number;
		synchstring: string;
		synch_version: number;
		rhythmstring: string;
		rhythm_version: number;
	};

	bar: {
		start: number;
		duration: number;
		confidence: number;
	};

	beats: {
		start: number;
		duration: number;
		confidence: number;
	}[];

	sections: {
		start: number;
		duration: number;
		confidence: number;
		loudness: number;
		tempo: number;
		tempo_confidence: number;
		key: number;
		key_confidence: number;
		mode: number;
		mode_confidence: number;
		time_signature: number;
		time_signature_confidence: number;
	}[];

	segments: {
		start: number;
		duration: number;
		confidence: number;
		loudness_start: number;
		loudness_max: number;
		loudness_max_time: number;
		loudness_end: number;
		pitches: number[];
		timbre: number[];
	}[];
	tatums: {
		start: number;
		duration: number;
		confidence: number;
	}[];
}

const queryStringify = <T extends query>(options?: T) => {
	return options
		? `?${Object.entries(options)
				.map((value) =>
					value[0] && value[1]
						? `${value[0]}=${
								Array.isArray(value[1])
									? value[1].join(',')
									: value[1]
						  }`
						: ''
				)
				.join('&')}`
		: '';
};

const BASE_URL = 'https://api.spotify.com/v1';

type easyFetchOptions<_options extends query> = {
	route: string;
	options?: _options;
	method?: 'GET' | 'POST' | 'DELETE';
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createSpotifyConnection = (token: pkceToken) => {
	const head = new Headers({
		Authorization: `Bearer ${token.access_token}`,
	});

	const easyFetch = async <returnValue, T extends query>(
		options: easyFetchOptions<T>
	): Promise<returnValue> => {
		const response = await fetch(
			`${BASE_URL}${options.route}${queryStringify(options.options)}`,
			{
				method: `${options?.method ?? 'GET'}`,
				headers: head,
			}
		);
		return response.json() as unknown as returnValue;
	};

	type idList = {
		/**
		 * A comma-separated list of the artist or the user Spotify IDs to check
		 */
		ids: string[];
	};

	const user = {
		/**
		 * Get signed in user's Profile
		 *
		 * @returns a users profile
		 */
		me: async (): Promise<SpotifyApi.CurrentUsersProfileResponse> =>
			easyFetch({ route: '/me' }),

		/**
		 * Get signed in user's top tracks
		 *
		 * @param options - possible parameters
		 * @returns a users top track
		 */
		topTracks: async (
			options?: pagingOptions & time_range
		): Promise<SpotifyApi.UsersTopTracksResponse> =>
			easyFetch({ route: '/me/top/tracks', options: options }),

		/**
		 * Get signed in user's top artists
		 *
		 * @param options - possible parameters
		 * @returns a users top artists
		 */
		topArtists: async (
			options?: pagingOptions & time_range
		): Promise<SpotifyApi.UsersTopArtistsResponse> =>
			easyFetch({ route: '/me/top/artists', options: options }),

		/**
		 * Get a user profile
		 *
		 * @param id - the spotify ID of the desired user
		 * @returns a user profile
		 */
		user: async (id: string): Promise<SpotifyApi.UserProfileResponse> =>
			easyFetch({ route: `/users/${id}` }),

		/**
		 * Get the current user's followed artists.
		 *
		 * @param options - possible parameters
		 * @returns current user's followed artists.
		 */
		followedArtists: async (
			options: {
				/**
				 * The last artist ID retrieved from the previous request.
				 */
				after?: string;
			} & limitOption
		): Promise<SpotifyApi.UsersFollowedArtistsResponse> =>
			easyFetch({
				route: '/me/following',
				options: { type: 'artist', ...options },
			}),

		/**
		 * Check to see if the current user is following one or more artists or other Spotify users.
		 *
		 * @param options - possible parameters
		 * @returns Array of booleans
		 */
		followedArtistsCheck: async (
			options: idList & {
				/**
				 * The ID type
				 */
				type: 'artist' | 'user';
			}
		): Promise<SpotifyApi.UsersFollowedArtistsResponse> =>
			easyFetch({ route: '/me/following/contains', options: options }),

		/**
		 * Check to see if one or more Spotify users are following a specified playlist.
		 *
		 * @param playlist_id - The Spotify ID of the playlist
		 * @param options - possible parameters, max 5 ids
		 * @returns Array of booleans
		 */
		followsPlaylistCheck: async (
			playlist_id: string,
			options: idList
		): Promise<SpotifyApi.UsersFollowPlaylistReponse> =>
			easyFetch({
				route: `/playlists/${playlist_id}/followers/contains`,
				options: options,
			}),
	};

	const tracks = {
		/**
		 * Get Spotify catalog information for a single track identified by its unique Spotify ID.
		 *
		 * @param id - The Spotify ID for the track.
		 * @returns a user profile
		 */
		track: async (id: string): Promise<SpotifyApi.SingleTrackResponse> =>
			easyFetch({ route: `/tracks/${id}` }),

		/**
		 * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
		 *
		 * @param options - possible parameters, max 50 ids
		 * @returns a user profile
		 */
		tracks: async (
			options: idList
		): Promise<SpotifyApi.MultipleTracksResponse> =>
			easyFetch({ route: `/tracks`, options: options }),

		/**
		 * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
		 *
		 * @param options - possible parameters, max 50 ids
		 * @returns a user profile
		 */
		savedTracks: async (
			options: idList & pagingOptions
		): Promise<SpotifyApi.UsersSavedTracksResponse> =>
			easyFetch({ route: `/me/tracks`, options: options }),
		/**
		 * Get audio feature information for a single track identified by its unique Spotify ID.
		 *
		 * @param id - The Spotify ID for the track.
		 * @returns Audio features for one track
		 */
		audioFeatures: async (
			id: string
		): Promise<SpotifyApi.AudioFeaturesResponse> =>
			easyFetch({ route: `/audio-features/${id}` }),

		/**
		 * Get audio feature information for a single track identified by its unique Spotify ID.
		 *
		 * @param id - Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
		 * @returns Audio analysis for one track
		 */
		audioAnalysis: async (id: string): Promise<AudioAnalysisResponse> =>
			easyFetch({ route: `/audio-analysis/${id}` }),
	};

	return { ...user, ...tracks };
};

export { createSpotifyConnection };
