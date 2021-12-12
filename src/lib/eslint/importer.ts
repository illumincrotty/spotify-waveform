// // import config from '../eslint-config.json';
// import { getRuleDocumentation } from 'eslint-embedded-rules-docs';
// import { writeFileSync } from 'node:fs';

// import allEslintRules from 'all-eslint-rules';

// // eslint-disable-next-line @typescript-eslint/no-unsafe-call
// const ruleNames = allEslintRules() as string[];

// async function main() {
// 	// const ruleNames = getESLintRuleNames();
// 	const rulesFetchPromises = ruleNames.map((rule) =>
// 		getRuleDocumentation(rule)
// 	);

// 	const rulesDocumentation = await Promise.all(rulesFetchPromises);

// 	// Prints in the console every rule's documentation
// 	const rules: [name: string, documtation: string][] = [];

// 	for (const [index, documentation] of rulesDocumentation.entries()) {
// 		rules.push([ruleNames[index], documentation]);
// 		// console.log(`${}: ${documentation}`);
// 		// console.log('*'.repeat(55));
// 	}
// 	console.log(rules.toString().slice(0, 400));
// 	writeFileSync('eslint-all-rules.json', JSON.stringify(rules));
// }

// main().then().catch(console.error);
// // console.log(config);

export {};
