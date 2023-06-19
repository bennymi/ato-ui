/**
 * Adapted from the gitpod-io repo: https://github.com/gitpod-io/website/blob/main/src/lib/utils/highlight.js
 * 
 * Theme is from: https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json
 * 
 */

import { escapeSvelte } from "mdsvex";
import { join } from "path";
import shiki from 'shiki';

// import github_dark from 'shiki/themes/github-dark.json' assert { type: 'json' };
// import github_light from 'shiki/themes/github-light.json' assert { type: 'json' };


// console.log('shiki dark:', dark);
// 	// https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json

const github_dark = await shiki.loadTheme(join(process.cwd(), 'static/shiki/github-dark.json'));
const github_light = await shiki.loadTheme(join(process.cwd(), 'static/shiki/github-light.json'));
// const github_dark = await shiki.loadTheme('/shiki/github-dark.json');
// const github_light = await shiki.loadTheme('/shiki/github-light.json');

// console.log('shiki github dark', github_dark);
// const github_dark = shiki.loadTheme();
// const github_light = await shiki.loadTheme(join(process.cwd(), light));

const dark_highlighter = await shiki.getHighlighter({
    theme: github_dark,
    themes: ["github-dark"],
    langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});

const light_highlighter = await shiki.getHighlighter({
    theme: github_light,
    themes: ['github-light'],
    langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});


/**
 *
 * @param {string | undefined} code the code that gets parsed
 * @param {string | undefined} lang the language the code is written in
 */
export function get_highlighted_html(code, lang) {
    // console.log('get_html', dark_highlighter);
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