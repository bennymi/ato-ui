import type { RulesDescription } from "../types"


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
        description: 'Creates an icon button with equal height and width.',
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
        rule: 'btn-glass-(themeColors)-(shades)/(opacity)',
        description: 'Create a glass button with the specified theme color and shade. The shade and opacity are optional with shade 500 being the default. The opacity changes the background color opacity (70 is the default percentage).',
        keywords: ['button', 'glass'],
        variablesUsed: ['themeColors', 'shades'],
        classes: [],
        examples: ['btn-glass-primary', 'btn-glass-success-700', 'btn-glass-secondary/50']
    },
    {
        rule: 'btn-glass-(directions)-(themeColors)-(shades)/(opacity)-(themeColors)-(shades)/(opacity)',
        description: 'Create a glass button with a gradient of 2 colors in the specified direction (default is right). The shades are optional with shade 500 being the default for both colors. For each color you can also optionally define an opacity.',
        keywords: ['button', 'glass', 'gradient'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-glass-tr-primary-secondary', 'btn-glass-primary-200-tertiary', 'btn-glass-r-secondary-200-warning-700']
    },
    {
        rule: 'btn-glass-(directions)-(themeColors)-(shades)/(opacity)-(themeColors)-(shades)/(opacity)-(themeColors)-(shades)/(opacity)',
        description: 'Create a glass button with a gradient of 3 colors in the specified direction (default is right). It goes from the first theme color via the second theme color to the third one. Shades and opacity are optional.',
        keywords: ['button', 'glass', 'gradient'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-glass-primary-secondary-tertiary', 'btn-glass-bl-primary-700-secondary-600-tertiary-400']
    },
    // Buttons with border gradiuses
    {
        rule: 'btn-border-(themeColors)-(shades)/(opacity)-(directions)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a button with a gradient border of 2 colors in the specified direction. The first theme color is the background of the button with an optional opacity. The other 2 colors represent the border gradient. The shades are optional with shade 500 being the default for all colors.',
        keywords: ['button', 'gradient', 'border'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-border-surface-900-tr-primary-secondary', 'btn-border-surface-b-primary-200-tertiary', 'btn-border-surface-800-secondary-400-warning-700']
    },
    {
        rule: 'btn-border-(themeColors)-(shades)/(opacity)-(directions)-(themeColors)-(shades)-(themeColors)-(shades)-(themeColors)-(shades)',
        description: 'Create a button with a gradient border of 3 colors in the specified direction. The first theme color is the background of the button with an optional opacity. The other 3 colors represent the border gradient. The shades are optional with shade 500 being the default for all colors.',
        keywords: ['button', 'gradient', 'border'],
        variablesUsed: ['directions', 'themeColors', 'shades'],
        classes: [],
        examples: ['btn-border-surface-900/50-primary-secondary-tertiary', 'btn-border-surface-bl-primary-700-secondary-600-tertiary-400']
    },
    // Group buttons
    {
        rule: 'btn-group-(vertical?)-(outline?)-(themeColors)-(shades?)',
        description: `Creates a button group for the children button or anchor elements of your element. You can add 'vertical' to change the orientation of the buttons, or 'outline' to change the style.`,
        keywords: ['button'],
        variablesUsed: ['orientation', 'themeColors', 'shades'],
        examples: ['btn-group-error', 'btn-group-vertical-tertiary', 'btn-group-outline-primary', 'btn-group-vertical-outline-secondary']
    },
]