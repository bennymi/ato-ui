import { getHighlightedPreviews } from '$docs/utils/highlighter.js';

export const load = async ({ params, fetch }) => {
	// Init the highlighter
	// await getStoredHighlighter(fetch);
    const previewsCode = import.meta.glob(`/src/docs/previews/**/*.svelte`, {
		as: 'raw',
		eager: true,
	});

    const previewsSnippets: string[] = [];

    Object.keys(previewsCode).forEach(async (key) => {
        const snippet = await getHighlightedPreviews({ code: previewsCode[key], lang: 'svelte' });
        previewsSnippets.push(snippet);
    });

	return {
        previewsCode,
        previewsSnippets
		// snippets: getAllPreviewSnippets({ slug: params.name, fetcher: fetch }),
	};
};