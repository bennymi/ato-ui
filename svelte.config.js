import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { highlightCode } from './src/docs/mdsvex/highlight.js';
// import { mdsvexGlobalComponents } from './src/docs/mdsvex/global-components.js';
import svelteGlobalComponents from './src/docs/mdsvex/svelte-global-components.js';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: highlightCode
	},
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap',
				test: ['h2', 'h3', 'h4', 'h5', 'h6']
			}
		]
	]
};

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
					location: '/src/docs/mdsvex/CodeBlock.svelte',
					importPaths: ['src/docs/guides/']
				},
				{
					name: 'Usage',
					location: '/src/docs/mdsvex/Usage.svelte',
					importPaths: ['src/docs/guides/']
				},
				{
					name: 'Example',
					location: '/src/docs/mdsvex/Example.svelte',
					importPaths: ['src/docs/guides/']
				}
			]
		}),
		vitePreprocess()
		// mdsvexGlobalComponents({
		// 	dir: `/src/docs/mdsvex`,
		// 	list: [
		// 		['CodeBlock', 'CodeBlock.svelte'],
		// 		['CodeDisplay', 'CodeDisplay.svelte']
		// 	],
		// 	extensions: ['.md']
		// }),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
		// alias: {
		// 	$app: '/node_modules/@sveltejs/kit/assets/app',
		// 	$lib: '/src/lib',
		// }
	},
	vitePlugin: {
		inspector: true
	}
};

export default config;
