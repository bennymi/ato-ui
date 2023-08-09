<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import { Preview } from '$components';

	export let data: PageData;

	const { previewSnippets, previewComponents } = data;

	type Component = $$Generic<typeof SvelteComponent>;

	$: mainPreview = previewComponents.main as unknown as Component;
</script>

<div class="w-1/2 overflow-scroll pl-0.5 text-surface-900-50">
	{#if 'main' in previewSnippets && 'main' in previewComponents}
		<Preview previewSnippets={previewSnippets.main}>
			<svelte:component this={mainPreview} />
		</Preview>
	{/if}

	<div class="h-96 my-96" />
</div>
