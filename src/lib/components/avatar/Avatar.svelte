<script lang="ts">
	export let size: string = 'w-16 h-16';
	export let rounded: string = 'rounded-token-base';
</script>

<div class="{size} relative inline-flex justify-center items-center">
	<div
		class="{size} {rounded} drag-none overflow-hidden transition-all border-4 border-surface-800 hover:(border-primary-500)"
	>
		<img
			class="{size} {rounded} drag-none transition-all hover:(scale-110)"
			src="/corgi-avatar.jpg"
			alt="Rounded avatar"
		/>
	</div>
	<span
		class="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-success-500 border-2 border-surface-800"
	/>
</div>
