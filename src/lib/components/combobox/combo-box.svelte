<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { createCombobox, type ComboboxFilterFunction } from '@melt-ui/svelte';

	import type { ComboboxItem, ComboboxSelectedStore } from './types';

	/** Set the label of the combobox. */
	export let label: string;
	/** A writable store that can be used to get or update the selected item. */
	export let selected: ComboboxSelectedStore;
	/** Pass the list of items that are available as options. */
	export let items: ComboboxItem[];
	/** Set the default selected item. */
	export let defaultSelected: ComboboxItem = undefined;
	/** Set the input placeholder. */
	export let placeholder = '';
	/** Set the message that shows when no result is returned from a search. */
	export let noResultsMessage = 'No results found';
	/** Whether the combobox is open by default or not. */
	export let defaultOpen = false;
	/** Whether or not the focus should loop back to the first item when the last item is reached. */
	export let loop = false;
	/** The debounce time in milliseconds for the input value. This represents the time taken
	 * in between a key stroke in the input field and the search taking place. For a larger list
	 * of items it might improve performance to increase the debounce time, to avoid too many searches.
	 */
	export let debounce = 0;

	/** Set the active item styles. */
	export let activeStyle = '';

	const filterFunction: ComboboxFilterFunction<ComboboxItem> = ({ itemValue, input }) => {
		const normalize = (str: string) => str.normalize().toLowerCase();
		const normalizedInput = normalize(input);

		return (
			normalizedInput === '' ||
			normalize(itemValue.value).includes(normalizedInput) ||
			(!!itemValue.subtitle && normalize(itemValue.subtitle).includes(normalizedInput))
		);
	};

	const {
		elements: { menu, input, option, label: comboboxLabel },
		states: { open, isEmpty, inputValue },
		helpers: { isSelected }
	} = createCombobox({
		filterFunction,
		forceVisible: true,
		...(defaultSelected && { defaultSelected: { value: defaultSelected } }),
		defaultOpen,
		loop,
		debounce,
		selected
	});

	// $: console.log('value:', $inputValue);
	// $: console.log('selected:', $selected);
	// $: console.log('is selected:', $isSelected($selected));
</script>

<div class="flex flex-col gap-1">
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<label {...$comboboxLabel} use:comboboxLabel>
		<span class="text-sm font-medium text-surface-900-50">{label}</span>
	</label>

	<div class="relative w-fit">
		<input
			{...$input}
			use:input
			class="flex h-10 items-center justify-between rounded-container bg-white
                px-3 pr-12 text-black border-1 border-surface-400/50"
			{placeholder}
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

{#if $open}
	<ul
		class="z-10 flex max-h-[300px] flex-col overflow-hidden rounded-container"
		{...$menu}
		use:menu
		transition:fly={{ duration: 150, y: -5 }}
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			class="flex max-h-full flex-col gap-0 overflow-y-auto bg-white px-2 py-2 text-black"
			tabindex="0"
		>
			{#each items as item, index (index)}
				<!-- TODO: {@const active = $isSelected(item)} -> set highlighting -->
				<li
					{...$option({
						value: item,
						label: item.value,
						disabled: !!item.disabled
					})}
					use:option
					class="relative cursor-pointer scroll-my-2 rounded-container py-2 pl-4 pr-4
                    data-[highlighted]:bg-primary-200 data-[highlighted]:text-primary-900
                    data-[disabled]:opacity-50"
				>
					{#if $isSelected(item)}
						<!-- <div class="check"> -->
							<!-- <Check class="square-4" /> -->
							<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
								><path
									fill="#888888"
									d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
								/></svg
							>
						<!-- </div> -->
					{/if}
					<div>
						<span class="font-medium">{item.value}</span>
						{#if item.subtitle}
							<span class="block text-sm opacity-75">{item.subtitle}</span>
						{/if}
					</div>
				</li>
			{/each}
			{#if $isEmpty}
				<li
					class="relative cursor-pointer rounded-container py-1 pl-8 pr-4
                    data-[highlighted]:bg-primary-100 data-[highlighted]:text-primary-700"
				>
					{noResultsMessage}
				</li>
			{/if}
		</div>
	</ul>
{/if}

<style lang="postcss">
	.check {
		@apply absolute left-2 top-1/2 text-primary-500;
		translate: 0 calc(-50% + 1px);
	}
</style>
