import type { Shortcut } from '@unocss/core';

import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors.d';

export const spinnerSCs: Shortcut[] = [
    [
        's-squares-hover',
        'relative w-12 h-12 bg-primary-500 rotate-x-65 rotate-z-45 text-white animate-layers1 animate-alternate after:(content-none absolute inset-0 bg-secondary-500/75 animate-layerTr animate-alternate)'
    ]
];