
import { toHtml } from 'hast-util-to-html';
import rehypePrettyCode from 'rehype-pretty-code';
import { getHighlighter } from 'shiki-es';
import { unified, type Processor } from 'unified';

import { get } from 'svelte/store';
import { highlighterStore } from './stores';
import type { IShikiTheme } from 'shiki';


async function getShikiHighlighter(theme: IShikiTheme | string, fetcher?: typeof fetch) {
	if (fetcher && typeof window !== 'undefined') {
		window.fetch = fetcher;
	}

	const shikiHighlighter = await getHighlighter({
		theme,
		langs: ['svelte'],
	});
	return shikiHighlighter;
}

export async function getStoredHighlighter(theme: IShikiTheme | string, fetcher?: typeof fetch) {
	const currHighlighter = get(highlighterStore);
	if (currHighlighter) {
		return currHighlighter;
	}
	const shikiHighlighter = await getShikiHighlighter(theme, fetcher);
	highlighterStore.set(shikiHighlighter);
	return shikiHighlighter;
}

/**
 * Source: https://github.com/pngwn/MDsveX/blob/26591be63e088f57c78108553813ef18cc8ca5b1/packages/mdsvex/src/index.ts#L40 
 */
function stringify(this: Processor, options = {}) {
	this.Compiler = compiler;

	function compiler(tree: Node): string {
		// @ts-ignore:next-line
		return toHtml(tree, options);
	}
}

export async function getHighlightedPreviews(args: { code: string, lang: string, fetcher: typeof fetch, theme: IShikiTheme | string }) {
	const { code, lang, fetcher, theme } = args;

	// await getStoredHighlighter(theme, fetcher);

    const file = await unified()
		.use(rehypeCustomParser)
        .use(rehypePrettyCode, {
			keepBackground: false,
			// @ts-ignore:next-line
			getHighlighter: (options) => {
				return getStoredHighlighter(theme, fetcher);
			}
		})
		.use(stringify, {
			allowDangerousHtml: true,
			allowDangerousCharacters: true,
		})
        .process(code);

    return String(file);
}


/**
 * Source: https://github.com/rehypejs/rehype/blob/main/packages/rehype-parse/lib/index.js
 */
function rehypeCustomParser(this: Processor) {
	Object.assign(this, {Parser: parser});

	// meta example: data: { meta: '{5,6,14,18} /surface/#v' }
	
	function parser(doc: string) {
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