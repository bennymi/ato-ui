import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

import {
	presetAttributify,
	// presetIcons,
	presetUno,
	// presetWind
  transformerVariantGroup
  } from 'unocss';
  
  import { extractorSvelte } from '@unocss/core';
  
  import { colors, presetAtoUI } from './src/lib/preset/index';

export default defineConfig({
	plugins: [
		sveltekit(),
		// UnoCSS('./unocss.config.ts'),
		UnoCSS({
			extractors: [extractorSvelte],
      theme: {
        // colors: {
        //   primary: {
        //     600: 'var(--color-primary-600)',
        //   }
        // }
      },
      presets: [
        presetUno(),
        presetAttributify(),
        // presetWind(),
        presetAtoUI()
      ],
      transformers: [
        transformerVariantGroup()
      ],
		})
	]
});
