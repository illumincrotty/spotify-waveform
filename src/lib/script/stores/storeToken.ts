import type { pkceToken } from 'tokens';
import { refreshToken } from '../authentication';
import { writablePersistent } from './storePersistent';

export const storeToken = () => {
	const { subscribe, set, updateAsync, operation } = writablePersistent(
		'token',
		'empty' as 'empty' | pkceToken
	);

	const refresh = async () => {
		return updateAsync(async (input) => {
			if (input === 'empty') return input;
			return (await refreshToken(input)) || 'empty';
		});
	};

	const clear = () => {
		set('empty');
	};

	const valid = (): boolean => {
		return operation((input) => {
			return input !== 'empty' && input.expires_at >= Date.now();
		}) as boolean;
	};

	return { subscribe, set, clear, refresh, valid };
};

export {};
