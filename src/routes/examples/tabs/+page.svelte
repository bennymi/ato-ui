<script lang="ts">
	import { TabsList, Tab } from '$lib/components';
	import type { TabHeader } from '$lib/components/tabs/types';

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

<div class="text-surface-900-50 flex flex-col gap-8">
	<div>{activeTab}</div>

	<TabsList bind:activeTab {tabHeaders}>
		<Tab key="styled">Styled Content</Tab>
		<Tab key="headless">Headless Content</Tab>
		<Tab key="extra">Extra Content</Tab>
	</TabsList>
</div>
