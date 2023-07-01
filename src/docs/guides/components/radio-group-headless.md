---
title: Radio Group
description: A headless radio group example.
---

<script>
    import RadioGroup from '$lib/components/radio-group/RadioGroup.svelte';

	let items = [
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

# Radio Group | Headless

## Example

<Usage padding="py-20">
    <RadioGroup {items} name="group-1" {activeIcon} bind:group />
</Usage>

Here is an example using Ato UI's tokens, however also feel free to see [HeadlessUI's Radio Group example](https://captaincodeman.github.io/svelte-headlessui/radio-group/).

```svelte showCode=true
<script lang="ts">
	/** Name attribute of radio inputs. */
	let name = 'group-1';
	/** The group to bind to. */
	let group = 'startup';
	/** The radio items. */
	let items = [
        {
			value: 'startup',
			label: 'Startup',
			subLabel: 'This is a startup',
			icon: 'i-material-symbols-alarm-on-rounded'
		},
		{ value: 'business', label: 'Business' },
		{ value: 'enterprise', label: 'Enterprise' }
    ];

</script>

<fieldset class="flex gap-2">
	{#each updated_items as { value, label, subLabel, icon }}
		{@const active = group === value}
		<div class="relative">
			<input
				id={label}
				class="absolute opacity-0 w-0 h-0 peer"
				type="radio"
				bind:group
				{name}
				{value}
			/>
			<label
				for={label}
				class="relative flex h-full gap-2 items-center justify-between cursor-pointer rounded-container px-5 py-4 shadow-md shadow-surface-900/30-50/20 focus:outline-none peer-focus:(ring-2 ring-white ring-offset-2 ring-offset-surface-300 ring-opacity-40) {active
					? 'primary-500'
					: 'surface-500-50'}"
			>
                <!-- Icon in the front -->
				{#if icon}
					<span class="mr-1 text-xl {icon}" />
				{/if}

                <!-- Label -->
				<div class="flex flex-col justify-center">
					<div class="font-semibold">{label}</div>
					{#if subLabel}
						<div>{subLabel}</div>
					{/if}
				</div>

                <!-- Active Icon -->
                <span class="i-material-symbols-check-circle-outline text-on-primary {active ? '' : 'opacity-0'}" />
			</label>
		</div>
	{/each}
</fieldset>
```
