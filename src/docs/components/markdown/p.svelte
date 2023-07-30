<script lang="ts">
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p class="mb-4 leading-7 text-justify {className}" {...$$restProps}>
	<slot />
</p>