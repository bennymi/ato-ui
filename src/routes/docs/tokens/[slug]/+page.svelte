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
	import { DocsHeader } from '$components';

	export let data: PageData;

	$: ({ content, meta, githubPath } = data);

	type Component = $$Generic<typeof SvelteComponent>;

	$: docsComponent = content as unknown as Component;
</script>

<DocsHeader isComponent={false} {meta} {githubPath} />

<svelte:component this={docsComponent} />
