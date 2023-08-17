import type { Data, APIProp, ExampleHighlights, ComponentAPIExtraInfo } from "../types";

const highlights: ExampleHighlights = {
    main: {
        'app.svelte': {
            lines: '2,20-24',
        }
    }
};

// const componentProps: APIProp[] = [
//     {
//         component: 'TabsList',
//         props: [
//             {
//                 name: 'activeTab',
//                 type: 'string',
//                 description: 'Sets the key of the tab that should be active by default.',
//                 required: true
//             },
//             {
//                 name: 'disabledTabs',
//                 type: 'boolean | string[]',
//                 defaultValue: '[]',
//                 description: `Set the tabs that should be disabled. You can pass individual tabs in a list of strings or disable all tabs by setting this prop to 'true'.`
//             },
//             {
//                 name: 'tabHeaders',
//                 type: 'TabHeader[]',
//                 description: 'Set the tab headers. For each header provide a key, a title, and optionally an iconify icon.',
//                 required: true
//             },
//             {
//                 name: 'ariaLabel',
//                 type: 'string',
//                 description: 'The aria label for the tab headers, describing what they are for.',
//                 required: true
//             },
//             {
//                 name: 'borderStyle',
//                 type: 'string',
//                 defaultValue: 'border-b-1 border-surface-100-200',
//                 description: 'Set the border style.',
//                 isStyle: true
//             },
//             {
//                 name: 'activeStyle',
//                 type: 'string',
//                 defaultValue: 'primary-500',
//                 description: 'Set the active header style.',
//                 isStyle: true
//             },
//             {
//                 name: 'inactiveStyle',
//                 type: 'string',
//                 defaultValue: 'text-surface-900-50 hover:primary-500/60',
//                 description: 'Set the inactive header style.',
//                 isStyle: true
//             },
//             {
//                 name: 'headerWidth',
//                 type: 'string',
//                 defaultValue: 'min-w-40',
//                 description: 'Set the width of the headers.',
//                 isStyle: true
//             },
//             {
//                 name: 'justifyHeaders',
//                 type: 'string',
//                 defaultValue: 'justify-center',
//                 description: 'Set how the headers should be aligned with the justify property.',
//                 isStyle: true
//             }
//         ]
//     },
//     {
//         component: 'Tab',
//         props: [
//             {
//                 name: 'key',
//                 type: 'string',
//                 description: 'Provide the key of the tab content. This has to be the same as the header key it belongs to.',
//                 required: true
//             }
//         ]
//     }
// ];

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'TabsList',
        required: ['activeTab', 'tabHeaders', 'ariaLabel'],
        styles: ['borderStyle', 'activeStyle', 'inactiveStyle', 'headerWidth', 'justifyHeaders']
    },
    {
        component: 'Tab',
        required: ['key']
    }
]

export const tabsData: Data = {
    highlights,
    // componentProps
    apiExtraInfo
}