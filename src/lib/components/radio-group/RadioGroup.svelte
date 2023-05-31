<script lang="ts">
	import type { RadioItem } from './types';

	/** Name attribute of radio inputs. */
	export let name = '';
	/** The group to bind to. */
	export let group = 'startup';
	/** The radio items. */
	export let items: RadioItem[] = [];
	/** Set the size of the radio buttons. Options: 'sm' | 'md' | 'lg'. */
	export let size: 'sm' | 'md' | 'lg' = 'md';
	/** Set the active icon that appears when an item is selected. Example: 'i-material-symbols-check-circle-outline text-on-primary'. */
	export let activeIcon = '';

	// Style props
	/** Set active background classes. */
	export let bgActiveClasses = 'primary-500';
	/** Set in-active background classes. */
	export let bgClasses = 'surface-500-50';

	const sizes = {
		sm: {
			out: 'px-2 py-1',
			icon: 'text-base',
			label: 'text-sm font-semibold'
		},
		md: {
			out: 'px-4 py-3',
			icon: 'text-xl',
			label: 'font-semibold'
		},
		lg: {
			out: 'px-5 py-4',
			icon: 'text-2xl',
			label: 'text-lg font-semibold'
		}
	};

	$: updated_items = items.map((item) => ({ ...item, uid: crypto.randomUUID() }));
	$: container_classes = sizes[size].out;
	$: icon_classes = sizes[size].icon;
	$: label_classes = sizes[size].label;
</script>

<fieldset class="flex gap-2">
	{#each updated_items as { value, label, subLabel, icon, uid }}
		{@const active = group === value}
		<div class="relative">
			<input
				id={uid}
				class="absolute opacity-0 w-0 h-0 peer"
				type="radio"
				bind:group
				{name}
				{value}
			/>
			<label
				for={uid}
				class="relative flex h-full gap-2 items-center justify-between cursor-pointer rounded-container {container_classes} shadow-md shadow-surface-900/30-50/20 transition-all duration-300 focus:outline-none peer-focus:(ring-2 ring-white ring-offset-2 ring-offset-surface-300 ring-opacity-40) {active
					? bgActiveClasses
					: bgClasses}"
			>
				{#if icon}
					<span class="mr-1 {icon} {icon_classes}" />
				{/if}
				<div class="flex flex-col justify-center">
					<div class={label_classes}>{label}</div>
					{#if subLabel}
						<div>{subLabel}</div>
					{/if}
				</div>
				{#if activeIcon}
					<span class="{activeIcon} {icon_classes} {active ? '' : 'opacity-0'}" />
				{/if}
			</label>
		</div>
	{/each}
</fieldset>
