
// https://github.com/huntabyte/bits/blob/main/src/lib/bits/accordion/index.ts
// https://github.com/huntabyte/bits/blob/main/src/lib/bits/index.ts

// Export so we can use dot notation.
import { default as Menu } from './dropdown-menu.svelte';
import { default as CheckboxItem } from './dropdown-menu-checkbox-item.svelte';
import { default as Item } from './dropdown-menu-item.svelte';
import { default as RadioGroup } from './dropdown-menu-radio-group.svelte';
import { default as RadioGroupItem } from './dropdown-menu-radio-group-item.svelte';
import { default as Separator } from './dropdown-menu-separator.svelte';
import { default as Submenu } from './dropdown-menu-submenu.svelte';

export {
    Menu,
    CheckboxItem,
    Item,
    RadioGroup,
    RadioGroupItem,
    Separator,
    Submenu
};

// These are for the automatic API documentation.
export { default as DropdownMenu } from './dropdown-menu.svelte';
export { default as DropdownMenuCheckboxItem } from './dropdown-menu-checkbox-item.svelte';
export { default as DropdownMenuItem } from './dropdown-menu-item.svelte';
export { default as DropdownMenuRadioGroup } from './dropdown-menu-radio-group.svelte';
export { default as DropdownMenuRadioGroupItem } from './dropdown-menu-radio-group-item.svelte';
export { default as DropdownMenuSeparator } from './dropdown-menu-separator.svelte';
export { default as DropdownMenuSubmenu } from './dropdown-menu-submenu.svelte';

// Types
export * from './types';