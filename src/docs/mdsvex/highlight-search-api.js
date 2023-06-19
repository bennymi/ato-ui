
import { readFileSync } from 'fs';
import { escapeSvelte } from 'mdsvex';
import shiki from 'shiki';

const dark_highlighter = await shiki.getHighlighter({
    theme: JSON.parse(readFileSync('static/shiki/github-dark.json', 'utf-8')),
    themes: ["github-dark"],
    langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});

const light_highlighter = await shiki.getHighlighter({
    theme: JSON.parse(readFileSync('static/shiki/github-light.json', 'utf-8')),
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