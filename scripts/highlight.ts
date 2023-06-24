// import fs from 'fs';
import fs from 'fs-extra';
import shiki from 'shiki';

import { type UnoGenerator, createGenerator } from '@unocss/core';
import { presetWind } from '@unocss/preset-wind';
import prettier from 'prettier/standalone';
import prettierParserCSS from 'prettier/parser-postcss';

import { descriptions } from '../src/docs/search/index';
import type { HighlightedExamples } from './prepare.types';

import { presetAtoUI } from '../src/lib/preset/index';

const { writeJson } = fs

export const unocss_config = {
    presets: [
        presetWind(),
        presetAtoUI()
    ]
};

let uno_generator = createGenerator(unocss_config);;

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
    // console.log('get_html', dark_highlighter);
    return {
        dark_html: dark_highlighter.codeToHtml(code ?? '', { lang }),
        light_html: light_highlighter.codeToHtml(code ?? '', { lang }),
    }
}

// let highlighted_examples: { dark_html: string, light_html: string }[] = [];
let highlighted_examples: HighlightedExamples = {};
// let highlighted_examples = {};

// descriptions.forEach(async (desc) => {
//     desc.examples.forEach(async (ex) => {
//         await generate_css(uno_generator, ex).then((response) => {
//             const css = response.trim();

//             const html = get_highlighted_html(css, 'css');

//             // highlighted_examples[ex] = html;
//             // highlighted_examples = {...highlighted_examples, [ex]: html }
//             Object.assign(highlighted_examples, { [ex]: html })
//         });
//     });
// });

for (const desc of descriptions) {
    for (const ex of desc.examples) {
        const css = await generate_css(uno_generator, ex);
        const html = get_highlighted_html(css, 'css');

        Object.assign(highlighted_examples, { [ex]: html });
    }
}

// await fs.writeFile('static/search/highlighted-examples.json', JSON.stringify(highlighted_examples), 'utf-8', (err) => {if (err) console.log('error:', err); });

// console.log(descriptions);
// console.log(highlighted_examples);
// await writeJson('static/search/highlighted-examples.json', highlighted_examples, { spaces: 4 })
fs.writeJsonSync('static/search/highlighted-examples.json', highlighted_examples, { spaces: 4 })
