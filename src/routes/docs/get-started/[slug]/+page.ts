import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const documentation = await import(`/src/docs/get-started/${params.slug}.md`)

		return {
			content: documentation.default,
			meta: documentation.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}