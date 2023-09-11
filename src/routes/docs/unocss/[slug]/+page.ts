import type { PageLoad } from './$types';
import { getAllPreviewComponents, getDocsData } from '$docs/utils/preview';

export const load = (async ({ params, data }) => {
	const { slug } = params;

	const previewComponents = await getAllPreviewComponents({ slug, required: false });
	const docsComponentData = await getDocsData({ slug, isComponent: false });

	return {
		...data,
		previewComponents,
		...docsComponentData
	};
}) satisfies PageLoad;
