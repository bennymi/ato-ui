<script lang="ts">
	import { getContext } from 'svelte';

	import type { DropdownMenuContext } from './types';

    /** Set whether or not the item is disabled. */
    export let disabled = false;

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

	const { item, itemDisabledStyle: inheritedDisabledStyle, itemStyle: inheritedItemStyle } = getContext<DropdownMenuContext>('dropdown-menu');

    $: itemClasses = disabled 
                        ? itemDisabledStyle 
                            ? itemDisabledStyle : inheritedDisabledStyle
                        : itemStyle 
                            ? itemStyle : inheritedItemStyle;
</script>

<div class="item {itemClasses}" {...$item} use:item data-disabled={disabled || null} >
	<slot />
</div>
