<script lang="ts">
	import { Switch } from '$lib/components';

	let disabled = true;
	let checked = true;

	$: console.log('checked:', checked);
</script>

<div class="flex flex-col gap-4 justify-center items-center w-full">
	<button class="btn-glass-primary" on:click={() => (disabled = !disabled)}>Disabled switch</button>
	<Switch label="Check" size="sm" bind:checked />
	<Switch label="Check" size="sm" />
	<Switch label="Check" activeBackground="bg-secondary-500" />
	<Switch label="disabled" {disabled} activeBackground="bg-secondary-500" />
	<Switch label="Check" size="lg" activeBackground="bg-tertiary-500" />
	<Switch
		label="Dark Mode"
		size="lg"
		activeBackground="bg-primary-500"
		labelPosition="right"
		activeIcon="text-surface-900 text-lg i-material-symbols-clear-day-rounded"
		inactiveIcon="text-surface-900 text-lg i-material-symbols-dark-mode-rounded"
	/>
	<Switch
		label="Show code"
		hideLabel={true}
		activeBackground="bg-primary-500"
		labelPosition="right"
		activeIcon="text-surface-900 text-lg i-material-symbols-code-rounded"
		inactiveIcon="text-surface-900 text-lg i-material-symbols-code-off-rounded"
	/>
</div>
