<script lang="ts">
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<ul class="my-4 list-none space-y-1 {className}" {...$$restProps}>
	<slot />
</ul>
