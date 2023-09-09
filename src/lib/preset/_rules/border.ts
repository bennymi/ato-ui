import type { Shortcut } from '@unocss/core';

import { cso, reg_c, reg_c_sO_oO, reg_oO, reg_p, reg_pO, reg_s } from '../utils/regex';

export const borderSCs: Shortcut[] = [
    // rounded regular
    [
        `rounded-container`,
        `rounded-[var(--ato-container-radius)]`
    ],
    [
        new RegExp(`^rounded-${reg_p}-container$`),
        ([, side]: string[]) => `rounded-${side}-[var(--ato-container-radius)]`,
        {
            autocomplete: `rounded-${reg_p}-container`
        }
    ],
    [
        new RegExp(`rounded${reg_pO}-btn`), 
        ([, side]: string[]) => `rounded-${side ? `${side}-` : ''}[var(--btn-radius)]`, 
    ],
    [
        new RegExp(`rounded${reg_pO}-btn-icon`), 
        ([, side]: string[]) => `rounded-${side ? `${side}-` : ''}[var(--btn-icon-radius)]!`, 
    ],

    // Border light - dark
    [
        new RegExp(`^border-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`),
        ([, c1, s1, o1, s2, o2]: string[]) => `border-${cso(c1, s1, o1)} dark:border-${cso(c1, s2, o2)}`,
        {
            autocomplete: [
                `border-${reg_c}-${reg_c}`,
                `border-${reg_c}-${reg_s}`,
                `border-${reg_c}-${reg_s}-${reg_c}`,
                `border-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `border-${reg_c}/<percent>`,
                `border-${reg_c}/<percent>-${reg_c}`,
                `border-${reg_c}/<percent>-${reg_c}/<percent>`
            ]
        }
    ],

    // Ring light - dark
    [
        new RegExp(`^ring-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`),
        ([, c1, s1, o1, s2, o2]: string[]) => `ring-${cso(c1, s1, o1)} dark:ring-${cso(c1, s2, o2)}`,
        {
            autocomplete: [
                `ring-${reg_c}-${reg_c}`,
                `ring-${reg_c}-${reg_s}`,
                `ring-${reg_c}-${reg_s}-${reg_c}`,
                `ring-${reg_c}-${reg_c}-${reg_s}`,
                `ring-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `ring-${reg_c}/<percent>`,
                `ring-${reg_c}/<percent>-${reg_c}`,
                `ring-${reg_c}/<percent>-${reg_c}/<percent>`
            ]
        }
    ],

    // Border inverse light - dark
    [
        new RegExp(`^border-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}$`),
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `border-${cso(c1, s1, o1)} dark:border-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                `border-inverse`,
                `border-inverse-${reg_c}`,
                `border-inverse-${reg_c}-${reg_c}`,
                `border-inverse-${reg_c}-${reg_s}`,
                `border-inverse-${reg_c}-${reg_s}-${reg_c}`,
                `border-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `border-inverse-${reg_c}/<percent>`,
                `border-inverse-${reg_c}/<percent>-${reg_c}`,
                `border-inverse-${reg_c}/<percent>-${reg_c}/<percent>`
            ]
        }
    ],

    // Ring inverse light - dark
    [
        new RegExp(`^ring-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}$`),
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `ring-${cso(c1, s1, o1)} dark:ring-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                `ring-inverse`,
                `ring-inverse-${reg_c}`,
                `ring-inverse-${reg_c}-${reg_c}`,
                `ring-inverse-${reg_c}-${reg_s}`,
                `ring-inverse-${reg_c}-${reg_s}-${reg_c}`,
                `ring-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `ring-inverse-${reg_c}/<percent>`,
                `ring-inverse-${reg_c}/<percent>-${reg_c}`,
                `ring-inverse-${reg_c}/<percent>-${reg_c}/<percent>`
            ]
        }
    ],
]