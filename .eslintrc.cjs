module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		// 'airbnb-base',
		// 'airbnb-typescript/base',
		'prettier'
	],
	// plugins: ['@typescript-eslint', 'import'],
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['**/*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
			// rules: {
			// 	'import/no-named-as-default': 0,
			// 	'import/no-named-as-default-member': 0
			// }
		}
	],
	// settings: {
	// 	'import/parsers': {
	// 		'@typescript-eslint/parser': ['.js', '.ts']
	// 		// '@typescript-eslint/parser': ['.cjs', '.js', '.ts'],
	// 	},
	// 	'import/resolver': {
	// 		typescript: {
	// 			alwaysTryTypes: true
	// 		}
	// 	}
	// },
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		// 'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
		// 'prefer-const': 0,
		// 'import/prefer-default-export': 0,
		// 'no-param-reassign': 0,
		// 'no-return-assign': 0,
		// 'no-inner-declarations': 0,
		// 'import/extensions': 0,
		// 'import/order': 0,
		// 'import/no-extraneous-dependencies': 0,
		// 'import/no-mutable-exports': 0,
		// 'import/no-duplicates': 0,
		// 'no-unused-vars': 'off',
		// '@typescript-eslint/no-loop-func': 0,
		// '@typescript-eslint/no-unused-vars': 'warn',
		// '@typescript-eslint/no-throw-literal': 'warn',
		// 'import/no-unresolved': 'warn',
		'svelte/no-at-html-tags': 'off',
		'svelte/no-unused-svelte-ignore': 'off',

		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-explicit-any': 'warn',

		'no-restricted-imports': ['error', { paths: ['$env/static/private'] }],
		'no-self-assign': 0
		// '@typescript-eslint/naming-convention': [
		// 	'warn',
		// 	{
		// 		selector: 'default',
		// 		format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
		// 		leadingUnderscore: 'allow',
		// 		trailingUnderscore: 'allow'
		// 	},
		// 	{
		// 		selector: 'variable',
		// 		format: ['camelCase', 'snake_case', 'UPPER_CASE'],
		// 		leadingUnderscore: 'allow',
		// 		trailingUnderscore: 'allow'
		// 	},
		// 	{
		// 		selector: 'typeLike',
		// 		format: ['PascalCase']
		// 	}
		// ]
	}
};
