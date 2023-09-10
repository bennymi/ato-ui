<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import type { DropdownMenuContext, DropdownMenuTransition } from './types';

	/** Whether or not the submenu is disabled. */
	export let disabled = false;
	/** The transition for the submenu opening and closing. */
	export let transition: DropdownMenuTransition = { trans: fly, options: { duration: 150 } };
	/** Show an arrow from the submenu to the trigger. */
	export let hideArrow = false;

	/** Set the width of the submenu. */
	export let width = 'w-fit min-w-40';

	const { trans, options } = transition;

	const { createSubmenu, itemDisabledStyle, itemStyle, menuContainerStyle } =
		getContext<DropdownMenuContext>('dropdown-menu');

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

<div
	class="item {disabled ? itemDisabledStyle : itemStyle}"
	{...$subTrigger}
	use:subTrigger
	on:m-click
>
	<div class="ml-4 mr-2">
		<slot name="submenu-trigger" />
	</div>
</div>

{#if $subOpen}
	<div
		class="dropdown-menu-submenu rounded-container ml-1 p-2 {width} {menuContainerStyle}"
		{...$subMenu}
		use:subMenu
		transition:trans={options}
	>
		<slot />

		{#if !hideArrow}
			<div {...$subArrow} use:subArrow />
		{/if}
	</div>
{/if}
