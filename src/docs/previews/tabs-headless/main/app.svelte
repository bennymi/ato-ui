<script>
	import { default as TabsList } from './tabs-list.svelte';
	import { default as Tab } from './tabs.svelte';

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

<div class="rounded-container p-4 bg-surface-50-800">
	<TabsList 
		activeTab="styled" 
		{tabHeaders} 
		ariaLabel="component type"
	>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</div>