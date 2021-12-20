import { randomBase64StringGenerator, bytesToBase64 } from './stateGen';
import { base } from '$app/paths';
import type { pkceToken } from 'tokens';
import { goto } from '$app/navigation';

const mode = process.env.NODE_ENV;
const development = mode === 'development';

const redirectURL = `${
	development ? 'https://localhost:3000' : 'https://illumincrotty.github.io'
}${base}/authorized`;

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

export const login = async (): Promise<void> => {
	const code_verifier = randomBase64StringGenerator(64);
	const state = randomBase64StringGenerator(64);

	sessionStorage.setItem('code_verifier', code_verifier);
	sessionStorage.setItem('state', state);

	const authConfig: authCodePKCE = {
		client_id: CLIENT_ID,
		redirect_uri: redirectURL, // My URL
		state: `${state}`,
		scope: 'user-read-private user-top-read',
		response_type: 'code',
		show_dialog: 'false',
		code_challenge_method: 'S256',
		code_challenge: await generateCodeChallenge(code_verifier),
	};

	return void goto(
		`https://accounts.spotify.com/authorize/?${new URLSearchParams({
			...authConfig,
		}).toString()}`
	);
};

export const verify = (
	code: string,
	state: string,
	fetchFunction: typeof fetch = fetch
): Promise<Response> => {
	const realState = sessionStorage.getItem('state');
	const code_verify = sessionStorage.getItem('code_verifier');

	if (!code_verify) throw new Error('No Code Verifier in session');
	if (!realState) throw new Error('No State in session');
	if (realState !== state) throw new Error('State mismatch');

	return fetchFunction('https://accounts.spotify.com/api/token', {
		method: 'POST',
		body: new URLSearchParams({
			grant_type: 'authorization_code',
			code: code,
			redirect_uri: redirectURL,
			client_id: CLIENT_ID,
			code_verifier: code_verify,
		}),
	});
};
export const refreshToken = async (): Promise<boolean> => {
	const tokenStore = sessionStorage.getItem('token_set');
	if (tokenStore) {
		const token = JSON.parse(tokenStore) as pkceToken;

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

		if (response.ok) {
			const json = (await response.json()) as {
				access_token: string;
				token_type: 'Bearer';
				expires_in: 3600;
				scope: string;
			};

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
