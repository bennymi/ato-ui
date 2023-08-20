<script lang="ts">
	import { RadioGroup, RadioGroupRegular } from 'ato-ui';
	import type { RadioItem, RegularRadioItem } from 'ato-ui';

	let items: RadioItem[] = [
		{
			value: 'startup',
			label: 'Startup',
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

    let ariaLabel = "business type";
	let activeIcon = 'i-material-symbols-check-circle-outline-rounded';
</script>

<div class="bg-surface-50-800 p-4 rounded-container text-surface-900-50 flex flex-col justify-center items-center gap-2">
	<RadioGroup {ariaLabel} bind:group {items} size="sm" {activeIcon} bgActiveStyles="primary-500" />
    <RadioGroup {ariaLabel} group="startup" {items} size="sm" {activeIcon} bgActiveStyles="secondary-500" />
    <RadioGroup {ariaLabel} group="startup" {items} size="sm" {activeIcon} bgActiveStyles="tertiary-500" />
    <RadioGroup {ariaLabel} group="startup" {items} size="sm" {activeIcon} bgActiveStyles="success-500" />
    <RadioGroup {ariaLabel} group="startup" {items} size="sm" {activeIcon} bgActiveStyles="bg-gradient-bl-primary-secondary text-on-primary" />
</div>
