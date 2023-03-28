<script lang="ts">
	export let size: string = 'w-16 h-16';
	export let rounded: string = 'rounded-token-base';
</script>

<div class="{size} {rounded} relative inline-flex justify-center items-center">
	<img
		class="{size} {rounded} drag-none hover:border-primary-500 hover:border-2"
		src="/corgi-avatar.jpg"
		alt="Rounded avatar"
	/>
	<span
		class="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-success-500 border-1 border-surface-800"
	/>
</div>
