
// import { readFileSync } from 'fs';
import { escapeSvelte } from 'mdsvex';
import shiki from 'shiki';
// import { base } from '$app/paths';

// import { github_dark } from './github-dark';

// shiki.setCDN(`${base}/shiki/`);

const dark_highlighter = await shiki.getHighlighter({
    // theme: JSON.parse(JSON.stringify(github_dark)),
    theme: 'github-dark',
    langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});

const light_highlighter = await shiki.getHighlighter({
    // theme: JSON.parse(JSON.stringify(github_dark)),
    theme: 'github-light',
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
        dark_html: escapeSvelte(dark_highlighter.codeToHtml(code ?? '', { lang, theme: 'github-dark' })),
        light_html: escapeSvelte(light_highlighter.codeToHtml(code ?? '', { lang, theme: 'github-light' })),
    }
}