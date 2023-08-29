import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

import { themeStore } from '$docs/utils/stores';
import { componentsList, isComponent, componentsData } from '$docs/data/components';
import { getAllPreviewSnippets } from '$docs/utils/preview';
import type { ComponentsAPI } from '$docs/data/types';


export const entries = (() => {
	const slugs = componentsList.map((component) => ({ slug: component }));
	return slugs;
}) satisfies EntryGenerator;


export const load = (async ({ params,  fetch }) => {

    const response = await fetch('/api/component-apis.json');
    const componentAPIs: ComponentsAPI = await response.json();

    const { slug } = params;

	if (!isComponent(slug)) {
		throw error(404);
	}

    if (!slug.includes('-headless') && !(slug in componentAPIs)) {
        throw error(500);
    }

    // Get the theme and update theme store.
    let theme = get(themeStore);

	if (!theme) {
        const response = await fetch('/moonlight-2-theme.json');
        theme = await response.json();

        themeStore.set(theme);
	}

    const previewSnippets = await getAllPreviewSnippets({ slug, theme: theme ?? 'github-dark', highlights: componentsData[slug].highlights });

	return {
        previewSnippets,
        componentData: componentsData[slug],
        componentAPI: componentAPIs[slug]
	};
}) satisfies PageServerLoad;