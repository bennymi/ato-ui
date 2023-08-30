<script lang="ts">
    import { getContext } from 'svelte';

    import type { DropdownMenuRadioGroupContext, DropdownMenuContext } from './types';

    /** The value of the radio item. */
    export let value: string;

    const { 
        radioItem, 
        isChecked, 
        checkedIcon, 
        activeStyle, 
        inactiveStyle 
    } = getContext<DropdownMenuRadioGroupContext>('dropdown-menu-radio-group');

    const { itemStyle } = getContext<DropdownMenuContext>('dropdown-menu');
</script>

<div
    {...$radioItem({ value })} use:radioItem
    class="dropdown-menu-radio-item {itemStyle}
            {$isChecked(value) ? activeStyle : inactiveStyle}" 
>
    <div class="dropdown-menu-radio-check absolute left-0 inline-flex w-6 items-center justify-center">
        {#if $isChecked(value)}
            <span class="text-lg {checkedIcon}" />
        {/if}
    </div>

    <slot />
</div>