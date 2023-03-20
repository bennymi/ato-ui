import { allColors, themeColors } from './colors.d';
import { directions } from './directions.d';

export type RulesDescription = {
    rule: string,
    keywords: string[],
    variablesUsed: string[],
    classes: string[],
    description: string,
    examples: string[],
}

export const rulesKeywords = {
    "themeColors": themeColors,
    "allColors": allColors,
    "directions": directions,
} 