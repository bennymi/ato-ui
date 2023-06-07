/**
 * Adapted from the gitpod-io repo: https://github.com/gitpod-io/website/blob/main/src/lib/utils/highlight.js
 * 
 * Theme is from: https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json
 * 
 */

import { escapeSvelte } from "mdsvex";
import shiki from 'shiki';

/** at type {import('mdsvex').MdsvexOptions[HighlighterOptions][Highlighter]} */
// export async function highlightCode(code: string | undefined, lang: string | undefined, meta: string | undefined): Promise<string> {

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
    // let line_numbers = null;

    if (meta) {
        title = meta.match(/title="?(.*?)"/)?.[1];
        showHeader = meta.match(/showHeader="?(.*?)"/)?.[1];
        display = meta.includes('display');
        // line_numbers = meta.match(/lines="?(.*?)"/)?.[1];
    }

    // const t = await shiki.loadTheme(join(process.cwd(),'./src/lib/mdsvex/theme-synthwave84.json'));

    const highlighter = await shiki.getHighlighter({
        theme: 'github-dark'
    });

    const html = escapeSvelte(highlighter.codeToHtml(code ?? '', { lang }));

    // console.log('raw-code:', code);

    return display ? `<CodeDisplay>${code}</CodeDisplay>` : `<CodeBlock code={${JSON.stringify(html)}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} ${title ? `title={"${title}"}` : ''} showHeader={${!(showHeader === 'false')}} />`;
}