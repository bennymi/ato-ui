// import { error } from '@sveltejs/kit';
// import type { PageLoad } from './$types';
// import type { PreviewFile } from '$docs/utils/preview';


// export const load = (async ({ params }) => {
// 	try {
// 		// const documentation = await import(/* @vite-ignore */`../../../../docs/guides/get-started/${params.slug}.md`);
// 		// const documentation = await import(/* @vite-ignore */`/src/docs/guides/get-started/${params.slug}.md`);
// 		const rawFiles = import.meta.glob(`/src/docs/guides/get-started/*.md`);

// 		let documentation: PreviewFile | null = null;

// 		for await (const key of Object.keys(rawFiles)) {
// 			if (key.includes(params.slug)) {
// 				documentation = (await rawFiles[key]()) as PreviewFile;
// 			}
// 		}

// 		if (!documentation || !('default' in documentation) || !('metadata' in documentation)) {
// 			throw error(404, `Could not find ${params.slug}`);
// 		}

// 		return {
// 			content: documentation?.default,
// 			meta: documentation?.metadata
// 		};
// 	} catch (e) {
// 		throw error(404, `Could not find ${params.slug}`);
// 	}
// }) satisfies PageLoad;


import type { PageLoad } from './$types';
import { getAllPreviewComponents, getDocsData } from '$docs/utils/preview';

export const load = (async ({ params, data }) => {
    const { slug } = params;

    const previewComponents = await getAllPreviewComponents({ slug, required: false });
    const docsComponentData = await getDocsData({ slug, isComponent: false });

    return {
        ...data,
        previewComponents,
        ...docsComponentData,
    };
}) satisfies PageLoad;