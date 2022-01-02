import type { SpotifyScope } from './scope';

export class ScopesBuilder {
	public static USERS: { [name: string]: SpotifyScope } = {
		READ_PRIVATE: 'user-read-private',
		READ_EMAIL: 'user-read-email',
		READ_BIRTHDATE: 'user-read-birthdate',
	};

	public static PLAYLISTS: { [name: string]: SpotifyScope } = {
		READ_PRIVATE: 'playlist-read-private',
		MODIFY_PRIVATE: 'playlist-modify-private',
		MODIFY_PPUBLIC: 'playlist-modify-public',
		READ_COLLABORATIVE: 'playlist-read-collaborative',
	};

	public static HISTORY: { [name: string]: SpotifyScope } = {
		TOP_READ: 'user-top-read',
		READ_RECENTLY_PLAYED: 'user-read-recently-played',
	};

	public static LIBRARY: { [name: string]: SpotifyScope } = {
		READ: 'user-library-read',
		MODIFY: 'user-library-modify',
	};

	public static CONNECT: { [name: string]: SpotifyScope } = {
		READ_CURRENTLY_PLAYING: 'user-read-currently-playing',
		MODIFY_PLAYBACK_STATE: 'user-modify-playback-state',
		READ_PLAYBACK_STATE: 'user-read-playback-state',
	};

	public static FOLLOW: { [name: string]: SpotifyScope } = {
		READ: 'user-follow-read',
		MODIFY: 'user-follow-modify',
	};

	public static PLAYBACK: { [name: string]: SpotifyScope } = {
		STREAMING: 'streaming',
	};

	private scopes: (SpotifyScope | { [name: string]: SpotifyScope })[] = [
		ScopesBuilder.USERS,
		ScopesBuilder.PLAYLISTS,
		ScopesBuilder.HISTORY,
		ScopesBuilder.LIBRARY,
		ScopesBuilder.CONNECT,
		ScopesBuilder.FOLLOW,
		ScopesBuilder.PLAYBACK,
	];

	/**
	 * WithScopes
	 *
	 * @param arguments_ - [] means no particular scopes or public only
	 * @returns scopes
	 */
	public withScopes(
		...arguments_: (SpotifyScope | { [name: string]: SpotifyScope })[]
	): ScopesBuilder {
		this.scopes = arguments_;
		return this;
	}

	public build(): string {
		const buffer: string[] = [];

		for (const scope of this.scopes) {
			if (typeof scope === 'string') {
				buffer.push(scope);
			} else {
				for (const property of Object.keys(scope))
					buffer.push(scope[property]);
			}
		}

		return buffer.join(' ');
	}
}
