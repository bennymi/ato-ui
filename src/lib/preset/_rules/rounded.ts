import type { Shortcut } from '@unocss/core';

const rounded_pos = ['l', 'r', 't', 'b', 'tl', 'tr', 'bl', 'br'];
const rounded_pos_j = rounded_pos.join('|');

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
        new RegExp(`rounded-(${rounded_pos_j})-token-base`), 
        ([_, side]) => `rounded-${side}-[var(--theme-rounded-base)]`, 
    ],
    [
        new RegExp(`rounded-(${rounded_pos_j})-token-container`),
        ([_, side]) => `rounded-${side}-[var(--theme-rounded-container)]`
    ],
]