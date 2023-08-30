<script lang="ts">
	import { getContext } from 'svelte';

	import type { DropdownMenuContext } from './types';

    /** Set whether or not the item is disabled. */
    export let disabled = false;

    /** set the item styles for when the item is not disabled. */
    export let itemStyle = 'px-2 py-1';
    /** Set the styles for the disabled item. */
    export let disabledStyle = 'text-surface-300 cursor-not-allowed';

	const { item } = getContext<DropdownMenuContext>('dropdown-menu');
</script>

<div class="item {disabled ? disabledStyle : itemStyle}" {...$item} use:item data-disabled={disabled || null} >
	<slot />
</div>
