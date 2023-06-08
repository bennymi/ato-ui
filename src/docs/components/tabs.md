---
title: Tabs
description: A tabs component.
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

# Tabs

<Usage>
    <TabsList activeTab="styled" {tabHeaders}>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</Usage>