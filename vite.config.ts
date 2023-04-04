import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

import transformerDirectives from '@unocss/transformer-directives'

import {
  presetAttributify,
  // presetIcons,
  presetUno,
  presetWind,
  transformerVariantGroup,
} from 'unocss';

import { extractorSvelte } from '@unocss/core';
import presetIcons from '@unocss/preset-icons'

import { colors, presetAtoUI } from './src/lib/preset/index';

export default defineConfig({
	plugins: [
		sveltekit(),
		// UnoCSS('./unocss.config.ts'),
		UnoCSS({
      // configFile: './unocss.config.ts'
			extractors: [extractorSvelte],
      theme: {
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetWind(),
        presetAtoUI()
      ],
      transformers: [
        transformerVariantGroup(),
        transformerDirectives()
      ],
		})
	]
});
