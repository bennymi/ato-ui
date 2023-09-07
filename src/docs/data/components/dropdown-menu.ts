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
        component: 'DropdownMenu',
        updatedName: 'Dropdown.Menu',
        required: ['ariaLabel', 'open'],
        transitions: ['transition'],
        styles: ['btnStyle', 'width', 'menuBgStyle', 'menuBorderStyle', 'itemStyle', 'itemDisabledStyle'],
        specialTypes: ['DropdownMenuOpenStore', 'DropdownMenuTransition'],
        slots: [
            {
                name: 'dropdown-menu-trigger',
                description: 'The slot for your dropdown menu trigger content.'
            },
            {
                name: 'default',
                description: 'The default slot for all your dropdown menu items.'
            }
        ]
    },
    {
        component: 'DropdownMenuCheckboxItem',
        updatedName: 'Dropdown.CheckboxItem',
        required: ['checked'],
        styles: ['itemStyle', 'itemDisabledStyle'],
        icons: ['checkedIcon'],
        specialTypes: ['DropdownMenuCheckboxValue', 'DropdownMenuCheckboxCheckedChangeEvent'],
        events: [
            {
                name: 'checked-change',
                type: 'DropdownMenuCheckboxCheckedChangeEvent',
                description: 'Gets called when the value of the checkbox item changes and returns the current and next value of the checkbox item.'
            }
        ],
        slots: [
            {
                name: 'default',
                description: 'The default slot for your checkbox item content.'
            }
        ]
    },
    {
        component: 'DropdownMenuItem',
        updatedName: 'Dropdown.Item',
        styles: ['itemStyle', 'itemDisabledStyle'],
        events: [
            {
                name: 'm-clicked',
                type: 'CustomEvent',
                description: 'Gets dispatched when the item is clicked.'
            }
        ],
        slots: [
            {
                name: 'default',
                description: 'The default slot for your dropdown menu item content.'
            }
        ]
    },
    {
        component: 'DropdownMenuSeparator',
        updatedName: 'Dropdown.Separator',
        styles: ['separatorStyle'],
    },
    {
        component: 'DropdownMenuRadioGroup',
        updatedName: 'Dropdown.RadioGroup',
        required: ['value'],
        icons: ['checkedIcon'],
        specialTypes: ['DropdownMenuRadioGroupValue', 'DropdownMenuRadioGroupChangeEvent'],
        events: [
            {
                name: 'value-change',
                type: 'DropdownMenuRadioGroupChangeEvent',
                description: 'Gets dispatched when the selected radio group item changes, and returns both the current and next value.'
            }
        ],
        slots: [
            {
                name: 'default',
                description: 'The default slot for your radio group items.'
            }
        ]
    },
    {
        component: 'DropdownMenuRadioGroupItem',
        updatedName: 'Dropdown.RadioGroupItem',
        required: ['value'],
        styles: ['itemStyle'],
        specialTypes: ['DropdownMenuRadioGroupItemClickEvent'],
        events: [
            {
                name: 'm-clicked',
                description: 'Gets dispatched when the item is clicked. Returns the item value and the original event.',
                type: 'DropdownMenuRadioGroupItemClickEvent'
            }
        ],
        slots: [
            {
                name: 'default',
                description: 'The default slot for your radio group item content.'
            }
        ]
    },
    {
        component: 'DropdownMenuSubmenu',
        updatedName: 'Dropdown.Submenu',
        transitions: ['transition'],
        styles: ['width'],
        specialTypes: ['DropdownMenuTransition'],
        events: [
            {
                name: 'm-clicked',
                description: 'Gets dispatched when the submenu trigger item is clicked.',
                type: 'CustomEvent'
            }
        ],
        slots: [
            {
                name: 'submenu-trigger',
                description: 'The slot for your submenu trigger content.'
            },
            {
                name: 'default',
                description: 'The default slot for your submenu items.'
            }
        ]
    },
]

export const dropdownMenuData: Data = {
    highlights,
    apiExtraInfo
}