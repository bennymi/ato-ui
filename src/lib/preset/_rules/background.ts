import type { Shortcut } from '@unocss/core';

import { baseTs, colorVs } from '../../types/colors.d';

export const shortcuts: Shortcut[] = [
    // Opacity
    // [
    //     new RegExp(`^bg-(${baseTs})(/[1-9][0-9]?|100)?$`), 
    //     ([, b, op]) => `bg-${b} ${op ? 'bg-opacity-[' + parseInt(op.substring(1)) / 100 + ']' : ''}`,
    //     {
    //         autocomplete: `bg-(${baseTs})`
    //     }
    // ],

    // Background Tokens
    [
        new RegExp(`^ato-bg-(${baseTs})-(${colorVs})-(${colorVs})$`), 
        ([, b, v1, v2]) => `bg-${b}-${v1} dark:bg-${b}-${v2}`,
        {
            autocomplete: `ato-bg-(${baseTs})-(${colorVs})-(${colorVs})`
        }
    ],

    // Background Inverse Tokens
    [
        new RegExp(`^ato-bg-inverse-(${baseTs})-?(${colorVs})?-(${baseTs})-?(${colorVs})?$`), 
        ([, b1, v1, b2, v2]) => `bg-${b1}${['white', 'black'].includes(b1) ? '' : v1 ? `-${v1}` : '-500'} dark:bg-${b2}${['white', 'black'].includes(b2) ? '' : v2 ? `-${v2}` : '-500'}`,
        {
            autocomplete: [`ato-bg-inverse-$colors-(${baseTs})`, `ato-bg-inverse-$colors-(${colorVs})-$colors`, `ato-bg-inverse-$colors-(${colorVs})-$colors-(${colorVs})`]
        }
    ],
]