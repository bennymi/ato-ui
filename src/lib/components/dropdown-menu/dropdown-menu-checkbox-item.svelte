<script lang="ts">
    import { getContext } from 'svelte';

    import type { DropdownMenuContext, DropdownMenuCheckboxValue } from './types';

    /** Whether or not the checkbox item is disabled. */
    export let disabled = false;
    /** A writable store that controls the checked state of the checkbox. Use this to set the default value. */
    export let checked: DropdownMenuCheckboxValue;

    /** Set the checked icon. */
    export let checkedIcon = '';
    /** Set the checked styles. */
    export let checkedStyle = '';
    /** Set the unchecked styles. */
    export let uncheckedStyle = '';

    const { createCheckboxItem } = getContext<DropdownMenuContext>('dropdown-menu');

    const {
        elements: { checkboxItem },
        options: { disabled: checkboxDisabled }
    } = createCheckboxItem({
        disabled,
        checked
    });

    // Update options
    $: $checkboxDisabled = disabled;
</script>

<div
    {...$checkboxItem} use:checkboxItem
    class="dropdown-menu-checkbox-item {$checked ? checkedStyle : uncheckedStyle}"
>
    <div class="check">
        {#if $checked}
            <span class="text-lg {checkedIcon}" />
        {/if}
    </div>
    
    <slot />
</div>