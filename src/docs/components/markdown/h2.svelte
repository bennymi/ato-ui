<script lang="ts">
	import { page } from '$app/stores';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let content = '';
	export let headerId = '';

	let showCopyButton = false;
	let hoveringButton = false;

	function copyUrl() {
		const { origin, pathname } = $page.url;
		navigator.clipboard.writeText(`${origin}${pathname}#${headerId}`);
	}

	$: if (content) {
		headerId = content
			.replaceAll(/[^a-zA-Z0-9 ]/g, '')
			.replaceAll(' ', '-')
			.toLowerCase();
	}
</script>

<div class="relative text-surface-900-50">
	<h2
		id={headerId}
		class="mb-3 mt-12 scroll-m-20 border-b border-surface-300/50 pb-1 text-2xl font-semibold tracking-tight {className}"
		on:mouseenter={() => (showCopyButton = true)}
		on:mouseleave={() =>
			setTimeout(() => {
				if (!hoveringButton) {
					showCopyButton = false;
				}
			}, 800)}
		{...$$restProps}
	>
		<a href="#{headerId}">
			<slot />
		</a>
	</h2>

	{#if showCopyButton}
		<button
			on:click={copyUrl}
			on:mouseenter={() => (hoveringButton = true)}
			on:mouseleave={() => {
				showCopyButton = false;
				hoveringButton = false;
			}}
			class="absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2"
		>
			<span class="i-material-symbols-link-rounded text-2xl -rotate-45 transition-all" />
			<span class="sr-only">copy heading url</span>
		</button>
	{/if}
</div>
