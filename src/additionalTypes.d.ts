declare module 'svelte-typewriter' {
	import { SvelteComponentTyped } from 'svelte';

	interface TypewriterOptions {
		interval: number | number[];
		cascade: boolean;
		loop: boolean | number;
		loopRandom: boolean | number;
		cursor: boolean | string;
		delay: number;
		dispatch: (type: string, detail?: any) => void;
	}

	export default class TypewriterElement extends SvelteComponentTyped<
		Optional<TypewriterOptions>
	> {}
}

declare module 'tokens' {
	export type grantToken = {
		access_token: string;
		expires_at: number;
	};
	export type pkceToken = {
		access_token: string;
		expires_at: number;
		refresh_token: string;
	};
}
