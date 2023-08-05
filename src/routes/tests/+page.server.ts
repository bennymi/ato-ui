import { get } from 'svelte/store';
import { getHighlightedPreviews } from '$docs/utils/highlighter.js';
import { themeStore } from '$docs/utils/stores';

export const load = async ({ params, fetch }) => {
    const previewsCode = import.meta.glob(`/src/docs/previews/**/*.svelte`, {
		as: 'raw',
		eager: true,
	});

    let theme = get(themeStore);

	if (!theme) {
        const response = await fetch('/moonlight-2-theme.json');
        theme = await response.json();

        themeStore.set(theme);
	}

    const previewsSnippets: string[] = [];

    Object.keys(previewsCode).forEach(async (key) => {
        const snippet = await getHighlightedPreviews({ code: previewsCode[key], lang: 'svelte', fetcher: fetch, theme });
        previewsSnippets.push(snippet);
    });

	return {
        previewsCode,
        previewsSnippets,
		// snippets: getAllPreviewSnippets({ slug: params.name, fetcher: fetch }),
	};
};