import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { visit } from 'unist-util-visit';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
        rehypeTest
	],
	// rehypePlugins: [
	// 	rehypeSlug,
	// 	[
	// 		rehypeAutolinkHeadings,
	// 		{
	// 			behavior: 'wrap',
	// 			test: ['h2', 'h3', 'h4', 'h5', 'h6']
	// 		}
	// 	]
	// ]
};


function rehypeTest() {
	return async (tree) => {
		// Replace `Component.pre` tags with regular `pre` tags.
		// This enables us to use rehype-pretty-code with our custom `pre` component.
		visit(tree, (node) => {
            if (node?.type === 'element' && node?.tagName === 'Components.h2') {
                // console.log('Node:', node);
                node.properties['content'] = node.children[0].value;
            }
			// if (node?.type === 'element' && node?.tagName === 'Components.pre') {
			// 	node.tagName = 'pre';
			// }
		});
	};
}