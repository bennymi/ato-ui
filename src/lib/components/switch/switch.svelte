<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createSwitch } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers'; 
	import type { SwitchLabelPosition, SwitchSize } from './types';

	/** Set the toggle text. */
	export let label: string;
	/** The name of the hidden input element used for form submission. */
	export let name = '';
	/** Whether or not the input is required. */
	export let required = false;
	/** Define if the label should be hidden. It will still be available for screen readers. */
	export let hideLabel = false;
	/** Set the label position (left or right). */
	export let labelPosition: SwitchLabelPosition = 'left';
	/** Bind to the checked status of the switch. */
	export let checked = false;
	/** Define whether or not the switch is disabled. */
	export let disabled = false;
	/** Set the size of the toggle switch. Options: 'sm' | 'md' | 'lg'. */
	export let size: SwitchSize = 'md';

	/** Set label styles. */
	export let labelStyles = 'px-2 text-surface-900-50';
	/** Set the in-active background classes. */
	export let background = 'bg-surface-300-400';
	/** Set the active background classes. */
	export let activeBackground = 'bg-primary-500';
	/** Set the inactive icon (optional). You can also set the icon size and color here. Example: "text-surface-900 text-lg i-material-symbols-dark-mode-rounded". */
	export let inactiveIcon = '';
	/** Set the active icon (optional). You can also set the icon size and color here. Example: "text-surface-900 text-lg i-material-symbols-clear-day-rounded". */
	export let activeIcon = '';

	const {
		elements: { root, input },
		states: { checked: switchChecked },
		options: {
			disabled: switchDisabled
		}
	} = createSwitch({ disabled, name, required, defaultChecked: checked });

	let uniqueId = generateId();

	const sizes = {
		sm: {
			out: 'w-9 h-5',
			in: 'w-4 h-4',
			translate: 'translate-x-4.5'
		},
		md: {
			out: 'w-11 h-6',
			in: 'w-5 h-5',
			translate: 'translate-x-5.5'
		},
		lg: {
			out: 'w-13 h-7',
			in: 'w-6 h-6',
			translate: 'translate-x-6.5'
		}
	} as const;

	/** Update outside facing props. */
	$: checked = $switchChecked;
	$: $switchDisabled = disabled;

	/** Styles. */
	$: labelClasses = `${labelStyles} ${hideLabel ? 'sr-only' : ''}`;
	$: bgClasses = $switchChecked ? `${activeBackground}` : `${background}`;
	$: containerClasses = sizes[size].out;
	$: insideClasses = sizes[size].in;
</script>

<form>
	<div class="flex items-center">
		{#if label && labelPosition === 'left'}
			<label class="select-none {labelClasses}" for={uniqueId}>{label}</label>
		{/if}
		<button
			{...$root}
			use:root
			class="relative {containerClasses} cursor-default rounded-btn transition-colors {bgClasses} {$switchDisabled ? 'cursor-not-allowed opacity-70' : ''}"
			id={uniqueId}
		>
			<span
				class="flex justify-center items-center {insideClasses} translate-x-0.5 rounded-btn bg-white
						transition-transform will-change-transform
						{$switchChecked ? sizes[size].translate : ''}"
			>
				{#if $switchChecked && activeIcon}
					<span class={activeIcon} in:fly={{ x: 4 }} />
				{:else if !$switchChecked && inactiveIcon}
					<span class={inactiveIcon} in:fly={{ x: -4 }} />
				{/if}
			</span>
			<input {...$input} use:input />
		</button>
		{#if label && labelPosition === 'right'}
			<label class="select-none {labelClasses}" for={uniqueId}>{label}</label>
		{/if}
	</div>
</form>