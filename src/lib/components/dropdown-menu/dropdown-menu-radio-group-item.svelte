<script lang="ts">
    import { getContext, createEventDispatcher } from 'svelte';
    import type { MeltEvent } from '@melt-ui/svelte/internals/types';

    import type { DropdownMenuRadioGroupContext, DropdownMenuContext } from './types';

    /** The value of the radio item. */
    export let value: string;

    /** 
     * Set the radio group item styles. 
     * You can use this to overwrite the global itemStyle prop set in the
     * Dropdown.Menu component.
    */
    export let itemStyle = '';

    const dispatch = createEventDispatcher();

    function handleClickEvent(e: MeltEvent<T>) {
        dispatch('m-click', { value, originalEvent: e.detail.originalEvent })
    }

    const { 
        radioItem, 
        isChecked, 
        checkedIcon
    } = getContext<DropdownMenuRadioGroupContext>('dropdown-menu-radio-group');

    const { itemStyle: inheritedItemStyle } = getContext<DropdownMenuContext>('dropdown-menu');

    $: itemClasses = itemStyle ? itemStyle : inheritedItemStyle;
</script>

<div
    {...$radioItem({ value })} use:radioItem
    class="dropdown-menu-radio-item relative {itemClasses}"
    on:m-click={handleClickEvent}
>
    <div class="dropdown-menu-radio-check absolute inset-y-0 left-1 inline-flex items-center">
        {#if $isChecked(value)}
            <span class="text-lg {checkedIcon}" />
        {/if}
    </div>

    <div class="ml-4">
        <slot />
    </div>
</div>