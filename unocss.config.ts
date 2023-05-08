import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWind,
  transformerVariantGroup
} from 'unocss';

import transformerDirectives from '@unocss/transformer-directives';
import extractorSvelte from '@unocss/extractor-svelte';
import presetIcons from '@unocss/preset-icons'

import { colors, presetAtoUI } from './src/lib/preset/index';

export default defineConfig({
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
    presetIcons({
        extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
        },
    }),
    presetWind(),
    presetAtoUI()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
})
