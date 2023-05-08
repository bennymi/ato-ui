<!-- 
    Source: https://captaincodeman.github.io/svelte-headlessui/menu/
 -->

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createMenu } from 'svelte-headlessui';

	import type { Group } from './types.d';

	const dispatch = createEventDispatcher();

	/** Set the label of the button. */
	export let label = '';
	/** Set the button class (eg. btn-primary). */
	export let buttonClass = 'btn-primary';
	/** Pass in the item groups that should be displayed in the dropdown. */
	export let groups: Group[] = [];

	/** Set the width of the menu items. */
	export let width = 'w-56';

	const menu = createMenu({ label: 'Actions' });

	function onSelect(e: Event) {
		// console.log('select', (e as CustomEvent).detail);
		dispatch('select', (e as CustomEvent).detail);
	}

	// const groups = [
	// 	[
	// 		{ icon: 'i-material-symbols-edit-outline-rounded', text: `Edit` },
	// 		{ icon: 'i-material-symbols-content-copy-outline-rounded', text: `Duplicate` }
	// 	],
	// 	[
	// 		{ icon: 'i-material-symbols-archive-outline-rounded', text: `Archive` },
	// 		{ icon: 'i-material-symbols-drive-file-move-outline-rounded', text: `Move` }
	// 	],
	// 	[{ icon: 'i-material-symbols-delete-outline-rounded', text: `Delete` }]
	// ];
</script>

<div class="relative inline-block text-left">
	<button
		use:menu.button
		on:select={onSelect}
		class="inline-flex w-full justify-center {buttonClass}"
	>
		<span>{label}</span>
		<span class="text-xl i-mdi-chevron-down" />
	</button>

	{#if $menu.expanded}
		<div
			use:menu.items
			class="absolute right-0 mt-2 {width} origin-top-right divide-y divide-surface-100/90 rounded-token-container bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		>
			{#each groups as group}
				<div class="px-1 py-1">
					{#each group as option}
						{@const active = $menu.active === option.text}
						<button
							use:menu.item
							class="group flex gap-1 rounded-token-base items-center w-full px-2 py-2 text-sm font-medium {active
								? 'bg-primary-500 text-on-primary'
								: 'text-surface-900'}"
						>
							<span
								class="text-lg {active
									? 'text-on-primary'
									: 'text-primary-500'} group-hover:(text-on-primary) {option.icon}"
							/>
							<span>{option.text}</span>
						</button>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
