<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import { DocsHeader } from '$components';

	export let data: PageData;

	$: ({ content, meta, githubPath } = data);

	// eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
	type Component = $$Generic<typeof SvelteComponent>;

	$: docsComponent = content as unknown as Component;
</script>

<DocsHeader isComponent={false} {meta} {githubPath} />

<svelte:component this={docsComponent} />
