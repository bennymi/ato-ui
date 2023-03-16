import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
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


export default defineConfig({
  extractors: [extractorSvelte],
  rules: [
    ['custom-rule', { color: 'red' }, { autocomplete: 'custom-rule' }],
  ],
  shortcuts: [
    [new RegExp(`^text-example-(${Object.keys(baseColors).join('|')})-([3-9][0]{2})$`), ([, t, c]) => `text-[var(--${t + '-' + c})]`],
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
  ]
})
