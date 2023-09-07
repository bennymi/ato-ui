<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		Combobox,
		type ComboboxItem,
		type ComboboxSelectedStore
	} from 'ato-ui';

	let items: ComboboxItem[] = [
		{
			subtitle: 'Harper Lee',
			value: 'To Kill a Mockingbird'
		},
		{
			subtitle: 'Lev Tolstoy',
			value: 'War and Peace',
			disabled: true
		},
		{
			subtitle: 'Alexandre Dumas',
			value: 'The Count of Monte Cristo'
		},
		{
			subtitle: 'Oscar Wilde',
			value: 'A Picture of Dorian Gray'
		},
		{
			subtitle: 'George Orwell',
			value: '1984'
		},
		{
			subtitle: 'Jane Austen',
			value: 'Pride and Prejudice'
		},
		{
			subtitle: 'Marcus Aurelius',
			value: 'Meditations'
		},
		{
			subtitle: 'Fyodor Dostoevsky',
			value: 'The Brothers Karamazov'
		},
		{
			subtitle: 'Lev Tolstoy',
			value: 'Anna Karenina'
		},
		{
			subtitle: 'George R.R. Martin',
			value: 'A Game of Thrones'
		}
	];

	let selected: ComboboxSelectedStore = writable();
	let selectIcon = 'i-material-symbols-check-small-rounded text-on-primary-500';
</script>

<div class="bg-surface-50-600 p-4 rounded-container">
	<Combobox
		{items}
		label="Choose your favourite book"
		placeholder="Favourite book"
		bind:selected
		width="w-64"
		{selectIcon}
		debounce={500}
	/>
</div>
