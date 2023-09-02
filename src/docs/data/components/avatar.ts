import type { Data, ExampleHighlights, ComponentAPIExtraInfo } from "../types";

const highlights: ExampleHighlights = {
    dropdown: {
        'app.svelte': {
            words: [
                {
                    strings: ['btnStyle=""'],
                    id: 'prop'
                }
            ]
        }
    }
};

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'Avatar',
        styles: ['size', 'rounded', 'borderStyle', 'background', 'textStyles'],
    }
]

export const avatarData: Data = {
    highlights,
    apiExtraInfo
}