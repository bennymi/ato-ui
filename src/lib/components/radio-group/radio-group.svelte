<script lang="ts">
	import { createRadioGroup } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers';
	import type { RadioItem, RadioItemSize } from './types';

	/** Set the aria label of the radio group. */
	export let ariaLabel: string;
	/** Name attribute of radio inputs. */
	export let name = '';
	/** The group to bind to. Use this to set the default selected value here. */
	export let group: string;
	/** The radio items. */
	export let items: RadioItem[];
	/** Set the size of the radio buttons. Options: 'sm' | 'md' | 'lg'. */
	export let size: RadioItemSize = 'md';
	/** Set the active icon that appears when an item is selected. Example: 'i-material-symbols-check-circle-outline text-on-primary'. */
	export let activeIcon = '';
	/** Allows you to disable the radio group. */
	export let disabled = false;
	/** Define whether or not the radio group is required (for forms). */
	export let required = false;
	/** Define whether or not the focus should loop back to the first item when the last item is reached. */
	export let loop = true;

	// Style props
	/** Set the root styles for positioning the items. */
	export let rootStyles = 'flex gap-2';
	/** Set active background classes. */
	export let bgActiveStyles = 'primary-500';
	/** Set in-active background classes. */
	export let bgStyles = 'surface-500-50';

	const {
		elements: { root, item },
		helpers: { isChecked },
		states: { value },
		options: { disabled: radioDisabled, loop: radioLoop, required: radioRequired }
	} = createRadioGroup({
		defaultValue: group,
		orientation: 'horizontal',
		disabled,
		loop,
		required
	});

	const sizes = {
		sm: {
			out: 'px-2 py-1',
			icon: 'text-base',
			label: 'text-sm font-semibold'
		},
		md: {
			out: 'px-4 py-3',
			icon: 'text-xl',
			label: 'font-semibold'
		},
		lg: {
			out: 'px-5 py-4',
			icon: 'text-2xl',
			label: 'text-lg font-semibold'
		}
	};

	$: updated_items = items.map((item) => ({ ...item, uid: generateId() }));
	$: container_classes = sizes[size].out;
	$: icon_classes = sizes[size].icon;
	$: label_classes = sizes[size].label;

	$: group = $value;
	$: {
		$radioDisabled = disabled;
		$radioLoop = loop;
		$radioRequired = required;
	}
</script>

<div {...$root} use:root class="{rootStyles}" aria-label={ariaLabel}>
	{#each updated_items as { value, label, subLabel, icon, uid }}
		{@const active = $isChecked(value)}
		{@const styles = $isChecked(value) ? bgActiveStyles : bgStyles}
		<div class="flex items-center gap-3">
			<button
				{...$item(value)}
				use:item
				class="relative flex h-full gap-2 items-center justify-between cursor-pointer rounded-container {container_classes} shadow-md shadow-surface-900/30-50/20 transition-all duration-300 focus:outline-none focus:(ring-2 ring-white ring-offset-2 ring-offset-surface-300 ring-opacity-40) {styles}"
				id={uid}
				{name}
			>
				{#if icon}
					<span class="mr-1 {icon} {icon_classes}" />
				{/if}
				<div class="flex flex-col justify-center">
					<div class={label_classes}>{label}</div>
					{#if subLabel}
						<div>{subLabel}</div>
					{/if}
				</div>
				{#if activeIcon}
					<span class="{activeIcon} {icon_classes} {active ? '' : 'opacity-0'}" />
				{/if}
			</button>
			<!-- <label
				class="{labelStyles} {disabledStyles} {sizes[size].text}"
				for={uid}
				id="{uid}-label"
			>
				{label}
			</label> -->
		</div>
	{/each}
</div>
