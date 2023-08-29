<script lang="ts">
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';
    import { createDropdownMenu } from '@melt-ui/svelte';
    // import { AlignJustify, ChevronRight, Check } from 'lucide-svelte';

    /** Whether or not to prevent scrolling of the document when the dropdown menu is open. */
    export let preventScroll = false;
    /** Show arrow pointing at trigger. */
    export let showArrow = false;
    
    const settingsSync = writable(true);
    const hideMeltUI = writable(false);
    
    const {
        elements: { trigger, menu, item, separator, arrow },
        builders: { createSubmenu, createMenuRadioGroup, createCheckboxItem },
        states: { open },
    } = createDropdownMenu({
        forceVisible: true,
        preventScroll
    });
    
    const {
        elements: { subMenu, subTrigger },
        states: { subOpen },
    } = createSubmenu();
    
    const {
        elements: { radioGroup, radioItem },
        helpers: { isChecked },
    } = createMenuRadioGroup({
        defaultValue: 'Hunter Johnston',
    });
    
    const {
        elements: { checkboxItem },
    } = createCheckboxItem({
        checked: settingsSync,
    });
    
    const {
        elements: { checkboxItem: checkboxItemA },
    } = createCheckboxItem({
        checked: hideMeltUI,
    });
    
    const personsArr = [
        'Hunter Johnston',
        'Thomas G. Lopes',
        'Adrian Gonz',
        'Franck Poingt',
    ];
</script>
 
<button
    type="button"
    class="trigger btn-primary"
    {...$trigger} use:trigger
    aria-label="Update dimensions"
>
    <!-- <AlignJustify class="square-4" /> -->
    Open Popover
</button>
 
{#if $open}
    <div 
        {...$menu} use:menu
        class="menu" 
        transition:fly={{ duration: 150, y: -10 }}
    >
        <div class="item" {...$item} use:item>About Melt UI</div>
        <div class="item" {...$item} use:item>Check for Updates...</div>
        <div class="separator" {...$separator} use:separator />
        <div class="item" {...$checkboxItem} use:checkboxItem>
            <div class="check">
                {#if $settingsSync}
                    <!-- <Check class="square-4" /> -->
                {/if}
            </div>
            Settings Sync is On
        </div>

        <div class="item" {...$subTrigger} use:subTrigger>
            Profiles
            <div class="rightSlot">
                <!-- <ChevronRight class="square-4" /> -->
            </div>
        </div>

        {#if $subOpen}
            <div
                class="menu subMenu"
                {...$subMenu} use:subMenu
                transition:fly={{ x: -50, duration: 150 }}
            >
                <div class="text">People</div>

                <div {...$radioGroup} use:radioGroup>
                    {#each personsArr as person}
                        <div class="item" {...$radioItem({ value: person })} use:radioItem>
                            <div class="check">
                                {#if $isChecked(person)}
                                    <div class="dot" />
                                {/if}
                            </div>
                            {person}
                        </div>
                    {/each}
                </div>
            </div>
        {/if}

        <div {...$separator} use:separator class="separator" />
    
        <div class="item" {...$checkboxItemA} use:checkboxItemA>
            <div class="check">
                {#if $hideMeltUI}
                    <!-- <Check class="square-4" /> -->
                {/if}
            </div>
            Hide Melt UI
            <div class="rightSlot">⌘H</div>
        </div>

        <div class="item" {...$item} use:item data-disabled>
            Show All Components
            <div class="rightSlot">⇧⌘N</div>
        </div>

        <div {...$separator} use:separator class="separator" />
            <div class="item" {...$item} use:item>
            Quit Melt UI
            <div class="rightSlot">⌘Q</div>
        </div>

        <div {...$arrow} use:arrow />
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