import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex';
// import shiki from 'shiki';

// import { join } from 'path';
import { highlightCode } from "./src/lib/mdsvex/highlight.js";
import { mdsvexGlobalComponents } from "./src/lib/mdsvex/global-components.js";

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
		highlighter: highlightCode,
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvexGlobalComponents({
			dir: `$lib/mdsvex`,
			list: [["CodeBlock", "CodeBlock.svelte"]],
			extensions: [".md"],
		  }),
		mdsvex(mdsvexOptions)
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	vitePlugin: {
		experimental: {
			inspector: false,
			holdMode: false,
			// toggleKeyCombo: 'control-shift-i',
			// show or hide the inspector option
			showToggleButton: 'always',
			// inspector position
			toggleButtonPos: 'top-right',	
		},
	  },
};

export default config;
