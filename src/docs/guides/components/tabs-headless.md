---
title: Tabs
description: A headless tabs component, to easily switch between different views.
---

<script>
    import Usage from '../Usage.svelte';
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

# Tabs | Headless

## Example

<Usage>
	<!-- <div class="surface-500 w-full p-2 rounded-container"> -->
	<TabsList activeTab="styled" {tabHeaders}>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
	<!-- </div> -->
</Usage>

Please see the [GrailUI](https://grail-ui.vercel.app/svelte/tabs) documentation for how to create tabs. 

Here's an example of our [Styled Tabs](https://github.com/bennymi/ato-ui/blob/main/src/lib/components/tabs). Remember to use Ato UI's tokens to style things like your `background`, `text`, `border`, etc.

```svelte showCode=true
<script lang="ts">
	import { createTabs } from '@grail-ui/svelte';
	
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

	const { useTabs, active, disabled, rootAttrs, listAttrs, triggerAttrs, contentAttrs } =
		createTabs({
			value: 'styled',
			disabled: disabledTabs
		});

	const is_disabled = (key: string) =>
		(typeof $disabled === 'boolean' && $disabled) ||
		(typeof $disabled === 'string' && $disabled === key) ||
		(typeof $disabled === 'object' && $disabled.includes(key));
</script>

<div use:useTabs {...$rootAttrs} class="w-full">
    <!-- Headers -->
	<div {...$listAttrs} class="w-full flex justify-center items-center mb-4 border-b-1 border-surface-100-200">
		{#each tabHeaders as item}
			{@const activated = $active === item.key}
			{@const deactivated = is_disabled(item.key)}
			<button
				{...$triggerAttrs(item.key)}
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
    <div {...$contentAttrs('styled')}>
        Styled content
    </div>
    <div {...$contentAttrs('headless')}>
        Headless content
    </div>
    <div {...$contentAttrs('extra')}>
        Extra content
    </div>
</div>
```