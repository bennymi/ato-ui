/**
 * Adapted from the gitpod-io repo: https://github.com/gitpod-io/website/blob/main/src/lib/utils/highlight.js
 * 
 * Theme is from: https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json
 * 
 */

import { escapeSvelte } from "mdsvex";
// import shiki from 'shiki';

// let shiki;
let dark_highlighter;
let light_highlighter;

const langs = ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell'];

import('shiki')
    .then(async (r) => {
        // r.setCDN('/static/shiki/');
        r.setCDN('https://unpkg.com/browse/shiki@0.14.2/')
        // const wasmBuffer = await fetch('/shiki/dist/onig.wasm').then(res => res.arrayBuffer());
        const wasmBuffer = await fetch('https://unpkg.com/shiki/dist/onig.wasm').then(res => res.arrayBuffer());
        r.setWasm(wasmBuffer);
        dark_highlighter = await r.getHighlighter({ theme: 'github-dark', langs });
        light_highlighter = await r.getHighlighter({ theme: 'github-light', langs });
    });

// 	// https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json
// 	const t = await shiki.loadTheme(join(process.cwd(),'./theme-synthwave84.json'));

// 	const highlighter = await shiki.getHighlighter({
// 		theme: t
// 	});

// const dark_highlighter = await shiki.getHighlighter({
//     theme: 'github-dark',
//     langs
// });

// const light_highlighter = await shiki.getHighlighter({
//     theme: 'github-light',
//     langs
// });


/**
 *
 * @param {string | undefined} code the code that gets parsed
 * @param {string | undefined} lang the language the code is written in
 */
export function get_highlighted_html(code, lang) {
    // console.log('get_html', dark_highlighter);
    if (!(dark_highlighter && light_highlighter)) return { dark_html: '', light_html: '' }

    return {
        dark_html: escapeSvelte(dark_highlighter.codeToHtml(code ?? '', { lang })),
        light_html: escapeSvelte(light_highlighter.codeToHtml(code ?? '', { lang })),
    }
}

/**
 *
 * @param {string | undefined} code the code that gets parsed
 * @param {string | undefined} lang the language the code is written in
 * @param {string | undefined} meta meta information for the code fence
 * @returns {Promise<string>}
 */
export async function highlightCode(code, lang, meta) {
    let title = null;
    let display = false;
    let showHeader = '';
    let showCode = false;
    // let line_numbers = null;

    if (meta) {
        title = meta.match(/title="?(.*?)"/)?.[1];
        showHeader = meta.match(/showHeader="?(.*?)"/)?.[1];
        display = meta.includes('display');
        showCode = meta.includes('showCode');
        // line_numbers = meta.match(/lines="?(.*?)"/)?.[1];
    }

    const dark_html = escapeSvelte(dark_highlighter.codeToHtml(code ?? '', { lang }));
    const light_html = escapeSvelte(light_highlighter.codeToHtml(code ?? '', { lang }));

    return display ? `<CodeDisplay>${code}</CodeDisplay>` : `<CodeBlock darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(light_html)}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} ${title ? `title={"${title}"}` : ''} showHeader={${!(showHeader === 'false')}} showCode={${showCode}} />`;
}