<script lang="ts">
	import { TabsList, Tab, type TabHeader } from 'ato-ui';

	const tabHeaders: TabHeader = [
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
		ariaLabel="preview" 
		headerWidth="min-w-20 md:min-w-40"
	>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</div>
