---
title: Dropdown Menu
component: components/dropdown-menu/DropMenu.svelte
description: Create a list of actions that is available through a dropdown menu.
---

<script>
    import { PropsTable } from '$components';
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
                    hoverStyle: 'bg-error-500 text-on-error',
                    iconStyle: 'text-error-500' 
                }
            ]
        }
    ]
</script>

## Preview

<Usage padding="pt-4 pb-60">
    <DropMenu {groups} width="w-[150px]" buttonIcon="i-mdi-chevron-down" />
</Usage>

You can customize the button that opens the menu by passing in a button class to the `buttonClass` prop, for example `"btn-primary-secondary"`. Pass in the individual items through the `groups` prop. Each group can have a `title` as well as `items`. For each group item you can set a `text` as well as an optional `icon`. For each item you can also overwrite the default `hoverStyle` and `iconStyle` (check the last group item below with the delete action for an example of this). 

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
                    hoverStyle: 'bg-error-500 text-on-error',
                    iconStyle: 'text-error-500'
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