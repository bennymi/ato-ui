import type { Shortcut } from '@unocss/core';

import { baseTs, colorVs } from '../../types/colors.d';

export const shortcuts: Shortcut[] = [
    // [new RegExp(`^(${types.join('|')})-(${baseTs})-([3-9][0]{2})$`), ([, type, base, value]) => `${type}-[color:var(--color-${base + '-' + value})]`],
    // ['text-example-primary-800', `text-[color:var(--${'primary'}-${800})]`],
    // --> Text Tokens
    // [new RegExp(`^text-(${baseTs})-([1-9][0]{2})$`), ([, t, c]) => `text-${baseColors[t]}-${c}`],
    // [new RegExp(`^text-(${baseTs})-([1-9][0]{2})(/[1-9][0-9]?|100)?$`), ([, t, c, d]) => `text-${baseColors[t]}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, {autocomplete: [`text-(${baseTs})-(${colorVs})`]}],

    // Text with opacity values
    [
        new RegExp(`^text-(${baseTs})-(${colorVs})(/[1-9][0-9]?|100)?$`), 
        ([, t, c, d]) => `text-${t}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, 
        {
            autocomplete: [`text-(${baseTs})-(${colorVs})`]
        }
    ],

    // Text
    [
        new RegExp(`^ato-text-(${baseTs})-(${colorVs})-(${colorVs})$`), 
        ([, b, v1, v2]) => `text-${b}-${v1} dark:text-${b}-${v2}`,
        {
            autocomplete: `ato-text-(${baseTs})-(${colorVs})-(${colorVs})`
        }
    ],

    // Text Inverse
    [
        new RegExp(`^ato-text-inverse-(${baseTs})(-${colorVs})?-(${baseTs})(-${colorVs})?$`), 
        ([, b1, v1, b2, v2]) => `text-${b1}${['white', 'black'].includes(b1) ? '' : v1 ?? '-500'} dark:text-${b2}${['white', 'black'].includes(b2) ? '' : v2 ?? '-500'}`,
        {
            // autocomplete: `ato-text-inverse-(${baseTs})-(${baseTs})`
            autocomplete: `ato-text-inverse-$colors`
        }
    ],

    // Background Tokens
    [
        new RegExp(`^ato-bg-(${baseTs})-(${colorVs})-([1-9][0]{2})$`), 
        ([, b, v1, v2]) => `bg-${b}-${v1} dark:bg-${b}-${v2}`,
        {
            autocomplete: `ato-bg-(${baseTs})-(${baseTs})`
        }
    ],

    // Background Inverse Tokens
    [
        new RegExp(`^ato-bg-inverse-(${baseTs})(-${colorVs})?-(${baseTs})(-${colorVs})?$`), 
        ([, b1, v1, b2, v2]) => `bg-${b1}${['white', 'black'].includes(b1) ? '' : v1 ?? '-500'} dark:bg-${b2}${['white', 'black'].includes(b2) ? '' : v2 ?? '-500'}`,
        {
            autocomplete: `ato-bg-inverse-(${baseTs})-(${baseTs})`
        }
    ],
]