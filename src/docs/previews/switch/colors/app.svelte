<script lang="ts">
	import { Switch } from 'ato-ui';

	const backgroundColors = [
		'bg-primary-500',
		'bg-secondary-500',
		'bg-tertiary-500',
		'bg-success-500',
		'bg-warning-500',
		'bg-error-500'
	];
</script>

<div class="bg-surface-50-800 p-4 rounded-container grid grid-cols-3 gap-2">
	{#each backgroundColors as color}
		<Switch label="dark / light" hideLabel={true} checked={true} activeBackground={color} />
	{/each}
</div>
