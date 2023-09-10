<script lang="ts">
	import type { NavGroupItem } from './types';

	export let previous: NavGroupItem | null = null;
	export let next: NavGroupItem | null = null;
</script>

<div class="flex w-full gap-2">
	{#if previous}
		<a
			href={previous.sitePath}
			class="group flex flex-col items-start gap-1 border-2 border-primary-500/60 w-1/2 p-2 rounded-container hover:border-gradient-surface-50/80-bl-primary-tertiary-secondary dark:hover:border-gradient-surface-900/80-bl-primary-tertiary-secondary"
		>
			<div
				class="inline-flex items-center justify-center gap-0.5 py-1 text-sm font-medium text-surface-800-200"
			>
				<span class="text-md i-material-symbols:arrow-back-rounded" /> Previous Page
			</div>
			<div class="text-base font-bold text-surface-900-50">
				{previous.title}
			</div>
		</a>
	{/if}

	{#if next}
		<a
			href={next.sitePath}
			class="group ml-auto flex flex-col items-end gap-1 border-2 border-primary-500/60 w-1/2 p-2 rounded-container hover:border-gradient-surface-50/80-br-primary-tertiary-secondary dark:hover:border-gradient-surface-900/80-br-primary-tertiary-secondary"
		>
			<div
				class="inline-flex items-center justify-center gap-0.5 rounded-full py-1 text-sm font-medium text-surface-800-200"
			>
				Next Page <span class="text-md i-material-symbols:arrow-forward-rounded" />
			</div>
			<div class="text-base font-bold text-surface-900-50">
				{next.title}
			</div>
		</a>
	{/if}
</div>
