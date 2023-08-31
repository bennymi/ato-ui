<!-- <script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | Ato-UI</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article> -->

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import { DocsHeader, Preview } from '$components';

	export let data: PageData;

	$: ({
		previewSnippets,
		previewComponents,
		content,
		meta,
		githubPath,
		componentData,
	} = data);

	type Component = $$Generic<typeof SvelteComponent>;

	$: mainPreview = previewComponents.main as unknown as Component;
	$: docsComponent = content as unknown as Component;
</script>

<!-- <div class="w-1/2 overflow-scroll pl-0.5 text-surface-900-50">
</div> -->

<DocsHeader
	isComponent={false}
	{meta}
	{githubPath}
/>

<!-- <h2 class="opacity-0 text-[1px] my-0 py-0">Preview</h2> -->

{#if 'main' in previewSnippets && 'main' in previewComponents}
	<Preview previewSnippets={previewSnippets.main}>
		<svelte:component this={mainPreview} />
	</Preview>
{/if}

<svelte:component this={docsComponent} {previewSnippets} {previewComponents} />
