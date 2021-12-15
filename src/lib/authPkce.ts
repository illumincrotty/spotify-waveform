import { randomBase64StringGenerator, bytesToBase64 } from './stateGen';
import { base } from '$app/paths';

// import * as base64url from 'https://deno.land/std@0.97.0/encoding/base64url.ts';

const mode = process.env.NODE_ENV;
const development = mode === 'development';
interface authBase {
	client_id: string;
	response_type: string;
	redirect_uri: string;
	state?: string;
	show_dialog?: 'true' | 'false';
	scope?: string;
}
export interface authImplicitGrant extends authBase {
	response_type: 'token';
}

interface authCodePKCE extends authBase {
	response_type: 'code';
	code_challenge_method: 'S256';
	code_challenge: string;
}

const generateCodeChallenge = async (
	code_verifier: string
): Promise<string> => {
	const codeVerifierBytes = new TextEncoder().encode(code_verifier);
	const hashBuffer = await crypto.subtle.digest('SHA-256', codeVerifierBytes);
	return bytesToBase64(new Uint8Array(hashBuffer));
};

const AUTH_URL_BASE = 'https://accounts.spotify.com/authorize';
const AUTH_URL_TOKEN = 'https://accounts.spotify.com/api/token';

/**
 * Implicit Grant flow
 *
 * user starts login
 *
 * Login on auth page
 *
 * wait for acess token
 *
 * store token
 *
 * goto new page
 *
 */

/**
 * PKCE flow
 *
 * user starts login
 *
 * Login on auth page
 *
 * wait for code
 *
 * Fetch token with code
 *
 * store token
 *
 * goto new page
 *
 */

export const authorize = async (
	pkce = false
): Promise<{
	login: () => void;
	verifyState: (input: string) => boolean;
	message?: (code: string) => Promise<{
		access_token: string;
		token_type: 'Bearer';
		expires_in: 3600;
		refresh_token: string;
		scope: string;
	}>;
}> => {
	const code_verifier = randomBase64StringGenerator(64);
	const state = randomBase64StringGenerator(64);

	let authConfig: authBase | authImplicitGrant | authCodePKCE = {
		client_id: '9f38f4f91f784811b42898766ee7211a',
		redirect_uri: `${
			development
				? `${window.location.protocol}//${
						window.location.hostname
				  }${`:${window.location.port}`}`
				: 'https://illumincrotty.github.io'
		}${base}/authorized`, // My URL
		state: `${state}`,
		scope: 'user-read-private user-top-read',
		response_type: pkce ? 'code' : 'token',
		show_dialog: 'false',
	};

	if (pkce) {
		authConfig = {
			...authConfig,
			code_challenge_method: 'S256',
			code_challenge: await generateCodeChallenge(code_verifier),
		} as authCodePKCE;
	}

	const verifyState = (input: string) => input === state;

	const login = () => {
		popupCenter(
			`${AUTH_URL_BASE}/?${new URLSearchParams({
				...authConfig,
			}).toString()}`,
			'Spotify Login',
			500,
			700
		);
	};

	const message = async (code: string) => {
		const response = await fetch(AUTH_URL_TOKEN, {
			method: 'POST',
			body: new URLSearchParams({
				grant_type: 'authorization_code',
				code: code,
				redirect_uri: authConfig.redirect_uri,
				client_id: authConfig.client_id,
				code_verifier: code_verifier,
			}),
		});
		if (response.ok) {
			console.debug('Response good');
			const json = (await response.json()) as {
				access_token: string;
				token_type: 'Bearer';
				expires_in: 3600;
				refresh_token: string;
				scope: string;
			};
			console.log(json);
			return json;
		}
	};

	return pkce ? { login, verifyState, message } : { login, verifyState };
};

// export class AuthService {
// 	private readonly code_verifier = randomBase64StringGenerator(64);

// 	private readonly _state = randomBase64StringGenerator(64);

// 	private readonly authConfig: authCodePKCE = {
// 		client_id: '9f38f4f91f784811b42898766ee7211a',
// 		response_type: 'code',
// 		redirect_uri: `${
// 			development
// 				? `${window.location.protocol}//${
// 						window.location.hostname
// 				  }${`:${window.location.port}`}`
// 				: 'https://illumincrotty.github.io'
// 		}${base}/authorized`, // My URL
// 		state: `${this.state}`,
// 		scope: 'user-read-private',
// 		code_challenge_method: 'S256',
// 		code_challenge: '',
// 		show_dialog: 'false',
// 	};

// 	constructor() {
// 		void generateCodeChallenge(this.code_verifier).then((challenge) => {
// 			this.authConfig.code_challenge = challenge;
// 		});
// 	}

// 	get state(): string {
// 		return this._state;
// 	}

// 	set scope(input: ScopesBuilder) {
// 		this.authConfig.scope = input.build();
// 	}

// 	public authorize(): Window | null {
// 		while (this.authConfig.code_challenge === '') {
// 			true;
// 		}
// 		sessionStorage.setItem('code_verifier', this.code_verifier);
// 		sessionStorage.setItem('state', this._state);
// 		return popupCenter(this.buildAuthUrl(), 'Spotify Login', 500, 700);
// 	}

// 	private buildAuthUrl(): string {
// 		const parameters = [];

// 		for (const [key, value] of Object.entries(this.authConfig)) {
// 			if (typeof value === 'object') {
// 				parameters.push(`${key}=${(value as string[]).join(' ')}`);
// 			} else {
// 				parameters.push(`${key}=${value as string}`);
// 			}
// 		}

// 		return `${REQUEST_AUTH_URL}?${parameters.join('&')}`;
// 	}
// }

export const popupCenter = (
	url: string,
	title: string,
	w: number,
	h: number
): Window => {
	// Fixes dual-screen position
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const dualScreenLeft = window.screenLeft ?? window.screenX;
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const dualScreenTop = window.screenTop ?? window.screenY;

	const width =
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		window.innerWidth ?? document.documentElement.clientWidth
			? document.documentElement.clientWidth
			: screen.width;
	const height =
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		window.innerHeight ?? document.documentElement.clientHeight
			? document.documentElement.clientHeight
			: screen.height;

	// const systemZoom = width / window.screen.availWidth;
	const left = (width - w) / 2 + dualScreenLeft;
	const top = (height - h) / 2 + dualScreenTop;
	const newWindow = window.open(
		url,
		title,
		`scrollbars=yes,width=${w},height=${h},top=${top},left=${left}`
	);

	if ('focus' in window) newWindow?.focus();

	return newWindow;
};
