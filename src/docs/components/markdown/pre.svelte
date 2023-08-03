<script lang="ts">
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';

	let className: string | undefined | null = undefined;
	export { className as class };

	// export let rawHTMLString: string = '';
	export let title = '';

	let codeElement: HTMLElement;
	// let copyString = '';
	let copyState = false;

	const focusStyles =
		'focus:(text-primary-300 shadow-[rgba(var(--color-primary-300))_0px_0px_2px_2px])';
	let activeStylesContainer = `shadow-[rgba(var(--color-surface-900))_0px_0px_2px_2px] hover:(text-primary-300) ${focusStyles}`;
	let activeStylesBtn = `hover:(text-primary-300 shadow-[rgba(var(--color-primary-300))_0px_0px_2px_2px]) ${focusStyles}`;

	const handleCopy = () => {
		// Add code to clipboard
		// navigator.clipboard.writeText(copyString ?? '');
		if (codeElement) {
			navigator.clipboard.writeText(codeElement.innerText ?? '');
		}

		// Give feedback
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);
	};

	// $: if (codeElement) {
	// 	codeElement.
	// }

	// $: if (rawHTMLString && browser) {
	// 	const code = new DOMParser().parseFromString(rawHTMLString, 'text/xml');

	// 	if (code.documentElement) {
	// 		copyString = code.documentElement.textContent ?? '';
	// 	}
	// }
</script>

<div class="relative bg-surface-800 rounded-container">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -- This is needed to be acessible -- flex is for removing the whitespaces -->
	<pre
		bind:this={codeElement}
		class="flex mb-4 mt-6 h-fit max-h-[650px] overflow-x-auto rounded-container border border-surface-500/50 py-4 px-0.5 bg-gray-800/40 {className} {activeStylesContainer}"
		tabindex="0"
		{...$$restProps}>
<slot />
	</pre>
	{#if title}
		<span class="select-none transition-all font-mono absolute right-2 -top-3.5 z-10 bg-surface-950/80 px-1 text-on-surface-950 ring-1 ring-primary-300 rounded-container">{title}</span>
	{/if}
	<button
		class="absolute right-4 top-4 z-10 text-2xl w-8 h-8 text-surface-50 transition-all bg-surface-950/80 aspect-square rounded-btn {activeStylesBtn}"
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
	pre > :global(code > span > span::selection),
	pre > :global(code > span::selection) {
		--at-apply: 'text-inherit bg-surface-800/90';
	}
</style>
