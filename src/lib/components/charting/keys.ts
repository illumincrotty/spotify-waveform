import type { mapping } from '$lib/script/utils/scale';
import type { InjectionKey } from 'svelte-typed-context';
import type { Writable, Readable } from 'svelte/store';

export const chartKey: InjectionKey<{
	xMin: Writable<number>;
	xMax: Writable<number>;
	yMin: Writable<number>;
	yMax: Writable<number>;
	xMapping: Readable<mapping>;
	yMapping: Readable<mapping>;
	width: Writable<number>;
	height: Writable<number>;
}> = Symbol('Base Chart Key');
