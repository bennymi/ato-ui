<script lang="ts">
	import { createRadioGroup } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers';
	import type { Roundedness, RoundedAriaType } from './types';

	export let pixels = '6px';
	export let showFull = true;
	export let ariaLabelType: RoundedAriaType;

	const {
		elements: { root, item },
		helpers: { isChecked },
		states: { value }
	} = createRadioGroup({
		defaultValue: 'rounded-md',
		orientation: 'horizontal'
	});

	const roundedValues: Roundedness[] = [
		'rounded-none',
		'rounded-sm',
		'rounded-md',
		'rounded-lg',
		'rounded-xl',
		'rounded-2xl'
	];

	const buttonValues = [...roundedValues, 'rounded-full'];
	const containerValues = [...roundedValues, 'rounded-3xl'];

	const pixelValues: Record<Roundedness, string> = {
		'rounded-none': '0px',
		'rounded-sm': '2px',
		'rounded-md': '6px',
		'rounded-lg': '8px',
		'rounded-xl': '12px',
		'rounded-2xl': '16px',
		'rounded-3xl': '24px',
		'rounded-full': '9999px'
	};

	$: chosenList = showFull ? buttonValues : containerValues;
	$: display = chosenList.map((v) => ({ shape: v, uid: generateId() }));

	$: pixels = pixelValues[<Roundedness>$value];
</script>

<div {...$root} use:root class="flex gap-1" aria-label="choose {ariaLabelType} roundedness">
	{#each display as { shape, uid }}
		{@const active = $isChecked(shape)}
		<div class="flex flex-col justify-center items-center">
			<span class="font-mono font-semibold">
				{shape.replace('rounded-', '')}
			</span>
			<button
				{...$item(shape)}
				use:item
				class="{shape} p-1 inline-flex gap-1 justify-center items-center focus:(outline outline-1 outline-offset-2 outline-primary-500) {active
					? 'outline-primary-500'
					: ''}"
				id={uid}
			>
				<span
					class="{shape} w-10 h-10 border-1 border-surface-900-50 {active
						? 'bg-gradient-br-primary/80-secondary/80'
						: ''}"
				/>
			</button>
		</div>
	{/each}
</div>
