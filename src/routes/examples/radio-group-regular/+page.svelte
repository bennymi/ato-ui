<script lang="ts">
	import { default as RadioGroupRegular } from '$lib/components/radio-group/radio-group-regular.svelte';
	import type { RegularRadioItem } from 'ato-ui/components/radio-group/types';

	// const optionsArr = ['default', 'comfortable', 'compact'];

	const radioItems: RegularRadioItem[] = [
		{ label: 'Default', value: 'default' },
		{ label: 'Comfortable', value: 'comfortable' },
		{ label: 'Compact', value: 'compact' }
	];

	let checked = 'default';
</script>

<div class="flex flex-col gap-8 justify-center items-center">
	<div class="text-lg font-semibold primary-500 px-1 rounded-container">{checked}</div>
	<RadioGroupRegular ariaLabel="view type" bind:checked {radioItems} />

	<RadioGroupRegular
		ariaLabel="view type"
		checked="default"
		{radioItems}
		orientation="horizontal"
		disabled={true}
	/>
	<RadioGroupRegular
		ariaLabel="view type"
		checked="default"
		{radioItems}
		orientation="horizontal"
		size="sm"
	/>
</div>
