<script lang="ts">
	import type { PageData } from './$types';
	import { Preview } from '$components';

	export let data: PageData;

	const { previewSnippets } = data;
</script>

<div class="w-1/2 overflow-scroll pl-0.5 text-surface-900-50">

	{#if 'main' in previewSnippets}
		<Preview previewSnippets={previewSnippets.main} />

		<h2 class="text-2xl font-bold">Files</h2>
		{#each previewSnippets.main as { title, file }}
			<div class="h-1 bg-surface-400 w-full" />
			<h3 class="text-xl font-semibold">{title}</h3>
			{@html file}
		{/each}
	{/if}
</div>
