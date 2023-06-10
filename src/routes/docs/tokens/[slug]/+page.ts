import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const documentation = await import(/* @vite-ignore */`../../../../docs/guides/tokens/${params.slug}.md`)

		return {
			content: documentation.default,
			meta: documentation.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}) satisfies PageLoad;