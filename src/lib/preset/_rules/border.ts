import type { Shortcut } from '@unocss/core';

import { cso, reg_c, reg_c_sO_oO2, reg_p, reg_s } from '../utils/regex';

export const borderSCs: Shortcut[] = [
    // rounded regular
    [
        `rounded-token-base`, 
        `rounded-[var(--theme-rounded-base)]`, 
    ],
    [
        `rounded-token-container`,
        `rounded-[var(--theme-rounded-container)]`
    ],
    [
        new RegExp(`^rounded-${reg_p}-token-base$`), 
        ([_, side]) => `rounded-${side}-[var(--theme-rounded-base)]`,
        {
            autocomplete: `rounded-${reg_p}-token-base`
        }
    ],
    [
        new RegExp(`^rounded-${reg_p}-token-container$`),
        ([_, side]) => `rounded-${side}-[var(--theme-rounded-container)]`,
        {
            autocomplete: `rounded-${reg_p}-token-container`
        }
    ],

    // Border inverse light - dark
    [
        new RegExp(`^border-inverse-${reg_c_sO_oO2}-${reg_c_sO_oO2}$`),
        ([_, c1, s1, o1, c2, s2, o2]) => `border-${cso(c1, s1, o1)} dark:border-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                `border-inverse-${reg_c}-${reg_c}`,
                `border-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `border-inverse-${reg_c}/<num>-${reg_c}/<num>`
            ]
        }
    ]
]