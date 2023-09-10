<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { createCombobox, type ComboboxFilterFunction } from '@melt-ui/svelte';

	import type { Item, SelectedStore } from './types';

	let selected: SelectedStore = writable();

	let items: Item[] = [
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

	const filterFunction: ComboboxFilterFunction<Item> = ({ itemValue, input }) => {
		const normalize = (str: string) => str.normalize().toLowerCase();
		const normalizedInput = normalize(input);

		return (
			normalizedInput === '' ||
			normalize(itemValue.value).includes(normalizedInput) ||
			(!!itemValue.subtitle && normalize(itemValue.subtitle).includes(normalizedInput))
		);
	};

	const {
		elements: { menu, input, option, label },
		states: { open, isEmpty },
		helpers: { isSelected }
	} = createCombobox({
		filterFunction,
		forceVisible: true,
		selected
	});
</script>

<div class="bg-surface-50-600 p-4 rounded-container">
	<div class="flex flex-col gap-1">
		<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
		<label {...$label} use:label>
			<span class="text-sm font-medium text-surface-900-50">Choose your favourite book</span>
		</label>

		<div class="relative w-fit">
			<input
				{...$input}
				use:input
				class="flex h-10 w-64 items-center justify-between rounded-container
                    px-3 pr-12 surface-50-800 border-1 border-surface-400/80"
				placeholder="Favourite book"
			/>
			<div
				class="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-10 flex justify-center items-center text-primary-900"
			>
				<svg
					class="w-6 h-6 transition-all {$open ? 'rotate-90' : '-rotate-90'}"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					><path
						fill="#888888"
						d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l3.9-3.9Z"
					/></svg
				>
			</div>
		</div>
	</div>
</div>

{#if $open}
	<ul
		class="z-10 flex max-h-[300px] flex-col overflow-hidden rounded-container shadow-lg shadow-surface-500/50-300/50"
		{...$menu}
		use:menu
		transition:fly={{ duration: 150, y: -5 }}
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			class="flex max-h-full flex-col gap-0 overflow-y-auto px-2 py-2 surface-50-500"
			tabindex="0"
		>
			{#each items as item, index (index)}
				{@const active = $isSelected(item)}
				<li
					{...$option({
						value: item,
						label: item.value,
						disabled: !!item.disabled
					})}
					use:option
					class="relative scroll-my-2 rounded-container py-2 pl-4 pr-4
                    data-[disabled]:opacity-60
					{active ? 'primary-500/80' : ''}"
				>
					{#if active}
						<div class="check absolute inset-y-0 left-2 flex items-center">
							<span class="text-2xl i-material-symbols-check-small-rounded text-on-primary-500" />
						</div>
					{/if}
					<div class={active ? 'pl-6' : ''}>
						<span class="font-medium">{item.value}</span>
						{#if item.subtitle}
							<span class="block text-sm opacity-75">{item.subtitle}</span>
						{/if}
					</div>
				</li>
			{/each}
			{#if $isEmpty}
				<li class="relative cursor-pointer rounded-container py-1 pl-8 pr-4">
					No results found...
				</li>
			{/if}
		</div>
	</ul>
{/if}
