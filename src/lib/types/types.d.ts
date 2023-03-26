import { allColors, themeColors, shades } from './colors.d';
import { directions } from './directions.d';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export const sizes: { [key: string]: string } = {
    'sm': 'py-1 px-2 text-sm font-medium',
    'md': 'py-1 px-3 font-medium',
    'lg': 'py-2 px-4 text-lg font-semibold',
    'xl': 'py-3 px-6 text-xl font-bold'
};

export const sizesJ = Object.keys(sizes).join('|');

export type ShortcutVariable = 'themeColors' | 'allColors' | 'shades' | 'directions' | 'sizes';

export type Keyword = 'button' | 'cards' | 'chips' | 'gradient' | 'glass' | 'text' | 'background' | 'dark/light mode' | 'border' | 'spinners';

export type RulesDescription = {
    rule: string,
    keywords: Keyword[],
    variablesUsed: ShortcutVariable[],
    classes?: string[],
    description: string,
    examples: string[],
};

export const variablesDictionary = {
    themeColors,
    allColors,
    shades,
    directions,
    sizes: Object.keys(sizes),
};