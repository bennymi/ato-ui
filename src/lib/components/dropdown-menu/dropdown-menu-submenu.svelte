<script lang="ts">
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

    import type { DropdownMenuContext, DropdownMenuTransition } from './types';

    /** Whether or not the submenu is disabled. */
    export let disabled = false;
    /** The transition for the submenu opening and closing. */
    export let transition: DropdownMenuTransition = { trans: fly, options: { duration: 150 } };

    /** Set the submenu container styles. */
    export let containerStyle = 'surface-50-500 border-1 border-surface-400/80';
    /** Set the width of the submenu. */
    export let width = 'w-fit min-w-40';

    const { trans, options } = transition;

    const { createSubmenu, itemDisabledStyle, itemStyle } = getContext<DropdownMenuContext>('dropdown-menu');

    const {
        elements: { subMenu, subTrigger, subArrow },
        states: { subOpen },
        options: { disabled: submenuDisabled }
    } = createSubmenu({
        disabled,
        arrowSize: 8
    });

    // Update options
    $: $submenuDisabled = disabled;
</script>

<div class="item {disabled ? itemDisabledStyle : itemStyle}" {...$subTrigger} use:subTrigger>
    <slot name="submenu-trigger" />
</div>

{#if $subOpen}
    <div
        class="dropdown-menu-submenu rounded-container {width} {containerStyle}"
        {...$subMenu} use:subMenu
        transition:trans={options}
    >
        <slot name="submenu" />

        <div {...$subArrow} use:subArrow />
    </div>
{/if}