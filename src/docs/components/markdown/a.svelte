<!-- 
    Source: https://github.com/melt-ui/melt-ui/blob/develop/src/docs/components/markdown/a.svelte
 -->

<script lang="ts">
	export let href: string;
	export let rel: string | undefined = undefined;

	$: internal = href.startsWith('/') || href.startsWith('#');

	$: rel = !internal ? 'noopener noreferrer' : undefined;
	$: target = !internal ? '_blank' : undefined;
</script>

<a
	class="inline-flex items-center gap-1 underline underline-offset-2 transition-colors hover:text-surface-800/80-100/80 selection:(text-on-primary bg-primary-500/70)"
	{href}
	{target}
	{rel}
>
	<slot />
	{#if !internal}
		<span class="h-4 w-4 i-mdi-launch"></span>
	{/if}
</a>
