import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind
} from 'unocss';

import { extractorSvelte } from '@unocss/core';

const baseColors = {
  'primary': 'light-blue',
  'secondary': 'blue',
  'tertiary': 'teal',
  'success': 'emerald',
  'warning': 'amber',
  'error': 'red',
  'surface': 'blue-gray'
}

const colorValues = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
const types = ['border', 'shadow', 'text', 'ring'];

export default defineConfig({
  extractors: [extractorSvelte],
  theme: {
    colors: {
      primary: {
        300: '--color-primary-300',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0891B2',
        700: 'var(--color-primary-700)',
        // 700: '#4338CA',
        800: '#9F1239',
        900: '#4242ff'

      }
    }
  },
  rules: [
    ['custom-rule', { color: 'red' }, { autocomplete: 'custom-rule' }],
  ],
  shortcuts: [
    // [new RegExp(`^(${types.join('|')})-(${Object.keys(baseColors).join('|')})-([3-9][0]{2})$`), ([, type, base, value]) => `${type}-[color:var(--color-${base + '-' + value})]`],
    // ['text-example-primary-800', `text-[color:var(--${'primary'}-${800})]`],
    // --> Text Tokens
    // [new RegExp(`^text-(${Object.keys(baseColors).join('|')})-([1-9][0]{2})$`), ([, t, c]) => `text-${baseColors[t]}-${c}`],
    [new RegExp(`^text-(${Object.keys(baseColors).join('|')})-([1-9][0]{2})(/[1-9][0-9]?|100)?$`), ([, t, c, d]) => `text-${baseColors[t]}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, {autocomplete: [`text-(${Object.keys(baseColors).join('|')})-(${colorValues.join('|')})`]}],

    [new RegExp(`^text-(${Object.keys(baseColors).join('|')})-token-([1-9][0]{2})-([1-9][0]{2})$`), ([, t, p1, p2]) => `text-${t}-${p1} hover:text-${t}-${p2}`],

    // --> Background Tokens
    [new RegExp(`^bg-(${Object.keys(baseColors).join('|')})-([1-9][0]{2})$`), ([, t, c]) => `bg-${baseColors[t]}-${c}`],

    [new RegExp(`^bg-(${Object.keys(baseColors).join('|')})-token-([1-9][0]{2})-([1-9][0]{2})$`), ([, t, p1, p2]) => `bg-${t}-${p1} hover:bg-${t}-${p2}`],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind()
  ]
})
