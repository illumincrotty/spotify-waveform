import { sineInOut } from 'svelte/easing';

export const blurDesaturate = (
	node: HTMLElement,
	parameters?: {
		delay?: number;
		duration?: number;
		radius?: number;
		easing?: (input: number) => number;
	}
): {
	delay: number;
	duration: number;
	easing: (input: number) => number;
	css: (t: number, u: number) => string;
} => {
	const {
		radius = 2,
		delay = 0,
		duration = 400,
		easing = sineInOut,
	} = parameters;

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
        filter: grayscale(${u}) contrast(${100 * t}%) blur(${radius * u}px);
    `,
	};
};
