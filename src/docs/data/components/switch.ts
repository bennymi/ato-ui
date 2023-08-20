import type { Data, ComponentAPIExtraInfo } from "../types";

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'Switch',
        required: ['label'],
        styles: ['labelStyles', 'background', 'activeBackground'],
        icons: ['inactiveIcon', 'activeIcon'],
        function: ['label', 'name', 'required', 'hideLabel', 'labelPosition', 'checked', 'disabled', 'size']
    },
];

// const componentProps: APIProp[] = [
//     {
//         component: 'Switch',
//         props: [
//             {
//                 name: 'label',
//                 type: 'string',
//                 description: 'Sets the toggle text.',
//                 required: true
//             },
//             {
//                 name: 'hideLabel',
//                 type: 'boolean',
//                 description: 'Define if the label should be hidden. It will still be available for screen readers.',
//                 defaultValue: 'false'
//             },
//             {
//                 name: 'labelPosition',
//                 type: 'SwitchLabelPosition',
//                 description: 'Set the label position.',
//                 defaultValue: 'left',
//                 options: 'left | right'
//             },
//             {
//                 name: 'size',
//                 type: 'SwitchSize',
//                 description: 'Set the size of the toggle switch.',
//                 defaultValue: 'md',
//                 options: 'sm | md | lg'
//             },
//             {
//                 name: 'name',
//                 type: 'string',
//                 description: 'The name of the hidden input element used for form submission.',
//                 defaultValue: ''
//             },
//             {
//                 name: 'required',
//                 type: 'boolean',
//                 description: 'Define whether or not the input is required.',
//                 defaultValue: 'false'
//             },
//             {
//                 name: 'checked',
//                 type: 'boolean',
//                 description: 'The value of the switch component. Allows you to bind to the checked status.',
//                 defaultValue: 'false'
//             }, 
//             {
//                 name: 'disabled',
//                 type: 'boolean',
//                 description: 'Define whether or not the switch is disabled.',
//                 defaultValue: 'false'
//             },
//             {
//                 name: 'labelStyles',
//                 type: 'string',
//                 isStyle: true,
//                 description: 'Set label styles.',
//                 defaultValue: 'px-2 text-surface-900-50'
//             },
//             {
//                 name: 'background',
//                 type: 'string',
//                 isStyle: true,
//                 description: 'Set the in-active background styles / classes.',
//                 defaultValue: 'bg-surface-300-400'
//             },
//             {
//                 name: 'activeBackground',
//                 type: 'string',
//                 isStyle: true,
//                 description: 'Set the active background styles.',
//                 defaultValue: 'bg-primary-500'
//             },
//             {
//                 name: 'inactiveIcon',
//                 type: 'string',
//                 isStyle: true,
//                 description: 'Set the inactive icon (optional). You can also set the icon size and color here. Example: "text-surface-900 text-lg i-material-symbols-dark-mode-rounded".',
//             },
//             {
//                 name: 'activeIcon',
//                 type: 'string',
//                 isStyle: true,
//                 description: 'Set the active icon (optional). You can also set the icon size and color here. Example: "text-surface-900 text-lg i-material-symbols-clear-day-rounded".',
//             }
//         ]
//     }
// ];

export const switchData: Data = {
    // componentProps
    apiExtraInfo
};