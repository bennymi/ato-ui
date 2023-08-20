<script lang="ts">
	import { RadioGroup, RadioGroupRegular } from 'ato-ui';
	import type { RadioItem, RegularRadioItem } from 'ato-ui';

	let items: RadioItem[] = [
		{
			value: 'startup',
			label: 'Startup',
			subLabel: 'This is a startup',
			icon: 'i-material-symbols-rocket-launch-rounded'
		},
		{ 
			value: 'business', 
			label: 'Business', 
			icon: 'i-material-symbols-add-business-rounded' 
		},
		{ 
			value: 'enterprise', 
			label: 'Enterprise', 
			icon: 'i-material-symbols-star-rounded' 
		}
	];

	let group = 'startup';

	const radioItems: RegularRadioItem[] = [
		{ label: 'Default', value: 'default' },
		{ label: 'Comfortable', value: 'comfortable' },
		{ label: 'Compact', value: 'compact' }
	];
	
	let checked = 'default';
</script>

<div class="bg-surface-50-800 p-4 rounded-container text-surface-900-50 flex flex-col justify-center items-center gap-8">

	<RadioGroupRegular 
		ariaLabel="view density"
		orientation="horizontal"
		{radioItems}
		bind:checked
	/>


	<RadioGroup
		ariaLabel="business type"
		size="sm"
		bind:group
		{items}
		name="group-2"
		bgActiveStyles="tertiary-500"
		activeIcon="i-material-symbols-check-circle-outline-rounded"
	/>
</div>
