<script lang="ts">
	/** Set the toggle text. */
	export let label = '';
	/** Set the in-active background. */
	export let background = 'bg-surface-300-400';
	/** Set the active background. */
	export let activeBackground = 'bg-primary-500';
	/** Bind to the checked status of the switch. */
	export let checked = false;
	/** Set the size of the toggle switch. Options: 'sm' | 'md' | 'lg'. */
	export let size: 'sm' | 'md' | 'lg' = 'md';

	const base_after_classes = `after:(content-[''] absolute bg-surface-50 ring-1 ring-surface-500/20 border rounded-btn transition-all)`;

	const sizes = {
		sm: {
			out: 'w-9 h-5',
			in: 'after:(w-4 h-4 top-[2px] left-[2px]) peer-checked:after:translate-x-full',
			text: 'text-sm'
		},
		md: {
			out: 'w-11 h-6',
			in: 'after:(w-5 h-5 top-[4px] left-[2px]) peer-checked:after:translate-x-full',
			text: ''
		},
		lg: {
			out: 'w-14 h-7',
			in: 'after:(w-6 h-6 top-0.5 left-[2px]) peer-checked:after:translate-x-[118%]',
			text: 'font-semibold'
		}
	};

	$: bg_classes = checked ? `${activeBackground}` : `${background}`;
	$: size_classes = sizes[size].out;
	$: inside_classes = `${base_after_classes} ${sizes[size].in}`;
</script>

<label class="relative inline-flex items-center cursor-pointer">
	<input type="checkbox" value="" class="sr-only peer" bind:checked />
	<div
		class="{size_classes} {bg_classes} {inside_classes} rounded-btn border-1 border-surface-200-600 peer-focus:outline-none peer-focus:(ring-4 ring-surface-300/15-400/15)"
	/>
	{#if label}
		<span class="ml-2 {sizes[size].text} select-none text-surface-900-50">{label}</span>
	{/if}
</label>
