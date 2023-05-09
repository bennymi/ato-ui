import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const documentation = await import(/* @vite-ignore */`../../../../docs/components/${params.slug}.md`)
		// let component;

		// if ('component' in documentation.metadata) {
		// 	console.log('component', documentation.metadata.component);
		// 	// component = await import(/* @vite-ignore */`${documentation.metadata.component}?raw&sveld`)
		// 	component = await import(/* @vite-ignore */documentation.metadata.component);
		// 	console.log(component);
		// }

		return {
			slug: params.slug,
			content: documentation.default,
			meta: documentation.metadata,
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}) satisfies PageLoad;