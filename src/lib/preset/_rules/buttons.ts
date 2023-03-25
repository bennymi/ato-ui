import type { Shortcut, Rule } from '@unocss/core';

import { themeColorsJ, shadesJ } from '../../types/colors.d';
import { directions, directionsJ } from '../../types/directions.d';
import { sizes, sizesJ, type RulesDescription } from '../../types/types.d';

const baseStyles = `${sizes['md']} inline-flex justify-center items-center space-x-2 rounded-token-base disabled:(opacity-80 cursor-not-allowed)`;

const glassStyles = 'border-1';
const glassOp = '30';

const gradientStyles = 'hover:brightness-105';

export const buttonRules: Rule[] = [
    // Gradient border
    [
        new RegExp(`^border-(${themeColorsJ})-?(${shadesJ})?-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([, b, bs, dir, c1, s1, c2, s2, c3, s3]) => ({
            "background": `linear-gradient(to right, rgb(var(--color-${b}-${bs ?? '500'})), rgb(var(--color-${b}-${bs ?? '500'}))), linear-gradient(to ${directions[dir]}, rgb(var(--color-${c1}-${s1 ?? '500'})), rgb(var(--color-${c2}-${s2 ?? '500'})), rgb(var(--color-${c3}-${s3 ?? '500'})))`,
            "background-clip": `padding-box, border-box`,
            "background-origin": `padding-box, border-box`,
            "border": "2px solid transparent",
        }),
        {
            autocomplete: [
                `border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
    [
        new RegExp(`^border-(${themeColorsJ})-?(${shadesJ})?-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([, b, vb, dir, c1, v1, c2, v2]) => ({
            "background": `linear-gradient(to right, rgb(var(--color-${b}-${vb ?? '500'})), rgb(var(--color-${b}-${vb ?? '500'}))), linear-gradient(to ${directions[dir]}, rgb(var(--color-${c1}-${v1 ?? '500'})), rgb(var(--color-${c2}-${v2 ?? '500'})))`,
            "background-clip": `padding-box, border-box`,
            "background-origin": `padding-box, border-box`,
            "border": "2px solid transparent",
        }),
        {
            autocomplete: [
                `border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
];

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
        new RegExp(`^btn-glass-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, b, v]) => `${baseStyles} bg-${b}-${v ?? '500'}/${glassOp} ${glassStyles} text-${b}-${v ?? '500'} border-${b}-${v ?? '500'} hover:(bg-${b}-${v ?? '500'} text-on-${b}) disabled:hover:(bg-${b}-${v ?? '500'}/${glassOp} text-${b}-${v ?? '500'})`, 
        {
            autocomplete: [`btn-glass-(${themeColorsJ})`, `btn-glass-(${themeColorsJ})-(${shadesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, b1, v1, b2, v2]) => 
            `${baseStyles} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'}/${glassOp} to-${b2}-${v2 ?? '500'}/${glassOp} 
            text-${b1}-${v1 ?? '500'} ${glassStyles} border-${b1}-${v1 ?? '500'} 
            hover:(from-${b1}-${v1 ?? '500'} to-${b2}-${v2 ?? '500'} text-on-${b1}) 
            disabled:hover:(from-${b1}-${v1 ?? '500'}/${glassOp} to-${b2}-${v2 ?? '500'}/${glassOp})`, 
        {
            autocomplete: [`btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`, `btn-glass-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, b1, v1, b2, v2, b3, v3]) => 
            `${baseStyles} bg-gradient-to-${dir} from-${b1}-${v1 ?? '500'}/${glassOp} via-${b2}-${v2 ?? '500'}/${glassOp} to-${b3}-${v3 ?? '500'}/${glassOp}
            text-${b1}-${v1 ?? '500'} ${glassStyles} border-${b1}-${v1 ?? '500'} 
            hover:(from-${b1}-${v1 ?? '500'} via-${b2}-${v2 ?? '500'} to-${b3}-${v3 ?? '500'} text-on-${b1}) 
            disabled:hover:(from-${b1}-${v1 ?? '500'}/${glassOp} via-${b2}-${v2 ?? '500'}/${glassOp} to-${b3}-${v3 ?? '500'}/${glassOp})`, 
        {
            autocomplete: [
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ}-(${themeColorsJ}))`, 
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Button gradients
    [
        new RegExp(`^btn-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, c1, s1, c2, s2, c3, s3]) => `${baseStyles} bg-gradient-to-${dir} text-on-${c1} from-${c1}-${s1 ?? '500'} via-${c2}-${s2 ?? '500'} to-${c3}-${s3 ?? '500'} ${gradientStyles}`, 
        {
            autocomplete: [`btn-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^btn-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`), 
        ([, dir, c1, s1, c2, s2]) => `${baseStyles} bg-gradient-to-${dir} text-on-${c1} from-${c1}-${s1 ?? '500'} to-${c2}-${s2 ?? '500'} ${gradientStyles}`, 
        {
            autocomplete: [
                `btn-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-(${directionsJ})-${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Button gradient border
    [
        new RegExp(`^btn-border-(${themeColorsJ})-?(${shadesJ})?-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([, b, vb, dir, c1, v1, c2, v2]) => `${baseStyles} text-on-${b} border-${b}${vb ? `-${vb}` : ''}-${dir}-${c1}${v1 ? `-${v1}` : ''}-${c2}${v2 ? `-${v2}` : ''} hover:(bg-gradient-to-${dir} from-${c1}-${v1 ? `${v1}` : '500'} to-${c2}-${v2 ? `${v2}` : '500'})`,
        {
            autocomplete: [
                `btn-border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
    [
        new RegExp(`^btn-border-(${themeColorsJ})-?(${shadesJ})?-(${directionsJ})-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([, b, bs, dir, c1, s1, c2, s2, c3, s3]) => 
        `${baseStyles} text-on-${b} border-${b}${bs ? `-${bs}` : ''}-${dir}-${c1}${s1 ? `-${s1}` : ''}-${c2}${s2 ? `-${s2}` : ''}-${c3}${s3 ? `-${s3}` : ''} hover:(bg-gradient-to-${dir} from-${c1}-${s1 ?? '500'} via-${c2}-${s2 ?? '500'} to-${c3}-${s3 ?? '500'})`,
        {
            autocomplete: [
                `btn-border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
];

export const buttonDescriptions: RulesDescription[] = [
    // Button sizes
    {
        rule: 'btn-(sizes)',
        description: 'Change the size of the button. The default button size is medium (md).',
        keywords: ['button'],
        variablesUsed: ['sizes'],
        classes: [],
        examples: ['btn-sm', 'btn-md', 'btn-lg', 'btn-xl']
    },
    // Regular button
    {
        rule: 'btn-(themeColors)',
        description: 'Create a button with the specified theme color. Shade 500 is used.',
        keywords: ['button'],
        variablesUsed: ['themeColors'],
        classes: [],
        examples: ['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-success', 'btn-warning', 'btn-error']
    },
    // Buttons with gradients
    {
        rule: 'btn-(directions)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a button with a gradient of 2 colors in the specified direction. The shades are optional with shade 500 being the default for both colors.',
        keywords: ['button', 'gradient'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-tr-primary-secondary', 'btn-b-primary-200-tertiary', 'btn-r-secondary-200-warning-700']
    },
    {
        rule: 'btn-(directions)-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a button with a gradient of 3 colors in the specified direction. It goes from the first theme color via the second theme color to the third one. Shades are optional.',
        keywords: ['button', 'gradient'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-r-primary-secondary-tertiary', 'btn-bl-primary-700-secondary-600-tertiary-400']
    },
    // Glass buttons
    {
        rule: 'btn-glass-(themeColors)-(shades)',
        description: 'Create a glass button with the specified theme color and shade. The shade is optional with shade 500 being the default.',
        keywords: ['button', 'glass'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['btn-glass-primary', 'btn-success-700']
    },
    {
        rule: 'btn-glass-(directions)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a glass button with a gradient of 2 colors in the specified direction. The shades are optional with shade 500 being the default for both colors.',
        keywords: ['button', 'glass', 'gradient'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-glass-tr-primary-secondary', 'btn-glass-b-primary-200-tertiary', 'btn-glass-r-secondary-200-warning-700']
    },
    {
        rule: 'btn-glass-(directions)-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a glass button with a gradient of 3 colors in the specified direction. It goes from the first theme color via the second theme color to the third one. Shades are optional.',
        keywords: ['button', 'glass', 'gradient'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-glass-r-primary-secondary-tertiary', 'btn-glass-bl-primary-700-secondary-600-tertiary-400']
    },
    // Buttons with border gradiuses
    {
        rule: 'btn-border-(themeColors)-(shades)-(directions)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a button with a gradient border of 2 colors in the specified direction. The first theme color is the background of the button, while the other 2 colors represent the border gradient. The shades are optional with shade 500 being the default for all colors.',
        keywords: ['button', 'gradient', 'border'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-border-surface-900-tr-primary-secondary', 'btn-border-surface-b-primary-200-tertiary', 'btn-border-surface-800-r-secondary-200-warning-700']
    },
    {
        rule: 'btn-border-(themeColors)-(shades)-(directions)-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a button with a gradient border of 3 colors in the specified direction. The first theme color is the background of the button, while the other 3 colors represent the border gradient. The shades are optional with shade 500 being the default for all colors.',
        keywords: ['button', 'gradient', 'border'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-border-surface-900-r-primary-secondary-tertiary', 'btn-border-surface-bl-primary-700-secondary-600-tertiary-400']
    }
]