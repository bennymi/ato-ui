<script lang="ts">
	/** Set the toggle text. */
	export let label = '';
	/** Set the label position (left or right). */
	export let labelPosition: 'left' | 'right' = 'left';
	/** Set label styles. */
	export let labelClasses = 'text-surface-900-50';
	/** Set the in-active background classes. */
	export let background = 'bg-surface-300-400';
	/** Set the active background classes. */
	export let activeBackground = 'bg-primary-500';
	/** Bind to the checked status of the switch. */
	export let checked = false;
	/** Set the size of the toggle switch. Options: 'sm' | 'md' | 'lg'. */
	export let size: 'sm' | 'md' | 'lg' = 'md';

	let focused = false;

	const sizes = {
		sm: {
			out: 'w-[38px] h-[21px]',
			in: 'w-[19px] h-[19px] peer-checked:(left-[calc(100%-19px)])'
		},
		md: {
			out: 'w-[44px] h-[24px]',
			in: 'w-[22px] h-[22px] peer-checked:(left-[calc(100%-22px)])'
		},
		lg: {
			out: 'w-[50px] h-[27px]',
			in: 'w-[25px] h-[25px] peer-checked:(left-[calc(100%-25px)])'
		}
	};

	const onKeyDown = (event: KeyboardEvent) => {
		const { key } = event;
		if (focused && (key === 'Enter' || key === ' ')) {
			event.preventDefault();
			checked = !checked;
		}
	};

	$: bg_classes = checked ? `${activeBackground}` : `${background}`;
	$: container_classes = sizes[size].out;
	$: inside_classes = `${sizes[size].in}`;
</script>

<svelte:window on:keydown={onKeyDown} />

<div class="inline-flex flex-wrap justify-center items-center gap-2">
	{#if label && labelPosition === 'left'}
		<div class={labelClasses}>
			{label}
		</div>
	{/if}
	<label
		class="switch relative inline-block rounded-btn cursor-pointer transition-all duration-300 {bg_classes} {container_classes}"
	>
		<input bind:checked type="checkbox" class="peer display-none" />
		<div
			role="switch"
			tabindex="0"
			aria-checked={checked}
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			class=" left-0 absolute rounded-btn bg-white top-[1px] transition-all duration-400 ring-1 ring-surface-900/30 focus:(outline-2 outline-surface-900/70) {inside_classes}"
		/>
	</label>
	{#if label && labelPosition === 'right'}
		<div class={labelClasses}>
			{label}
		</div>
	{/if}
</div>
