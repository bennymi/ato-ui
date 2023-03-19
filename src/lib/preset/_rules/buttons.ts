import type { Shortcut } from '@unocss/core';

import { baseTs, colorVs } from '../../types/colors.d';
import { dirVs } from '../../types/directions.d';

const baseStyles = 'px-3 py-1 inline-flex justify-center items-center space-x-2 rounded-token-base disabled:(opacity-80 cursor-not-allowed)';

export const shortcuts: Shortcut[] = [
    // Button regular
    [
        new RegExp(`^btn-(${baseTs})$`), 
        ([, b]) => `${baseStyles} bg-${b}-500 text-on-${b} hover:bg-${b}-600 disabled:hover:bg-${b}-500`, 
        {
            autocomplete: [`btn-(${baseTs})`]
        }
    ],
    
    // Button glass
    [
        new RegExp(`^btn-glass-(${baseTs})$`), 
        ([, b]) => `${baseStyles} bg-${b}-500/40 text-on-${b} ring-1 ring-${b}-600 hover:bg-${b}-600 disabled:hover:bg-${b}-500`, 
        {
            autocomplete: [`btn-glass-(${baseTs})`]
        }
    ],

    // Button gradient
    [
        new RegExp(`^btn-gradient-(${dirVs})-(${baseTs})-(${baseTs})-(${baseTs})$`), 
        ([, dir, b1, b2, b3]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}-500 via-${b2}-500 to-${b3}-500 hover:brightness-110`, 
        {
            autocomplete: [`btn-gradient-(${dirVs})-(${baseTs})-(${baseTs})-(${baseTs})`]
        }
    ],
    [
        new RegExp(`^btn-gradient-(${dirVs})-(${baseTs})-(${baseTs})$`), 
        ([, dir, b1, b2]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}-500 to-${b2}-500 hover:brightness-110`, 
        {
            autocomplete: [`btn-gradient-(${dirVs})-(${baseTs})-(${baseTs})`]
        }
    ],
    // [
    //     new RegExp(`^btn-gradient-(${dirVs})-(${baseTs})(-${colorVs})?-(${baseTs})(-${colorVs})?$`), 
    //     ([, dir, b1, v1, b2, v2]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}${v1 ?? '-500'} to-${b2}${v2 ?? '-500'} hover:brightness-110`, 
    //     {
    //         autocomplete: [`btn-gradient-(${dirVs})-(${baseTs})-(${baseTs})`]
    //     }
    // ],
]