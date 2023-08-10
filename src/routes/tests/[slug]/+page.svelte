<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import { DocsHeader, Preview } from '$components';

	export let data: PageData;

	const { previewSnippets, previewComponents, content, meta, headlessExists, styledExists, githubPath, componentsData } = data;

	type Component = $$Generic<typeof SvelteComponent>;

	$: mainPreview = previewComponents.main as unknown as Component;
	$: docsComponent = content as unknown as Component;
</script>

<!-- <div class="w-1/2 overflow-scroll pl-0.5 text-surface-900-50">
</div> -->

<DocsHeader isComponent={true} {meta} {headlessExists} {styledExists} {githubPath} dependencies={componentsData.dependencies} />

<h1 class="hidden">Preview</h1>

{#if 'main' in previewSnippets && 'main' in previewComponents}
	<Preview previewSnippets={previewSnippets.main}>
		<svelte:component this={mainPreview} />
	</Preview>
{/if}

<svelte:component this={docsComponent} />
