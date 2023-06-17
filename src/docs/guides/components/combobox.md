---
title: Combobox (Autocomplete)
description: A combobox component with autocomplete.
---

<script>
	import Usage from '../Usage.svelte';
    import PropsTable from './PropsTable.svelte';
    import docs from '$lib/components/combobox/Combobox.svelte?raw&sveld';
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

# Combobox (Autocomplete)

## Example

<Usage padding="pt-2 pb-62">
    <Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
		searchIcon="text-xl i-material-symbols-search-check-rounded"
		selectIcon="text-xl i-material-symbols-check-small-rounded"
	/>
</Usage>

```svelte
<script lang="ts">
	import { Combobox } from 'ato-ui';

	const options = [
		'Aang',
		'Katara',
		'Toph',
		'Sokka',
		'Appa',
		'Zuko',
		'Iroh'
	];

	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
	}
</script>

<Combobox
    {options}
    selected={options[0]}
    ariaLabel="Actions"
    on:select={onSelect}
/>
```

## Changing Colors

You can use the `buttonStyle`, `activeStyle`, and `inactiveStyle` props to change the colors of the buttons and list items.

<Usage padding="pt-2 pb-62">
    <Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
        buttonStyle="success-500/90 hover:success-500"
		activeStyle="success-500"
	/>
</Usage>

```svelte
<Combobox
    {options}
    selected={options[0]}
    ariaLabel="Actions"
    on:select={onSelect}
    buttonStyle="success-500/90 hover:success-500"
	activeStyle="success-500"
    inctiveStyle="text-surface-800"
/>
```

## Changing Icons

You can use the `searchIcon` and `selectIcon` props to change the icons of the button and selected item. You also have to pass in the size the icons should be with `text-lg` or `text-xl` for example.

<Usage padding="pt-2 pb-62">
    <Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
        searchIcon="i-material-symbols-clear-day-rounded text-lg"
		selectIcon="i-material-symbols-cloud text-lg"
		buttonStyle="warning-500/90 hover:warning-500"
		activeStyle="warning-500"
	/>
</Usage>

```svelte
<Combobox
    {options}
    selected={options[0]}
    ariaLabel="Actions"
    on:select={onSelect}
    searchIcon="i-material-symbols-clear-day-rounded text-lg"
    selectIcon="i-material-symbols-cloud text-lg"
    buttonStyle="warning-500/90 hover:warning-500"
    activeStyle="warning-500"
/>
```

## Props

<PropsTable props={docs.props} />