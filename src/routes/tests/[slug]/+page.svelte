<script lang="ts">
	import type { PageData } from './$types';
	import { Preview } from '$components';

	export let data: PageData;

	const { previewSnippets } = data;

	const { main, files } = previewSnippets;

	// $: console.log(themeJson);

	$: console.log('preview:', previewSnippets);

	// $: if (previewsSnippets) console.log('data:', previewsSnippets);
</script>

<div class="w-1/2 overflow-scroll pl-0.5 text-surface-900-50">
	{#if previewSnippets}
		<h2 class="text-2xl font-bold">Main</h2>
		{@html main}

		<h2 class="text-2xl font-bold">Files</h2>
		{#each files as { title, file }}
			<div class="h-1 bg-surface-400 w-full" />
			<h3 class="text-xl font-semibold">{title}</h3>
			{@html file}
		{/each}
	{/if}
</div>
