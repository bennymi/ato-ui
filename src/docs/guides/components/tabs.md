---
title: Tabs
description: A set of panels that allow you to switch between different views.
---

## Active Tab

You can set the active tab by passing the key of the tab to the `activeTab` prop. You can also bind to this prop if you want to do something when it changes.

```svelte /activeTab/#prop
<script lang="ts">
	import { TabsList, Tab, type TabHeader } from 'ato-ui';

	let activeTab = 'styled';

	const tabHeaders: TabHeader = [
		// ...
	];

	$: console.log(activeTab);
</script>

<TabsList bind:activeTab {tabHeaders} disabledTabs={['extra']} ariaLabel="disabled tabs example">
    <!-- ... -->
</TabsList>
```

## Disable Tabs

You can disable tabs by passing in a list of their keys to the `disabledTabs` prop.

```svelte /disabledTabs={['extra']}/#prop
<TabsList {activeTab} {tabHeaders} disabledTabs={['extra']} ariaLabel="disabled tabs example">
    <Tab key="styled">Styled Content</Tab>
    <Tab key="headless">Headless Content</Tab>
    <Tab key="extra">Extra Content</Tab>
</TabsList>
```

## Change Spacing

You can adjust the headers spacings using the `justifyHeaders` prop.

```svelte /justifyHeaders="justify-around"/#prop
<TabsList {activeTab} {tabHeaders} justifyHeaders="justify-around" ariaLabel="spacing example">
    <Tab key="styled">Styled Content</Tab>
    <Tab key="headless">Headless Content</Tab>
    <Tab key="extra">Extra Content</Tab>
</TabsList>
```