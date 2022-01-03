const randomBytes = (length = 32): Uint8Array =>
	globalThis.crypto.getRandomValues(new Uint8Array(length));

const randomStringGenerator = (length = 32, validChars?: string): string =>
	randomBytesToString(randomBytes(length), validChars);

const randomBytesToString = (
	input: Uint8Array,
	validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
): string => {
	const stateString: string[] = [];
	for (const value of input) {
		stateString.push(validChars.charAt(value % validChars.length));
	}
	return stateString.join('');
};

const randomBase64StringGenerator = (length = 32): string =>
	bytesToBase64(randomBytes(length));

const bytesToBase64 = (bytes: Uint8Array): string => {
	return window
		.btoa(String.fromCodePoint(...bytes))
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
};

export {
	bytesToBase64,
	randomBase64StringGenerator,
	randomBytes,
	randomStringGenerator as stateGen,
	randomStringGenerator,
	randomBytesToString,
};
