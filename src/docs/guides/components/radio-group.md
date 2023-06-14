---
title: Radio Group
component: components/radio-group/RadioGroup.svelte
description: A radio group example for Svelte.
---

<script>
    import Usage from '../Usage.svelte';
    import PropsTable from './PropsTable.svelte';
    import RadioGroup from '$lib/components/radio-group/RadioGroup.svelte';
    import docs from '$lib/components/radio-group/RadioGroup.svelte?raw&sveld';

	let items = [
		{
			value: 'startup',
			label: 'Startup',
			// subLabel: 'This is a startup',
			icon: 'i-material-symbols-alarm-on-rounded'
		},
		{ value: 'business', label: 'Business' },
		{ value: 'enterprise', label: 'Enterprise' }
	];

    let group = 'startup';

	let activeIcon = 'i-material-symbols-check-circle-outline-rounded text-on-primary';
</script>

# Radio Group | Headless

## Usage

<Usage padding="py-20">
    <RadioGroup {items} name="group-1" {activeIcon} {group} />
</Usage>

```svelte
<script lang="ts">
    import RadioGroup from 'ato-ui';
	import type { RadioItem } from 'ato-ui';

	export let shades: FullTheme;

    let group = 'startup';

	let items: RadioItem[] = [
		{ value: 'startup', label: 'Startup', icon: 'i-material-symbols-alarm-on-rounded' },
		{ value: 'business', label: 'Business' },
		{ value: 'enterprise', label: 'Enterprise' }
	];
</script>

<RadioGroup
    {items}
    bind:group
    name="group-select"
/>
```

## Colors

You can change the active and inactive colors with the `bgActiveClasses` and `bgClasses` props.

<Usage padding="py-20" column="true">
    <RadioGroup {items} name="color-1" size="sm" {activeIcon} bgActiveClasses="primary-500" />
    <RadioGroup {items} name="color-2" size="sm" {activeIcon} bgActiveClasses="secondary-500" />
    <RadioGroup {items} name="color-3" size="sm" {activeIcon} bgActiveClasses="tertiary-500" />
    <RadioGroup {items} name="color-4" size="sm" {activeIcon} bgActiveClasses="success-500" />
</Usage>

```svelte
<RadioGroup
    {items}
    bind:group
    name="group-select"
    bgActiveClasses="secondary-500"
    bgClasses="surface-800-50"
/>
```

## Active Icon

You can change the active icon that is used when an option is selected, by passing an icon `i-` through the `activeIcon` prop. Also make sure that the color of the icon is set properly so it is visible with the active color you have selected by using the `text-on-` tokens.

<Usage padding="py-20">
    <RadioGroup {items} name="color-2" bgActiveClasses="secondary-500" activeIcon="text-on-secondary i-material-symbols-star-rounded" />
</Usage>

```svelte
<RadioGroup
    {items}
    bind:group
    name="group-select"
    bgActiveClasses="secondary-500"
    bgClasses="surface-800-50"
    activeIcon="text-on-secondary i-material-symbols-star-rounded"
/>
```

## Size

You can change the size of the groups with the `size` prop by selecting `sm`, `md`, or `lg`.

<Usage padding="py-20" column="true">
    <RadioGroup {items} name="size-sm" size="sm" {activeIcon} />
    <RadioGroup {items} name="size-md" size="md" {activeIcon} />
    <RadioGroup {items} name="size-lg" size="lg" {activeIcon} />
</Usage>

```svelte
<RadioGroup
    {items}
    bind:group
    name="group-select"
    size="sm"
/>
```

## Props

<PropsTable props={docs.props} />