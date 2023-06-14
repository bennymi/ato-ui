<script lang="ts">
	import { slide } from 'svelte/transition';
	import { descriptions } from '../../search';

	let search = '';

	const updated_descriptions = descriptions.map((v) => ({
		...v,
		concatenated: `${v.rule} ${v.description} ${v.examples}`
	}));

	$: filtered_list = updated_descriptions.filter((v) => v.concatenated.includes(search));
</script>

<input type="text" bind:value={search} class="rounded-container mb-8" />

<div class="text-surface-900-50 flex flex-col gap-2">
	{#each filtered_list as { rule, description, keywords, variablesUsed, examples }}
		<div
			class="rounded-container p-2 border-1 border-primary-300 hover:border-primary-500 cursor-pointer"
			transition:slide={{ duration: 200 }}
		>
			<div class="font-mono secondary-500 inline-block px-1 rounded-container">{rule}</div>
			<div>{description}</div>
		</div>
	{/each}
</div>
