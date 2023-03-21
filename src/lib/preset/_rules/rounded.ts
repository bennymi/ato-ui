import type { Shortcut } from '@unocss/core';


export const roundedSCs: Shortcut[] = [
    // rounded regular
    [
        `rounded-token-base`, 
        `rounded-[var(--theme-rounded-base)]`, 
    ],
    [
        `rounded-token-container`,
        `rounded-[var(--theme-rounded-container)]`
    ]
]