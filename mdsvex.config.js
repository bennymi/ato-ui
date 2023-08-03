/**
 * Source: https://github.com/melt-ui/melt-ui/blob/develop/mdsvex.config.js
 */

import { resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { visit } from 'unist-util-visit';
import { toHtml } from 'hast-util-to-html';
import rehypePrettyCode from 'rehype-pretty-code';
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki-es';
import { escapeSvelte } from '@huntabyte/mdsvex';

import { highlightCode } from './src/docs/mdsvex/highlight.js';


const __dirname = fileURLToPath(new URL('.', import.meta.url));

const prettyCodeOptions = {
	// theme: 'github-dark',
	theme: JSON.parse(
		readFileSync(resolve(__dirname, './static/moonlight-2-theme.json'), 'utf-8')
	),
	keepBackground: false,
	// @ts-ignore:next-line
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = { type: 'text', value: ' ' };
		}
	},
	// @ts-ignore:next-line
	onVisitTitle(node) {
		// console.log('title:', node);
	},
	// @ts-ignore:next-line
	getHighlighter: (options) => {
		return getHighlighter({
			...options,
			langs: BUNDLED_LANGUAGES.filter(({ id }) => {
				return ['svelte', 'typescript', 'css', 'javascript', 'bash', 'shell'].includes(id);
			}),
		});
	},
};

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md'],
	layout: resolve(__dirname, './src/docs/components/markdown/layout.svelte'),
	// highlight: {
	// 	highlighter: highlightCode
	// },
    rehypePlugins: [
		rehypeCustomComponents,
		rehypeComponentPreToPre,
		[rehypePrettyCode, prettyCodeOptions],
		rehypeHandleMetadata,
		rehypeRenderCode,
		rehypePreToComponentPre,

	],
};


function rehypeCustomComponents() {
	// @ts-ignore:next-line
	return async (tree) => {
		const hTags = ['Components.h1', 'Components.h2', 'Components.h3', 'Components.h4', 'Components.h5', 'Components.h6'];

		visit(tree, (node, index, parent) => {
			// Check h tags, and pass some extra parameters to the custom components.
            if (node?.type === 'element' && hTags.includes(node?.tagName)) {
				node.properties['content'] = node.children[0].value;
                node.properties['headerTag'] = node.tagName.split('.')[1];
            }
		});
	};
}

function rehypeComponentPreToPre() {
	// @ts-ignore:next-line
	return async (tree) => {
		// Replace `Component.pre` tags with regular `pre` tags.
		// This enables us to use rehype-pretty-code with our custom `pre` component.
		visit(tree, (node) => {
			if (node?.type === 'element' && node?.tagName === 'Components.pre') {
				node.tagName = 'pre';
			}
		});
	};
}

/**
 * Escapes the html string of code blocks so we can pass
 * it on to our custom `Component.pre` element.
 * @param {string} html 
 * @returns {string}
 */
function escapeHtml(html) {
	return html.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

function rehypePreToComponentPre() {
	// @ts-ignore:next-line
	return async (tree) => {
		/**
		 * Replace `pre` tags with our custom `Component.pre` tags.
		 * This enables us to use rehype-pretty-code with our custom `pre` component.
		 * We also add the raw html string as a parameter for the copy button.
		 */
		visit(tree, (node) => {
			if (node?.type === 'element' && node?.tagName === 'pre') {
				node.tagName = 'Components.pre';

				
				// if (node?.children.length > 0) {
				// 	console.log('\n\nnode:', node);
				// 	console.log('\n\nnode.children[0]:', node?.children[0], '\n------------------------');
				// }
				// 	const value = node.children[0].value.trim();
				// 	const rawHTMLString = value.substring(8, value.length - 2);
				// 	node.properties['rawHTMLString'] = escapeHtml(rawHTMLString);
			}
		});
	};
}

function rehypeHandleMetadata() {
	// @ts-ignore:next-line
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === 'element' && node?.tagName === 'div') {
				if (!('data-rehype-pretty-code-fragment' in node.properties)) {
					return;
				}

				const titleElement = node.children[0];
				const preElement = node.children.at(-1);
				if (preElement.tagName !== 'pre' || !('data-rehype-pretty-code-title' in titleElement.properties)) {
					return;
				}
				
				if (titleElement.children.length > 0 && 'value' in titleElement.children[0]) {
					preElement.properties['title'] = titleElement.children[0].value;
					node.children.shift();
				}
			}
		});
	};
}

function rehypeRenderCode() {
	// @ts-ignore:next-line
	return async (tree) => {
		let counter = 0;
		visit(tree, (node) => {
			if (
				node?.type === 'element' &&
				(node?.tagName === 'Components.pre' || node?.tagName === 'pre')
			) {
				const codeEl = node.children[0];
				if (codeEl.tagName !== 'code') {
					return;
				}

				const codeString = tabsToSpaces(
					toHtml(codeEl, {
						allowDangerousCharacters: true,
						allowDangerousHtml: true,
					})
				);

				codeEl.type = 'raw';
				codeEl.value = `{@html \`${escapeSvelte(codeString)}\`}`;
			}
		});
	};
}

/**
 * 
 * @param {string} code 
 * @returns {string}
 */
function tabsToSpaces(code) {
	return code.replaceAll('	', '  ');
}