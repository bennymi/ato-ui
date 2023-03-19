import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind
} from 'unocss';

import { extractorSvelte } from '@unocss/core';

import { presetAtoUI } from './src/lib/preset/index';

const baseColors = {
  'primary': 'light-blue',
  'secondary': 'blue',
  'tertiary': 'teal',
  'success': 'emerald',
  'warning': 'amber',
  'error': 'red',
  'surface': 'blue-gray'
}

const baseTypes = ['white', 'black', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
const colorValues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const baseTs = baseTypes.join('|');
const colorVs = colorValues.join('|');
// const types = ['border', 'shadow', 'text', 'ring'];

export default defineConfig({
  extractors: [extractorSvelte],
  // theme: {
  //   colors: {
  //     primary: Object.fromEntries(colorValues.map(x => [x, `var(--color-primary-${x})`])),
  //     secondary: Object.fromEntries(colorValues.map(x => [x, `var(--color-secondary-${x})`])),
  //     tertiary: Object.fromEntries(colorValues.map(x => [x, `var(--color-tertiary-${x})`])),
  //     success: Object.fromEntries(colorValues.map(x => [x, `var(--color-success-${x})`])),
  //     warning: Object.fromEntries(colorValues.map(x => [x, `var(--color-warning-${x})`])),
  //     error: Object.fromEntries(colorValues.map(x => [x, `var(--color-error-${x})`])),
  //     surface: Object.fromEntries(colorValues.map(x => [x, `var(--color-surface-${x})`])),
  //   }
  // },
  rules: [
    ['custom-rule', { color: 'red' }, { autocomplete: 'custom-rule' }],
  ],
  shortcuts: [
    // [new RegExp(`^(${types.join('|')})-(${Object.keys(baseColors).join('|')})-([3-9][0]{2})$`), ([, type, base, value]) => `${type}-[color:var(--color-${base + '-' + value})]`],
    // ['text-example-primary-800', `text-[color:var(--${'primary'}-${800})]`],
    // --> Text Tokens
    // [new RegExp(`^text-(${Object.keys(baseColors).join('|')})-([1-9][0]{2})$`), ([, t, c]) => `text-${baseColors[t]}-${c}`],
    // [new RegExp(`^text-(${Object.keys(baseColors).join('|')})-([1-9][0]{2})(/[1-9][0-9]?|100)?$`), ([, t, c, d]) => `text-${baseColors[t]}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, {autocomplete: [`text-(${Object.keys(baseColors).join('|')})-(${colorValues.join('|')})`]}],
    [new RegExp(`^text-(${Object.keys(baseColors).join('|')})-([1-9][0]{2})(/[1-9][0-9]?|100)?$`), ([, t, c, d]) => `text-${t}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, {autocomplete: [`text-(${Object.keys(baseColors).join('|')})-(${colorValues.join('|')})`]}],

    [new RegExp(`^ato-text-(${Object.keys(baseColors).join('|')})-([1-9][0]{1,2})-([1-9][0]{1,2})$`), ([, b, v1, v2]) => `text-${b}-${v1} dark:text-${b}-${v2}`],

    [new RegExp(`^ato-text-inverse-(${baseTs})(-[1-9][0]{1,2})?-(${baseTs})(-[1-9][0]{1,2})?$`), ([, b1, v1, b2, v2]) => `text-${b1}${v1 ?? '-500'} dark:text-${b2}${v2 ?? '-500'}`],
    
    // --> Background Tokens
    [new RegExp(`^ato-bg-(${baseTs})-([1-9][0]{1,2})-([1-9][0]{2})$`), ([, b, v1, v2]) => `bg-${b}-${v1} dark:bg-${b}-${v2}`],

    [new RegExp(`^ato-bg-inverse-(${baseTs})(-[1-9][0]{1,2})?-(${baseTs})(-[1-9][0]{1,2})?$`), ([, b1, v1, b2, v2]) => `bg-${b1}${['white', 'black'].includes(b1) ? '' : v1 ?? '-500'} dark:bg-${b2}${['white', 'black'].includes(b2) ? '' : v2 ?? '-500'}`],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind(),
    presetAtoUI()
  ]
})
