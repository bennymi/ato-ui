import type { Shortcut } from '@unocss/core';

import { themeColorsJ, shadesJ } from '../../types/colors.d';
import { directionsJ } from '../../types/directions.d';

const gradientClasses = 'bg-clip-text text-transparent';

export const textSCs: Shortcut[] = [
    // Text on base colours
    [
        new RegExp(`^text-on-(${themeColorsJ})$`),
        ([, b]) => `text-[color:rgb(var(--on-${b}))]`,
        {
            autocomplete: `text-on-$colors`
        }
    ],

    // Text with opacity values
    // [
    //     new RegExp(`^text-(${themeColorsJ})-(${shadesJ})(/[1-9][0-9]?|100)?$`), 
    //     ([, t, c, d]) => `text-${t}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, 
    //     {
    //         autocomplete: [`text-(${themeColorsJ})-(${shadesJ})`]
    //     }
    // ],

    // Text
    [
        new RegExp(`^ato-text-(${themeColorsJ})-(${shadesJ})-(${shadesJ})$`), 
        ([, b, v1, v2]) => `text-${b}-${v1} dark:text-${b}-${v2}`,
        {
            autocomplete: `ato-text-(${themeColorsJ})-(${shadesJ})-(${shadesJ})`
        }
    ],

    // Text Inverse
    [
        new RegExp(`^ato-text-inverse-(${themeColorsJ})(-${shadesJ})?-(${themeColorsJ})(-${shadesJ})?$`), 
        ([, b1, v1, b2, v2]) => `text-${b1}${['white', 'black'].includes(b1) ? '' : v1 ?? '-500'} dark:text-${b2}${['white', 'black'].includes(b2) ? '' : v2 ?? '-500'}`,
        {
            // autocomplete: `ato-text-inverse-(${themeColorsJ})-(${themeColorsJ})`
            autocomplete: `ato-text-inverse-$colors`
        }
    ],

    // Text gradients
    [
        new RegExp(`^text-gradient-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, b1, v1, b2, v2, b3, v3]) => `${gradientClasses} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'} via-${b2}-${v2 ?? '500'} to-${b3}-${ v3 ?? '500'}`, 
        {
            autocomplete: [`text-gradient-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^text-gradient-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, b1, v1, b2, v2]) => `${gradientClasses} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'} to-${b2}-${v2 ?? '500'}`, 
        {
            autocomplete: [`text-gradient-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
]