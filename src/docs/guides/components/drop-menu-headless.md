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

```svelte showCode=true
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createMenu } from 'svelte-headlessui';

	const dispatch = createEventDispatcher();

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

	const menu = createMenu({ label: 'Actions' });

	function onSelect(e: Event) {
		dispatch('select', (e as CustomEvent).detail);
	}
</script>

<div class="relative inline-block text-left">
	<button
		use:menu.button
		on:select={onSelect}
		class="inline-flex w-full justify-center btn-primary"
	>
		Menu
	</button>

	{#if $menu.expanded}
		<div
			use:menu.items
			class="absolute right-0 mt-2 w-56 origin-top-right rounded-container bg-inverse-white-surface-500 ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg shadow-surface-500/50-400/20"
		>
			{#each groups as { title, items }, i}
				<div class="px-1 py-1">
					{#if title}
						<div class="text-sm px-2 py-1 text-surface-800/80-200/80 font-semibold">
							{title}
						</div>
					{/if}
					{#each items as item}
						{@const active = $menu.active === item.text}
						<button
							use:menu.item
							class="group flex gap-1 rounded-btn items-center w-full px-2 py-2 text-sm font-medium {active
								? 'bg-primary-500 text-on-primary'
								: 'text-surface-900-50'}"
						>
							<span class="text-lg {item.icon} {active ? '' : 'text-primary-500'}" />
							<span>{item.text}</span>
						</button>
					{/each}
				</div>
				{#if i !== groups.length - 1}
					<hr class="border-inverse-surface-200/90-surface-100/40 mx-2 rounded-btn" />
				{/if}
			{/each}
		</div>
	{/if}
</div>
```