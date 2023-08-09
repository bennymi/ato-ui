<script lang="ts">
	import { createRadioGroup } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers';

	const {
		elements: { root, item },
		helpers: { isChecked }
	} = createRadioGroup({
		defaultValue: 'default'
	});

	const uniqueId = generateId();

	const optionsArr = ['default', 'comfortable', 'compact'];

	let backgroundOptions = [
		{ bg: 'bg-surface-900-50', text: 'text-surface-900-50' },
		{ bg: 'bg-primary-700', text: 'text-on-primary-700' },
		{ bg: 'bg-secondary-700', text: 'text-on-secondary-700' },
		{ bg: 'bg-tertiary-700', text: 'text-on-tertiary-700' },
		{ bg: 'bg-success-700', text: 'text-on-warning-700' },
		{ bg: 'bg-warning-700', text: 'text-on-warning-700' },
		{ bg: 'bg-error-700', text: 'text-on-error-700' },
		{ bg: 'bg-gradient-br-primary-tertiary', text: 'text-on-primary-700' },
		{
			bg: 'bg-mesh-primary/40-x0-y0-secondary/40-x100-y0-tertiary/40-x100-y100-success/40-x0-y100',
			text: 'text-on-surface-50 dark:text-on-surface-900'
		}
	];
</script>

<div {...$root} use:root class="grid grid-cols-3 gap-1" aria-label="View density">
	{#each backgroundOptions as { bg }, i}
		{@const itemId = `palette-${uniqueId}-${i}`}
		<button
			{...$item(bg)}
			use:item
			class="h-10 w-10 cursor-default rounded-btn hover:scale-110 {bg} {$isChecked(bg) ? 'scale-110' : ''}"
			id={itemId}
			aria-label={bg}
		>
        </button>
	{/each}
</div>
