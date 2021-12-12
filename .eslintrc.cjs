const config = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		// 'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
		// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
		// 'plugin:unicorn/recommended',
		// 'prettier',

		'eslint:recommended',
		// 'plugin:prettier/recommended',
		'plugin:unicorn/recommended',
		'plugin:ava/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:jsdoc/recommended',
		'prettier', // Always have prettier last!
	],
	plugins: ['svelte3', '@typescript-eslint', 'unicorn'],
	ignorePatterns: ['*.cjs', 'node_modules'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
		project: ['tsconfig.json', 'tsconfig.test.json'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'no-fallthrough': 0,
		'unicorn/filename-case': [
			'error',
			{
				case: 'camelCase',
			},
		],

		//#region ava

		// ava
		'ava/assertion-arguments': 'error', //✅ Enforce passing correct arguments to assertions
		//"ava/hooks-order": "error", //✅🔧 Enforce test hook ordering
		'ava/max-asserts': ['warn', 5], //✅ Limit the number of assertions in a test
		'ava/no-async-fn-without-await': 'error', //✅ Ensure that async tests use await
		//"ava/no-duplicate-modifiers": "error", //✅ Ensure tests do not have duplicate modifiers
		//"ava/no-identical-title": "error", //✅ Ensure no tests have the same title
		//"ava/no-ignored-test-files": "error", //✅ Ensure no tests are written in ignored files
		//"ava/no-import-test-files": "error", //✅ Ensure no test files are imported anywhere
		//"ava/no-incorrect-deep-equal": "error", //✅🔧 Avoid using deepEqual with primitives
		//"ava/no-inline-assertions": "error", //✅🔧 Ensure assertions are not called from inline arrow functions
		//"ava/no-invalid-end": "error", //✅ Ensure t.end() is only called inside test.cb()
		//"ava/no-nested-tests": "error", //✅ Ensure no tests are nested
		//"ava/no-only-test": "error", //✅ Ensure no test.only() are present
		//"ava/no-skip-assert": "error", //✅ Ensure no assertions are skipped
		//"ava/no-skip-test": "error", //✅ Ensure no tests are skipped
		//"ava/no-statement-after-end": "error", //✅ Ensure t.end() is the last statement executed
		//"ava/no-todo-implementation": "error", //✅ Ensure test.todo() is not given an implementation function
		//"ava/no-todo-test": "warn", //✅ Ensure no test.todo() is used
		//"ava/no-unknown-modifiers": "error", //✅ Prevent the use of unknown test modifiers
		//"ava/prefer-async-await": "error", //✅ Prefer using async/await instead of returning a Promise
		//"ava/prefer-t-regex": "error", //✅🔧 Prefer using t.regex() to test regular expressions
		'ava/test-title': 'error', //✅ Ensure tests have a title
		'ava/use-t': 'error', //✅ Ensure test functions use t as their parameter
		'ava/use-t-throws-async-well': 'error', //✅🔧 Ensure that t.throwsAsync() and t.notThrowsAsync() are awaited
		'ava/use-t-well': 'error', //✅🔧 Prevent the incorrect use of t
		//"ava/use-test": "error", //✅ Ensure that AVA is imported with test as the variable name
		//"ava/use-true-false": "error", //✅ Ensure that t.true()/t.false() are used instead of t.truthy()/t.falsy()
		//"ava/no-cb-test": "off", // Ensure no test.cb() is used
		//"ava/prefer-power-assert": "off", // Allow only use of the asserts that have no power-assert alternative
		//"ava/test-title-format": "off", // Ensure test titles have a certain format

		//#endregion

		//#region jsdoc
		'jsdoc/check-access': 'error', // ✅
		'jsdoc/check-alignment': 'warn', // ✅
		'jsdoc/check-examples': 'off',
		'jsdoc/check-indentation': 'off',
		'jsdoc/check-line-alignment': 'off',
		'jsdoc/check-param-names': ['error', { enableFixer: true }], // ✅
		'jsdoc/check-property-names': ['error', { enableFixer: true }], // ✅
		'jsdoc/check-syntax': 'off',
		'jsdoc/check-tag-names': 1, // ✅
		'jsdoc/check-types': 'off', // ✅
		'jsdoc/check-values': 'off', // ✅
		'jsdoc/empty-tags': 1, // ✅
		'jsdoc/implements-on-classes': 1, // ✅
		'jsdoc/match-description': [
			'error',
			{
				mainDescription: {
					message:
						'Capitalize first word of JSDoc block descriptions',
					match: '[A-Z].*',
				},
				tags: {
					param: {
						message:
							'Description must be at least 5 characters long',
						match: '.....',
					},
				},
			},
		],
		'jsdoc/multiline-blocks': 1, // ✅
		'jsdoc/newline-after-description': 1, // ✅
		// "jsdoc/no-bad-blocks": 1,
		// "jsdoc/no-defaults": 1,
		// "jsdoc/no-missing-syntax": 1,
		'jsdoc/no-multi-asterisks': 1, // ✅
		// "jsdoc/no-restricted-syntax": 1,
		'jsdoc/no-types': 'error',
		'jsdoc/no-undefined-types': 1, // ✅
		'jsdoc/require-asterisk-prefix': 'error',
		'jsdoc/require-description': 'error',
		'jsdoc/require-description-complete-sentence': 'off',
		// "jsdoc/require-example": 1,
		'jsdoc/require-file-overview': 'off',
		'jsdoc/require-hyphen-before-param-description': 'error',
		'jsdoc/require-jsdoc': 'error', // ✅
		'jsdoc/require-param': 'error', // ✅
		'jsdoc/require-param-description': 'error', // ✅
		'jsdoc/require-param-name': 'error', // ✅
		'jsdoc/require-param-type': 'off', // ✅
		'jsdoc/require-property': 1, // ✅
		'jsdoc/require-property-description': 1, // ✅
		'jsdoc/require-property-name': 1, // ✅
		'jsdoc/require-property-type': 1, // ✅
		'jsdoc/require-returns': 1, // ✅
		'jsdoc/require-returns-check': 1, // ✅
		'jsdoc/require-returns-description': 'error', // ✅
		'jsdoc/require-returns-type': 'off', // ✅
		'jsdoc/require-throws': 1,
		'jsdoc/require-yields': 1, // ✅
		'jsdoc/require-yields-check': 1, // ✅
		'jsdoc/tag-lines': 1, // ✅
		'jsdoc/valid-types': 1, // ✅
		//#endregion
	},
};

module.exports = config;
