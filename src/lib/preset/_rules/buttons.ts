import type { Shortcut, Rule } from '@unocss/core';

import { themeColorsJ, colorValuesJ } from '../../types/colors.d';
import { directions, directionsJ } from '../../types/directions.d';

const sizes: { [key: string]: string } = {
    'sm': 'py-1 px-2 text-sm',
    'md': 'py-1 px-3',
    'lg': 'py-2 px-4 text-lg',
    'xl': 'py-3 px-6 text-xl'
}

const sizesJ = Object.keys(sizes).join('|')

const baseStyles = `${sizes['md']} inline-flex justify-center items-center font-medium space-x-2 rounded-token-base disabled:(opacity-80 cursor-not-allowed)`;

const glassStyles = 'border-1';
const glassOp = '30';

const gradientStyles = 'hover:brightness-105';

export const buttonRules: Rule[] = [
    // Gradient border
    [
        new RegExp(`^border-(${themeColorsJ})-?(${colorValuesJ})?-(${directionsJ})-(${themeColorsJ})-?(${colorValuesJ})?-(${themeColorsJ})-?(${colorValuesJ})?$`),
        ([, b, vb, dir, c1, v1, c2, v2]) => ({
            "background": `linear-gradient(to right, rgb(var(--color-${b}-${vb ?? '500'})), rgb(var(--color-${b}-${vb ?? '500'}))), linear-gradient(to ${directions[dir]}, rgb(var(--color-${c1}-${v1 ?? '500'})), rgb(var(--color-${c2}-${v2 ?? '500'})))`,
            "background-clip": `padding-box, border-box`,
            "background-origin": `padding-box, border-box`,
            "border": "3px solid transparent",
        }),
        {
            autocomplete: [
                `btn-border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-border-(${themeColorsJ})-(${colorValuesJ})-(${directionsJ})-(${themeColorsJ})-(${colorValuesJ})-(${themeColorsJ})-(${colorValuesJ})`,
            ]
        }
    ]
]

export const buttonSCs: Shortcut[] = [
    // Button size
    [
        new RegExp(`^btn-(${sizesJ})$`),
        ([, s]) => `${sizes[s]}`,
        {
            autocomplete: `btn-(${sizesJ})`
        }
    ],

    // Button regular
    [
        new RegExp(`^btn-(${themeColorsJ})$`), 
        ([, b]) => `${baseStyles} bg-${b}-500 text-on-${b} hover:bg-${b}-600 disabled:hover:bg-${b}-500`, 
        {
            autocomplete: [`btn-(${themeColorsJ})`, 'btn-primary', 'btn-secondary', 'btn-tertiary']
        }
    ],
    
    // Button glass
    [
        new RegExp(`^btn-glass-(${themeColorsJ})-?(${colorValuesJ})?$`), 
        ([, b, v]) => `${baseStyles} bg-${b}-${v ?? '500'}/${glassOp} ${glassStyles} text-${b}-${v ?? '500'} border-${b}-${v ?? '500'} hover:(bg-${b}-${v ?? '500'} text-on-${b}) disabled:hover:(bg-${b}-${v ?? '500'}/${glassOp} text-${b}-${v ?? '500'})`, 
        {
            autocomplete: [`btn-glass-(${themeColorsJ})`, `btn-glass-(${themeColorsJ})-(${colorValuesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass-(${directionsJ})-(${themeColorsJ})-?(${colorValuesJ})?-(${themeColorsJ})-?(${colorValuesJ})?$`), 
        ([, dir, b1, v1, b2, v2]) => 
            `${baseStyles} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'}/${glassOp} to-${b2}-${v2 ?? '500'}/${glassOp} 
            text-on-${b1} ${glassStyles} border-${b1}-${v1 ?? '500'} 
            hover:(from-${b1}-${v1 ?? '500'} to-${b2}-${v2 ?? '500'}) 
            disabled:hover:(from-${b1}-${v1 ?? '500'}/${glassOp} to-${b2}-${v2 ?? '500'}/${glassOp})`, 
        {
            autocomplete: [`btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`, `btn-glass-(${directionsJ})-(${themeColorsJ})-(${colorValuesJ})-(${themeColorsJ})-(${colorValuesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass-(${directionsJ})-(${themeColorsJ})-?(${colorValuesJ})?-(${themeColorsJ})-?(${colorValuesJ})?-(${themeColorsJ})-?(${colorValuesJ})?$`), 
        ([, dir, b1, v1, b2, v2, b3, v3]) => 
            `${baseStyles} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'}/${glassOp} via-${b2}-${v2 ?? '500'}/${glassOp} to-${b3}-${v3 ?? '500'}/${glassOp}
            text-on-${b1} ${glassStyles} border-${b1}-${v1 ?? '500'} 
            hover:(from-${b1}-${v1 ?? '500'} via-${b2}-${v2 ?? '500'} to-${b3}-${v3 ?? '500'}) 
            disabled:hover:(from-${b1}-${v1 ?? '500'}/${glassOp} via-${b2}-${v2 ?? '500'}/${glassOp} to-${b3}-${v3 ?? '500'}/${glassOp})`, 
        {
            autocomplete: [
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ}-(${themeColorsJ}))`, 
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${colorValuesJ})-(${themeColorsJ})-(${colorValuesJ})-(${themeColorsJ})-(${colorValuesJ})`
            ]
        }
    ],

    // Button gradients
    [
        new RegExp(`^btn-gradient-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})$`), 
        ([, dir, b1, b2, b3]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}-500 via-${b2}-500 to-${b3}-500 ${gradientStyles}`, 
        {
            autocomplete: [`btn-gradient-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^btn-gradient-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})$`), 
        ([, dir, b1, b2]) => `${baseStyles} bg-gradient-to-${dir} text-on-${b1} from-${b1}-500 to-${b2}-500 ${gradientStyles}`, 
        {
            autocomplete: [`btn-gradient-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^btn-gradient-(${directionsJ})-(${themeColorsJ})-?(${colorValuesJ})?-(${themeColorsJ})-(${colorValuesJ})?$`), 
        ([, dir, b1, v1, b2, v2]) => `${baseStyles} text-on-${b1} bg-gradient-to-${dir} from-${b1}-${v1 ? `${v1}` : '500'} to-${b2}-${v2 ? `${v2}` : '500'} ${gradientStyles}`, 
        {
            autocomplete: [
                `btn-gradient-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-gradient-(${directionsJ})-(${themeColorsJ})-(${colorValuesJ})-(${themeColorsJ})-(${colorValuesJ})`,
            ]
        }
    ],

    // Button gradient border
    [
        new RegExp(`^btn-border-(${themeColorsJ})-?(${colorValuesJ})?-(${directionsJ})-(${themeColorsJ})-?(${colorValuesJ})?-(${themeColorsJ})-?(${colorValuesJ})?$`),
        ([, b, vb, dir, c1, v1, c2, v2]) => `${baseStyles} text-on-${b} border-${b}${vb ? `-${vb}` : ''}-${dir}-${c1}${v1 ? `-${v1}` : ''}-${c2}${v2 ? `-${v2}` : ''} hover:(bg-gradient-to-${dir} from-${c1}-${v1 ? `${v1}` : '500'} to-${c2}-${v2 ? `${v2}` : '500'})`,
        {
            autocomplete: [
                `btn-border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-border-(${themeColorsJ})-(${colorValuesJ})-(${directionsJ})-(${themeColorsJ})-(${colorValuesJ})-(${themeColorsJ})-(${colorValuesJ})`,
            ]
        }
    ]
]