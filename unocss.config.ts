import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind
} from 'unocss';

import { extractorSvelte } from '@unocss/core';

import { presetAtoUI } from './src/lib/preset/index';

export default defineConfig({
  extractors: [extractorSvelte],
  rules: [
    ['custom-rule', { color: 'red' }, { autocomplete: 'custom-rule' }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind(),
    presetAtoUI()
  ]
})
