import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

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
		paths: { base: dev ? '/wave' : '/spotify-waveform' },
		appDir: 'internal',
	},
	compilerOptions: {},
};

export default config;
