/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/prevent-abbreviations */
/// <reference types="svelte" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
	// readonly VITE_APP_TITLE: string;
	readonly VITE_CLIENT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
