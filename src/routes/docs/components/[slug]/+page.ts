import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import { isComponent } from '$docs/data/components';
import { getAllPreviewComponents, getDocsData } from '$docs/utils/preview';

export const load = (async ({ params, data }) => {
	const { slug } = params;

	if (!isComponent(slug)) {
		throw error(404);
	}

	const previewComponents = await getAllPreviewComponents({ slug });
	const docsComponentData = await getDocsData({ slug, isComponent: true });

	return {
		...data,
		previewComponents,
		...docsComponentData
	};
}) satisfies PageLoad;
