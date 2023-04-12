import type { Shortcut } from '@unocss/core';

import { default_dir, reg_dO, reg_c, reg_s, reg_c_s, reg_c_sO, cs, reg_d } from '../utils/regex';

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
        ([, c, s1, s2]) => `text-${c}-${s1} dark:text-${c}-${s2}`,
        {
            autocomplete: `ato-text-${reg_c}-${reg_s}-${reg_s}`
        }
    ],
    [
        new RegExp(`^text-${reg_c}-${reg_s}-${reg_s}-${reg_s}-${reg_s}$`), 
        ([, c, s1, s2, s3, s4]) => `text-${cs(c, s1)} hover:text-${cs(c, s2)} dark:(text-${cs(c, s3)} hover:text-${cs(c, s4)})`,
        {
            autocomplete: `ato-text-${reg_c}-${reg_s}-${reg_s}-${reg_s}-${reg_s}`
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
    [
        new RegExp(`^text-inverse-${reg_c_s}-${reg_s}-${reg_c_s}-${reg_s}$`), 
        ([, c1, s11, s12, c2, s21, s22]) => `text-${cs(c1, s11)} hover:text-${cs(c1, s12)} dark:(text-${cs(c2, s21)} hover:text-${cs(c2, s22)})`,
        {
            // autocomplete: `ato-text-inverse-(${themeColorsJ})-(${themeColorsJ})`
            autocomplete: [
                `ato-text-inverse-${reg_c_s}-${reg_s}-${reg_c_s}-${reg_s}`
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