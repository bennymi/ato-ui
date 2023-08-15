import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const documentation = await import(/* @vite-ignore */`../../../../docs/guides/components/${params.slug}.md`);

		const glob_components = import.meta.glob('/src/docs/guides/components/*.md');

		let components: string[] = Object.keys(glob_components).filter((v) => v.includes(params.slug.replace('-headless', '')));

		components = <string[]>components.map((v) => v.split('/').at(-1)?.split('.')[0]);

		return {
			slug: params.slug,
			content: documentation.default,
			meta: documentation.metadata,
			styledExists: components.includes(params.slug.replace('-headless', '')),
			headlessExists: components.includes(`${params.slug.replace('-headless', '')}-headless`)
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}) satisfies PageLoad;

type Slug = {
	slug: string
}

export const entries = (() => {
	const glob_components = import.meta.glob('/src/docs/guides/components/*.md');

	const slugs = Object.keys(glob_components).map((slug) => { 
		const split = slug.split('/').at(-1);
		
		if (split) {
			return { slug: split.replace('.md', '') };
		}

		return { slug: '' };
	}) satisfies Slug[];

	return slugs;
}) satisfies EntryGenerator;