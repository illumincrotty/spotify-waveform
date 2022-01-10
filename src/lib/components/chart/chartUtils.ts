export type mapping = {
	(input: number): number;
	inverse: () => mapping;
};
/**
 * Generates a `scale` function that maps from `domain` to `range`.
 * `scale.inverse()` returns a function that maps from `range` to `domain`
 *
 * @param domain - the input to map from
 * @param range - the output to map to
 * @returns scaling function that maps from domain to range
 */
export const linearMap = (
	domain: [number, number],
	range: [number, number]
): mapping => {
	const d0 = domain[0];
	const r0 = range[0];
	const m = (range[1] - r0) / (domain[1] - d0);

	const scale = (input: number) => {
		return r0 + (input - d0) * m;
	};
	scale.inverse = () => linearMap(range, domain);

	return scale;
};

// adapted from https://github.com/d3/d3-array/blob/master/src/ticks.js
// MIT License https://github.com/d3/d3-array/blob/master/LICENSE

export const get_ticks = (start: number, stop: number, count = 5): number[] => {
	let reverse: boolean;
	let index = -1;
	let n: number;
	let ticks: number[];
	let step: number;

	if (start === stop && count > 0) return [start];

	if ((reverse = stop < start)) {
		[start, stop] = [stop, start];
	}

	if (
		(step = increment(start, stop, count)) === 0 ||
		!Number.isFinite(step)
	) {
		return [];
	}

	if (step > 0) {
		start = Math.ceil(start / step);
		stop = Math.floor(stop / step);
		ticks = Array.from({ length: (n = Math.ceil(stop - start + 1)) });
		while (++index < n) ticks[index] = (start + index) * step;
	} else {
		start = Math.floor(start * step);
		stop = Math.ceil(stop * step);
		ticks = Array.from({
			length: (n = Math.ceil(start - stop + 1)),
		});
		while (++index < n) ticks[index] = (start - index) / step;
	}

	if (reverse) ticks.reverse();

	return ticks;
};

const error10 = Math.sqrt(50);
const error5 = Math.sqrt(10);
const error2 = Math.SQRT2;

export const increment = (
	start: number,
	stop: number,
	count: number
): number => {
	const step = (stop - start) / Math.max(0, count);
	const power = Math.floor(Math.log(step) / Math.LN10);
	const error = step / Math.pow(10, power);

	return power >= 0
		? (error >= error10
				? 10
				: error >= error5
				? 5
				: error >= error2
				? 2
				: 1) * Math.pow(10, power)
		: -Math.pow(10, -power) /
				(error >= error10
					? 10
					: error >= error5
					? 5
					: error >= error2
					? 2
					: 1);
};

export interface point {
	x: number;
	y: number;
}

export interface pointAbsolute extends point {
	left: number;
	top: number;
}
/**
 * Convert a point to it's svg path position
 *
 * @param x - a point scaled between 0 and 100
 * @param y - a point scaled between 0 and 100
 * @returns a string for plotting that point in the d portion of an svg path
 */
export const pointToSvgPath = (x: number, y: number): string =>
	`M${x} ${y} A0 0 0 0 1 ${x + 0.0001} ${y + 0.0001}`;
