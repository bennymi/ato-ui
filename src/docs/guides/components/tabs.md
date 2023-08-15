---
title: Tabs
description: A set of panels that allow you to switch between different views.
---

<script>
	import { PropsTable } from '$components';
    import tabs_list_docs from '$lib/components/tabs/tabs-list.svelte?raw&sveld';
    import tab_docs from '$lib/components/tabs/tabs.svelte?raw&sveld';

	import { TabsList, Tab } from 'ato-ui';

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

## Active Tab

You can set the active tab by passing the key of the tab to the `activeTab` prop. You can also bind to this prop if you want to do something when it changes.

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