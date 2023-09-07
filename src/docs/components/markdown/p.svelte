<script lang="ts">
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p
	class="mb-4 text-base leading-7 text-justify text-surface-800-100 selection:(text-on-primary bg-primary-500/70) {className}"
	{...$$restProps}
>
	<slot />
</p>
