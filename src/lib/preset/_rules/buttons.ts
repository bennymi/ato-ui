import type { Shortcut, Rule } from '@unocss/core';

import { themeColorsJ, shadesJ } from '../../types/colors.d';
import { directions, directionsJ } from '../../types/directions.d';
import { sizes, sizesJ, type RulesDescription } from '../../types/types.d';

import { reg_c, reg_c_sO, reg_c_sO_oO, cs, cso, name_c_sO_oO, reg_l, reg_dO, norm_op } from '../utils/regex';

const baseStyles = `${sizes['md']} inline-flex justify-center items-center space-x-1 rounded-token-base disabled:(opacity-80 cursor-not-allowed)`;

const glassStyles = 'border-1';
const glassOp = '25';

const default_dir = 'r';

const gradientStyles = 'hover:brightness-105';

export const buttonRules: Rule[] = [
    // Gradient border
    [
        new RegExp(`^border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2, c3, s3]) => ({
            "background": `linear-gradient(to right, rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : '0.8'}), rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : '0.8'})), linear-gradient(to ${d ? directions[d] : 'right'}, rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})), rgb(var(--color-${cs(c3, s3)})))`,
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
        new RegExp(`^border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2]) => ({
            "background": `linear-gradient(to right, rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : '0.8'}), rgba(var(--color-${cs(bc, bs)}), ${bo ? norm_op(bo) : '0.8'})), linear-gradient(to ${d ? directions[d] : 'right'}, rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})))`,
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

    // Button group outline
    [
        new RegExp(`^btn-group-outline-${reg_c_sO_oO}$`),
        ([_, c, s, o]) => `
        .btn-group-outline-${name_c_sO_oO(c, s, o)} {
            @apply inline-flex rounded-lg;
        }
        .btn-group-outline-${name_c_sO_oO(c, s, o)} button, .btn-group a {
            @apply px-4 py-2 inline-flex justify-center items-center space-x-1 bg-${cso(c, s, '15')} transition-all border border-${cso(c, s, o)} text-${cso(c, s, o)} text-sm font-bold hover:(bg-${cso(c, s, o)} text-on-${c}) focus:ring-2;
        }
        .btn-group-outline-${name_c_sO_oO(c, s, o)} button:first-child {
            @apply rounded-l-token-base;
        }
        .btn-group-outline-${name_c_sO_oO(c, s, o)} button:last-child {
            @apply rounded-r-token-base;
        }
        `
    ],

    // Button group regular
    [
        new RegExp(`^btn-group-${reg_c_sO_oO}$`),
        ([_, c, s, o]) => `
        .btn-group-${name_c_sO_oO(c, s, o)} {
            @apply inline-flex rounded-lg;
        }
        .btn-group-${name_c_sO_oO(c, s, o)} button, .btn-group a {
            @apply px-4 py-2 inline-flex justify-center items-center space-x-1 transition-all border border-${cso(c, s, o)} bg-${cso(c, s, o)} text-on-${c} text-sm font-bold hover:(bg-transparent text-${cso(c, s, o)}) focus:ring-2;
        }
        .btn-group-${name_c_sO_oO(c, s, o)} button:first-child {
            @apply rounded-l-token-base;
        }
        .btn-group-${name_c_sO_oO(c, s, o)} button:last-child {
            @apply rounded-r-token-base;
        }
        `
    ],
];

export const buttonSCs: Shortcut[] = [
    // Button size
    [
        new RegExp(`^btn-${reg_l}$`),
        ([, l]) => `${sizes[l]}`,
        {
            autocomplete: `btn-(${sizesJ})`
        }
    ],

    // Icon button
    [
        'btn-icon', `${baseStyles} aspect-square`
    ],

    // Button regular
    [
        new RegExp(`^btn-${reg_c}$`), 
        ([, c]) => `${baseStyles} bg-${c}-500 text-on-${c} hover:bg-${c}-600 disabled:hover:bg-${c}-500`, 
        {
            autocomplete: [`btn-(${themeColorsJ})`, 'btn-primary', 'btn-secondary', 'btn-tertiary']
        }
    ],
    
    // Button glass
    [
        new RegExp(`^btn-glass-${reg_c_sO_oO}$`), 
        ([, c, s, o]) => `${baseStyles} ${glassStyles} bg-${cso(c, s, `${o ?? glassOp}`)} text-${cs(c, s)} border-${cs(c, s)} hover:(bg-${cs(c, s)} text-on-${c}) disabled:hover:(bg-${cso(c, s, `${o ?? glassOp}`)} text-${cs(c, s)})`, 
        {
            autocomplete: [`btn-glass-(${themeColorsJ})`, `btn-glass-(${themeColorsJ})-(${shadesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2]) => 
            `${baseStyles} ${glassStyles} bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, `${o1 ?? glassOp}`)} to-${cso(c2, s2, `${o2 ?? glassOp}`)} 
            text-${cs(c1, s1)} border-${cs(c1, s1)} 
            hover:(from-${cs(c1, s1)} to-${cs(c2, s2)} text-on-${c1}) 
            disabled:hover:(from-${cso(c1, s1, `${o1 ?? glassOp}`)} to-${cso(c2, s2, `${o2 ?? glassOp}`)})`, 
        {
            autocomplete: [`btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`, `btn-glass-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`]
        }
    ],
    [
        new RegExp(`^btn-glass${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2, c3, s3, o3]) => 
            `${baseStyles} ${glassStyles} bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, `${o1 ?? glassOp}`)} via-${cso(c2, s2, `${o2 ?? glassOp}`)} to-${cso(c3, s3, `${o3 ?? glassOp}`)}
            text-${cs(c1, s1)} border-${cs(c1, s1)} 
            hover:(from-${cs(c1, s1)} via-${cs(c2, s2)} to-${cs(c3, s3)} text-on-${c1}) 
            disabled:hover:(from-${cso(c1, s1, `${o1 ?? glassOp}`)} via-${cso(c2, s2, `${o2 ?? glassOp}`)} to-${cso(c3, s3, `${o3 ?? glassOp}`)}`, 
        {
            autocomplete: [
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ}-(${themeColorsJ}))`, 
                `btn-glass-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Button gradients
    [
        new RegExp(`^btn${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2, c3, s3, o3]) => `${baseStyles} ${gradientStyles} bg-gradient-to-${d ?? default_dir} text-on-${c1} from-${cso(c1, s1, o1)} via-${cso(c2, s2, o2)} to-${cso(c3, s3, o3)}`, 
        {
            autocomplete: [`btn-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^btn${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2]) => `${baseStyles} ${gradientStyles} bg-gradient-to-${d ?? default_dir} text-on-${c1} from-${cso(c1, s1, o1)} to-${cso(c2, s2, o2)}`, 
        {
            autocomplete: [
                `btn-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-(${directionsJ})-${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Button gradient border
    [
        new RegExp(`^btn-border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2]) => `${baseStyles} text-on-${bc} border-${name_c_sO_oO(bc, bs, bo)}-${d ?? default_dir}-${cs(c1, s1)}-${cs(c2, s2)} hover:(bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} to-${cs(c2, s2)})`,
        {
            autocomplete: [
                `btn-border-(${themeColorsJ})-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `btn-border-(${themeColorsJ})-(${shadesJ})-(${directionsJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
            ]
        }
    ],
    [
        new RegExp(`^btn-border-${reg_c_sO_oO}${reg_dO}-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, bc, bs, bo, d, c1, s1, c2, s2, c3, s3]) => 
        `${baseStyles} text-on-${bc} border-${name_c_sO_oO(bc, bs, bo)}-${d ?? default_dir}-${cs(c1, s1)}-${cs(c2, s2)}-${cs(c3, s3)} hover:(bg-gradient-to-${d ?? default_dir} from-${cs(c1, s1)} via-${cs(c2, s2)} to-${cs(c3, s3)})`,
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
    // Button with icon
    {
        rule: 'btn-icon',
        description: 'Creates an icon button.',
        keywords: ['button', 'icons'],
        variablesUsed: [],
        classes: [],
        examples: ['btn-icon']
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