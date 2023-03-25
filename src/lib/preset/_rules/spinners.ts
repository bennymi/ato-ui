import type { Rule, Shortcut } from '@unocss/core';

import { directionsJ } from '../../types/directions.d';
import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors.d';

const sqHoverBase = 'relative w-12 h-12 rotate-x-65 rotate-z-45 animate-layers1 animate-alternate after:(content-none absolute inset-0 animate-layerTr animate-alternate animate-delay-500)';

const sqFlipBase = 'w-12 h-12 inline-block relative  box-border animate-flipXY';

const barSlideBase = 'h-2.5 animate-barSlide';
const barSlideBeforeAfter = 'absolute block content-none animate-barSlide h-2.5';

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
    // [
    //     new RegExp(`^s-squares-folding-(${themeColorsJ})-?(${shadesJ})?$`),
    //     ([_, c, s]) => `
    //         inline-block relative w-12 h-12 rotate-45 bg-${c}-${s ?? '500'}/80
    //         before:(content-none box-border w-6 h-6 absolute left-0 -top-6 animate-foldingSquares1)
    //         after:(content-none box-border w-6 h-6 left-0 top-0 shadow-md bg-transparent animate-foldingSquares2)
    //     `,
    //     {
    //         autocomplete: [
    //             `s-squares-folding-(${themeColorsJ})`,
    //             `s-squares-folding-(${themeColorsJ})-(${shadesJ})`
    //         ]
    //     }
    // ],
];