import type { NavGroupItem } from '$lib/components/docu-layout/types.js';

export async function load() {

    const glob_tokens = import.meta.glob('/src/docs/tokens/*.md', { eager: true });
    const glob_shortcuts = import.meta.glob('/src/docs/shortcuts/*.md', { eager: true });
    const glob_components = import.meta.glob('/src/docs/components/*.md', { eager: true });

    let components: NavGroupItem[][] = [];
    let tokens: NavGroupItem[][] = [];
    let shortcuts: NavGroupItem[][] = [];

    Object.keys(glob_tokens).forEach((t) => {
        const file = glob_tokens[t];
        const slug = t.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<NavGroupItem, 'mdPath' | 'sitePath'>;
            const token = { mdPath: t, sitePath: `/docs/tokens/${slug}`, ...metadata };

            tokens.push([token]);
        }
    });

    Object.keys(glob_shortcuts).forEach((s) => {
        const file = glob_shortcuts[s];
        const slug = s.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<NavGroupItem, 'mdPath' | 'sitePath'>;
            const shortcut = { mdPath: s, sitePath: `/docs/shortcuts/${slug}`, ...metadata };

            shortcuts.push([shortcut]);
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
            
            // console.log('component', component);
            // console.log('component', components);
            // console.log('idx', idx);

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
        tokens,
        shortcuts,
        components
	}
}