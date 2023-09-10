<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { Dropdown } from 'ato-ui';

	import { default as IconItem } from './icon-item.svelte';

	let themes = ['Ato', 'Air', 'Earth', 'Fire', 'Water'];

	let open = writable(false);
	let dark = writable(true);
	let themeValue = writable(themes[0]);

	let checkedIcon = 'i-material-symbols-check-small-rounded';
</script>

<div class="bg-surface-50-600 p-8 rounded-container">
	<Dropdown.Menu ariaLabel="theme menu" btnStyle="btn-primary btn-icon" {open}>
		<!-- Trigger button content -->
		<svelte:fragment slot="dropdown-menu-trigger">
			<span
				class="text-2xl transition-all {$open
					? 'i-mdi-palette-swatch-variant -rotate-360'
					: 'i-mdi-palette-swatch rotate-y-180'}"
			/>
		</svelte:fragment>

		<!-- Menu content -->

		<!-- A regular item. -->
		<Dropdown.Item on:m-click={() => console.log('add theme clicked')}>
			<IconItem text="Add theme" icon="i-material-symbols-palette" />
		</Dropdown.Item>

		<!-- A checkbox item. -->
		<Dropdown.CheckboxItem
			checked={dark}
			{checkedIcon}
			on:checked-change={(e) => console.log('checked change', e)}
		>
			<IconItem text="Dark mode" icon="i-mdi-theme-light-dark" />
		</Dropdown.CheckboxItem>

		<Dropdown.Item disabled={true}>
			<IconItem text="Edit theme" icon="i-material-symbols-edit-rounded" />
		</Dropdown.Item>

		<Dropdown.Submenu transition={{ trans: fly, options: { x: -50, duration: 150 } }}>
			<!-- The trigger item for which a submenu opens. -->
			<svelte:fragment slot="submenu-trigger">
				<IconItem text="Select a theme" icon="i-material-symbols-chevron-right-rounded" />
			</svelte:fragment>

			<!-- The actual submenu. -->
			<Dropdown.RadioGroup
				value={themeValue}
				{checkedIcon}
				on:value-change={(e) => console.log('radio group value changed:', e.detail)}
			>
				{#each themes as theme}
					<Dropdown.RadioGroupItem value={theme}>
						{theme}
					</Dropdown.RadioGroupItem>
				{/each}
			</Dropdown.RadioGroup>
		</Dropdown.Submenu>

		<Dropdown.Separator />

		<Dropdown.Item
			itemStyle="px-2 py-1 select-none rounded-container hover:(error-500/90) focus:(error-500/90)"
		>
			<IconItem text="Delete theme" icon="i-material-symbols-delete-rounded" />
		</Dropdown.Item>
	</Dropdown.Menu>
</div>
