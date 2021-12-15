const getRandomWord = async (count = 1): Promise<string[]> => {
	const response = await fetch(
		`https://random-word-api.herokuapp.com/word?number=${count}`
	);

	if (response.ok) {
		const wordArray = (await response.json()) as string[];
		console.log(wordArray);
		return wordArray;
	} else {
		throw new Error(await response.json());
	}
};

export { getRandomWord };
