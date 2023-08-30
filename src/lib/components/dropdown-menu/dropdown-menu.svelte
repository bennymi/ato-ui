<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';
    import { createDropdownMenu } from '@melt-ui/svelte';

    import type { DropdownMenuOpenStore } from './types';

    /** Set the aria label of the trigger button. */
    export let ariaLabel: string;
    /** */
    export let open: DropdownMenuOpenStore;
    /** Whether or not to prevent scrolling of the document when the dropdown menu is open. */
    export let preventScroll = false;
    /** Show arrow pointing at trigger. */
    export let showArrow = false;

    /** Set the trigger button styles. */
    export let btnStyle = 'btn-primary';
    /** Set the width of the menu. */
    export let width = 'w-fill';
    /** Set the menu background styles. */
    export let menuBgStyle = 'surface-50-500';
    /** Set the menu border styles. */
    export let menuBorderStyle = 'border-1 border-surface-300/70 shadow-md shadow-surface-500/50-300/50';
    /** 
     * Set the global item styles for when the item is not disabled. 
     * You can overwrite this for each individual item in the item component.
    */
    export let itemStyle = 'px-2 py-1 select-none rounded-container hover:(primary-500)';
    /** 
     * Set the styles for the disabled item. 
     * You can overwite this for each individual item in the item component.
     * */
    export let itemDisabledStyle = 'text-surface-300 cursor-not-allowed';
    
    
    const {
        elements: { trigger, menu, item, separator, arrow },
        builders: { createSubmenu, createMenuRadioGroup, createCheckboxItem }
    } = createDropdownMenu({
        forceVisible: true,
        preventScroll,
        open
    });

    setContext('dropdown-menu', {
        item,
        separator,
        createSubmenu,
        createMenuRadioGroup,
        createCheckboxItem,
        itemDisabledStyle,
        itemStyle,
        menuContainerStyle: `${menuBgStyle} ${menuBorderStyle}`
    });
</script>
 
<button
    type="button"
    class="trigger {btnStyle}"
    {...$trigger} use:trigger
    aria-label={ariaLabel}
>
    <slot name="dropdown-menu-trigger" />
</button>
 
{#if $open}
    <div 
        {...$menu} use:menu
        class="dropdown-menu rounded-container flex flex-col p-2 {width} {menuBgStyle} {menuBorderStyle}" 
        transition:fly={{ duration: 150, y: -10 }}
    >
        <slot name="dropdown-menu-content" />

        {#if showArrow}
            <div {...$arrow} use:arrow />
        {/if}
    </div>
{/if}
 
<style>
  .menu {
    --at-apply: "z-10 flex max-h-[300px] min-w-[220px] flex-col shadow-lg rounded-md bg-white p-1 shadow-neutral-900/30 lg:max-h-none ring-0 !important";
  }
  .subMenu {
    --at-apply: "min-w-[220px] shadow-md shadow-neutral-900/30";
  }
  .item {
    --at-apply: "relative h-6 min-h-[24px] select-none rounded-sm pl-6 pr-1 z-20 text-primary-900 outline-none data-[highlighted]:bg-primary-200 data-[highlighted]:text-primary-900 apply data-[disabled]:text-neutral-300 flex items-center text-sm leading-none apply ring-0 !important";
  }
  /* .trigger {
    --at-apply: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-900 transition-colors hover:bg-white/90 data-[highlighted]:ring-primary-400 data-[highlighted]:ring-offset-2 p-0 text-sm font-medium  data-[highlighted]:outline-none";
  } */
  .check {
    --at-apply: "absolute left-2 top-1/2 text-primary-500";
    translate: 0 calc(-50% + 1px);
  }
 
  .dot {
    --at-apply: "h-[4.75px] w-[4.75px] rounded-full bg-primary-900";
  }
 
  .separator {
    --at-apply: "m-[5px] h-[1px] bg-primary-200";
  }
 
  .rightSlot {
    --at-apply: "ml-auto pl-5";
  }
 
  .icon {
    --at-apply: "h-[13px] w-[13px]";
  }
  .check {
    --at-apply: "absolute left-0 inline-flex w-6 items-center justify-center";
  }
  .text {
    --at-apply: "pl-6 text-xs leading-6 text-neutral-600";
  }
</style>