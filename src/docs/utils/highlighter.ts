import rehypePrettyCode from 'rehype-pretty-code';
import type { Theme } from 'rehype-pretty-code';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

import { getHighlighter } from 'shikiji';
import { unified } from 'unified';

import { get } from 'svelte/store';
import { highlighterStore } from './stores';
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
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypePrettyCode, {
			keepBackground: false,
			theme: <Theme>theme,
			getHighlighter: () => getStoredHighlighter(theme, fetcher)
		})
		.use(rehypeStringify)
		.process(highlightedCode)

	return String(file);
}