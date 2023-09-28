<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createCombobox } from '@melt-ui/svelte';

	import type { ComboboxItem, ComboboxSelectedStore } from './types';

	/** Set the label of the combobox. */
	export let label: string;
	/** Hide label. The hidden label is still available to screen readers. */
	export let hideLabel = false;
	/** A writable store that can be used to get or update the selected item. */
	export let selected: ComboboxSelectedStore;
	/** Pass the list of items that are available as options. Individual items can be disabled. Check the ComboboxItem type for more details. */
	export let items: ComboboxItem[];
	/** Set the default selected item. */
	export let defaultSelected: ComboboxItem | null = null;
	/** Whether or not to allow multiple items being selected. */
	export let multiple = false;
	/** Set the input placeholder. */
	export let placeholder = '';
	/** Whether or not to prevent scrolling of the document when the combobox is open. */
	export let preventScroll = false;
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

	/** Set the select icon if you want one. */
	export let selectIcon = '';

	/** Set the label styles. */
	export let labelStyle = 'text-sm font-medium text-surface-900-50';
	/** Set the input styles. */
	export let inputStyle = 'surface-50-800 border-1 border-surface-400/80';
	/** Set the active item styles. */
	export let activeStyle = 'primary-500/80';
	/** Set the width of the input. */
	export let width = '';
	/** Set the background styles of the opened combobox. */
	export let comboboxBgStyle = 'surface-50-500';
	/** Set the border styles of the opened combobox. */
	export let comboboxBorderStyle = 'shadow-lg shadow-surface-500/50-300/50';
	/** Set the style of the no result message. */
	export let noResultStyle = '';

	const {
		elements: { menu, input, option, label: comboboxLabel },
		states: { open, inputValue, touchedInput },
		helpers: { isSelected }
	} = createCombobox({
		forceVisible: true,
		...(defaultSelected && { defaultSelected: { value: defaultSelected } }),
		defaultOpen,
		loop,
		selected,
		preventScroll,
		multiple
	});

	let debounceTimer: ReturnType<typeof setTimeout>;
	let filteredItems = items;

	const handleDebounce = (callback: () => void) => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(callback, debounce);
	};

	$: {
		if ($touchedInput) {
			handleDebounce(() => {
				filteredItems = items.filter(({ value, subtitle }) => {
					const normalizedInput = $inputValue.toLowerCase();
					return (
						normalizedInput === '' ||
						value.toLowerCase().includes(normalizedInput) ||
						(!!subtitle && subtitle.toLowerCase().includes(normalizedInput))
					);
				});
			});
		} else {
			filteredItems = items;
		}
	}
</script>

<div class="flex flex-col gap-1">
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<label {...$comboboxLabel} use:comboboxLabel class={hideLabel ? 'sr-only' : ''}>
		<span class={labelStyle}>{label}</span>
	</label>

	<div class="relative w-fit">
		<input
			{...$input}
			use:input
			class="flex h-10 {width} items-center justify-between rounded-container
                px-3 pr-12 {inputStyle}"
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
		class="z-10 flex max-h-[300px] flex-col overflow-hidden rounded-container {comboboxBorderStyle}"
		{...$menu}
		use:menu
		transition:fly={{ duration: 150, y: -5 }}
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			class="flex max-h-full flex-col gap-0 overflow-y-auto px-2 py-2 {comboboxBgStyle}"
			tabindex="0"
		>
			{#each filteredItems as item, index (index)}
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
					{active ? activeStyle : ''}"
				>
					{#if active && selectIcon}
						<div class="check absolute inset-y-0 left-2 flex items-center">
							<span class="text-2xl {selectIcon}" />
						</div>
					{/if}
					<div class={selectIcon ? 'pl-6' : ''}>
						<span class="font-medium">{item.value}</span>
						{#if item.subtitle}
							<span class="block text-sm opacity-75">{item.subtitle}</span>
						{/if}
					</div>
				</li>
			{:else}
				<li class="relative cursor-pointer rounded-container py-1 pl-8 pr-4 {noResultStyle}">
					{noResultsMessage}
				</li>
			{/each}
		</div>
	</ul>
{/if}
