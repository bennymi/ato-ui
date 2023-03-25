import type { Shortcut } from '@unocss/core';

import { directionsJ } from '../../types/directions.d';
import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors.d';

export const spinnerSCs: Shortcut[] = [
    [
        's-squares-hover',
        'relative w-12 h-12 bg-primary-500 rotate-x-65 rotate-z-45 text-white animate-layers1 animate-alternate after:(content-none absolute inset-0 bg-secondary-500/75 animate-layerTr animate-alternate animate-delay-500)'
    ],

    // Flipping Square
    [
        new RegExp(`^s-squares-flip-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `w-12 h-12 inline-block relative bg-${c}-${s ?? '500'} box-border animate-flipXY`,
        {
            autocomplete: [
                `s-squares-flip-(${themeColorsJ})`,
                `s-squares-flip-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
    [
        // With 2 gradients
        new RegExp(`^s-squares-flip-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2]) => `w-12 h-12 inline-block relative  box-border animate-flipXY bg-radial-${c1}${s1 ? `-${s1}` : ''}-${c2}${s2 ? `-${s2}` : ''}`,
        {
            autocomplete: [
                `s-squares-flip-(${themeColorsJ})-(${themeColorsJ})`,
                `s-squares-flip-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
    [
        // With 3 gradients
        new RegExp(`^s-squares-flip-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2, c3, s3]) => `w-12 h-12 inline-block relative  box-border animate-flipXY bg-radial-${c1}${s1 ? `-${s1}` : ''}-${c2}${s2 ? `-${s2}` : ''}-${c3}${s3 ? `-${s3}` : ''}`,
        {
            autocomplete: [
                `s-squares-flip-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `s-squares-flip-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
];