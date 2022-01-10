import type { mapping } from '$lib/script/utils/scale';
import type { InjectionKey } from 'svelte-typed-context';
import type { Writable, Readable } from 'svelte/store';
import type { pointAbsolute } from './chartUtils';

export const chartKey: InjectionKey<{
	x1: Writable<number>;
	y1: Writable<number>;
	x2: Writable<number>;
	y2: Writable<number>;
	x_scale: Readable<mapping>;
	y_scale: Readable<mapping>;
	x_scale_inverse: Readable<mapping>;
	y_scale_inverse: Readable<mapping>;
	pointer: Writable<pointAbsolute>;
	width: Writable<number>;
	height: Writable<number>;
}> = Symbol('Base Chart Key');
