import type { Shortcut } from '@unocss/core';

import { baseTs, colorVs } from '../../types/colors.d';

export const shortcuts: Shortcut[] = [
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