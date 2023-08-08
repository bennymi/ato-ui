import { error } from '@sveltejs/kit';
import type { IShikiTheme } from 'shiki';
import { getHighlightedPreviews } from '$docs/utils/highlighter.js';

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
const PATH_LENGTH = 7;

function isSlugFile(slug: string, key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length === PATH_LENGTH) {
        return slug === splitPath[4];
    }

    return false;
}

function isMainFile(key: string) {
    const splitPath = key.split('/');
    if (splitPath && splitPath.length === PATH_LENGTH) {
        return splitPath.at(-1)?.toLowerCase() === 'app.svelte';
    }

    return false;
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

export type PreviewTab = {
    title: string;
    file: string;
}

export type PreviewExamples = Record<string, PreviewTab[]>;

export async function getAllPreviewSnippets(args: { slug: string, theme: IShikiTheme | string }) {
    const { slug, theme } = args;

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

            if (!filename || !foldername || !filetype) throw error(404);

            const snippet = await getHighlightedPreviews({ code: rawFiles[key].trim(), lang: filetype, fetcher: fetch, theme: theme });

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
        throw error(404);
    }

    return previewSnippets;
}