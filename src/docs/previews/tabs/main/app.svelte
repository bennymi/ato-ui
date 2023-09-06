<script lang="ts">
	import { writable } from 'svelte/store';
	import { Tabs, type TabHeader } from 'ato-ui';

	const activeTab = writable('styled');

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

<div class="rounded-container p-4 bg-surface-50-800">
	<Tabs.Root value={activeTab} {tabHeaders} ariaLabel="preview" headerWidth="min-w-20 md:min-w-40">
		<Tabs.Tab key="styled">Styled Content</Tabs.Tab>
		<Tabs.Tab key="headless">Headless Content</Tabs.Tab>
		<Tabs.Tab key="extra">Extra Content</Tabs.Tab>
	</Tabs.Root>
</div>
