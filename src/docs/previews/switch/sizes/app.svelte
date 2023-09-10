<script lang="ts">
	import { Switch, type SwitchSize } from 'ato-ui';

	const sizes: SwitchSize[] = ['sm', 'md', 'lg'];
</script>

<div class="bg-surface-50-800 p-4 rounded-container flex justify-left items-center gap-3">
	{#each sizes as size}
		<Switch label={size} checked={true} {size} />
	{/each}
</div>
