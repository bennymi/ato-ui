---
title: Dropdown Menu
description: A headless dropdown menu that can be used to create a list of actions availble through clicking a button.
---

<script>
    import Usage from '../Usage.svelte';
    import DropMenu from '$lib/components/dropdown-menu/DropMenu.svelte';

    const groups = [
        {
            items: [
                { icon: 'i-material-symbols-edit-outline-rounded', text: `Edit` },
                { icon: 'i-material-symbols-content-copy-outline-rounded', text: `Duplicate` }
		    ],
        },
        {
            items: [
                { icon: 'i-material-symbols-archive-outline-rounded', text: `Archive` },
			    { icon: 'i-material-symbols-drive-file-move-outline-rounded', text: `Move` }
            ]
        },
        {
            items: [
                { 
                    icon: 'i-material-symbols-delete-outline-rounded', 
                    text: `Delete`, 
                    hoverStyle: 'bg-error-500 text-on-error',
                    iconStyle: 'text-error-500' 
                }
            ]
        }
    ]
</script>

# Dropdown Menu | Headless

## Example

<Usage padding="pt-4 pb-60">
    <DropMenu {groups} width="w-[150px]" buttonIcon="i-mdi-chevron-down" />
</Usage>

Please see the [HeadlessUI](https://captaincodeman.github.io/svelte-headlessui/menu/) documentation or the Github page for our [Styled Menu](https://github.com/bennymi/ato-ui/blob/main/src/lib/components/dropdown-menu/DropMenu.svelte) to see how to create a menu. Remember to use Ato UI's tokens to style things like your `background`, `text`, `border`, etc.

