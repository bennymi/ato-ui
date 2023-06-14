---
title: Combobox (Autocomplete)
description: A headless combobox component with autocomplete.
---

<script>
	import Usage from '../Usage.svelte';
    import Combobox from '$lib/components/combobox/Combobox.svelte';

    const options = [
		'Aang',
		'Katara',
		'Toph',
		'Sokka',
		'Appa',
		'Zuko',
		'Iroh',
		'Momo'
	];
</script>

# Combobox (Autocomplete) | Headless

## Usage

<Usage padding="pt-2 pb-62">
    <Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
		searchIcon="text-xl i-material-symbols-search-check-rounded"
		selectIcon="text-xl i-material-symbols-check-small-rounded"
	/>
</Usage>

Please see the [HeadlessUI](https://captaincodeman.github.io/svelte-headlessui/combobox/) documentation or the Github page for our [Styled Combobox](https://github.com/bennymi/ato-ui/blob/main/src/lib/components/combobox/Combobox.svelte) to see how to create a combobox. Remember to use Ato UI's tokens to style things like your `background`, `text`, `border`, etc.

```svelte
<script lang="ts">
	import { createCombobox } from 'svelte-headlessui';

	/** Set the options that are selectable. */
	let options = [
		'Aang',
		'Katara',
		'Toph',
		'Sokka',
		'Appa',
		'Zuko',
		'Iroh'
	];
	/** Set the value that should be selected. */
	let selected = options[0];
	/** Set the aria label of the input. */
	let ariaLabel = 'Actions';

	const combobox = createCombobox({ label: ariaLabel, selected });

	$: filtered = options.filter((item) =>
		item
			.toLowerCase()
			.replace(/\s+/g, '')
			.includes($combobox.filter.toLowerCase().replace(/\s+/g, ''))
	);
</script>

<div class="w-72 min-w-50">
	<div class="relative mt-1">
		<div
			class="flex w-full cursor-default overflow-hidden rounded-container text-left shadow-md shadow-surface-900/40 focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75 ring-offset-2 ring-offset-primary-300)"
		>
			<input
				use:combobox.input
				on:select
				class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-surface-900 focus:ring-0 transition-all"
				value={$combobox.selected}
			/>
			<button
				use:combobox.button
				type="button"
				class="flex justify-center items-center px-2 rounded-r-container transition-all primary-500/90 hover:primary-500"
			>
                <!-- i-material-symbols-search-check-rounded -->
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M8.925 9.7L10.9 7.725q.225-.225.525-.225t.525.225q.225.225.225.538t-.225.537l-2.5 2.5q-.225.225-.525.225T8.4 11.3L7.05 9.95q-.225-.225-.225-.537t.225-.538q.225-.225.525-.225t.525.225l.825.825ZM20.3 20.3q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                    />
                </svg>
			</button>
		</div>

		{#if $combobox.expanded}
			<ul
				use:combobox.items
				class="absolute mt-1 max-h-60 w-full overflow-auto rounded-container bg-white py-1 text-base shadow-lg ring-1 ring-surface-900/10 focus:outline-none"
			>
				{#each filtered as value}
					{@const active = $combobox.active === value}
					{@const select = $combobox.selected === value}
					<li
						class="relative cursor-default select-none py-2 pl-10 pr-4 {active
							? 'primary-500'
							: 'text-surface-900'}"
						use:combobox.item={{ value }}
					>
						<span class="block truncate {select ? 'font-medium' : 'font-normal'}">{value}</span>
						{#if select}
							<span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <!-- i-material-symbols-check-small-rounded -->
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    ><path
                                        fill="currentColor"
                                        d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                                    />
                                </svg>
							</span>
						{/if}
					</li>
				{:else}
					<li class="relative cursor-default select-none py-2 pl-10 pr-4 text-surface-900">
						<span class="block truncate font-normal">Nothing found</span>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
```