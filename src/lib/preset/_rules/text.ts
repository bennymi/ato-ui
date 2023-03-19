import type { Shortcut } from '@unocss/core';

import { baseTs, colorVs } from '../../types/colors.d';

export const shortcuts: Shortcut[] = [
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
]