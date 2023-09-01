<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import { DocsHeader, Preview, APITable } from '$components';

	export let data: PageData;

	$: ({
		previewSnippets,
		previewComponents,
		typesSnippet,
		content,
		isStyledPage,
		meta,
		headlessExists,
		styledExists,
		githubPath,
		componentData,
		componentAPI
	} = data);

	type Component = $$Generic<typeof SvelteComponent>;

	$: mainPreview = previewComponents.main as unknown as Component;
	$: docsComponent = content as unknown as Component;
</script>

<!-- <div class="w-1/2 overflow-scroll pl-0.5 text-surface-900-50">
</div> -->

<DocsHeader
	isComponent={true}
	{meta}
	{headlessExists}
	{styledExists}
	{githubPath}
	dependencies={componentData.dependencies}
/>

<!-- <h2 class="opacity-0 text-[1px] my-0 py-0">Preview</h2> -->

{#if 'main' in previewSnippets && 'main' in previewComponents}
	<Preview previewSnippets={previewSnippets.main}>
		<svelte:component this={mainPreview} />
	</Preview>
{/if}

<svelte:component this={docsComponent} {previewSnippets} {previewComponents} />

{#if isStyledPage}
	<APITable {componentData} {componentAPI} {typesSnippet} />
{/if}
