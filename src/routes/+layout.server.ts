import type { NavGroupItem } from '../docs/layout/types.d';

export async function load() {

    const glob_start = import.meta.glob('/src/docs/guides/get-started/*.md', { eager: true });
    // const glob_actions = import.meta.glob('/src/docs/guides/actions/*.md', { eager: true });
    const glob_tokens = import.meta.glob('/src/docs/guides/tokens/*.md', { eager: true });
    const glob_unocss = import.meta.glob('/src/docs/guides/unocss/*.md', { eager: true });
    const glob_components = import.meta.glob('/src/docs/guides/components/*.md', { eager: true });

    let articles: NavGroupItem[][] = [];
    // let actions: NavGroupItem[][] = [];
    let components: NavGroupItem[][] = [];
    let tokens: NavGroupItem[][] = [];
    let unocss: NavGroupItem[][] = [];

    // Object.keys(glob_actions).forEach((s) => {
    //     const file = glob_actions[s];
    //     const slug = s.split('/').at(-1)?.replace('.md', '');

    //     if (file && typeof file === 'object' && 'metadata' in file && slug) {
    //         const metadata = file.metadata as Omit<NavGroupItem, 'mdPath' | 'sitePath'>;
    //         const action = { mdPath: s, sitePath: `/docs/actions/${slug}`, ...metadata };

    //         actions.push([action]);
    //     }
    // });

    Object.keys(glob_start).forEach((s) => {
        const file = glob_start[s];
        const slug = s.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<NavGroupItem, 'mdPath' | 'sitePath'>;
            const start = { mdPath: s, sitePath: `/docs/get-started/${slug}`, ...metadata };

            articles.push([start]);
        }
    });

    Object.keys(glob_tokens).forEach((t) => {
        const file = glob_tokens[t];
        const slug = t.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<NavGroupItem, 'mdPath' | 'sitePath'>;
            const token = { mdPath: t, sitePath: `/docs/tokens/${slug}`, ...metadata };

            tokens.push([token]);
        }
    });

    Object.keys(glob_unocss).forEach((s) => {
        const file = glob_unocss[s];
        const slug = s.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<NavGroupItem, 'mdPath' | 'sitePath'>;
            const shortcut = { mdPath: s, sitePath: `/docs/unocss/${slug}`, ...metadata };

            unocss.push([shortcut]);
        }
    });

    // Get the components.
    Object.keys(glob_components).forEach((c) => {
        const file = glob_components[c];
        const slug = c.split('/').at(-1)?.replace('.md', '');
        const name = slug?.replace('-headless', '');
        const headless = slug?.includes('-headless');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<NavGroupItem, 'sitePath' | 'mdPath' | 'component'>;
            
            const component = { mdPath: c, component: name, sitePath: `/docs/components/${slug}`, ...metadata };
            
            const idx = components.findIndex((v) => v.findIndex((item) => item.component === name) >= 0);

            if (idx >= 0 && headless) {
                components[idx].unshift(component);
            } else if (idx >= 0 && !headless) {
                components[idx].push(component);
            } else {
                components.push([component]);
            }
        }
    });

	return {
        articles,
        // actions,
        tokens,
        unocss,
        components
	}
}