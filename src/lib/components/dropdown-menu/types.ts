import type { Writable } from 'svelte/stores';
import type { TransitionConfig } from "svelte/transition";
import type { 
    DropdownMenuElements, 
    DropdownMenuBuilters, 
    DropdownMenuRadioGroup 
} from '@melt-ui/svelte';

type GroupItem = {
    icon: string;
    text: string;
    hoverStyle?: string;
    iconStyle?: string;
}

export type DropMenuGroup = {
    title?: string;
    items: GroupItem[];
};

// ---------------------------------------

export type DropdownMenuContext = {
    item: DropdownMenuElements['item'];
    separator: DropdownMenuElements['separator'];
    createSubmenu: DropdownMenuBuilters['createSubmenu'];
    createMenuRadioGroup: DropdownMenuBuilters['createMenuRadioGroup'];
    createCheckboxItem: DropdownMenuBuilters['createCheckboxItem'];
    itemDisabledStyle: string;
    itemStyle: string;
};

export type DropdownMenuRadioGroupContext = {
    radioItem: DropdownMenuRadioGroup['elements']['radioItem'];
    isChecked: vDropdownMenuRadioGroup['helpers']['isChecked'];
    checkedIcon: string;
    activeStyle: string;
    inactiveStyle: string;
}

export type DropdownMenuOpenStore = Writable<boolean>;
export type DropdownMenuRadioGroupValue = Writable<string | null>;
export type DropdownMenuCheckboxValue = Writable<boolean>;

export type DropdownMenuTransition = {
    trans: (node: Element, options: any) => TransitionConfig;
    options: any;
}