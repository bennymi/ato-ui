
/**
 * Copy rehype-pretty-code into separate folder because of bundle errors.
 * Packages installed for this rehype (remove them when issue is solved):
 * 	- parse-numeric-range
 *  - rehype-parse
 *  - hash-obj
 *  - hast
 *  - @types/hast
 *  - hast-util-to-string
 */

// import rehypePrettyCode from 'rehype-pretty-code';
import rehypePrettyCode from './rehype-pretty-code';
import { toHtml } from 'hast-util-to-html';
import { getHighlighter } from 'shiki-es';
import { unified, type Processor } from 'unified';

import { get } from 'svelte/store';
import { highlighterStore } from './stores';
import type { IShikiTheme } from 'shiki';
import type { FileHighlights } from '$docs/data/types';


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
	// @ts-ignore:next-line
	this.Compiler = compiler;

	function compiler(tree: Node): string {
		// @ts-ignore:next-line
		return toHtml(tree, options);
	}
}

function createMetaString(fileHighlights: FileHighlights | null): string {
	if (!fileHighlights) return '';

	const { lines, words } = fileHighlights;

	let meta = '';

	if (lines) {
		meta = `{${lines}}`;
	}

	if (words) {
		words.forEach((item) => {
			const { strings, id } = item;

			strings.forEach((string) => meta = `${meta} /${string}/#${id}`);
		});
	}

	return meta;
}

type HighlightedPreviewArgs = { 
	code: string, 
	lang: string, 
	fetcher: typeof fetch, 
	theme: IShikiTheme | string, 
	fileHighlights?: FileHighlights | null 
}

export async function getHighlightedPreviews(args: HighlightedPreviewArgs) {
	const { code, lang, fetcher, theme, fileHighlights } = args;

	const meta = fileHighlights ? createMetaString(fileHighlights) : '';

	// await getStoredHighlighter(theme, fetcher);

    const file = await unified()
		.use(rehypeCustomParser, { lang, meta })
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
function rehypeCustomParser(this: Processor, args: { lang: string, meta: string }) {
	const { lang, meta } = args;
	Object.assign(this, {Parser: parser});

	// meta example: data: { meta: '{5,6,14,18} /surface/#v' }
	
	function parser(doc: string) {
		return{
			type: 'element',
			tagName: 'pre',
			children: [{
				type: 'element',
				tagName: 'code',
				properties: { className: [ `language-${lang}` ] },
				children: [
				{
					type: 'text',
					value: doc
				}
				],
				data: { meta }
			}]
		}
	}
}