// import { writable } from 'svelte/store';

// const sessionStore = () => {
// 	const { set, update } = writable(0);
// 	/**
// 	 * Subscribe on value changes.
// 	 *
// 	 * @param run subscription callback
// 	 * @param invalidate cleanup callback
// 	 */
// 	const subscribe = (): Unsubscriber => {};
// 	return {
// 		increment: () => update((n) => n + 1),
// 		decrement: () => update((n) => n - 1),
// 		reset: () => set(0),
// 	};
// };

import { writable } from 'svelte-local-storage-store';
import type { pkceToken } from 'tokens';
export const token = writable('token', 'empty' as pkceToken | 'empty');
export const colorPreference = writable(
	'preference',
	'empty' as 'light' | 'dark' | 'empty'
);
export const theme = writable('theme', 'empty' as 1 | 2 | 3 | 4 | 'empty');
