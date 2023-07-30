---
title: Tabs
description: A set of panels that allow you to switch between different views.
---

<script>
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

## Preview

<Usage>
	<TabsList activeTab="styled" {tabHeaders}>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</Usage>

Check out the [Melt UI](https://www.melt-ui.com/docs/builders/tabs) documentation for a detailed description of the tabs builder API.

```svelte showCode=true
<script lang="ts">
	import { createTabs } from '@melt-ui/svelte';

	export let disabledTabs: boolean | string[] = [];

	let activeTab: string = 'styled';
	
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
		{ 
			key: 'extra', 
			title: 'Extra' 
		}
	];

	const { root, list, content, trigger } = createTabs({
		value: activeTab
	});

	$: isDisabled = (key: string) =>
		((typeof disabledTabs === 'boolean' && disabledTabs) ||
		 (typeof disabledTabs !== 'boolean' && disabledTabs.includes(key)));
</script>

<div {...$root} use:root class="w-full">
    <!-- Headers -->
	<div {...$list} use:list class="w-full flex justify-center items-center mb-4 border-b-1 border-surface-100-200">
		{#each tabHeaders as item}
			{@const activated = activeTab === item.key}
			{@const deactivated = isDisabled(item.key)}
			<button
				{...$trigger({ value: item.key, disabled: deactivated })}
				use:trigger
				on:click={() => (activeTab = item.key)}
				class="px-2 py-1 min-w-40 inline-flex gap-1 justify-center items-center shadow-md shadow-surface-900/20 transition-all duration-150 font-semibold rounded-t-btn focus:(ring-2 ring-surface-300 ring-offset-2) 
                {deactivated
					? 'opacity-70 cursor-not-allowed'
					: ''} 
                {activated 
                    ? 'primary-500' 
                    : 'text-surface-900-50 hover:primary-500/60'}"
			>
				<span class={item.icon} />
				<span>{item.title}</span>
			</button>
		{/each}
	</div>
	
    <!-- Tab Content -->
    <div {...$content('styled')} use:content>
        Styled content
    </div>
    <div {...$content('headless')} use:content>
        Headless content
    </div>
    <div {...$content('extra')} use:content>
        Extra content
    </div>
</div>
```