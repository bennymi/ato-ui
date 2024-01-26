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

import rehypePrettyCode from 'rehype-pretty-code';
import type { Theme } from 'rehype-pretty-code';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

// import rehypePrettyCode from './rehype-pretty-code';
import { toHtml } from 'hast-util-to-html';
// import { getHighlighter } from 'shiki-es';
import { getHighlighter } from 'shikiji';
import { unified, type Processor } from 'unified';

import { get } from 'svelte/store';
import { highlighterStore } from './stores';
// import type { IShikiTheme } from 'shiki';
import type { FileHighlights } from '$docs/data/types';


async function getShikiHighlighter(theme: string, fetcher?: typeof fetch) {
	if (fetcher && typeof window !== 'undefined') {
		window.fetch = fetcher;
	}

	const shikiHighlighter = await getHighlighter({
		themes: ['github-dark-dimmed'],
		langs: ['svelte']
	});
	return shikiHighlighter;
}

export async function getStoredHighlighter(theme: string, fetcher?: typeof fetch) {
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

			strings.forEach((string) => (meta = `${meta} /${string}/#${id}`));
		});
	}

	return meta;
}

type HighlightedPreviewArgs = {
	code: string;
	lang: string;
	fetcher: typeof fetch;
	theme: string;
	fileHighlights?: FileHighlights | null;
};

export async function getHighlightedPreviews(args: HighlightedPreviewArgs) {
	const { code, lang, fetcher, theme, fileHighlights } = args;

	const meta = fileHighlights ? createMetaString(fileHighlights) : '';

	const highlightedCode = `
\`\`\`${lang} ${meta}
${code}
\`\`\`
`;

	const file = await unified()
		// .use(rehypeCustomParser, { lang, meta })
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypePrettyCode, {
			keepBackground: false,
			theme: <Theme>theme,
			getHighlighter: () => getStoredHighlighter(theme, fetcher)
		})
		// .use(stringify, {
		// 	allowDangerousHtml: true,
		// 	allowDangerousCharacters: true
		// })
		.use(rehypeStringify)
		.process(highlightedCode)

	return String(file);
}

/**
 * Source: https://github.com/rehypejs/rehype/blob/main/packages/rehype-parse/lib/index.js
 */
function rehypeCustomParser(this: Processor, args: { lang: string; meta: string }) {
	const { lang, meta } = args;
	Object.assign(this, { Parser: parser });

	// meta example: data: { meta: '{5,6,14,18} /surface/#v' }
	
	function parser(doc: string) {
		console.log('\n\nPARSER\n');
		console.log(doc, '\n\n');

		return {
			type: 'element',
			tagName: 'pre',
			children: [
				{
					type: 'element',
					tagName: 'code',
					properties: { className: [`language-${lang}`] },
					children: [
						{
							type: 'text',
							value: doc
						}
					],
					data: { meta }
				}
			]
		};
		// return {
		// 	type: 'element',
		// 	tagName: 'figure',
		// 	properties: {
		// 		"data-rehype-pretty-code-figure": ""
		// 	},
		// 	children: [
		// 		{
		// 			type: 'element',
		// 			tagName: 'pre',
		// 			children: [
		// 				{
		// 					type: 'element',
		// 					tagName: 'code',
		// 					properties: { className: [`language-${lang}`] },
		// 					children: [
		// 						{
		// 							type: 'text',
		// 							value: doc
		// 						}
		// 					],
		// 					data: { meta }
		// 				}
		// 			]
		// 		}
		// 	]	
		// };
	}
}
