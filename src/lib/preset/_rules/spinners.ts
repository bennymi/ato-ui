/*
    Source of spinners: https://cssloaders.github.io/
    Sliding bars: https://codepen.io/havardob/pen/VjjJey/
*/

import type { Rule, Shortcut } from '@unocss/core';

import type { RulesDescription } from '../../types/types';

import { reg_c_sO, cs, reg_whO, dim, reg_c, reg_s } from '../utils/regex';

const sqHoverBase = `inline-block relative rounded-container rotate-x-65 rotate-z-45 animate-layers1 animate-alternate after:(content-[''] rounded-container absolute inset-0 animate-layerTr animate-alternate animate-delay-500)`;

const sqFlipBase = 'inline-block relative rounded-container box-border animate-flipXY';
const sqFlip_WH = '10';

// const barSlideBase = 'h-2.5 animate-barSlide';
// const barSlideBeforeAfter = `absolute block content-[''] animate-barSlide h-2.5`;

const rotSquaresBeforeAfter = `content-[''] border-2 absolute top-0 left-0 box-border animate-rotateSquare360`;

// const dotsBase = 'rounded-full fill-mode-both animate-bblFadeInOut text-center';
// const dotsBeforeAfter = `content-[''] absolute`;
// const dots_WH = '4';

export const spinnerRules: Rule[] = [
	[
		new RegExp(`^folding-squares-${reg_c_sO}$`),
		([, c, s]: string[], { constructCSS }) => `@keyframes foldingSquares1-${cs(c, s)} {
            0% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
            12% {box-shadow: 0 24px rgb(var(--color-${cs(
							c,
							s
						)})), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
            25% {box-shadow: 0 24px rgb(var(--color-${cs(c, s)})), 24px 24px rgb(var(--color-${cs(
							c,
							s
						)})), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
            37% {box-shadow: 0 24px rgb(var(--color-${cs(c, s)})), 24px 24px rgb(var(--color-${cs(
							c,
							s
						)})), 24px 48px rgb(var(--color-${cs(c, s)})), 0px 48px rgba(255, 255, 255, 0);}
            50% {box-shadow: 0 24px rgb(var(--color-${cs(c, s)})), 24px 24px rgb(var(--color-${cs(
							c,
							s
						)})), 24px 48px rgb(var(--color-${cs(c, s)})), 0px 48px rgb(var(--color-${cs(c, s)}));}
            62% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgb(var(--color-${cs(
							c,
							s
						)})), 24px 48px rgb(var(--color-${cs(c, s)})), 0px 48px rgb(var(--color-${cs(c, s)}));}
            75% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgb(var(--color-${cs(
							c,
							s
						)})), 0px 48px rgb(var(--color-${cs(c, s)}));}
            87% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgb(var(--color-${cs(
							c,
							s
						)}));}
            100% {box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);}
        }\n ${constructCSS({ animation: `foldingSquares1-${cs(c, s)} 4s ease infinite` })}`
	]
];

export const spinnerSCs: Shortcut[] = [
	// Regular spinner
	[
		new RegExp(`^s${reg_whO}-circle-${reg_c_sO}$`),
		([, wh, c, s]: string[]) =>
			`inline-block ${dim(wh)} border-2 border-solid border-${cs(
				c,
				s
			)} border-b-transparent box-border rounded-full animate-rotate360`,
		{
			autocomplete: [
				's-circle',
				// 's-wh<num>-circle',
				// `s-wh<num>-circle-${reg_c}`,
				// `s-wh<num>-circle-${reg_c}-${reg_s}`,
				`s-circle-${reg_c}`,
				`s-circle-${reg_c}-${reg_s}`
			]
		}
	],
	[
		new RegExp(`^s${reg_whO}-circle-split-${reg_c_sO}$`),
		([, wh, c, s]: string[]) =>
			`inline-block ${dim(wh)} border-2 border-solid border-${cs(
				c,
				s
			)} border-y-transparent box-border rounded-full animate-rotate360`,
		{
			autocomplete: [
				's-circle-split',
				// 's-wh<num>-circle-split',
				// `s-wh<num>-circle-split-${reg_c}`,
				// `s-wh<num>-circle-split-${reg_c}-${reg_s}`,
				`s-circle-split-${reg_c}`,
				`s-circle-split-${reg_c}-${reg_s}`
			]
		}
	],

	// Dots fading in and out
	// [
	//     new RegExp(`^s${reg_whO}-dots-${reg_c_sO}$`),
	//     ([_, wh, c, s]: string[]) => `${dotsBase} ${dim(wh, dots_WH)} bg-${cs(c, s)} relative animate-delay-300
	//         before:(${dotsBase} ${dotsBeforeAfter} bg-${cs(c, s)} -left-6)
	//         after:(${dotsBase} ${dotsBeforeAfter} bg-${cs(c, s)} left-6 animate-delay-600)`,
	//     {
	//         autocomplete: [
	//             `s-dots-${reg_c}`,
	//             `s-dots-${reg_c}-${reg_s}`
	//         ]
	//     }
	// ],
	// [
	//     new RegExp(`^s${reg_whO}-dots-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
	//     ([_, wh, c1, s1, c2, s2, c3, s3]: string[]) => `${dotsBase} ${dim(wh, dots_WH)} bg-${cs(c2, s2)} relative animate-delay-300
	//         before:(${dotsBase} ${dotsBeforeAfter} bg-${cs(c1, s1)} -left-6)
	//         after:(${dotsBase} ${dotsBeforeAfter} bg-${cs(c3, s3)} left-6 animate-delay-600)`,
	//     {
	//         autocomplete: [
	//             `s-dots-${reg_c}-${reg_c}-${reg_c}`,
	//             `s-dots-${reg_c}-${reg_s}-${reg_c}-${reg_s}-${reg_c}-${reg_s}`
	//         ]
	//     }
	// ],

	// Hovering squares
	[
		new RegExp(`^s${reg_whO}-squares-hover-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
		([, wh, c1, s1, c2, s2, c3, s3]: string[]) =>
			`${sqHoverBase} ${dim(wh)} text-${cs(c1, s1)} bg-${cs(c2, s2)} after:(bg-${cs(c3, s3)}/75)`,
		{
			autocomplete: [
				`s-squares-hover`,
				// `s-wh<num>-squares-hover`,
				// `s-wh<num>-squares-hover-${reg_c}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_s}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_c}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_c}-${reg_s}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_s}-${reg_c}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_s}-${reg_c}-${reg_c}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_s}-${reg_c}-${reg_c}`,
				// `s-wh<num>-squares-hover-${reg_c}-${reg_c}-${reg_c}`,
				`s-squares-hover-${reg_c}`,
				`s-squares-hover-${reg_c}-${reg_s}`,
				`s-squares-hover-${reg_c}-${reg_c}`,
				`s-squares-hover-${reg_c}-${reg_c}-${reg_s}`,
				`s-squares-hover-${reg_c}-${reg_s}-${reg_c}`,
				`s-squares-hover-${reg_c}-${reg_s}-${reg_c}-${reg_c}`,
				`s-squares-hover-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
				`s-squares-hover-${reg_c}-${reg_s}-${reg_c}-${reg_c}`,
				`s-squares-hover-${reg_c}-${reg_c}-${reg_c}`
			]
		}
	],

	// Flipping Square
	[
		new RegExp(`^s${reg_whO}-squares-flip-${reg_c_sO}$`),
		([, wh, c, s]: string[]) => `${sqFlipBase} ${dim(wh, sqFlip_WH)} bg-${cs(c, s)}`,
		{
			autocomplete: [
				's-squares-flip',
				`s-squares-flip-${reg_c}`,
				`s-squares-flip-${reg_c}-${reg_s}`
			]
		}
	],
	// [
	//     // With 2 gradients
	//     new RegExp(`^s${reg_whO}-squares-flip-${reg_c_sO}-${reg_c_sO}$`),
	//     ([_, wh, c1, s1, c2, s2]: string[]) => `${sqFlipBase} ${dim(wh, sqFlip_WH)} bg-radial-${c1}${s1 ? `-${s1}` : ''}-${c2}${s2 ? `-${s2}` : ''}`,
	//     {
	//         autocomplete: [
	//             `s-squares-flip-${reg_c}-${reg_c}`,
	//             `s-squares-flip-${reg_c}-${reg_s}-${reg_c}-${reg_s}`
	//         ]
	//     }
	// ],
	// [
	//     // With 3 gradients
	//     new RegExp(`^s${reg_whO}-squares-flip-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
	//     ([_, wh, c1, s1, c2, s2, c3, s3]: string[]) => `${sqFlipBase} ${dim(wh, sqFlip_WH)} bg-radial-${c1}${s1 ? `-${s1}` : ''}-${c2}${s2 ? `-${s2}` : ''}-${c3}${s3 ? `-${s3}` : ''}`,
	//     {
	//         autocomplete: [
	//             `s-squares-flip-${reg_c}-${reg_c}-${reg_c}`,
	//             `s-squares-flip-${reg_c}-${reg_s}-${reg_c}-${reg_s}-${reg_c}-${reg_s}`
	//         ]
	//     }
	// ],

	// Horizontal bars
	// [
	//     new RegExp(`^s-bars-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
	//     ([_, c1, s1, c2, s2, c3, s3]: string[]) => `bg-${cs(c2, s2)} ${barSlideBase} w-12 rounded-md
	//     before:(bg-${cs(c1, s1)} ${barSlideBeforeAfter} rounded-md -top-5 left-2.5 w-10)
	//     after:(bg-${cs(c3, s3)} ${barSlideBeforeAfter} rounded-md -bottom-5 w-9)`,
	//     {
	//         autocomplete: [
	//             `s-squares-hover-${reg_c}-${reg_s}-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
	//             `s-squares-hover-${reg_c}-${reg_c}-${reg_c}`
	//         ]
	//     }
	// ],

	// Shape shifting square
	[
		new RegExp(`^s${reg_whO}-corners-${reg_c_sO}$`),
		([, wh, c, s]: string[]) =>
			`relative inline-block ${dim(wh)} bg-${cs(c, s)} animate-squareShapeShift`,
		{
			autocomplete: ['s-corners', `s-corners-${reg_c}`, `s-corners-${reg_c}-${reg_s}`]
		}
	],
	[
		new RegExp(`^s${reg_whO}-corners-outline-${reg_c_sO}$`),
		([, wh, c, s]: string[]) =>
			`relative inline-block ${dim(wh)} border-4 border-${cs(c, s)} animate-squareShapeShift`,
		{
			autocomplete: [
				's-corners-outline',
				`s-corners-outline-${reg_c}`,
				`s-corners-outline-${reg_c}-${reg_s}`
			]
		}
	],

	// Folding squares
	// [
	//     new RegExp(`^s-squares-folding-${reg_c_sO}$`),
	//     ([_, c, s]: string[]) => `
	//         inline-block relative w-12 h-12 rotate-45
	//         before:(content-[''] box-border w-6 h-6 absolute left-0 -top-6 folding-squares-${cs(c, s)})
	//         after:(content-[''] box-border w-6 h-6 absolute left-0 top-0 shadow-md animate-foldingSquares2)
	//     `,
	//     {
	//         autocomplete: [
	//             `s-squares-folding-${reg_c}`,
	//             `s-squares-folding-${reg_c}-${reg_s}`
	//         ]
	//     }
	// ],

	// 2 Rotating squares
	[
		new RegExp(`^s${reg_whO}-squares-rotate-${reg_c_sO}$`),
		([, wh, c1, s1]: string[]) => `
            ${dim(wh)} relative inline-block 
            before:(${rotSquaresBeforeAfter} ${dim(wh)} border-${cs(c1, s1)})
            after:(${rotSquaresBeforeAfter} ${dim(wh)} border-${cs(c1, s1)} animate-reverse)`
	],
	[
		new RegExp(`^s${reg_whO}-squares-rotate-${reg_c_sO}-${reg_c_sO}$`),
		([, wh, c1, s1, c2, s2]: string[]) => `
            ${dim(wh)} relative inline-block 
            before:(${rotSquaresBeforeAfter} ${dim(wh)} border-${cs(c1, s1)})
            after:(${rotSquaresBeforeAfter} ${dim(wh)} border-${cs(c2, s2)} animate-reverse)`,
		{
			autocomplete: [
				's-squares-rotate',
				`s-squares-rotate-${reg_c}`,
				`s-squares-rotate-${reg_c}-${reg_s}`,
				`s-squares-rotate-${reg_c}-${reg_c}`,
				`s-squares-rotate-${reg_c}-${reg_s}-${reg_c}`,
				`s-squares-rotate-${reg_c}-${reg_c}-${reg_s}`
			]
		}
	]
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
		description:
			'Inserts a spinner with 3 dots that change their opacity. You can control the color of the dots with the theme color value. The shade value is optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-dots-primary-400']
	},
	{
		rule: 's-dots-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
		description:
			'Inserts a spinner with 3 dots that change their opacity. You can control the color of each dot with the 3 theme color values (starting from the left most dot). The shade values are optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-dots-primary-secondary-tertiary']
	},
	{
		rule: 's-squares-hover-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
		description:
			'Inserts a spinner with 3 hovering squares. You can control the color of each square with the 3 theme color values (starting from the lowest square). The shade values are optional and 500 is the default.',
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
		description:
			'Inserts a spinner with a flipping square. You can control the color of the square with the theme color value. The shade is optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-squares-flip-primary']
	},
	{
		rule: 's-squares-flip-(themeColors)-(shades)-(themeColors)-(shades)',
		description:
			'Inserts a spinner with a flipping square and a radial color gradient of the 2 specified colors. The shades are optional.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-squares-flip-primary-secondary']
	},
	{
		rule: 's-squares-flip-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
		description:
			'Inserts a spinner with a flipping square and a radial color gradient of the 3 specified colors. The shades are optional.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-squares-flip-primary-secondary-tertiary']
	},
	{
		rule: 's-bars-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
		description:
			'Inserts a spinner with 3 bars flying left to right. You can specify the colors of all three bars. The shades are optional.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-bars-primary-secondary-success']
	},
	{
		rule: 's-corners-(themeColors)-(shades)',
		description:
			'Inserts a spinner with a shape shifting square. You can control the color of the square with the theme color value. The shade is optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-corners-primary']
	},
	{
		rule: 's-corners-outline-(themeColors)-(shades)',
		description:
			'Inserts a spinner with a shape shifting square outline. You can control the color of the outline with the theme color value. The shade is optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-corners-primary']
	},
	{
		rule: 's-squares-folding-(themeColors)-(shades)',
		description:
			'Inserts a spinner with a square that folds and expands. You can control the color of the squares with the theme color value. The shade is optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-squares-folding-primary']
	},
	{
		rule: 's-squares-rotate-(themeColors)-(shades)',
		description:
			'Inserts a spinner with 2 squares that rotate around each other. You can control the color of the squares with the theme color value. The shade is optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-squares-rotate-primary']
	},
	{
		rule: 's-squares-rotate-(themeColors)-(shades)-(themeColors)-(shades)',
		description:
			'Inserts a spinner with 2 squares that rotate around each other. You can control the color of the squares with the 2 theme color values. The shade is optional and 500 is the default.',
		keywords: ['spinners'],
		variablesUsed: ['themeColors', 'shades'],
		classes: [],
		examples: ['s-squares-rotate-primary-secondary-300']
	}
];
