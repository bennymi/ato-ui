<script lang="ts">
	export let column = false;
	export let height = '';
	export let padding = 'p-4';
</script>

<!-- <div
	class="w-full flex {column
		? 'flex-col'
		: ''} flex-wrap gap-x-16 gap-y-4 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50"
>
	<slot />
</div> -->
<div
	class="w-full flex {height} {padding} {column
		? 'flex-col'
		: ''} flex-wrap gap-x-16 gap-y-4 justify-center items-center rounded-container border-1 border-surface-500/30-200/30 my-4 primary-900/70 dark:surface-900/75 bg-mesh-secondary-x0-y0-tertiary-x95-y95"
>
	<slot />
</div>
