import { defineConfig, includeIgnoreFile } from 'eslint/config';
import { parser } from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import * as svelteParser from 'svelte-eslint-parser';
import svelteConfig from './svelte.config.js';
import { importX, createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	{
		ignores: ['node_modules/*', '.svelte-kit/*', 'eslint.config.js', 'svelte.config.js'],
	},
	...eslintPluginSvelte.configs['flat/recommended'],
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	{
		plugins: {
			svelte: eslintPluginSvelte,
		},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser,
				extraFileExtensions: ['.svelte'],
				svelteConfig,
			},
		},
		plugins: {
			'@stylistic': stylistic,
		},
		settings: {
			'import-x/resolver-next': [
				createTypeScriptImportResolver({
					alwaysTryTypes: true,
				}),
				createNodeResolver(),
			],
		},
	},
	{
		ignores: ['node_modules/*', '.svelte-kit/*'],
	},
);
