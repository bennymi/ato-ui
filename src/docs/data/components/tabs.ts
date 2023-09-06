import type { Data, APIProp, ExampleHighlights, ComponentAPIExtraInfo } from "../types";

const highlights: ExampleHighlights = {
    main: {
        'app.svelte': {
            lines: '3,23-27',
        }
    }
};

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'TabsList',
        updatedName: 'Tabs.Root',
        required: ['value', 'tabHeaders', 'ariaLabel'],
        styles: ['borderStyle', 'activeStyle', 'inactiveStyle', 'headerWidth', 'justifyHeaders'],
        icons: ['tabHeaders'],
        function: ['tabHeaders'],
        specialTypes: ['TabValue', 'TabHeader[]'],
        slots: [
            {
                name: 'default',
                description: 'The default slot to put the Tab components into.'
            }
        ]
    },
    {
        component: 'Tab',
        updatedName: 'Tabs.Tab',
        required: ['key'],
        slots: [
            {
                name: 'default',
                description: 'The default slot for your tab content.'
            }
        ]
    }
]

export const tabsData: Data = {
    highlights,
    // componentProps
    apiExtraInfo
}