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
    },
    {
        component: 'DropdownMenuCheckboxItem',
        updatedName: 'Dropdown.CheckboxItem',
        required: ['checked'],
        styles: ['itemStyle', 'itemDisabledStyle'],
        icons: ['checkedIcon'],
        events: [
            {
                name: 'checked-change',
                type: 'DropdownMenuCheckboxCheckedChangeEvent',
                description: 'Gets called when the value of the checkbox item changes and returns the current and next value of the checkbox item.'
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
        events: [
            {
                name: 'value-change',
                type: 'DropdownMenuRadioGroupChangeEvent',
                description: 'Gets dispatched when the selected radio group item changes, and returns both the current and next value.'
            }
        ]
    },
    {
        component: 'DropdownMenuRadioGroupItem',
        updatedName: 'Dropdown.RadioGroupItem',
        required: ['value'],
        styles: ['itemStyle'],
        events: [
            {
                name: 'm-clicked',
                description: 'Gets dispatched when the item is clicked. Returns the item value and the original event.',
                type: 'DropdownMenuRadioGroupItemClickEvent'
            }
        ]
    },
    {
        component: 'DropdownMenuSubmenu',
        updatedName: 'Dropdown.Submenu',
        transitions: ['transition'],
        styles: ['width'],
        events: [
            {
                name: 'm-clicked',
                description: 'Gets dispatched when the submenu trigger item is clicked.',
                type: 'CustomEvent'
            }
        ]
    },
]

export const dropdownMenuData: Data = {
    highlights,
    apiExtraInfo
}