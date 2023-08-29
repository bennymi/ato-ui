import type { Data, ExampleHighlights, ComponentAPIExtraInfo } from "../types";

const highlights: ExampleHighlights = {
    main: {
        'app.svelte': {
            lines: ''
        }
    },
    colors: {
        'app.svelte': {
            words: [
                {
                    strings: ['titleBgStyle'],
                    id: 'prop'
                }
            ]
        }
    }
};

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'Accordion',
        styles: ['with', 'containerStyle'],
    },
    {
        component: 'AccordionItem',
        required: ['key'],
        styles: ['titleStyle', 'titleBgStyle', 'contentStyle', 'disabledStyle'],
    },
]

export const accordionData: Data = {
    highlights,
    apiExtraInfo
}