
export type ShortcutVariable = 'themeColors' | 'allColors' | 'shades' | 'directions' | 'sizes' | 'orientation';

export type Keyword = 'button' | 'icons' | 'cards' | 'chips' | 'gradient' | 'glass' | 'text' | 'background' | 'dark/light mode' | 'hover' | 'border' | 'spinners';

export type RulesDescription = {
    rule: string,
    keywords: Keyword[],
    variablesUsed: ShortcutVariable[],
    classes?: string[],
    description: string,
    examples: string[],
};