import type { Shortcut } from '@unocss/core';

import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors.d';

export const backgroundSCs: Shortcut[] = [
    // Opacity
    // [
    //     new RegExp(`^bg-(${allColorsJ})(/[1-9][0-9]?|100)?$`), 
    //     ([, b, op]) => `bg-${b} ${op ? 'bg-opacity-[' + parseInt(op.substring(1)) / 100 + ']' : ''}`,
    //     {
    //         autocomplete: `bg-(${allColorsJ})`
    //     }
    // ],

    // Background Tokens
    [
        new RegExp(`^ato-bg-(${themeColorsJ})-(${shadesJ})-(${shadesJ})$`), 
        ([, b, v1, v2]) => `bg-${b}-${v1} dark:bg-${b}-${v2}`,
        {
            autocomplete: `ato-bg-(${themeColorsJ})-(${shadesJ})-(${shadesJ})`
        }
    ],

    // Background Inverse Tokens
    [
        new RegExp(`^ato-bg-inverse-(${allColorsJ})-?(${shadesJ})?-(${allColorsJ})-?(${shadesJ})?$`), 
        ([, b1, v1, b2, v2]) => `bg-${b1}${['white', 'black'].includes(b1) ? '' : v1 ? `-${v1}` : '-500'} dark:bg-${b2}${['white', 'black'].includes(b2) ? '' : v2 ? `-${v2}` : '-500'}`,
        {
            autocomplete: [
                `ato-bg-inverse-$colors-(${allColorsJ})`, 
                `ato-bg-inverse-$colors-(${shadesJ})-$colors`, 
                `ato-bg-inverse-$colors-(${shadesJ})-$colors-(${shadesJ})`
            ]
        }
    ],
]