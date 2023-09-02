import { error } from '@sveltejs/kit';
import type { IShikiTheme } from 'shiki';
import type { SvelteComponent } from 'svelte';

import { getHighlightedPreviews } from '$docs/utils/highlighter.js';
import type { ExampleHighlights, FileHighlights } from '$docs/data/types';


const PATH_LENGTH = 7;

// export async function getMainPreviewComponent(slug: string) {
// 	if (!isBuilderName(slug)) {
// 		throw error(500);
// 	}

// 	const previewComponents = import.meta.glob('/src/docs/previews/**/*.svelte');
// 	let mainPreviewObj: { path?: string; resolver?: PreviewResolver } = {};
// 	for (const [path, resolver] of Object.entries(previewComponents)) {
// 		if (isMainPreviewComponent(slug, path)) {
// 			mainPreviewObj = { path, resolver: resolver as unknown as PreviewResolver };
// 			break;
// 		}
// 	}

// 	const mainPreview = await mainPreviewObj.resolver?.();
// 	if (!mainPreview) {
// 		throw error(500);
// 	}

// 	return mainPreview.default;
// }

function isSlugFile(slug: string, key: string) {
    const splitPath = key.split('/');
    return splitPath.includes(slug);
}

function isMainFile(key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length === PATH_LENGTH) {
        return splitPath.at(-1)?.toLowerCase() === 'app.svelte';
    }

    return false;
}

export function getGuidesFolderFiles(folder: string) {
    // Get the files.
    const filePaths = import.meta.glob(`/src/docs/guides/**/*.md`);

    const keys = Object.keys(filePaths);

    const files: string[] = [];

    for (const key of keys) {
        const pathParts = key.split('/');

        if (pathParts.at(-2) === folder) {
            files.push(pathParts.at(-1).replace('.md', ''));
        }
    }

    return files;
}

function getFileType(key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length === PATH_LENGTH) {
        const filetype = splitPath.at(-1)?.split('.').at(-1);
        return filetype === 'ts' ? 'typescript' : filetype;
    }

    return '';
}

function getFolderName(key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length === PATH_LENGTH) {
        return splitPath[5];
    }

    return '';
}

function getFileName(key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length === PATH_LENGTH) {
        return splitPath.at(-1);
    }

    return '';
}

function getFileHighlights(foldername: string, filename: string, highlights: ExampleHighlights): FileHighlights | null {
    if (!highlights) return null;
    if (!(foldername in highlights)) return null;
    if (!(filename in highlights[foldername])) return null;

    return highlights[foldername][filename];
}

export type PreviewTab = {
    title: string;
    file: string;
};

export type PreviewExamples = Record<string, PreviewTab[]>;

type PreviewSnippetsArgs = {
    slug: string, 
    theme: IShikiTheme | string, 
    highlights?: ExampleHighlights | undefined 
}

/**
 * Returns all highlighted code files for each example
 * of the specified slug route.
 */
export async function getAllPreviewSnippets(args: PreviewSnippetsArgs) {
    const { slug, theme, highlights } = args;

    // Get the files.
    const rawFiles = import.meta.glob(`/src/docs/previews/**/*.{css,svelte,ts}`, {
		as: 'raw',
		eager: true,
	});

    // Get the highlighted HTML for each file.
    // const previewSnippets: PreviewTab[] = [];
    const previewSnippets: PreviewExamples = {};

    let mainExists = false;

    const keys = Object.keys(rawFiles);

    for await (const key of keys) {
        if (isSlugFile(slug, key)) {
            const foldername = getFolderName(key);
            const filename = getFileName(key);
            const filetype = getFileType(key);

            if (!filename || !foldername || !filetype) throw error(500);
            
            const fileHighlights = getFileHighlights(foldername, filename, highlights);

            const snippet = await getHighlightedPreviews({ code: rawFiles[key].trim(), lang: filetype, fetcher: fetch, theme: theme, fileHighlights });

            // Add folder to examples.
            if (!(foldername in previewSnippets)) {
                previewSnippets[foldername] = [];
            }

            const file = { title: filename, file: snippet };

            // Add file to example.
            if (isMainFile(key)) {
                // previewSnippets.main = snippet;
                previewSnippets[foldername].unshift(file);

                if (foldername.toLowerCase() === 'main') mainExists = true;
            } else {
                previewSnippets[foldername].push(file);
            }
        }
    }

    if (!mainExists) {
        throw error(500);
    }

    return previewSnippets;
}

/**
 * This gets the highlighted types.ts file
 * for a given component page. 
 */
export async function getComponentsTypesSnippet(args: { slug: string, theme: IShikiTheme | string }) {
    const { slug, theme } = args;

    // Get the files.
    const rawFiles = import.meta.glob(`/src/lib/components/**/types.ts`, {
		as: 'raw',
		eager: true,
	});

    // Get the highlighted HTML for each file.
    // const previewSnippets: PreviewTab[] = [];
    let typesSnippet: string = '';

    const keys = Object.keys(rawFiles);

    for await (const key of keys) {
        if (isSlugFile(slug, key)) {

            const snippet = await getHighlightedPreviews({ code: rawFiles[key].trim(), lang: 'typescript', fetcher: fetch, theme: theme });

            typesSnippet = snippet;

            break;
        }
    }

    return typesSnippet;
}

export type PreviewComponents = Record<string, SvelteComponent>;

export type PreviewFile = {
	default: SvelteComponent;
};

/**
 * Returns the main 'app.svelte' component for every example
 * folder within the specified slug route from inside the 
 * previews folder.
 */
export async function getAllPreviewComponents(args: { slug: string }) {
    const { slug } = args;

    // Get the files.
    const rawFiles = import.meta.glob(`/src/docs/previews/**/app.svelte`);

    const previewComponents: PreviewComponents = {};

    let mainExists = false;

    const keys = Object.keys(rawFiles);

    for await (const key of keys) {
        if (isSlugFile(slug, key)) {
            const foldername = getFolderName(key);
            const filename = getFileName(key);
            const filetype = getFileType(key);

            if (!filename || !foldername || !filetype) throw error(500);

            /**
             * import.meta.glob returns an import function for each key.
             * Call the function and await the response to get the 
             * component.
             */
            const previewComponent = (await rawFiles[key]()) as PreviewFile;

            // Add component to example.
            if ('default' in previewComponent) {
                previewComponents[foldername] = previewComponent.default;

                if (foldername.toLowerCase() === 'main') mainExists = true;
            }
        }
    }

    if (!mainExists) {
        throw error(500);
    }

    return previewComponents;
}


function isDocsPage(slug: string, key: string) {
    return key.includes(`${slug}.md`);
}

export type Metadata = {
    title: string;
    description: string;
    icon?: string;
}

export type DocsComponentData = {
    content: SvelteComponent | null;
    meta: Metadata;
    styledExists?: boolean;
    headlessExists?: boolean;
    githubPath: string;
};

/**
 * Get the markdown documentation related information,
 * so the markdown as a component, as well as the 
 * meta data (title, description, etc.).
 */
export async function getDocsData(args: { slug: string, isComponent: boolean }) {
    const { slug, isComponent } = args;

    // Get the files.
    const rawFiles = import.meta.glob(`/src/docs/guides/**/*.md`);

    const docsComponentData: Partial<DocsComponentData> = {
        content: null,
    };

    const keys = Object.keys(rawFiles);

    for await (const key of keys) {
        if (isDocsPage(slug, key)) {

            docsComponentData.githubPath = key;
            const docsComponent = (await rawFiles[key]()) as PreviewFile;

            if ('default' in docsComponent) {
                docsComponentData.content = docsComponent.default;
            }

            if ('metadata' in docsComponent) {
                docsComponentData.meta = docsComponent.metadata as Metadata;
            }
        }
    }

    if (!docsComponentData.content || !docsComponentData.meta || !docsComponentData.githubPath) {
        throw error(500);
    }

    if (isComponent) {
        let components = keys
            .filter((v) => v.includes(slug.replace('-headless', '')))
            .map((v) => v.split('/').at(-1)?.split('.')[0]);

        docsComponentData.styledExists = components.includes(slug.replace('-headless', ''));
        docsComponentData.headlessExists = components.includes(`${slug.replace('-headless', '')}-headless`);
    }

    return docsComponentData;
}