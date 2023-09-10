<script lang="ts">
	import { page } from '$app/stores';
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

<DocsHeader isComponent={true} {meta} {headlessExists} {styledExists} {githubPath} />

{#if 'main' in previewSnippets && 'main' in previewComponents}
	{#key $page.url.pathname}
		<Preview previewSnippets={previewSnippets.main}>
			<svelte:component this={mainPreview} />
		</Preview>
	{/key}
{/if}

<svelte:component this={docsComponent} {previewSnippets} {previewComponents} />

{#if isStyledPage}
	<APITable {componentData} {componentAPI} {typesSnippet} />
{/if}
