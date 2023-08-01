import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from '@huntabyte/mdsvex';
import { mdsvexOptions } from './mdsvex.config.js';

import svelteGlobalComponents from './src/docs/mdsvex/svelte-global-components.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex(mdsvexOptions),
		svelteGlobalComponents({
			components: [
				{
					name: 'CodeBlock',
					location: '/src/docs/components/CodeBlock.svelte',
					importPaths: ['src/docs/guides/']
				},
				{
					name: 'Usage',
					location: '/src/docs/components/Usage.svelte',
					importPaths: ['src/docs/guides/']
				},
				{
					name: 'Example',
					location: '/src/docs/components/Example.svelte',
					importPaths: ['src/docs/guides/']
				}
			]
		}),
		vitePreprocess()
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'ato-ui': 'src/lib',
			$docs: 'src/docs',
			'$docs/*': 'src/docs/*',
			$components: 'src/docs/components',
			'$components/*': 'src/docs/components/*',
			$lib: "./src/lib",
			"$lib/*": "./src/lib/*",
			$app: "./node_modules/@sveltejs/kit/types",
			"$app/*": "./node_modules/@sveltejs/kit/types/ambient.d.ts",
		}
	},
	vitePlugin: {
		inspector: true
	}
};

export default config;
