<script lang="ts">
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<code class="px-2 bg-primary-500/20 border-1 border-primary-500 rounded-container {className}" {...$$restProps}>
	<slot />
</code>