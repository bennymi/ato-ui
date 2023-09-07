import { type UnoGenerator, createGenerator } from '@unocss/core';

import { presetWind } from '@unocss/preset-wind';

import { presetAtoUI } from '$lib/preset/index';

export const unocss_config = {
    presets: [
        // presetUno(),
        presetWind(),
        presetAtoUI()
    ]
};

let uno: UnoGenerator;
let prettier: typeof import('prettier/standalone')['format'];
// let prettierParserCSS: typeof import('prettier/parser-postcss');
let prettierParserCSS: typeof import('prettier/plugins/postcss');
let prettier_config: { parser: string, plugins: typeof prettierParserCSS[], printWidth: number };

export async function get_uno_generator_configs() {
    uno = createGenerator(unocss_config);

    await Promise.all([
        import('prettier/standalone').then((r) => (prettier = r.format)),
        // import('prettier/parser-postcss').then((r) => (prettierParserCSS = r.default))
        import('prettier/plugins/postcss').then((r) => (prettierParserCSS = r.default))
    ]);

    prettier_config = {
        parser: 'css',
        plugins: [prettierParserCSS],
        printWidth: Infinity
    };

    return uno;
}

export async function generate_css(generator: UnoGenerator, input: string) {
    const generate = await generator.generate(new Set([input]), { preflights: false, minify: true });

    return prettier(generate.css, prettier_config);
}