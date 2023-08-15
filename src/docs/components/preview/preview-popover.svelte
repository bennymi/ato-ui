<!-- @unocss-include -->
<script lang="ts">
	import { createPopover, createRadioGroup } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers';
	import { fade } from 'svelte/transition';

	const defaultBackground = 'bg-gradient-br-primary-tertiary';

	export let backgroundClass = defaultBackground;

	const {
		elements: { trigger, content },
		states: { open }
	} = createPopover({ forceVisible: true });

	const {
		elements: { root, item },
		helpers: { isChecked },
		states: { value }
	} = createRadioGroup({
		defaultValue: defaultBackground,
		orientation: 'horizontal'
	});

	const uniqueId = generateId();

	let backgroundOptions = [
		{ bg: 'bg-surface-900-50', text: 'text-surface-50-900' },
		{ bg: 'bg-primary-700', text: 'text-on-primary-700' },
		{ bg: 'bg-secondary-700', text: 'text-on-secondary-700' },
		{ bg: 'bg-tertiary-700', text: 'text-on-tertiary-700' },
		{ bg: 'bg-success-700', text: 'text-on-success-700' },
		{ bg: 'bg-warning-700', text: 'text-on-warning-700' },
		{ bg: 'bg-error-700', text: 'text-on-error-700' },
		{ bg: defaultBackground, text: 'text-on-primary-700' },
		{
			bg: 'bg-surface-900/20-50/20 bg-mesh-primary/60-x0-y0-secondary/60-x100-y0-tertiary/60-x100-y100-success/60-x0-y100',
			text: 'text-surface-900'
			// text: 'text-on-surface-50 dark:text-on-surface-900'
		}
	];

	$: backgroundClass = $value;
</script>

<button
	type="button"
	class="inline-flex h-7 w-7 items-center justify-center rounded-btn p-0 text-sm transition-colors hover:primary-400 focus-visible:(ring ring-primary-400 ring-offset-2) {$open
		? 'primary-500 bg-mesh-primary-x0-y0-secondary-x100-y0-tertiary-x100-y100-warning-x0-y100'
		: 'surface-300 dark:surface-400'}"
	{...$trigger}
	use:trigger
	aria-label="Update preview background color"
>
	<span
		class="text-2xl transition-all {$open
			? 'i-mdi-palette-swatch-variant -rotate-360'
			: 'i-mdi-palette-swatch rotate-y-180'}"
	/>
	<span class="sr-only">Open Popover</span>
</button>

{#if $open}
	<div
		{...$content}
		use:content
		transition:fade={{ duration: 100 }}
		class="content z-10 rounded-container bg-surface-100/10 border-1 border-surface-200-600 p-2 shadow-md backdrop-blur-sm"
	>
		<!-- <PreviewPalette /> -->
		<div {...$root} use:root class="grid grid-cols-3 gap-1.5" aria-label="View density">
			{#each backgroundOptions as { bg, text }, i}
				{@const itemId = `palette-${uniqueId}-${i}`}
				<button
					{...$item(bg)}
					use:item
					class="inline-flex justify-center items-center h-10 w-10 cursor-default rounded-btn hover:scale-110 ring-1 ring-surface-800 {bg}"
					id={itemId}
					aria-label={bg}
				>
					{#if $isChecked(bg)}
						<span class="{text} text-2xl i-material-symbols-check-circle-rounded" />
					{/if}
				</button>
			{/each}
		</div>
	</div>
{/if}
