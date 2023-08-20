<script lang="ts">
	// import RadioGroup from '$lib/components/radio-group/RadioGroup.svelte';
	import { RadioGroup } from '$lib/components/radio-group';
	import type { RadioItem } from '$lib/components/radio-group';

	let items: RadioItem[] = [
		{
			value: 'startup',
			label: 'Startup',
			// subLabel: 'This is a startup',
			icon: 'i-material-symbols-alarm-on-rounded'
		},
		{ value: 'business', label: 'Business' },
		{ value: 'enterprise', label: 'Enterprise' }
	];

	let group = 'startup';

	let activeIcon = 'i-material-symbols-check-circle-outline-rounded text-on-primary';
</script>

<div class="flex flex-col gap-4">
	<p class="text-center text-surface-900-50 font-bold text-2xl my-12">{group}</p>

	<RadioGroup ariaLabel="business type" size="sm" {items} name="group-1" {activeIcon} bind:group />

	<RadioGroup
		ariaLabel="business type"
		group="startup"
		{items}
		name="group-2"
		bgActiveStyles="tertiary-500"
		activeIcon="i-material-symbols-check-circle-outline-rounded text-on-tertiary"
	/>

	<RadioGroup
		ariaLabel="business type"
		group="startup"
		size="lg"
		{items}
		name="group-3"
		bgActiveStyles="secondary-500"
		activeIcon="i-material-symbols-check-circle-outline-rounded text-on-secondary"
	/>
</div>
