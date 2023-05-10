---
title: Dropdown Menu
component: components/dropdown-menu/DropMenu.svelte
description: Create a list of actions that is available through a dropdown menu.
---

<script>
    import PropsTable from './PropsTable.svelte';
    import docs from '$lib/components/dropdown-menu/DropMenu.svelte?raw&sveld';
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
                    hoverStyle: 'hover:(bg-error-500 text-on-error)',
                    iconStyle: 'text-error-500 group-hover:(text-on-error)' 
                }
            ]
        }
    ]
</script>

# Dropdown Menu

## Usage

<div class="w-full flex justify-center items-center pt-4 pb-60 px-2 rounded-token-container border-1 border-surface-500/30-200/30 my-4">
    <DropMenu {groups} width="w-[150px]" buttonIcon="i-mdi-chevron-down" />
</div>

You can customize the button that opens the menu by passing in a button class to the `buttonClass` prop, for example `"btn-primary-secondary"`. Pass in the individual items through the `groups` prop. Each group can have a `title` as well as `items`. For each group item you can set a `text` as well as an optional `icon`. For each item you can also overwrite the default `hoverStyle` and `iconStyle` (check the last group item below with the delete action for an example of this). 

Note that UnoCSS automatically turns `(px-4 py-2)` with multiple classes after `hover` into separate `hover:px-4 hover:py-2` classes, even in the code blocks below. Always use grouping with `()` to make your classes more readable. 

When a menu item is clicked, it emits a `select` event with the clicked item.

```svelte
<script lang="ts">
    import { DropMenu, type DropMenuGroup } from 'ato-ui';

    const groups: DropMenuGroup = [
        {
            title: 'Group title',
            items: [
                { 
                    icon: 'i-material-symbols-edit-outline-rounded', 
                    text: `Edit` 
                },
                { 
                    icon: 'i-material-symbols-content-copy-outline-rounded', 
                    text: `Duplicate` 
                }
		    ],
        },
        {
            items: [
                { 
                    icon: 'i-material-symbols-archive-outline-rounded', 
                    text: `Archive` 
                },
			    { 
                    icon: 'i-material-symbols-drive-file-move-outline-rounded', 
                    text: `Move` 
                }
            ]
        },
        {
            items: [
                { 
                    icon: 'i-material-symbols-delete-outline-rounded', 
                    text: `Delete`,
                    hoverStyle: 'hover:(bg-error-500 text-on-error)',
                    iconStyle: 'text-error-500 group-hover:(text-on-error)'
                }
            ]
        }
    ]
</script>

<DropMenu 
    {groups} 
    width="w-[150px]" 
    buttonClass="btn-primary-secondary"
    buttonIcon="i-mdi-chevron-down"
    on:select={(event) => console.log('selected:', event.detail)} 
/>
```

## Props

<PropsTable props={docs.props} />