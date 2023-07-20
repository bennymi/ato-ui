---
title: Tabs
description: A tabs component, to easily switch between different views.
---

<script>
	import PropsTable from './PropsTable.svelte';
    import tabs_list_docs from '$lib/components/tabs/TabsList.svelte?raw&sveld';
    import tab_docs from '$lib/components/tabs/Tab.svelte?raw&sveld';

    import { TabsList, Tab } from '$lib/components';

	const tabHeaders = [
		{
			key: 'styled',
			title: 'Styled',
			icon: 'text-xl i-material-symbols-water-drop-rounded'
		},
		{
			key: 'headless',
			title: 'Headless',
			icon: 'text-xl i-material-symbols-water-drop-outline-rounded'
		},
		{ key: 'extra', title: 'Extra' }
	];
</script>

Tabs allow you to switch between different views.

## Preview

<Usage>
    <TabsList activeTab="styled" {tabHeaders}>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</Usage>

```svelte
<script lang="ts">
	import { TabsList, Tab, type TabHeader } from 'ato-ui';

    let activeTab = 'styled';

	const tabHeaders: TabHeader[] = [
		{
			key: 'styled',
			title: 'Styled',
			icon: 'text-xl i-material-symbols-water-drop-rounded'
		},
		{
			key: 'headless',
			title: 'Headless',
			icon: 'text-xl i-material-symbols-water-drop-outline-rounded'
		},
		{ key: 'extra', title: 'Extra' }
	];
</script>

<TabsList bind:activeTab {tabHeaders}>
    <Tab key="styled">Styled Content</Tab>
    <Tab key="headless">Headless Content</Tab>
    <Tab key="extra">Extra Content</Tab>
</TabsList>
```

## Active Tab

You can set the active tab by passing the key of the tab to the `activeTab` prop. You can also bind to this prop if you want to do something when it changes.

## Disabled Tabs

You can disable tabs by passing in a list of strings to the `disabledTabs` prop.


<Usage>
    <TabsList activeTab="styled" {tabHeaders} disabledTabs={['extra']}>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</Usage>

```svelte
<TabsList {activeTab} {tabHeaders} disabledTabs={['extra']} >
    <Tab key="styled">Styled Content</Tab>
    <Tab key="headless">Headless Content</Tab>
    <Tab key="extra">Extra Content</Tab>
</TabsList>
```

## Change Spacing

You can adjust the headers spacings using the `justifyHeaders` prop.

<Usage>
    <TabsList activeTab="styled" {tabHeaders} justifyHeaders="justify-around">
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</Usage>

```svelte
<TabsList {activeTab} {tabHeaders} justifyHeaders="justify-around" >
    <Tab key="styled">Styled Content</Tab>
    <Tab key="headless">Headless Content</Tab>
    <Tab key="extra">Extra Content</Tab>
</TabsList>
```

## Props

### TabsList

<PropsTable props={tabs_list_docs.props} />

### Tabs

<PropsTable props={tab_docs.props} />