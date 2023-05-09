---
title: Dropdown Menu
component: $lib/components/dropdown-menu/DropMenu.svelte
description: Create a list of actions that is available through a dropdown menu.
---

<script>
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
                { icon: 'i-material-symbols-delete-outline-rounded', text: `Delete` }
            ]
        }
    ]
</script>

# Dropdown Menu

## Usage

<div class="w-full flex justify-center items-center pt-12 pb-60 px-2 rounded-token-container border-1 border-surface-500/30-200/30 my-4">
    <DropMenu {groups} width="w-[150px]" buttonIcon="i-mdi-chevron-down" />
</div>

You can customize the button that opens the menu by passing in a button class to the `buttonClass` prop, for example `btn-primary-secondary`. When a menu item is clicked, it emits a `select` event with the clicked item.

```svelte
<script lang="ts">
    import DropMenu from 'ato-ui';
    import type { DropMenuGroup } from 'ato-ui';

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
                    text: `Delete` 
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