<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import { DocsHeader, Preview } from '$components';

	export let data: PageData;

	$: ({ previewSnippets, previewComponents, content, meta, githubPath } = data);

	type Component = $$Generic<typeof SvelteComponent>;

	$: mainPreview = previewComponents.main as unknown as Component;
	$: docsComponent = content as unknown as Component;
</script>

<DocsHeader isComponent={false} {meta} {githubPath} />

{#if 'main' in previewSnippets && 'main' in previewComponents}
	<Preview previewSnippets={previewSnippets.main}>
		<svelte:component this={mainPreview} />
	</Preview>
{/if}

<svelte:component this={docsComponent} {previewSnippets} {previewComponents} />
