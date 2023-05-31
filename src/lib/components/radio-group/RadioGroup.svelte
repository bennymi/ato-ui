<script lang="ts">
	import type { RadioItem } from './types';

	/** The group to bind to. */
	export let group = 'startup';
	/** The radio items. */
	export let items: RadioItem[] = [
		{ value: 'startup', label: 'Startup', icon: 'i-material-symbols-alarm-on-rounded' },
		{ value: 'business', label: 'Business' },
		{ value: 'enterprise', label: 'Enterprise' }
	];
</script>

<fieldset class="flex gap-2">
	{#each items as { value, label, icon }}
		{@const active = group === value}
		<div class="relative">
			<input
				id={value}
				class="absolute opacity-0 w-0 h-0 peer"
				type="radio"
				bind:group
				name="type"
				{value}
			/>
			<label
				for={value}
				class="relative flex gap-2 items-center justify-between cursor-pointer rounded-container px-5 py-4 shadow-md shadow-surface-900/40-50/20 focus:outline-none peer-focus:(ring-2 ring-white ring-offset-2 ring-offset-surface-300 ring-opacity-40) {active
					? 'primary-500'
					: 'text-surface-900-50 bg-inverse-white-surface'}"
			>
				{#if icon}
					<span class="text-xl {icon}" />
				{/if}
				<div>{label}</div>
				<div class="shrink-0 {active ? '' : 'opacity-0'}">
					<svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
						<circle class="fill-on-primary/20" cx="12" cy="12" r="12" />
						<path
							class="stroke-on-primary"
							d="M7 13l3 3 7-7"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</label>
		</div>
	{/each}
</fieldset>
