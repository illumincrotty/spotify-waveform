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
