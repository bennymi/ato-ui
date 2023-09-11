<script lang="ts">
	import { createRadioGroup } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers';

	/** Set the background color. */
	let backgroundStyles = 'bg-surface-100-50 hover:bg-primary-100';
	/** Set the active background color. */
	let activeBackgroundStyles = 'bg-primary-100 hover:bg-primary-300';

	const {
		elements: { root, item },
		helpers: { isChecked },
		states: { value }
	} = createRadioGroup({
		defaultValue: 'default',
		orientation: 'vertical'
	});

	const radioItems: { label: string; value: string }[] = [
		{ label: 'Default', value: 'default' },
		{ label: 'Comfortable', value: 'comfortable' },
		{ label: 'Compact', value: 'compact' }
	];

	$: uniqueIds = radioItems.map(() => generateId());
</script>

<div class="bg-surface-50-800 w-48 p-4 rounded-container text-surface-900-50">
	<div class="font-semibold mb-5">Selected: {$value}</div>
	<div
		{...$root}
		use:root
		class="flex flex-col gap-3 data-[orientation=horizontal]:flex-row"
		aria-label="view density"
	>
		{#each radioItems as { label, value }, i}
			{@const uniqueId = uniqueIds[i]}

			<div class="flex items-center gap-3">
				<button
					{...$item(value)}
					use:item
					class="grid h-6 w-6 cursor-default place-items-center rounded-full shadow-sm
                        {$isChecked(value) ? activeBackgroundStyles : backgroundStyles}"
					id={uniqueId}
					aria-labelledby="{uniqueId}-label"
				>
					{#if $isChecked(value)}
						<div class="h-3 w-3 rounded-full bg-primary-500" />
					{/if}
				</button>

				<label class="capitalize leading-none" for={uniqueId} id="{uniqueId}-label">
					{label}
				</label>
			</div>
		{/each}
	</div>
</div>
