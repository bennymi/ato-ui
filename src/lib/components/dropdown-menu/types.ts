import type { Writable } from 'svelte/store';
import type { TransitionConfig } from "svelte/transition";
import type { 
    DropdownMenuElements, 
    DropdownMenuBuilders, 
    DropdownMenuRadioGroup 
} from '@melt-ui/svelte';

// type GroupItem = {
//     icon: string;
//     text: string;
//     hoverStyle?: string;
//     iconStyle?: string;
// }

// export type DropMenuGroup = {
//     title?: string;
//     items: GroupItem[];
// };

export type DropdownMenuCheckboxCheckedChangeEvent = CustomEvent<{ curr: boolean, next: boolean }>;
export type DropdownMenuRadioGroupChangeEvent = CustomEvent<{ curr: string, next: string }>;
export type DropdownMenuRadioGroupItemClickEvent = CustomEvent<{ value: string, originalEvent: CustomEvent }>;

// ---------------------------------------

export type DropdownMenuContext = {
    item: DropdownMenuElements['item'];
    separator: DropdownMenuElements['separator'];
    createSubmenu: DropdownMenuBuilders['createSubmenu'];
    createMenuRadioGroup: DropdownMenuBuilders['createMenuRadioGroup'];
    createCheckboxItem: DropdownMenuBuilders['createCheckboxItem'];
    itemDisabledStyle: string;
    itemStyle: string;
    menuContainerStyle: string;
};

export type DropdownMenuRadioGroupContext = {
    radioItem: DropdownMenuRadioGroup['elements']['radioItem'];
    isChecked: DropdownMenuRadioGroup['helpers']['isChecked'];
    checkedIcon: string;
    activeStyle: string;
    inactiveStyle: string;
}

export type DropdownMenuOpenStore = Writable<boolean>;
export type DropdownMenuRadioGroupValue = Writable<string>;
export type DropdownMenuCheckboxValue = Writable<boolean>;

export type DropdownMenuTransition = {
    trans: (node: Element, options: any) => TransitionConfig;
    options: any;
}