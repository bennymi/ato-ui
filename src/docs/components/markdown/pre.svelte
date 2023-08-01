<script lang="ts">
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -- This is needed to be acessible -->
<pre
	class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-container border border-surface-500/50 bg-surface-950/90-950/60 p-4 {className}"
	tabindex="0"
	{...$$restProps}>
<slot />
</pre>
