import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import fs from 'node:fs';
const mode = process.env.NODE_ENV;
const dev = mode === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
			typescript: true,
		}),
	],
	kit: {
		adapter: adapter(),
		target: 'body',
		paths: { base: dev ? '' : '/spotify-waveform' },
		appDir: 'internal',
		vite: {},
	},
	compilerOptions: {},
};

export default config;
