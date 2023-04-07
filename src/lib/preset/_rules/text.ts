import type { Shortcut } from '@unocss/core';

import { default_dir, reg_dO, reg_c, reg_s, reg_c_sO, cs, reg_d } from '../utils/regex';

const gradientClasses = 'bg-clip-text text-transparent';

export const textSCs: Shortcut[] = [
    // Text on base colours
    [
        new RegExp(`^text-on-${reg_c}$`),
        ([, c]) => `text-[color:rgb(var(--on-${c}))]`,
        {
            autocomplete: `text-on-$colors`
        }
    ],

    // Text with opacity values
    // [
    //     new RegExp(`^text-(${themeColorsJ})-(${shadesJ})(/[1-9][0-9]?|100)?$`), 
    //     ([, t, c, d]) => `text-${t}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, 
    //     {
    //         autocomplete: [`text-(${themeColorsJ})-(${shadesJ})`]
    //     }
    // ],

    // Text
    [
        new RegExp(`^text-${reg_c}-${reg_s}-${reg_s}$`), 
        ([, b, s1, s2]) => `text-${b}-${s1} dark:text-${b}-${s2}`,
        {
            autocomplete: `ato-text-${reg_c}-${reg_s}-${reg_s}`
        }
    ],

    // Text Inverse
    [
        new RegExp(`^text-inverse-${reg_c_sO}-${reg_c_sO}$`), 
        ([, c1, s1, c2, s2]) => `text-${cs(c1, s1)} dark:text-${cs(c2, s2)}`,
        {
            // autocomplete: `ato-text-inverse-(${themeColorsJ})-(${themeColorsJ})`
            autocomplete: [
                `ato-text-inverse-${reg_c}-${reg_c}`,
                `ato-text-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
            ]
        }
    ],

    // Text gradients
    [
        new RegExp(`^text-gradient${reg_dO}-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`), 
        ([, d, c1, s1, c2, s2, c3, s3]) => `${gradientClasses} bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} via-${cs(c2, s2)} to-${cs(c3, s3)}`, 
        {
            autocomplete: [`text-gradient-${reg_d}-${reg_c}-${reg_c}-${reg_c}`]
        }
    ],
    [
        new RegExp(`^text-gradient${reg_dO}-${reg_c_sO}-${reg_c_sO}$`), 
        ([, d, c1, s1, c2, s2]) => `${gradientClasses} bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} to-${cs(c2, s2)}`, 
        {
            autocomplete: [`text-gradient-${reg_d}-${reg_c}-${reg_c}`]
        }
    ],
]