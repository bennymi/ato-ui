<script lang="ts">
	export let column = false;
</script>

<div
	class="w-full flex {column
		? 'flex-col'
		: ''} flex-wrap gap-x-16 gap-y-4 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50"
>
	<slot />
</div>
