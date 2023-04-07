import type { Rule, Shortcut } from '@unocss/core';

import { directionsJ } from '../../types/directions.d';
import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors.d';
import { default_dir, reg_dO, reg_c, reg_s, reg_c_sO, cs, reg_d, reg_c_sO_oO, cso, reg_sO } from '../utils/regex';

export const backgroundRules: Rule[] = [
    // Radial background gradients
    [
        new RegExp(`^bg-radial-${reg_c_sO}-${reg_c_sO}$`),
        ([_, c1, s1, c2, s2]) => ({
          "background": `radial-gradient(rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})))`
        }),
        {
            autocomplete: [
                `bg-radial-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `bg-radial-(${themeColorsJ})-(${themeColorsJ})`
            ]
        }
    ],
    [
        new RegExp(`^bg-radial-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
        ([_, c1, s1, c2, s2, c3, s3]) => ({
          "background": `radial-gradient(rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})), rgb(var(--color-${cs(c3, s3)})))`
        }),
        {
            autocomplete: [
                `bg-radial-${reg_c}-${reg_s}-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
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
        new RegExp(`^bg-${reg_c}-${reg_s}-${reg_s}$`), 
        ([, b, s1, s2]) => `bg-${b}-${s1} dark:bg-${b}-${s2}`,
        {
            autocomplete: `bg-${reg_c}-${reg_s}-(${shadesJ})`
        }
    ],

    // Background Inverse Tokens
    [
        new RegExp(`^bg-inverse-(${allColorsJ})${reg_sO}-(${allColorsJ})${reg_sO}$`), 
        ([, c1, s1, c2, s2]) => `bg-${cs(c1, s1)} dark:bg-${cs(c2, s2)}`,
        {
            autocomplete: [
                `bg-inverse-$colors-(${allColorsJ})`, 
                `bg-inverse-$colors-(${shadesJ})-$colors`, 
                `bg-inverse-$colors-(${shadesJ})-$colors-(${shadesJ})`
            ]
        }
    ],

    // Background gradients
    [
        new RegExp(`^bg${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2, c3, s3, o3]) => `bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, o1)} via-${cso(c2, s2, o2)} to-${cso(c3, s3, o3)}`, 
        {
            autocomplete: [`bg-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^bg${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2]) => `bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, o1)} to-${cso(c2, s2, o2)}`, 
        {
            autocomplete: [
                `bg-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `bg-(${directionsJ})-${reg_c}-${reg_s}-${reg_c}-${reg_s}`
            ]
        }
    ],
]