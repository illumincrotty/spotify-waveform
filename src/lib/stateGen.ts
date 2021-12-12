const stateGen = (
	length = 32,
	validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string => {
	const state = new Uint8Array(length);
	window.crypto.getRandomValues(state);
	// globals.crypto.getRandomValues(state);
	const stateString: string[] = [];
	for (const value of state) {
		stateString.push(validChars.charAt(value % validChars.length));
	}
	return stateString.join('');
};

export { stateGen };
