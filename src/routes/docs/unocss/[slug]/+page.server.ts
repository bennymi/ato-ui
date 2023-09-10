import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

import { shikiThemeStore } from '$docs/utils/stores';
import { getAllPreviewSnippets, getGuidesFolderFiles } from '$docs/utils/preview';

export const entries = (() => {
	const slugs = getGuidesFolderFiles('unocss').map((file) => ({ slug: file }));
	return slugs;
}) satisfies EntryGenerator;

export const load = (async ({ params, fetch }) => {
	const { slug } = params;

	if (!getGuidesFolderFiles('unocss').includes(slug)) {
		throw error(404);
	}

	// Get the theme and update theme store.
	let theme = get(shikiThemeStore);

	if (!theme) {
		const response = await fetch('/moonlight-2-theme.json');
		theme = await response.json();

		shikiThemeStore.set(theme);
	}

	const previewSnippets = await getAllPreviewSnippets({
		slug,
		theme: theme ?? 'github-dark',
		required: false
	});

	return {
		previewSnippets
	};
}) satisfies PageServerLoad;
