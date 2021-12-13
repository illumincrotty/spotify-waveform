import type { SpotifyScope } from './scope';
import { stateGen } from './stateGen';
import type { ScopesBuilder } from './scopeBuilder';
import { base } from '$app/paths';

const mode = process.env.NODE_ENV;
const development = mode === 'development';
interface authBase {
	client_id: string;
	response_type: string;
	redirect_uri: string;
	state?: string;
	show_dialog?: boolean;
	scope?: SpotifyScope[] | string;
}
export interface authImplicitGrant extends authBase {
	response_type: 'token';
}

interface authCode extends authBase {
	response_type: 'code';
}

export interface authCodePKCE extends authCode {
	code_challenge_method: 'S256';
	code_challenge: string;
}

export class AuthService {
	private readonly _state = stateGen();

	private readonly requestAuthUrl = 'https://accounts.spotify.com/authorize';

	private readonly authConfig: authImplicitGrant = {
		client_id: '9f38f4f91f784811b42898766ee7211a',
		response_type: 'token',
		redirect_uri: `${
			development
				? `${window.location.protocol}//${
						window.location.hostname
				  }${`:${window.location.port}`}`
				: 'https://illumincrotty.github.io'
		}${base}/authorized`, // My URL
		state: `${this.state}`,
		scope: 'user-read-private',
		show_dialog: false,
	};

	get state(): string {
		return this._state;
	}

	set scope(input: ScopesBuilder) {
		this.authConfig.scope = input.build();
	}

	public authorize(): Window | null {
		return popupCenter(this.buildAuthUrl(), 'Spotify Login', 500, 700);
	}

	private buildAuthUrl(): string {
		const parameters = [];

		for (const [key, value] of Object.entries(this.authConfig)) {
			if (typeof value === 'object') {
				parameters.push(`${key}=${(value as string[]).join(' ')}`);
			} else {
				parameters.push(`${key}=${value as string}`);
			}
		}

		return `${this.requestAuthUrl}?${parameters.join('&')}`;
	}
}

const popupCenter = (url: string, title: string, w: number, h: number) => {
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
