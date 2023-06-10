import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';
// import shiki from 'shiki';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// import { join } from 'path';
import { highlightCode } from './src/docs/mdsvex/highlight.js';
import { mdsvexGlobalComponents } from './src/docs/mdsvex/global-components.js';


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		// highlighter: async (code, lang='text') => {
		// 	// https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json
		// 	const t = await shiki.loadTheme(join(process.cwd(),'./theme-synthwave84.json'));

		// 	const highlighter = await shiki.getHighlighter({
		// 		theme: t
		// 	});
		// 	const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
		// 	return `{@html \`${html}\`}`;
		// }
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
	],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvexGlobalComponents({
			dir: `/src/docs/mdsvex`,
			list: [
				['CodeBlock', 'CodeBlock.svelte'],
				['CodeDisplay', 'CodeDisplay.svelte']
			],
			extensions: ['.md']
		}),
		mdsvex(mdsvexOptions)
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
