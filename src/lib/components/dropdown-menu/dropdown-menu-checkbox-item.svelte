<script lang="ts">
	import { getContext, createEventDispatcher } from 'svelte';

	import type { DropdownMenuContext, DropdownMenuCheckboxValue } from './types';

	/** Whether or not the checkbox item is disabled. */
	export let disabled = false;
	/** A writable store that controls the checked state of the checkbox. Use this to set the default value. */
	export let checked: DropdownMenuCheckboxValue;

	/** Set the checked icon. */
	export let checkedIcon = '';
	/**
	 * Set the item styles for when the item is not disabled.
	 * You can use this to overwrite the global itemStyle prop set in the
	 * Dropdown.Menu component.
	 */
	export let itemStyle = '';
	/**
	 * Set the styles for the disabled item.
	 * You can use this to overwrite the global itemDisabledStyle prop set
	 * in the Dropdown.Menu component.
	 */
	export let itemDisabledStyle = '';

	const dispatch = createEventDispatcher();

	const {
		createCheckboxItem,
		itemDisabledStyle: inheritedDisabledStyle,
		itemStyle: inheritedItemStyle
	} = getContext<DropdownMenuContext>('dropdown-menu');

	const {
		elements: { checkboxItem },
		options: { disabled: checkboxDisabled }
	} = createCheckboxItem({
		disabled,
		checked,
		onCheckedChange: (state) => {
			dispatch('checked-change', state);
			return state.next;
		}
	});

	$: itemClasses = disabled
		? itemDisabledStyle
			? itemDisabledStyle
			: inheritedDisabledStyle
		: itemStyle
		? itemStyle
		: inheritedItemStyle;

	// Update options
	$: $checkboxDisabled = disabled;
</script>

<div
	{...$checkboxItem}
	use:checkboxItem
	class="dropdown-menu-checkbox-item relative {itemClasses}"
	on:m-click
>
	<div class="check absolute inset-y-0 left-1 inline-flex items-center">
		{#if $checked}
			<span class="text-lg {checkedIcon}" />
		{/if}
	</div>

	<div class="ml-4 mr-2">
		<slot />
	</div>
</div>
