import { allColors, themeColors, shades } from './colors';
import { directions } from './directions';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Rounded =
	| 'rounded-btn'
	| 'rounded-container'
	| 'rounded-none'
	| 'rounded-sm'
	| 'rounded-md'
	| 'rounded-lg'
	| 'rounded-xl'
	| 'rounded-2xl'
	| 'rounded-3xl'
	| 'rounded-full';

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const sizes = ['sm', 'md', 'lg', 'xl'];
export const sizesJ = sizes.join('|');

export type ShortcutVariable = 'themeColors' | 'allColors' | 'shades' | 'directions' | 'sizes';

export type Keyword =
	| 'button'
	| 'icons'
	| 'cards'
	| 'chips'
	| 'gradient'
	| 'glass'
	| 'text'
	| 'background'
	| 'dark/light mode'
	| 'hover'
	| 'border'
	| 'spinners';

export type RulesDescription = {
	rule: string;
	keywords: Keyword[];
	variablesUsed: ShortcutVariable[];
	classes?: string[];
	description: string;
	examples: string[];
};

export const variablesDictionary = {
	themeColors,
	allColors,
	shades,
	directions,
	sizes
};
