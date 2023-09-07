<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { createDropdownMenu } from '@melt-ui/svelte';

	import { default as IconItem } from './icon-item.svelte';

	const themes = ['Ato', 'Air', 'Earth', 'Fire', 'Water'];

	const open = writable(false);
	const dark = writable(true);
	const themeValue = writable(themes[0]);

	const checkedIcon = 'i-material-symbols-check-small-rounded';

	const menuStyle =
		'surface-50-500 border-1 border-surface-300/70 shadow-md shadow-surface-500/50-300/50';
	const itemClasses =
		'px-2 py-1 select-none rounded-container hover:(primary-500/90) focus:(primary-500/90)';
	const itemDisabledClasses = 'px-2 py-1 text-surface-300 cursor-not-allowed';

	const {
		elements: { trigger, menu, item, separator, arrow },
		builders: { createSubmenu, createMenuRadioGroup, createCheckboxItem }
	} = createDropdownMenu({
		forceVisible: true,
		open
	});

	// Checkbox item
	const {
		elements: { checkboxItem }
	} = createCheckboxItem({
		checked: dark,
		onCheckedChange: (state) => {
			// Do something like dispatching an event with the state.
			// dispatch('checked-change', state);
			return state.next;
		}
	});

	// Radio Group
	const {
		elements: { radioGroup, radioItem },
		helpers: { isChecked }
	} = createMenuRadioGroup({
		value: themeValue,
		onValueChange: (state) => {
			// dispatch('value-change', state);
			return state.next;
		}
	});

	// Submenu
	const {
		elements: { subMenu, subTrigger, subArrow },
		states: { subOpen }
	} = createSubmenu({
		arrowSize: 8
	});
</script>

<div class="bg-surface-50-600 p-8 rounded-container">
	<button
		type="button"
		class="trigger btn-primary btn-icon"
		{...$trigger}
		use:trigger
		aria-label="theme menu"
	>
		<span
			class="text-2xl transition-all {$open
				? 'i-mdi-palette-swatch-variant -rotate-360'
				: 'i-mdi-palette-swatch rotate-y-180'}"
		/>
	</button>

	{#if $open}
		<div
			{...$menu}
			use:menu
			class="dropdown-menu rounded-container flex flex-col p-2 z-10 w-fill {menuStyle}"
			transition:fly={{ duration: 150, y: -10 }}
		>
			<!-- Regular item -->
			<div {...$item} use:item class="item {itemClasses}" on:m-click>
				<div class="ml-4 mr-2">
					<IconItem text="Add theme" icon="i-material-symbols-palette" />
				</div>
			</div>

			<!-- Checkbox item -->
			<div
				{...$checkboxItem}
				use:checkboxItem
				class="dropdown-menu-checkbox-item relative {itemClasses}"
				on:m-click
			>
				<div class="check absolute inset-y-0 left-1 inline-flex items-center">
					{#if $dark}
						<span class="text-lg {checkedIcon}" />
					{/if}
				</div>

				<div class="ml-4 mr-2">
					<IconItem text="Dark mode" icon="i-mdi-theme-light-dark" />
				</div>
			</div>

			<!-- Regular item -->
			<div {...$item} use:item class="item {itemDisabledClasses}" data-disabled>
				<div class="ml-4 mr-2">
					<IconItem text="Edit theme" icon="i-material-symbols-edit-rounded" />
				</div>
			</div>

			<!-- Submenu with a radio group -->
			<!-- 1. Submenu trigger -->
			<div {...$subTrigger} use:subTrigger class="item {itemClasses}">
				<div class="ml-4 mr-2">
					<IconItem text="Select a theme" icon="i-material-symbols-chevron-right-rounded" />
				</div>
			</div>

			<!-- 2. Radio Group in submenu -->
			{#if $subOpen}
				<div
					{...$subMenu}
					use:subMenu
					class="dropdown-menu-submenu rounded-container ml-1 p-2 w-fit min-w-40 {menuStyle}"
					transition:fly={{ duration: 150, x: -50 }}
				>
					<div {...$radioGroup} use:radioGroup>
						{#each themes as theme}
							<div
								{...$radioItem({ value: theme })}
								use:radioItem
								class="dropdown-menu-radio-item relative {itemClasses}"
							>
								<div
									class="dropdown-menu-radio-check absolute inset-y-0 left-1 inline-flex items-center"
								>
									{#if $isChecked(theme)}
										<span class="text-lg {checkedIcon}" />
									{/if}
								</div>

								<div class="ml-4">
									{theme}
								</div>
							</div>
						{/each}
					</div>

					<div {...$subArrow} use:subArrow />
				</div>
			{/if}

			<div
				{...$separator}
				use:separator
				class="dropdown-menu-separator m-2 h-0.5 bg-surface-300/70"
			/>

			<div
				{...$item}
				use:item
				class="item px-2 py-1 select-none rounded-container hover:(error-500/90) focus:(error-500/90)"
			>
				<div class="ml-4 mr-2">
					<IconItem text="Delete theme" icon="i-material-symbols-delete-rounded" />
				</div>
			</div>
		</div>
	{/if}
</div>
