<script lang="ts">
	import { createRadioGroup } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers';
	import type {
		RadioGroupOrientation,
		RegularRadioItem,
		RadioItemSize,
		RegularRadioItemSizeDefinitions
	} from './types';

	/** Set the aria label of the radio group. */
	export let ariaLabel: string;
	/** Set the orientation. */
	export let orientation: RadioGroupOrientation = 'vertical';
	/** Define the default value with the checked state. You can also bind to this prop. */
	export let checked: string;
	/** Define the available options. */
	export let radioItems: RegularRadioItem[];
	/** Allows you to disable the radio group. */
	export let disabled = false;
	/** Define whether or not the radio group is required (for forms). */
	export let required = false;
	/** Define whether or not the focus should loop back to the first item when the last item is reached. */
	export let loop = true;
	/** Set the size of the radio items. */
	export let size: RadioItemSize = 'md';

	/** Set the active color. */
	export let activeColor = 'bg-primary-500';
	/** Set the background color. */
	export let backgroundStyles = 'bg-surface-100-50 hover:bg-primary-100';
	/** Set the active background color. */
	export let activeBackgroundStyles = 'bg-primary-100 hover:bg-primary-300';
	/** Set the label styles. */
	export let labelStyles = 'capitalize leading-none text-surface-900-50';

	const {
		elements: { root, item },
		helpers: { isChecked },
		states: { value },
		options: {
			disabled: radioDisabled,
			orientation: radioOrientation,
			loop: radioLoop,
			required: radioRequired
		}
	} = createRadioGroup({
		defaultValue: checked,
		orientation,
		disabled,
		loop,
		required
	});

	const sizes: RegularRadioItemSizeDefinitions = {
		sm: {
			out: 'h-4 w-4',
			in: 'h-2 w-2',
			text: 'text-sm'
		},
		md: {
			out: 'h-6 w-6',
			in: 'h-3 w-3',
			text: ''
		},
		lg: {
			out: 'h-8 w-8',
			in: 'h-4 w-4',
			text: 'text-lg'
		}
	};

	$: disabledStyles = disabled ? 'opacity-80 cursor-not-allowed' : '';

	$: uniqueIds = radioItems.map((item) => generateId());
	$: checked = $value;
	$: {
		$radioDisabled = disabled;
		$radioOrientation = orientation;
		$radioLoop = loop;
		$radioRequired = required;
	}
</script>

<div
	{...$root}
	use:root
	class="flex flex-col gap-3 data-[orientation=horizontal]:flex-row"
	aria-label={ariaLabel}
>
	{#each radioItems as { label, value }, i}
		{@const uniqueId = uniqueIds[i]}
		<div class="flex items-center gap-3">
			<button
				{...$item(value)}
				use:item
				class="grid cursor-default place-items-center rounded-full shadow-sm
					{sizes[size].out}
					{disabledStyles}
					{$isChecked(value) ? activeBackgroundStyles : backgroundStyles}"
				id={uniqueId}
				aria-labelledby="{uniqueId}-label"
			>
				{#if $isChecked(value)}
					<div class="rounded-full {sizes[size].in} {activeColor}" />
				{/if}
			</button>
			<label
				class="{labelStyles} {disabledStyles} {sizes[size].text}"
				for={uniqueId}
				id="{uniqueId}-label"
			>
				{label}
			</label>
		</div>
	{/each}
</div>
