<script>
	let bg_colors = {
		primary: [
			'bg-primary-50',
			'bg-primary-100',
			'bg-primary-200',
			'bg-primary-300',
			'bg-primary-400',
			'bg-primary-500',
			'bg-primary-600',
			'bg-primary-700',
			'bg-primary-800',
			'bg-primary-900',
			'bg-primary-950'
		],
		secondary: [
			'bg-secondary-50',
			'bg-secondary-100',
			'bg-secondary-200',
			'bg-secondary-300',
			'bg-secondary-400',
			'bg-secondary-500',
			'bg-secondary-600',
			'bg-secondary-700',
			'bg-secondary-800',
			'bg-secondary-900',
			'bg-secondary-950'
		],
		tertiary: [
			'bg-tertiary-50',
			'bg-tertiary-100',
			'bg-tertiary-200',
			'bg-tertiary-300',
			'bg-tertiary-400',
			'bg-tertiary-500',
			'bg-tertiary-600',
			'bg-tertiary-700',
			'bg-tertiary-800',
			'bg-tertiary-900',
			'bg-tertiary-950'
		],
		surface: [
			'bg-surface-50',
			'bg-surface-100',
			'bg-surface-200',
			'bg-surface-300',
			'bg-surface-400',
			'bg-surface-500',
			'bg-surface-600',
			'bg-surface-700',
			'bg-surface-800',
			'bg-surface-900',
			'bg-surface-950'
		],
		success: [
			'bg-success-50',
			'bg-success-100',
			'bg-success-200',
			'bg-success-300',
			'bg-success-400',
			'bg-success-500',
			'bg-success-600',
			'bg-success-700',
			'bg-success-800',
			'bg-success-900',
			'bg-success-950'
		],
		warning: [
			'bg-warning-50',
			'bg-warning-100',
			'bg-warning-200',
			'bg-warning-300',
			'bg-warning-400',
			'bg-warning-500',
			'bg-warning-600',
			'bg-warning-700',
			'bg-warning-800',
			'bg-warning-900',
			'bg-warning-950'
		],
		error: [
			'bg-error-50',
			'bg-error-100',
			'bg-error-200',
			'bg-error-300',
			'bg-error-400',
			'bg-error-500',
			'bg-error-600',
			'bg-error-700',
			'bg-error-800',
			'bg-error-900',
			'bg-error-950'
		]
	};
</script>

<div class="flex flex-col gap-2 [&>div>div]:(h-15 w-15 rounded-token-container)">
	{#each Object.keys(bg_colors) as palette}
		<div class="flex gap-2 justify-center items-center">
			{#each bg_colors[palette] as shade}
				<div class={shade} />
			{/each}
		</div>
	{/each}
</div>
