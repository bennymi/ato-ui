import fs from 'fs-extra';
import shiki from 'shiki';

import { type UnoGenerator, createGenerator } from '@unocss/core';
import { presetWind } from '@unocss/preset-wind';
import prettier from 'prettier/standalone';
// import prettierParserCSS from 'prettier/parser-postcss';
import prettierParserCSS from 'prettier/plugins/postcss';

import { descriptions } from '../src/docs/search/index';
import type { HighlightedExamples } from './prepare.types';

import { presetAtoUI } from '../src/lib/preset/index';

export const unocss_config = {
    presets: [
        presetWind(),
        presetAtoUI()
    ]
};

const unoGenerator = createGenerator(unocss_config);;

const prettier_config = {
    parser: 'css',
    plugins: [prettierParserCSS],
    printWidth: Infinity
};

export async function generate_css(generator: UnoGenerator, input: string) {
    const generate = await generator.generate(new Set([input]), { preflights: false, minify: true });

    return prettier.format(generate.css, prettier_config);
}


const dark_highlighter = await shiki.getHighlighter({
    theme: 'github-dark',
    langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});

const light_highlighter = await shiki.getHighlighter({
    theme: 'github-light',
    langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});


export function get_highlighted_html(code: string, lang: string) {
    return {
        dark_html: dark_highlighter.codeToHtml(code ?? '', { lang }),
        light_html: light_highlighter.codeToHtml(code ?? '', { lang }),
    }
}

const highlighted_examples: HighlightedExamples = {};

for (const desc of descriptions) {
    for (const ex of desc.examples) {
        const css = await generate_css(unoGenerator, ex);
        const html = get_highlighted_html(css, 'css');

        Object.assign(highlighted_examples, { [ex]: html });
    }
}

fs.writeJsonSync('static/search/highlighted-examples.json', highlighted_examples, { spaces: 4 })
