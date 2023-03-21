import { allColors, themeColors } from './colors.d';
import { directions } from './directions.d';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type ShortcutVariable = 'themeColors' | 'allColors' | 'directions';

export type RulesDescription = {
    rule: string,
    keywords: string[],
    variablesUsed: ShortcutVariable[],
    classes: string[],
    description: string,
    examples: string[],
}

export const variablesDictionary = {
    themeColors,
    allColors,
    directions,
} 