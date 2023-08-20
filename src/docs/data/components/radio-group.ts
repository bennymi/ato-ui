import type { Data, ComponentAPIExtraInfo, ExampleHighlights } from "../types";

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'RadioGroup',
        required: ['ariaLabel', 'group', 'items'],
        styles: ['bgActiveStyles', 'bgStyles'],
        icons: ['activeIcon', 'items'],
        function: ['items'] // the others as well, but this one should have two icons
    },
    {
        component: 'RadioGroupRegular',
        required: ['ariaLabel', 'checked', 'radioItems'],
        styles: ['activeColor', 'backgroundStyles', 'activeBackgroundStyles', 'labelStyles'],
        // function: ['ariaLabel', 'orientation', 'checked', 'radioItems', 'disabled', 'required', 'loop', 'size']
    }
];

const highlights: ExampleHighlights = {
    colors: {
        'app.svelte': {
            words: [
                {
                    strings: ['bgActiveStyles'],
                    id: 'prop'
                }
            ]
        }
    },
    size: {
        'app.svelte': {
            words: [
                {
                    strings: ['size="sm"', 'size="md"', 'size="lg"'],
                    id: 'prop'
                }
            ]
        }
    },
    'active-icon': {
        'app.svelte': {
            words: [
                {
                    strings: ['activeIcon'],
                    id: 'prop'
                }
            ]
        }
    }
};

export const radioGroupData: Data = {
    // componentProps
    apiExtraInfo,
    highlights
};