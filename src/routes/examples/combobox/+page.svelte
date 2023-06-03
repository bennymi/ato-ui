<script lang="ts">
	import Combobox from '$lib/components/combobox/Combobox.svelte';

	const options = [
		'Aang',
		'Katara',
		'Toph',
		'Sokka',
		'Appa',
		'Zuko',
		'Iroh'
		// 'Wade Cooper',
		// 'Arlene Mccoy',
		// 'Devon Webb',
		// 'Tom Cook',
		// 'Tanya Fox',
		// 'Hellen Schmidt'
	];

	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
	}
</script>

<div class="flex gap-4 flex-wrap justify-center items-center">
	<Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
		on:select={onSelect}
		searchIcon="text-xl i-material-symbols-search-check-rounded"
		selectIcon="text-xl i-material-symbols-check-small-rounded"
	/>

	<Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
		on:select={onSelect}
		buttonStyle="secondary-500/90 hover:secondary-500"
		searchIcon="text-xl i-material-symbols-search-check-rounded"
		selectIcon="text-xl i-material-symbols-check-small-rounded"
		activeStyle="secondary-500"
	/>
	<Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
		on:select={onSelect}
		buttonStyle="success-500/90 hover:success-500"
		activeStyle="success-500"
	/>
	<Combobox
		{options}
		selected={options[0]}
		ariaLabel="Actions"
		on:select={onSelect}
		searchIcon="i-material-symbols-clear-day-rounded text-lg"
		selectIcon="i-material-symbols-cloud text-lg"
		buttonStyle="warning-500/90 hover:warning-500"
		activeStyle="warning-500"
	/>
</div>
