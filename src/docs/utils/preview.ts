import { getHighlightedPreviews } from '$docs/utils/highlighter.js';
import type { IShikiTheme } from 'shiki';

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
    if (splitPath && splitPath.length > 0) {
        return slug === splitPath[4];
    }

    return false;
}

function isMainFile(key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length > 0) {
        return splitPath.at(-1) === 'app.svelte';
    }

    return false;
}

function getFileName(key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length > 0) {
        return splitPath.at(-1);
    }

    return '';
}

type PreviewTab = {
    title: string;
    file: string;
}

type PreviewSnippets = {
    main: string;
    files: PreviewTab[];
}

export async function getAllPreviewSnippets(args: { slug: string, theme: IShikiTheme | string }) {
    const { slug, theme } = args;
    
    // Get the files.
    const rawFiles = import.meta.glob(`/src/docs/previews/**/*.svelte`, {
		as: 'raw',
		eager: true,
	});

    // Get the highlighted HTML for each file.
    const previewSnippets: PreviewSnippets = {
        main: '',
        files: [],
    };

    Object.keys(rawFiles).forEach(async (key) => {
        if (isSlugFile(slug, key)) {
            const snippet = await getHighlightedPreviews({ code: rawFiles[key], lang: 'svelte', fetcher: fetch, theme: theme });

            if (isMainFile(key)) {
                previewSnippets.main = snippet;
            } else {
                const filename = getFileName(key);

                if (filename) {
                    previewSnippets.files.push({
                        title: filename,
                        file: snippet
                    });
                }
            }
        }
    });

    return previewSnippets;
}