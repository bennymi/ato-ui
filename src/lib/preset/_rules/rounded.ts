import type { Shortcut } from '@unocss/core';

import { reg_p } from '../utils/regex';

export const roundedSCs: Shortcut[] = [
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
        new RegExp(`rounded-${reg_p}-token-base`), 
        ([_, side]) => `rounded-${side}-[var(--theme-rounded-base)]`,
        {
            autocomplete: `rounded-${reg_p}-token-base`
        }
    ],
    [
        new RegExp(`rounded-${reg_p}-token-container`),
        ([_, side]) => `rounded-${side}-[var(--theme-rounded-container)]`,
        {
            autocomplete: `rounded-${reg_p}-token-container`
        }
    ],
]