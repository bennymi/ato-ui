<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { darkTheme } from '$lib/stores/lightswitch';
	import { ToggleSwitch } from '$lib';

	export let lang = '';
	export let darkCode: string | null = null;
	export let lightCode: string | null = null;
	export let title: string | null = null;
	export let rawCode: string | null = null;
	export let showCode = false;
	export let height = 'h-full';
	export let padding = 'p-4';
	export let column = false;

	let copyState = false;
	let code_id = crypto.randomUUID();

	let backgrounds = [
		{ bg: 'bg-surface-50', text: 'text-on-surface-50' },
		{ bg: 'bg-surface-900', text: 'text-on-surface-900' },
		{ bg: 'bg-primary-700', text: 'text-on-primary-700' },
		{ bg: 'bg-secondary-700', text: 'text-on-secondary-700' },
		{ bg: 'bg-tertiary-700', text: 'text-on-tertiary-700' },
		{ bg: 'bg-warning-700', text: 'text-on-warning-700' },
		{ bg: 'bg-gradient-primary-700-secondary-700', text: 'text-on-primary-700' },
		{ bg: 'bg-gradient-br-primary-700/70-tertiary-700/70', text: 'text-on-primary-700' },
		{
			bg: 'bg-mesh-primary/40-x0-y0-secondary/40-x100-y0-tertiary/40-x100-y100-success/40-x0-y100',
			text: 'text-on-primary-900 dark:text-on-surface-900'
		}
	];

	let activeBackground = backgrounds[backgrounds.length - 1].bg;

	const handleCopy = () => {
		// Add code to clipboard
		navigator.clipboard.writeText(rawCode ?? '');

		// Give feedback
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);
	};

	$: tag = title ?? lang.toUpperCase();
</script>

<div class="mt-2">
	<div class="flex justify-between items-center h-12">
		{#if showCode}
			<div
				class="px-2 py-1 rounded-container select-none primary-500 font-semibold font-mono flex items-center justify-center"
			>
				{tag}
			</div>
		{:else}
			<div class="flex justify-center items-center gap-1">
				{#each backgrounds as { bg, text }, i}
					{@const isActive = bg === activeBackground}
					<button
						class="rounded-container w-10 h-10 {bg} border-1 border-surface-900-50 inline-flex justify-center items-center focus:scale-110"
						on:click={() => (activeBackground = bg)}
						aria-label="change background of example to class {bg}"
					>
						<!-- in:fade|global={{ duration: i * 70 }}
                        out:fade|global={{ duration: (backgrounds.length * 70) - i * 70 }} -->
						{#if isActive}
							<span class="{text} text-2xl i-material-symbols-check-circle-rounded" />
						{/if}
					</button>
				{/each}
			</div>
		{/if}
		<ToggleSwitch bind:checked={showCode} label="Show Code" />
	</div>
	<div class="rounded-container border-1 border-surface-500/30-200/30">
		{#if !showCode}
			<div
				class="ato-example w-full flex {height} {padding} {activeBackground} {column
					? 'flex-col'
					: ''} flex-wrap gap-x-16 gap-y-4 justify-center items-center rounded-container"
			>
				<slot />
			</div>
		{:else}
			<div class="ato-code-block relative overflow-y-auto rounded-container">
				<button
					class="code-block-copy-btn absolute right-1 top-1 z-10 rounded-container text-surface-900-50 w-8 h-8 inline-flex justify-center items-center group"
					on:click={handleCopy}
					aria-label="copy code"
				>
					{#if copyState}
						<span
							class="i-material-symbols-content-copy-rounded text-2xl transition-all duration-200 group-hover:(scale-120)"
						/>
					{:else}
						<span
							class="i-material-symbols-content-copy-outline-rounded text-2xl transition-all duration-200 group-hover:(scale-120)"
						/>
					{/if}
				</button>
				<div
					id={code_id}
					class="code-block-code hide-scrollbar [&>pre]:(max-h-70 h-fit px-4 py-2 overflow-x-scroll rounded-b-container)"
				>
					{#if $darkTheme}
						{@html darkCode}
					{:else}
						{@html lightCode}
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	:global(.hide-scrollbar > pre)::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	:global(.hide-scrollbar > pre) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
