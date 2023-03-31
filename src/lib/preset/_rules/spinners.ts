/*
    Source of spinners: https://cssloaders.github.io/
    Sliding bars: https://codepen.io/havardob/pen/VjjJey/
*/

import type { Rule, Shortcut } from '@unocss/core';

// import { directionsJ } from '../../types/directions.d';
import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors.d';
import type { RulesDescription } from '../../types/types.d';

const sqHoverBase = 'relative w-12 h-12 rotate-x-65 rotate-z-45 animate-layers1 animate-alternate after:(content-none absolute inset-0 animate-layerTr animate-alternate animate-delay-500)';

const sqFlipBase = 'w-10 h-10 inline-block relative  box-border animate-flipXY';

const barSlideBase = 'h-2.5 animate-barSlide';
const barSlideBeforeAfter = 'absolute block content-none animate-barSlide h-2.5';

const rotSquaresBeforeAfter = 'content-none w-12 h-12 border-2 absolute top-0 left-0 box-border animate-rotateSquare360';

const dotsBase = 'rounded-full w-4 h-4 fill-mode-both animate-bblFadeInOut text-center';
const dotsBeforeAfter = `content-none absolute`;

export const spinnerRules: Rule[] = [
    [
        new RegExp(`^folding-squares-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s], { constructCSS }) => `@keyframes foldingSquares1-${c}-${s ?? '500'} {
            0% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
            12% {box-shadow: 0 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
            25% {box-shadow: 0 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
            37% {box-shadow: 0 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 48px rgb(var(--color-${c}-${s ?? '500'})), 0px 48px rgba(255, 255, 255, 0);}
            50% {box-shadow: 0 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 48px rgb(var(--color-${c}-${s ?? '500'})), 0px 48px rgb(var(--color-${c}-${s ?? '500'}));}
            62% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgb(var(--color-${c}-${s ?? '500'})), 24px 48px rgb(var(--color-${c}-${s ?? '500'})), 0px 48px rgb(var(--color-${c}-${s ?? '500'}));}
            75% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgb(var(--color-${c}-${s ?? '500'})), 0px 48px rgb(var(--color-${c}-${s ?? '500'}));}
            87% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgb(var(--color-${c}-${s ?? '500'}));}
            100% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
        }\n ${constructCSS({ animation: `foldingSquares1-${c}-${s ?? '500'} 4s ease infinite` })}`
    ]
];

export const spinnerSCs: Shortcut[] = [
    // Regular spinner
    [
        new RegExp(`^s-circle-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `inline-block w-12 h-12 border-2 border-solid border-${c}-${s ?? '500'} border-b-transparent box-border rounded-full animate-rotate360`,
        {
            autocomplete: [
                `s-circle-(${themeColorsJ})`,
                `s-circle-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
    [
        new RegExp(`^s-circle-split-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `inline-block w-12 h-12 border-2 border-solid border-${c}-${s ?? '500'} border-y-transparent box-border rounded-full animate-rotate360`,
        {
            autocomplete: [
                `s-circle-split-(${themeColorsJ})`,
                `s-circle-split-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Dots fading in and out
    [
        new RegExp(`^s-dots-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `${dotsBase} bg-${c}-${s ?? '500'} relative animate-delay-300
            before:(${dotsBase} ${dotsBeforeAfter} bg-${c}-${s ?? '500'} -left-6)
            after:(${dotsBase} ${dotsBeforeAfter} bg-${c}-${s ?? '500'} left-6 animate-delay-600)`,
        {
            autocomplete: [
                `s-dots-(${themeColorsJ})`,
                `s-dots-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
    [
        new RegExp(`^s-dots-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2, c3, s3]) => `${dotsBase} bg-${c2}-${s2 ?? '500'} relative animate-delay-300
            before:(${dotsBase} ${dotsBeforeAfter} bg-${c1}-${s1 ?? '500'} -left-6)
            after:(${dotsBase} ${dotsBeforeAfter} bg-${c3}-${s3 ?? '500'} left-6 animate-delay-600)`,
        {
            autocomplete: [
                `s-dots-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `s-dots-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Hovering squares
    [
        new RegExp(`^s-squares-hover-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2, c3, s3]) => `${sqHoverBase} text-${c1}-${s1 ?? '500'} bg-${c2}-${s2 ?? '500'} after:(bg-${c3}-${s3 ?? '500'}/75)`,
        {
            autocomplete: [
                `s-squares-hover-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
                `s-squares-hover-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`
            ]
        }
    ],

    // Flipping Square
    [
        new RegExp(`^s-squares-flip-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `${sqFlipBase} bg-${c}-${s ?? '500'}`,
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
        ([_, c1, s1, c2, s2]) => `${sqFlipBase} bg-radial-${c1}${s1 ? `-${s1}` : ''}-${c2}${s2 ? `-${s2}` : ''}`,
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
        ([_, c1, s1, c2, s2, c3, s3]) => `${sqFlipBase} bg-radial-${c1}${s1 ? `-${s1}` : ''}-${c2}${s2 ? `-${s2}` : ''}-${c3}${s3 ? `-${s3}` : ''}`,
        {
            autocomplete: [
                `s-squares-flip-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `s-squares-flip-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Horizontal bars
    [
        new RegExp(`^s-bars-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2, c3, s3]) => `bg-${c2}-${s2 ?? '500'} ${barSlideBase} w-12 rounded-md
        before:(bg-${c1}-${s1 ?? '500'} ${barSlideBeforeAfter} rounded-md -top-5 left-2.5 w-10) 
        after:(bg-${c3}-${s3 ?? '500'} ${barSlideBeforeAfter} rounded-md -bottom-5 w-9)`,
        {
            autocomplete: [
                `s-squares-hover-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`,
                `s-squares-hover-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`
            ]
        }
    ],

    // Shape shifting square
    [
        new RegExp(`^s-corners-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `relative w-12 h-12 bg-${c}-${s ?? '500'} animate-squareShapeShift`,
        {
            autocomplete: [
                `s-corners-(${themeColorsJ})`,
                `s-corners-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
    [
        new RegExp(`^s-corners-outline-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `relative w-12 h-12 border-4 border-${c}-${s ?? '500'} animate-squareShapeShift`,
        {
            autocomplete: [
                `s-corners-outline-(${themeColorsJ})`,
                `s-corners-outline-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // Folding squares
    [
        new RegExp(`^s-squares-folding-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c, s]) => `
            inline-block relative w-12 h-12 rotate-45
            before:(content-none box-border w-6 h-6 absolute left-0 -top-6 folding-squares-${c}-${s ?? '500'})
            after:(content-none box-border w-6 h-6 absolute left-0 top-0 shadow-md animate-foldingSquares2)
        `,
        {
            autocomplete: [
                `s-squares-folding-(${themeColorsJ})`,
                `s-squares-folding-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],

    // 2 Rotating squares
    [
        new RegExp(`^s-squares-rotate-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1]) => `
            w-12 h-12 relative inline-block 
            before:(${rotSquaresBeforeAfter} border-${c1}-${s1 ?? '500'})
            after:(${rotSquaresBeforeAfter} border-${c1}-${s1 ?? '500'} animate-reverse)`,
        {
            autocomplete: [
                `s-squares-rotate-(${themeColorsJ})`,
                `s-squares-rotate-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
    [
        new RegExp(`^s-squares-rotate-(${themeColorsJ})-?(${shadesJ})?-(${themeColorsJ})-?(${shadesJ})?$`),
        ([_, c1, s1, c2, s2]) => `
            w-12 h-12 relative inline-block 
            before:(${rotSquaresBeforeAfter} border-${c1}-${s1 ?? '500'})
            after:(${rotSquaresBeforeAfter} border-${c2}-${s2 ?? '500'} animate-reverse)`,
        {
            autocomplete: [
                `s-squares-rotate-(${themeColorsJ})-(${themeColorsJ})`,
                `s-squares-rotate-(${themeColorsJ})-(${shadesJ})-(${themeColorsJ})-(${shadesJ})`
            ]
        }
    ],
];

export const spinnersDescriptions: RulesDescription[] = [
    {
        rule: 's-circle-(themeColors)-(shades)',
        description: `Inserts a circle spinner. The shade value is optional and 500 is used by default. You can increase the border width with 'border-4' for example and change the border style to dotted or dashed with 'border-dotted' and 'border-dashed' respectively.`,
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-circle-primary', 's-circle-tertiary-600']
    },
    {
        rule: 's-circle-split-(themeColors)-(shades)',
        description: `Inserts a circle spinner with two separate quarter circles. The shade value is optional and 500 is used by default. You can increase the border width with 'border-4' for example and change the border style to dotted or dashed with 'border-dotted' and 'border-dashed' respectively.`,
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-circle-split-primary', 's-circle-split-tertiary-600']
    },
    {
        rule: 's-dots-(themeColors)-(shades)',
        description: 'Inserts a spinner with 3 dots that change their opacity. You can control the color of the dots with the theme color value. The shade value is optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: [
            's-dots-primary-400',
        ]
    },
    {
        rule: 's-dots-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Inserts a spinner with 3 dots that change their opacity. You can control the color of each dot with the 3 theme color values (starting from the left most dot). The shade values are optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: [
            's-dots-primary-secondary-tertiary',
        ]
    },
    {
        rule: 's-squares-hover-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Inserts a spinner with 3 hovering squares. You can control the color of each square with the 3 theme color values (starting from the lowest square). The shade values are optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: [
            's-squares-hover-primary-secondary-tertiary',
            's-squares-hover-tertiary-secondary-primary dark:s-squares-hover-tertiary-secondary-primary-200 rounded-xl after:rounded-xl'
        ]
    },
    {
        rule: 's-squares-flip-(themeColors)-(shades)',
        description: 'Inserts a spinner with a flipping square. You can control the color of the square with the theme color value. The shade is optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-squares-flip-primary']
    },
    {
        rule: 's-squares-flip-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Inserts a spinner with a flipping square and a radial color gradient of the 2 specified colors. The shades are optional.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-squares-flip-primary-secondary']
    },
    {
        rule: 's-squares-flip-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Inserts a spinner with a flipping square and a radial color gradient of the 3 specified colors. The shades are optional.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-squares-flip-primary-secondary-tertiary']
    },
    {
        rule: 's-bars-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Inserts a spinner with 3 bars flying left to right. You can specify the colors of all three bars. The shades are optional.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-bars-primary-secondary-success']
    },
    {
        rule: 's-corners-(themeColors)-(shades)',
        description: 'Inserts a spinner with a shape shifting square. You can control the color of the square with the theme color value. The shade is optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-corners-primary']
    },
    {
        rule: 's-corners-outline-(themeColors)-(shades)',
        description: 'Inserts a spinner with a shape shifting square outline. You can control the color of the outline with the theme color value. The shade is optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-corners-primary']
    },
    {
        rule: 's-squares-folding-(themeColors)-(shades)',
        description: 'Inserts a spinner with a square that folds and expands. You can control the color of the squares with the theme color value. The shade is optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-squares-folding-primary']
    },
    {
        rule: 's-squares-rotate-(themeColors)-(shades)',
        description: 'Inserts a spinner with 2 squares that rotate around each other. You can control the color of the squares with the theme color value. The shade is optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-squares-rotate-primary']
    },
    {
        rule: 's-squares-rotate-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Inserts a spinner with 2 squares that rotate around each other. You can control the color of the squares with the 2 theme color values. The shade is optional and 500 is the default.',
        keywords: ['spinners'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['s-squares-rotate-primary-secondary-300']
    },
];