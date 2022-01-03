import { browser } from '$app/env';

export const writablePersistent = <T>(
	key: string,
	valueInput: T,
	storage: 'local' | 'session' = 'local'
) => {
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

	const set = (input: T): void => {
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

	const update = (updateFunction: (input?: T) => T): void =>
		set(updateFunction(value));

	const updateAsync = async (updateFunction: (input?: T) => Promise<T>) =>
		set(await updateFunction(value));

	const operation = (operate: (input: T) => unknown) => operate(value);

	return { subscribe, set, clear, update, updateAsync, operation };
};
