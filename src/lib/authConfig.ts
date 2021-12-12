import type { SpotifyScope } from './scope';

export interface authImplicitGrant {
	client_id: string;
	response_type: 'token';
	redirect_uri: string;
	state?: string;
	show_dialog?: boolean;
	scope?: SpotifyScope[] | string;
}
