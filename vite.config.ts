import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import sveld from 'vite-plugin-sveld';

// import transformerDirectives from '@unocss/transformer-directives'

// import {
//   presetAttributify,
//   // presetIcons,
//   presetUno,
//   presetWind,
//   transformerVariantGroup,
// } from 'unocss';

// import extractorSvelte from '@unocss/extractor-svelte';
// import presetIcons from '@unocss/preset-icons'

// import { colors, presetAtoUI } from './src/lib/preset/index';

export default defineConfig({
	plugins: [
		sveltekit(),
    sveld(),
		// UnoCSS('./unocss.config.ts'),
		UnoCSS({
      configFile: './unocss.config.ts'
			// extractors: [extractorSvelte()],
      // theme: {
      // },
      // presets: [
      //   presetUno(),
      //   presetAttributify(),
      //   presetIcons({
      //       extraProperties: {
      //           'display': 'inline-block',
      //           'vertical-align': 'middle',
      //       },
      //   }),
      //   presetWind(),
      //   presetAtoUI()
      // ],
      // transformers: [
      //   transformerVariantGroup(),
      //   transformerDirectives()
      // ],
		})
	]
});
