<script lang="ts">
	import { getContext, setContext, createEventDispatcher } from 'svelte';

	import type { DropdownMenuContext, DropdownMenuRadioGroupValue } from './types';

	/**
	 * A writable store which controls the value of the selected radio item.
	 * Use this to set the default value of the radio group.
	 * */
	export let value: DropdownMenuRadioGroupValue;

	/** Set the checked icon. */
	export let checkedIcon = '';

	const { createMenuRadioGroup } = getContext<DropdownMenuContext>('dropdown-menu');

	const dispatch = createEventDispatcher();

	const {
		elements: { radioGroup, radioItem },
		helpers: { isChecked }
	} = createMenuRadioGroup({
		onValueChange: (state) => {
			dispatch('value-change', state);
			return state.next;
		},
		value
	});

	setContext('dropdown-menu-radio-group', {
		radioItem,
		isChecked,
		checkedIcon
	});
</script>

<div {...$radioGroup} use:radioGroup>
	<slot />
</div>
