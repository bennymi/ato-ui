
export async function load({ params }) {

    const glob_components = import.meta.glob('/src/docs/guides/components/*.md');

    let components: string[] = Object.keys(glob_components).filter((v) => v.includes(params.slug.replace('-headless', '')));

    components = <string[]>components.map((v) => v.split('/').at(-1)?.split('.')[0]);
    
	return {
        styledExists: components.includes(params.slug.replace('-headless', '')),
        headlessExists: components.includes(`${params.slug.replace('-headless', '')}-headless`)
	}
}