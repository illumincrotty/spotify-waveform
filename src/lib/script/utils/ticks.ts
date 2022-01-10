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

// eslint-disable-next-line unicorn/prevent-abbreviations
const e10 = Math.sqrt(50);
// eslint-disable-next-line unicorn/prevent-abbreviations
const e5 = Math.sqrt(10);
// eslint-disable-next-line unicorn/prevent-abbreviations
const e2 = Math.SQRT2;

export const increment = (
	start: number,
	stop: number,
	count: number
): number => {
	const step = (stop - start) / Math.max(0, count);
	const power = Math.floor(Math.log(step) / Math.LN10);
	const error = step / Math.pow(10, power);

	return power >= 0
		? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) *
				Math.pow(10, power)
		: -Math.pow(10, -power) /
				(error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
};
