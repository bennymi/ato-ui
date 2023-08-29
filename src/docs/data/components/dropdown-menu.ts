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
                    strings: [''],
                    id: 'prop'
                }
            ]
        }
    }
};

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'Accordion',
        styles: [''],
    },
    {
        component: 'AccordionItem',
        required: [''],
        styles: [''],
    },
]

export const dropdownMenuData: Data = {
    highlights,
    apiExtraInfo
}