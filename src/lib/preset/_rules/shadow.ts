import type { Shortcut } from '@unocss/core';

import { cso, reg_c, reg_c_sO_oO, reg_oO, reg_s } from '../utils/regex';

export const shadowSCs: Shortcut[] = [
    // Shadow light - dark
    [
        new RegExp(`^shadow-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`), 
        ([, c, s1, o1, s2, o2]: string[]) => `shadow-${cso(c, s1, o1)} dark:shadow-${cso(c, s2, o2)}`,
        {
            autocomplete: [
                `shadow-${reg_c}-${reg_s}-${reg_s}`,
                `shadow-${reg_c}-${reg_s}/<num>-${reg_s}/<num>`
            ]
        }
    ],

    // Shadow inverse light - dark
    [
        new RegExp(`^shadow-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}$`),
        ([_, c1, s1, o1, c2, s2, o2]: string[]) => `shadow-${cso(c1, s1, o1)} dark:shadow-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                `shadow-inverse-${reg_c}-${reg_c}`,
                `shadow-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `shadow-inverse-${reg_c}-${reg_s}/<num>-${reg_c}-${reg_s}/<num>`,
                `shadow-inverse-${reg_c}/<num>-${reg_c}/<num>`
            ]
        }
    ]
]