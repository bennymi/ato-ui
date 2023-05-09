<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}{data.slug.includes('-headless') ? ' - Headless' : ''} | Ato-UI</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<svelte:component this={data.content} />
