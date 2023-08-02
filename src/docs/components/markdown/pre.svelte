<script lang="ts">
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let rawHTMLString: string = '';

	let copyString = '';
	let copyState = false;
	let activeStyles = 'hover:(text-primary-300 shadow-[rgba(var(--color-primary-300))_0px_0px_2px_2px]) focus:(text-primary-300 shadow-[rgba(var(--color-primary-300))_0px_0px_2px_2px])';

	const handleCopy = () => {
		// Add code to clipboard
		navigator.clipboard.writeText(copyString ?? '');

		// Give feedback
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);
	};

	$: if (rawHTMLString && browser) {
		const code = new DOMParser().parseFromString(rawHTMLString, 'text/xml');

		if (code.documentElement) {
			copyString = code.documentElement.textContent ?? '';
		}
	}
</script>

<div class="relative">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -- This is needed to be acessible -->
	<pre
		class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-container border border-surface-500/50 bg-surface-900/90-900/60 p-4 {className} {activeStyles}"
		tabindex="0"
		{...$$restProps}>
<slot />
	</pre>
	
	<button
		class="absolute right-4 top-4 z-10 text-2xl w-8 h-8 text-surface-50 transition-all bg-surface-950/80 aspect-square rounded-btn {activeStyles}"
		aria-label="copy code"
		on:click={handleCopy}
		data-code-copy
	>
		{#if copyState}
			<div class="flex justify-center items-center p-1">
				<span in:fly={{ y: -4 }} class="i-material-symbols-check-small-rounded" />
			</div>
		{:else}
			<div class="flex justify-center items-center p-1">
				<span in:fly={{ y: 4 }} class="i-material-symbols-content-copy-outline-rounded" />
			</div>
		{/if}
	</button>
</div>

<style>
	/* [data-code-copy] {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	} */
</style>
