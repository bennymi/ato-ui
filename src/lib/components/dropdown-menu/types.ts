
import type { DropdownMenu } from '@melt-ui/svelte';

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

};