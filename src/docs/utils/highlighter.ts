import { resolve } from 'path';
import { readFileSync } from 'fs';
import { toHtml } from 'hast-util-to-html'
import rehypeParse from 'rehype-parse'
import rehypePrettyCode from 'rehype-pretty-code';
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki-es';
import { unified, type Processor, type ParserFunction } from 'unified';
import { visit } from 'unist-util-visit';
import { fileURLToPath } from 'url';

import { get } from 'svelte/store';
import { highlighterStore } from './stores';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const prettyCodeOptions = {
	// theme: 'github-dark',
	// theme: JSON.parse(
	// 	readFileSync(resolve(__dirname, '../../../static/moonlight-2-theme.json'), 'utf-8')
	// ),
	keepBackground: false,
	// @ts-ignore:next-line
	onVisitLine(node) {
		// if (node.children.length === 0) {
		// 	node.children = { type: 'text', value: ' ' };
		// }
		// console.log('onVisitLine:', node);
	},
	// @ts-ignore:next-line
	onVisitTitle(node) {
		// console.log('title:', node);
	},
	// @ts-ignore:next-line
	getHighlighter: (options) => {
		return getStoredHighlighter();
	}
	// getHighlighter: (options) => {
	// 	return getHighlighter({
	// 		...options,
	// 		langs: BUNDLED_LANGUAGES.filter(({ id }) => {
	// 			return ['svelte'].includes(id);
	// 		}),
	// 	});
	// },
};

async function getShikiHighlighter(fetcher?: typeof fetch) {
	if (fetcher && typeof window !== 'undefined') {
		window.fetch = fetcher;
	}

	const shikiHighlighter = await getHighlighter({
		theme: 'github-dark',
		langs: ['svelte'],
	});
	return shikiHighlighter;
}

export async function getStoredHighlighter(fetcher?: typeof fetch) {
	const currHighlighter = get(highlighterStore);
	if (currHighlighter) {
		return currHighlighter;
	}
	const shikiHighlighter = await getShikiHighlighter(fetcher);
	highlighterStore.set(shikiHighlighter);
	return shikiHighlighter;
}

function stringify(this: Processor, options = {}) {
	this.Compiler = compiler;

	function compiler(tree: Node): string {
		return toHtml(tree, options);
	}
}

export async function getHighlightedPreviews(args: { code: string, lang: string, fetcher: typeof fetch }) {
	const { code, lang, fetcher } = args;

	await getStoredHighlighter(fetcher);

    const file = await unified()
		.use(rehypeCustomParser)
        .use(rehypePrettyCode, prettyCodeOptions)
        .use(rehypeCustom)
		.use(stringify, {
			allowDangerousHtml: true,
			allowDangerousCharacters: true,
		})
        .process(code);

    return String(file);
}

function rehypeCustom() {
	// @ts-ignore:next-line
	return async (tree) => {
		// console.log('tree:', tree);
		// visit(tree, (node, index, parent) => {
			// console.log('node:', node);
		// });
	};
}


/**
 * Source: https://github.com/rehypejs/rehype/blob/main/packages/rehype-parse/lib/index.js
 * @param options 
 */
function rehypeCustomParser() {
	// const processorSettings = (this.data('settings'));
	// const settings = Object.assign({}, processorSettings, options);
	// console.log('this:', this);
	// console.log('settings:', settings);
	// console.log('processorSettings:', processorSettings);
	// console.log('------------\n');

	Object.assign(this, {Parser: parser})
	
	function parser(doc: string) {
		// console.log('doc:', doc);
		// console.log('file:', file);
		return{
			type: 'element',
			tagName: 'pre',
			children: [{
				type: 'element',
				tagName: 'code',
				properties: { className: [ 'language-svelte' ] },
				children: [
				{
					type: 'text',
					value: doc
				}
				],
				data: { meta: '{5}' }
			}]
		}
	}
}