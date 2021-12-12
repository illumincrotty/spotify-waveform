type timeOptions = 'long' | 'medium' | 'short';

type query = Record<string, number | string>;

export type pagingOptions = {
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
	/**
	 * The index of the first item to return.
	 *
	 * Default: 0 (the first item). Use with limit to get the next set of items.
	 */
	offset?: number;
};

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

const queryStringify = <T extends query>(options?: T) => {
	return options
		? `?${Object.entries(options)
				.map((value) =>
					value[0] && value[1] ? `${value[0]}=${value[1]}` : ''
				)
				.join('&')}`
		: '';
};

class SpotifyConnector {
	BASE_URL = 'https://api.spotify.com/v1';

	head: Headers;

	constructor(token: string) {
		this.head = new Headers([
			['Authorization', `Bearer ${token}`],
			['Content-Type', 'application/json'],
		]);
	}

	public readonly me =
		async (): Promise<SpotifyApi.CurrentUsersProfileResponse> =>
			this.fetch('/me');
	/**
	 * Get signed in user's top tracks
	 * @param options - possible parameters
	 * @returns a users top track
	 */
	public readonly topTracks = async (
		options?: pagingOptions & time_range
	): Promise<SpotifyApi.UsersTopTracksResponse> =>
		this.fetch('/me/top/tracks', options);

	/**
	 * Get signed in user's top artists
	 * @param options - possible parameters
	 * @returns a users top artists
	 */
	public readonly topArtists = async (
		options?: pagingOptions & time_range
	): Promise<SpotifyApi.UsersTopArtistsResponse> =>
		this.fetch('/me/top/artists', options);

	/**
	 * user
	 * @param id - the spotify ID of the desired user
	 * @returns a user profile
	 */
	public readonly user = async (
		id: string
	): Promise<SpotifyApi.UserProfileResponse> => this.fetch(`/users/${id}`);

	private readonly fetch = async <returnValue, options_ extends query>(
		route: string,
		options?: options_,
		method = 'GET'
	): Promise<returnValue> => {
		const response = await fetch(
			`${this.BASE_URL}${route}${queryStringify(options)}`,
			{
				method: `${method}`,
				headers: this.head,
			}
		);
		return response.json() as unknown as returnValue;
	};
}

export { SpotifyConnector };
