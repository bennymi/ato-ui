import type { Shortcut } from '@unocss/core';

import { allColorsJoined, themeColorsJoined, colorValuesJoined } from '../../types/colors.d';
import { directionsJoined } from '../../types/directions.d';

const gradientClasses = 'bg-clip-text text-transparent';

export const shortcuts: Shortcut[] = [
    // Text on base colours
    [
        new RegExp(`^text-on-(${themeColorsJoined})$`),
        ([, b]) => `text-[color:var(--on-${b})]`,
        {
            autocomplete: `text-on-$colors`
        }
    ],

    // Text with opacity values
    // [
    //     new RegExp(`^text-(${themeColorsJoined})-(${colorValuesJoined})(/[1-9][0-9]?|100)?$`), 
    //     ([, t, c, d]) => `text-${t}-${c}${d ? ' opacity-[' + parseInt(d.substring(1)) / 100 + ']' : ''}`, 
    //     {
    //         autocomplete: [`text-(${themeColorsJoined})-(${colorValuesJoined})`]
    //     }
    // ],

    // Text
    [
        new RegExp(`^ato-text-(${themeColorsJoined})-(${colorValuesJoined})-(${colorValuesJoined})$`), 
        ([, b, v1, v2]) => `text-${b}-${v1} dark:text-${b}-${v2}`,
        {
            autocomplete: `ato-text-(${themeColorsJoined})-(${colorValuesJoined})-(${colorValuesJoined})`
        }
    ],

    // Text Inverse
    [
        new RegExp(`^ato-text-inverse-(${themeColorsJoined})(-${colorValuesJoined})?-(${themeColorsJoined})(-${colorValuesJoined})?$`), 
        ([, b1, v1, b2, v2]) => `text-${b1}${['white', 'black'].includes(b1) ? '' : v1 ?? '-500'} dark:text-${b2}${['white', 'black'].includes(b2) ? '' : v2 ?? '-500'}`,
        {
            // autocomplete: `ato-text-inverse-(${themeColorsJoined})-(${themeColorsJoined})`
            autocomplete: `ato-text-inverse-$colors`
        }
    ],

    // Text gradients
    [
        new RegExp(`^text-gradient-(${directionsJoined})-(${themeColorsJoined})-?(${colorValuesJoined})?-(${themeColorsJoined})-?(${colorValuesJoined})?-(${themeColorsJoined})-?(${colorValuesJoined})?$`), 
        ([, dir, b1, v1, b2, v2, b3, v3]) => `${gradientClasses} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'} via-${b2}-${v2 ?? '500'} to-${b3}-${ v3 ?? '500'}`, 
        {
            autocomplete: [`text-gradient-(${directionsJoined})-(${themeColorsJoined})-(${themeColorsJoined})-(${themeColorsJoined})`]
        }
    ],
    [
        new RegExp(`^text-gradient-(${directionsJoined})-(${themeColorsJoined})-?(${colorValuesJoined})?-(${themeColorsJoined})-?(${colorValuesJoined})?$`), 
        ([, dir, b1, v1, b2, v2]) => `${gradientClasses} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'} to-${b2}-${v2 ?? '500'}`, 
        {
            autocomplete: [`text-gradient-(${directionsJoined})-(${themeColorsJoined})-(${themeColorsJoined})`]
        }
    ],
]