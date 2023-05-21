<script lang="ts">
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
</article>
