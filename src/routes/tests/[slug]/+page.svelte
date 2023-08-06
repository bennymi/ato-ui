<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { previewsCode, previewsSnippets } = data;

	// $: console.log(themeJson);

	// $: if (previewsSnippets) console.log('data:', previewsSnippets);
</script>

{#if previewsSnippets}
	{#each previewsSnippets as snippets}
		{@html snippets}
	{/each}
{/if}
