/* eslint-disable unicorn/prevent-abbreviations */

type AnyFunction = (...args: never[]) => unknown;

/**
 * Decounces a function
 *
 * @param _function - the function to debounce
 * @param timeout - the period without input before the function fires
 * @returns a function that will only be called after it hasn't been called for `timeout` seconds
 */
export const debounce = <Func extends AnyFunction>(
	_function: Func,
	timeout = 400
): ((...args: Parameters<Func>) => void) => {
	let timer = -1;

	const debouncedFunction = (...args: Parameters<Func>) => {
		window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			_function(...args);
			timer = -1;
		}, timeout);
	};

	return debouncedFunction;
};

/**
 * Decounces a function
 *
 * @param _function - the function to debounce
 * @param timeout - the period without input before the function fires
 * @returns a function that will only be called after it hasn't been called for `timeout` seconds
 */
export const throttle2 = <Func extends AnyFunction>(
	_function: Func,
	timeout = 400
): ((...args: Parameters<Func>) => void) => {
	let timer = -1;

	return (...args: Parameters<Func>) => {
		console.log(timer);
		if (timer == -1) {
			_function(...args);
			timer = window.setTimeout(() => {
				timer = -1;
			}, timeout);
		} else {
			window.clearTimeout(timer);
			timer = window.setTimeout(() => {
				_function(...args);
				timer = -1;
			}, timeout);
		}
	};
};

/**
 * Throttles a function
 *
 * @param _function - the function to debounce
 * @param timeout - the period without input before the function fires
 * @returns a function that will be called at most every `timeout` seconds
 */
export const throttle = <Func extends AnyFunction>(
	_function: Func,
	timeout = 400
): ((...args: Parameters<Func>) => void) => {
	let isCalled = false;

	return (...args: Parameters<Func>) => {
		if (!isCalled) {
			_function(...args);
			isCalled = true;
			setTimeout(function () {
				isCalled = false;
			}, timeout);
		}
	};
};
