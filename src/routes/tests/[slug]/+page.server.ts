import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';
import { getHighlightedPreviews } from '$docs/utils/highlighter.js';
import { themeStore } from '$docs/utils/stores';

import { componentsList, isComponent, componentsData } from '$docs/data/components';
import { getAllPreviewSnippets } from '$docs/utils/preview';


export const entries = (() => {
	const slugs = componentsList.map((component) => ({ slug: component }));
	return slugs;
}) satisfies EntryGenerator;


export const load = async ({ params,  fetch }) => {
    const { slug } = params;

	if (!isComponent(slug)) {
		throw error(404);
	}

    // Get the theme and update theme store.
    let theme = get(themeStore);

	if (!theme) {
        const response = await fetch('/moonlight-2-theme.json');
        theme = await response.json();

        themeStore.set(theme);
	}

    // Get the files.
    // const previewsCode = import.meta.glob(`/src/docs/previews/**/*.svelte`, {
	// 	as: 'raw',
	// 	eager: true,
	// });

    // console.log('raw files:', Object.keys(previewsCode));

    // // Get the highlighted HTML for each file.
    // const previewsSnippets: string[] = [];

    // Object.keys(previewsCode).forEach(async (key) => {
    //     const snippet = await getHighlightedPreviews({ code: previewsCode[key], lang: 'svelte', fetcher: fetch, theme: theme ?? 'github-dark' });
    //     previewsSnippets.push(snippet);
    // });

    const previewSnippets = await getAllPreviewSnippets({ slug, theme: theme ?? 'github-dark', highlights: componentsData[slug].highlights });

	return {
        // previewsCode,
        previewSnippets,
		// snippets: getAllPreviewSnippets({ slug: params.name, fetcher: fetch }),
	};
};