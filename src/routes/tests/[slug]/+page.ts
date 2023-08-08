import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import { componentsList, isComponent, componentsData } from '$docs/data/components';
import { getAllPreviewComponents } from '$docs/utils/preview';

export const load = (async ({ params, data }) => {
    const { slug } = params;

	if (!isComponent(slug)) {
		throw error(404);
	}

    const previewComponents = await getAllPreviewComponents({ slug });

    return {
        ...data,
        previewComponents,
        componentsData: componentsData[slug],
    };
}) satisfies PageLoad;