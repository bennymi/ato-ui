<script lang="ts">
	import { writable } from 'svelte/store';
	import { Combobox, type ComboboxItem, type ComboboxSelectedStore } from 'ato-ui';

	let items: ComboboxItem[] = [
		{
			value: 'Aaang',
			subtitle: 'The Avatar'
		},
		{
			value: 'Katara',
			subtitle: 'Exceptional Waterbender'
		},
		{
			value: 'Sokka',
			subtitle: 'Warrior & Strategist'
		},
		{
			value: 'Toph',
			subtitle: 'Powerful Earthbender'
		},
		{
			value: 'Iroh',
			subtitle: 'The Wise Uncle',
			disabled: true
		},
		{
			value: 'Zuko',
			subtitle: 'Temperamental Firebender'
		}
	];

	let selected: ComboboxSelectedStore = writable();
	let selectIcon = 'i-material-symbols-check-small-rounded text-on-primary-500';
</script>

<div class="bg-surface-50-600 p-4 rounded-container">
	<Combobox
		{items}
		label="Choose your character"
		placeholder="Favourite character"
		bind:selected
		width="w-64"
		{selectIcon}
		debounce={500}
	/>
</div>
