import type { Rule, Shortcut } from '@unocss/core';

import { directionsJ } from '../../types/directions.d';
import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors.d';

export const backgroundRules: Rule[] = [
    // Radial background gradients
    [
        new RegExp(`^bg-radial-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2]) => ({
          "background": `radial-gradient(rgb(var(--color-${c1}-${s1 ?? '500'})), rgb(var(--color-${c2}-${s2 ?? '500'})))`
        }),
        {
            autocomplete: [
                `bg-radial-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
                `bg-radial-(${themeColorsJ})-(${themeColorsJ})`
            ]
        }
    ],
    [
        new RegExp(`^bg-radial-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2, c3, s3]) => ({
          "background": `radial-gradient(rgb(var(--color-${c1}-${s1 ?? '500'})), rgb(var(--color-${c2}-${s2 ?? '500'})), rgb(var(--color-${c3}-${s3 ?? '500'})))`
        }),
        {
            autocomplete: [
                `bg-radial-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
                `bg-radial-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`
            ]
        }
    ]
];

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

    // Background gradients
    [
        new RegExp(`^bg-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, c1, s1, c2, s2, c3, s3]) => `bg-gradient-to-${dir} from-${c1}-${s1 ?? '500'} via-${c2}-${s2 ?? '500'} to-${c3}-${s3 ?? '500'}`, 
        {
            autocomplete: [`bg-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^bg-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, c1, s1, c2, s2]) => `bg-gradient-to-${dir} from-${c1}-${s1 ?? '500'} to-${c2}-${s2 ?? '500'}`, 
        {
            autocomplete: [
                `bg-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `bg-(${directionsJ})-${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
]