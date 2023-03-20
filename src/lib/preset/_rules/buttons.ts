import type { Shortcut } from '@unocss/core';

import { allColorsJoined, themeColorsJoined, colorValuesJoined } from '../../types/colors.d';
import { directionsJoined } from '../../types/directions.d';

const baseStyles = 'px-3 py-1 inline-flex justify-center items-center font-medium space-x-2 rounded-token-base disabled:(opacity-80 cursor-not-allowed)';

export const shortcuts: Shortcut[] = [
    // Button regular
    [
        new RegExp(`^btn-(${themeColorsJoined})$`), 
        ([, b]) => `${baseStyles} bg-${b}-500 text-on-${b} hover:bg-${b}-600 disabled:hover:bg-${b}-500`, 
        {
            autocomplete: [`btn-(${themeColorsJoined})`, 'btn-primary', 'btn-secondary', 'btn-tertiary']
        }
    ],
    
    // Button glass
    [
        new RegExp(`^btn-glass-(${themeColorsJoined})$`), 
        ([, b]) => `${baseStyles} bg-${b}-500/40 text-on-${b} ring-1 ring-${b}-600 hover:bg-${b}-600 disabled:hover:bg-${b}-500`, 
        {
            autocomplete: [`btn-glass-(${themeColorsJoined})`]
        }
    ],

    // Button gradients
    [
        new RegExp(`^btn-gradient-(${directionsJoined})-(${themeColorsJoined})-(${themeColorsJoined})-(${themeColorsJoined})$`), 
        ([, dir, b1, b2, b3]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}-500 via-${b2}-500 to-${b3}-500 hover:brightness-110`, 
        {
            autocomplete: [`btn-gradient-(${directionsJoined})-(${themeColorsJoined})-(${themeColorsJoined})-(${themeColorsJoined})`]
        }
    ],
    [
        new RegExp(`^btn-gradient-(${directionsJoined})-(${themeColorsJoined})-(${themeColorsJoined})$`), 
        ([, dir, b1, b2]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}-500 to-${b2}-500 hover:brightness-110`, 
        {
            autocomplete: [`btn-gradient-(${directionsJoined})-(${themeColorsJoined})-(${themeColorsJoined})`]
        }
    ],
    [
        new RegExp(`^btn-gradient-(${directionsJoined})-(${themeColorsJoined})-?(${colorValuesJoined})?-(${themeColorsJoined})-(${colorValuesJoined})?$`), 
        ([, dir, b1, v1, b2, v2]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}${v1 ? `-${v1}` : '-500'} to-${b2}${v2 ? `-${v2}` : '-500'} hover:brightness-110`, 
        {
            autocomplete: [`btn-gradient-(${directionsJoined})-(${themeColorsJoined})-(${themeColorsJoined})`]
        }
    ],
]