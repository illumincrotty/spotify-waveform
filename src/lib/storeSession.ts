// import { writable } from 'svelte/store';
// import {} from 'svelte'

import { browser } from '$app/env';
import type { pkceToken } from 'tokens';

export const writablePersistent = <T>(
	key: string,
	valueInput: T,
	storage: 'local' | 'session' = 'local'
): {
	subscribe: (callback: (input: T) => unknown) => () => void;
	set: (input: T) => void;
	clear: () => void;
} => {
	let value = valueInput;
	if (browser) {
		const check =
			storage === 'local'
				? localStorage.getItem(key)
				: sessionStorage.getItem(key);
		if (check) {
			value = JSON.parse(check) as T;
		}
	}

	const subs: Set<(input: T) => unknown> = new Set();

	const subscribe = (callback: (input: T) => unknown) => {
		subs.add(callback);
		callback(value);

		return () => {
			subs.delete(callback);
		};
	};

	const set = (input: T) => {
		value = input;
		storage === 'local'
			? localStorage.setItem(key, JSON.stringify(input))
			: sessionStorage.setItem(key, JSON.stringify(input));
		for (const function_ of subs) function_(value);
	};

	const clear = () => {
		storage === 'local'
			? localStorage.removeItem(key)
			: sessionStorage.removeItem(key);
	};

	return { subscribe, set, clear };
};

export const token = {
	...writablePersistent('token', 'empty' as pkceToken | 'empty'),
};
