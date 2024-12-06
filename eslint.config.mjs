import tseslint from 'typescript-eslint';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import * as svelteParser from 'svelte-eslint-parser';
import svelteConfig from './svelte.config.js';
export default tseslint.config(
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],
	{
		plugins: {
			svelte: eslintPluginSvelte,
		},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.svelte'],
				svelteConfig,
			},
		},
		rules: {
			// override/add rules settings here, such as:
			// 'svelte/rule-name': 'error'
		},
	},
	{
		ignores: ['node_modules/*', '.svelte-kit/*'],
	},
);
