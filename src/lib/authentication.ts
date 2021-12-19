import { randomBase64StringGenerator, bytesToBase64 } from './stateGen';
import { base } from '$app/paths';
import type { pkceToken } from 'tokens';

// import * as base64url from 'https://deno.land/std@0.97.0/encoding/base64url.ts';

const mode = process.env.NODE_ENV;
const development = mode === 'development';

const CLIENT_ID = '9f38f4f91f784811b42898766ee7211a';
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

export const authorize = async (): Promise<{
	login: () => void;
	message: (state_returned: string, code: string) => Promise<void>;
}> => {
	const code_verifier = randomBase64StringGenerator(64);
	const state = randomBase64StringGenerator(64);

	const authConfig: authCodePKCE = {
		client_id: CLIENT_ID,
		redirect_uri: `${
			development
				? `${window.location.protocol}//${
						window.location.hostname
				  }${`:${window.location.port}`}`
				: 'https://illumincrotty.github.io'
		}${base}/authorized`, // My URL
		state: `${state}`,
		scope: 'user-read-private user-top-read',
		response_type: 'code',
		show_dialog: 'false',
		code_challenge_method: 'S256',
		code_challenge: await generateCodeChallenge(code_verifier),
	};

	const login = () => {
		popupCenter(
			`https://accounts.spotify.com/authorize/?${new URLSearchParams({
				...authConfig,
			}).toString()}`,
			'Spotify Login',
			500,
			700
		);
	};

	const message = async (
		state_returned: string,
		code: string
	): Promise<void> => {
		if (state === state_returned) {
			const response = await fetch(
				'https://accounts.spotify.com/api/token',
				{
					method: 'POST',
					body: new URLSearchParams({
						grant_type: 'authorization_code',
						code: code,
						redirect_uri: authConfig.redirect_uri,
						client_id: CLIENT_ID,
						code_verifier: code_verifier,
					}),
				}
			);
			if (response.ok) {
				const json = (await response.json()) as {
					access_token: string;
					token_type: 'Bearer';
					expires_in: 3600;
					refresh_token: string;
					scope: string;
				};
				console.log(json);
				const token = {
					access_token: json.access_token,
					refresh_token: json.refresh_token,
					expires_at: Date.now() + 1000 * +json.expires_in,
				};
				sessionStorage.setItem('token_set', JSON.stringify(token));
				return Promise.resolve();
			} else {
				console.error(response);
			}
		}
		return Promise.reject();
	};

	return { login, message };
};

export const refreshToken = async (): Promise<boolean> => {
	const tokenStore = sessionStorage.getItem('token_set');
	if (tokenStore) {
		const token = JSON.parse(tokenStore) as pkceToken;

		// console.log(token.expires_at, Date.now());
		if (token.expires_at >= Date.now()) return false;

		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: token.refresh_token,
				client_id: CLIENT_ID,
			}),
		});

		console.log(response);
		console.log(response);
		if (response.ok) {
			const json = (await response.json()) as {
				access_token: string;
				token_type: 'Bearer';
				expires_in: 3600;
				scope: string;
			};
			console.log(json);
			const token_refreshed = {
				access_token: json.access_token,
				refresh_token: token.refresh_token,
				expires_at: Date.now() + 1000 * +json.expires_in,
			} as pkceToken;
			sessionStorage.setItem(
				'token_set',
				JSON.stringify(token_refreshed)
			);
			return true;
		}
		return false;
	}
	return false;
};

/**
 * Creates a popup that is centered on the screen
 *
 * @param url - the url for the popup
 * @param title - the title of the popup
 * @param w - the width of the popup
 * @param h - the height of the popup
 * @returns the created window object
 */
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
