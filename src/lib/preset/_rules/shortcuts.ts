import type { Shortcut } from '@unocss/core';

import { shortcuts as backgroundsSC } from './background';
import { shortcuts as buttonsSC } from './buttons';
import { shortcuts as cardsSC } from './cards';
import { shortcuts as chipsSC } from './chips';
import { shortcuts as textsSC } from './text';

export const shortcuts: Shortcut[] = [
    ...backgroundsSC,
    ...buttonsSC,
    ...cardsSC,
    ...chipsSC,
    ...textsSC
    // [new RegExp(`^(${types.join('|')})-(${baseTs})-([3-9][0]{2})$`), ([, type, base, value]) => `${type}-[color:var(--color-${base + '-' + value})]`],
    // ['text-example-primary-800', `text-[color:var(--${'primary'}-${800})]`],
    // --> Text Tokens
    // [new RegExp(`^text-(${baseTs})-([1-9][0]{2})$`), ([, t, c]) => `text-${baseColors[t]}-${c}`],
    // [new RegExp(`^text-(${baseTs})-([1-9][0]{2})(/[1-9][0-9]?|100)?$`), ([, t, c, d]) => `text-${baseColors[t]}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, {autocomplete: [`text-(${baseTs})-(${colorVs})`]}],

    
]