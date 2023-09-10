import type { Rule, Shortcut } from '@unocss/core';

import { default_dir, reg_dO, reg_c, reg_s, reg_c_s, reg_c_sO, cs, reg_d, reg_oO, cso, reg_c_sO_oO, reg_c_s_oO, convert_opacity } from '../utils/regex';

const gradientClasses = 'bg-clip-text text-transparent';

export const textRules: Rule[] = [
    [/^font-weight-\[([-a-z]+)\]$/, ([, w]) => ({ 'font-weight': `var(${w})` })]
]

export const textSCs: Shortcut[] = [
    // Text on base colours
    [
        new RegExp(`^text-on-${reg_c_sO_oO}$`),
        ([, c, s, op]: string[]) => `text-[color:rgb(var(--on-${cs(c, s)}))]${op ? `/${convert_opacity(op)}` : ''}`
    ],
    [
        new RegExp(`^text-on-${reg_c_s_oO}-${reg_s}${reg_oO}$`),
        ([, c1, s1, o1, s2, o2]: string[]) => `text-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:text-[color:rgb(var(--on-${cs(c1, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: [
                'text-on',
                `text-on-${reg_c}`,
                `text-on-${reg_c}-${reg_s}`,
                `text-on-${reg_c}-${reg_s}-${reg_s}`,
            ]
        }
    ],

    // Text Light - Dark
    [
        new RegExp(`^text-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`), 
        ([, c, s1, o1, s2, o2]: string[]) => `text-${cso(c, s1, o1)} dark:text-${cso(c, s2, o2)}`,
        {
            autocomplete: [
                `text-${reg_c}-${reg_s}-${reg_s}`
            ]
        }
    ],

    // Text Light - Dark + Hover
    [
        new RegExp(`^text-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`), 
        ([, c, s1, o1, s2, o2, s3, o3, s4, o4]: string[]) => `text-${cso(c, s1, o1)} hover:text-${cso(c, s2, o2)} dark:(text-${cso(c, s3, o3)} hover:text-${cso(c, s4, o4)})`,
        {
            autocomplete: `text-${reg_c}-${reg_s}-${reg_s}-${reg_s}-${reg_s}`
        }
    ],

    // Text Inverse
    [
        new RegExp(`^text-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `text-${cso(c1, s1, o1)} dark:text-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                'text-inverse',
                `text-inverse-${reg_c}`,
                `text-inverse-${reg_c}-${reg_s}`,
                `text-inverse-${reg_c}-${reg_c}`,
                `text-inverse-${reg_c}-${reg_c}-${reg_s}`,
                `text-inverse-${reg_c}-${reg_s}-${reg_c}`,
                `text-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
            ]
        }
    ],
    [
        new RegExp(`^text-inverse-${reg_c_s}${reg_oO}-${reg_s}${reg_oO}-${reg_c_s}${reg_oO}-${reg_s}${reg_oO}$`), 
        ([, c1, s11, o11, s12, o12, c2, s21, o21, s22, o22]: string[]) => `text-${cso(c1, s11, o11)} hover:text-${cso(c1, s12, o12)} dark:(text-${cso(c2, s21, o21)} hover:text-${cso(c2, s22, o22)})`,
    ],

    // Text gradients
    [
        new RegExp(`^text-gradient${reg_dO}-${reg_c_sO}-${reg_c_sO}$`), 
        ([, d, c1, s1, c2, s2]: string[]) => `${gradientClasses} bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} to-${cs(c2, s2)}`
    ],
    [
        new RegExp(`^text-gradient${reg_dO}-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`), 
        ([, d, c1, s1, c2, s2, c3, s3]: string[]) => `${gradientClasses} bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} via-${cs(c2, s2)} to-${cs(c3, s3)}`, 
        {
            autocomplete: [
                'text-gradient',
                `text-gradient-${reg_c}`,
                `text-gradient-${reg_c}-${reg_s}`,
                `text-gradient-${reg_d}`,
                `text-gradient-${reg_d}-${reg_c}`,
                `text-gradient-${reg_d}-${reg_c}-${reg_s}`,
                `text-gradient-${reg_c}-${reg_c}`,
                `text-gradient-${reg_d}-${reg_c}-${reg_c}`,
                `text-gradient-${reg_d}-${reg_c}-${reg_c}-${reg_c}`,
                `text-gradient-${reg_c}-${reg_c}-${reg_c}`
            ]
        }
    ],
]