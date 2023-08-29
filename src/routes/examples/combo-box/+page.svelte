<script lang="ts">
	import { writable } from 'svelte/store';
    import { Combobox, type ComboboxItem, type ComboboxSelectedStore } from '$lib/components/combobox';

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
			value: 'The Count of Monte Cristo',
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

	let selected: ComboboxSelectedStore = writable({ value: undefined });
	let selectIcon = 'i-material-symbols-check-small-rounded text-on-primary-500';

	$: console.log('page selected:', $selected);
</script>

<Combobox {items} label="Choose your favourite book" placeholder="Favourite book" width="w-64" {selectIcon} debounce={0} bind:selected />