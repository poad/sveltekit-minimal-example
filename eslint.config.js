// @ts-check

import tseslint from 'typescript-eslint';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import * as svelteParser from 'svelte-eslint-parser';
import svelteConfig from './svelte.config.js';

import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default tseslint.config(
	includeIgnoreFile(gitignorePath),
	{
		ignores: ['node_modules/*', '.svelte-kit/*', 'eslint.config.js', 'svelte.config.js'],
	},
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
	},
	{
		ignores: ['node_modules/*', '.svelte-kit/*'],
	},
);
