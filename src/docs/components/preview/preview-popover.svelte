<!-- @unocss-include -->
<script lang="ts">
	import { createPopover } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	import { PreviewPalette } from '$components';

	/** Define whether to hide the popover arrow. */
	export let hideArrow = false;

	const {
		elements: { trigger, content, arrow, close },
		states: { open }
	} = createPopover({ forceVisible: true });

	let backgroundOptions = [
		{ bg: 'bg-surface-900-50', text: 'text-surface-900-50' },
		{ bg: 'bg-primary-700', text: 'text-on-primary-700' },
		{ bg: 'bg-secondary-700', text: 'text-on-secondary-700' },
		{ bg: 'bg-tertiary-700', text: 'text-on-tertiary-700' },
		{ bg: 'bg-success-700', text: 'text-on-warning-700' },
		{ bg: 'bg-warning-700', text: 'text-on-warning-700' },
		{ bg: 'bg-error-700', text: 'text-on-error-700' },
		{ bg: 'bg-gradient-br-primary-tertiary', text: 'text-on-primary-700' },
		{
			bg: 'bg-mesh-primary/40-x0-y0-secondary/40-x100-y0-tertiary/40-x100-y100-success/40-x0-y100',
			text: 'text-on-surface-50 dark:text-on-surface-900'
		}
	];
</script>

<button type="button" class="trigger" {...$trigger} use:trigger aria-label="Update dimensions">
	<!-- <span class="text-2xl transition-all {$open ? 'i-mdi-palette-swatch-variant' : 'i-mdi-palette-swatch'}" /> -->
	<span
		class="text-2xl transition-all {$open
			? 'i-mdi-palette-swatch-variant -rotate-360'
			: 'i-mdi-palette-swatch rotate-y-180'}"
	/>
	<span class="sr-only">Open Popover</span>
</button>

{#if $open}
	<div {...$content} use:content transition:fade={{ duration: 100 }} class="content">
		{#if !hideArrow}
			<div {...$arrow} use:arrow />
		{/if}

		<PreviewPalette />

		<button class="close" {...$close} use:close>
			<span class="i-material-symbols-cancel-rounded" />
		</button>
	</div>
{/if}

<style>

	label {
		--at-apply: 'w-[75px] text-sm text-neutral-700';
	}

	.trigger {
		--at-apply: 'inline-flex h-9 w-9 items-center justify-center rounded-btn surface-300 p-0 text-sm transition-colors hover:surface-400 focus-visible:(ring ring-primary-400 ring-offset-2)';
	}

	.close {
		--at-apply: 'absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full text-primary-900 transition-colors hover:bg-primary-500/10 focus-visible:(ring ring-primary-400 ring-offset-2) bg-white p-0 text-sm font-medium';
	}

	.content {
		--at-apply: 'z-10 w-60 rounded-container bg-surface-50-800 border-1 border-surface-200-600 p-5 shadow-sm';
	}
</style>
