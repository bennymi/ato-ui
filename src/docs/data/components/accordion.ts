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
        component: 'AccordionRoot',
        updatedName: 'Accordion.Root',
        styles: ['width', 'containerStyle'],
        slots: [{
            name: 'default',
            description: 'The default slot for you to put the accordion items in.',
            parentElement: 'div'
        }]
    },
    {
        component: 'AccordionItem',
        updatedName: 'Accordion.Item',
        required: ['key'],
        styles: ['titleStyle', 'titleBgStyle', 'contentStyle', 'disabledStyle'],
        slots: [
            {
                name: 'default',
                description: 'The default slot is for the item content.',
                parentElement: 'div'
            },
            {
                name: 'title',
                description: 'The slot for the trigger button title content.',
                parentElement: 'button'
            }
        ]
    },
]

export const accordionData: Data = {
    highlights,
    apiExtraInfo
}