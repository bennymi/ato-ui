import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { getDocsData, getGuidesFolderFiles } from '$docs/utils/preview';

export const entries = (() => {
	const slugs = getGuidesFolderFiles('tokens').map((file) => ({ slug: file }));
	return slugs;
}) satisfies EntryGenerator;

export const load = (async ({ params }) => {
	const { slug } = params;

	if (!getGuidesFolderFiles('tokens').includes(slug)) {
		throw error(404);
	}

	const docsComponentData = await getDocsData({ slug, isComponent: false });

	return {
		...docsComponentData
	};
}) satisfies PageLoad;
