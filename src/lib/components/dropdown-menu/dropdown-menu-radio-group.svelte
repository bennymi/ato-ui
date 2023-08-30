<script lang="ts">
    import { getContext, setContext } from 'svelte';

    import type { DropdownMenuContext, DropdownMenuRadioGroupValue } from './types';

    /** 
     * A writable store which controls the value of the selected radio item.
     * Use this to set the default value of the radio group. 
     * */
    export let value: DropdownMenuRadioGroupValue;

    /** Set the checked icon. */
    export let checkedIcon = '';
    /** Set the active styles. */
    export let activeStyle = '';
    /** Set the in-active styles. */
    export let inactiveStyle = '';

	const { createMenuRadioGroup } = getContext<DropdownMenuContext>('dropdown-menu');

    const {
        elements: { radioGroup, radioItem },
        helpers: { isChecked }
    } = createMenuRadioGroup({
        value
    });

    setContext('dropdown-menu-radio-group', {
        radioItem,
        isChecked,
        checkedIcon,
        activeStyle,
        inactiveStyle
    });

    $: console.log('value:', $value);
</script>

<div {...$radioGroup} use:radioGroup>
    <slot />
</div>