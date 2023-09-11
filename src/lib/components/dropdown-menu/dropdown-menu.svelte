<script lang="ts">
	import { setContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { createDropdownMenu } from '@melt-ui/svelte';

	import type { DropdownMenuOpenStore, DropdownMenuTransition } from './types';

	/** Set the aria label of the trigger button. */
	export let ariaLabel: string;
	/**A writable store that controls whether or not the dropdown menu is open. */
	export let open: DropdownMenuOpenStore;
	/** Whether or not to prevent scrolling of the document when the dropdown menu is open. */
	export let preventScroll = false;
	/** Show arrow pointing at trigger. */
	export let showArrow = false;
	/** The transition for the dropdown menu opening and closing. */
	export let transition: DropdownMenuTransition = {
		trans: fly,
		options: { duration: 150, y: -10 }
	};
	/** Whether or not the focus should loop back to the first item when the last item is reached. */
	export let loop = false;

	/** Set the z index of the menu item. */
	export let zIndex = 'z-10';
	/** Set the trigger button styles. */
	export let btnStyle = 'btn-primary';
	/** Set the width of the menu. */
	export let width = 'w-fill';
	/** Set the menu background styles. */
	export let menuBgStyle = 'surface-50-500';
	/** Set the menu border styles. */
	export let menuBorderStyle =
		'border-1 border-surface-300/70 shadow-md shadow-surface-500/50-300/50';
	/**
	 * Set the global item styles for when the item is not disabled.
	 * You can overwrite this for each individual item in the item component.
	 */
	export let itemStyle =
		'px-2 py-1 select-none rounded-container hover:primary-500/90 focus:primary-500/90';
	/**
	 * Set the styles for the disabled item.
	 * You can overwite this for each individual item in the item component.
	 * */
	export let itemDisabledStyle = 'px-2 py-1 text-surface-300 cursor-not-allowed';

	const { trans, options } = transition;

	const {
		elements: { trigger, menu, item, separator, arrow },
		builders: { createSubmenu, createMenuRadioGroup, createCheckboxItem }
	} = createDropdownMenu({
		forceVisible: true,
		preventScroll,
		open,
		loop
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

<button type="button" class="trigger {btnStyle}" {...$trigger} use:trigger aria-label={ariaLabel}>
	<slot name="dropdown-menu-trigger" />
</button>

{#if $open}
	<div
		{...$menu}
		use:menu
		class="dropdown-menu rounded-container flex flex-col p-2 {zIndex} {width} {menuBgStyle} {menuBorderStyle}"
		transition:trans={options}
	>
		<slot />

		{#if showArrow}
			<div {...$arrow} use:arrow />
		{/if}
	</div>
{/if}
