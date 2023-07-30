import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { visit } from 'unist-util-visit';

import { highlightCode } from './src/docs/mdsvex/highlight.js';


const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md'],
	layout: resolve(__dirname, './src/docs/components/markdown/layout.svelte'),
	highlight: {
		highlighter: highlightCode
	},
    rehypePlugins: [
        rehypeCustomComponents
	],
};

function rehypeCustomComponents() {
	// @ts-ignore:next-line
	return async (tree) => {
		const hTags = ['Components.h1', 'Components.h2', 'Components.h3', 'Components.h4', 'Components.h5', 'Components.h6'];

		visit(tree, (node) => {
			// Check h tags, and pass some extra parameters to the custom components.
            if (node?.type === 'element' && hTags.includes(node?.tagName)) {
				node.properties['content'] = node.children[0].value;
                node.properties['headerTag'] = node.tagName.split('.')[1];
            }
		});
	};
}