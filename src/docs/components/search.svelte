<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { descriptions } from '$docs/search';
	import { keywords as filter_values } from '$docs/search/types';
	import { generate_css, get_uno_generator_configs } from '$docs/search/utils';
	import type { UnoGenerator } from 'unocss';

	// import CodeBlock from '$components/CodeBlock.svelte';

	let search = '';
	let uno: UnoGenerator;
	let example = '';
	let example_css = '';
	let dark_html = '';
	let light_html = '';
	let filters: string[] = [];

	onMount(async () => {
		uno = await get_uno_generator_configs();
	});

	async function get_highlighted_html() {
		const response = await fetch('/api/highlight', {
			method: 'POST',
			body: JSON.stringify({ example }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.status === 200) {
			const html = await response.json();

			dark_html = html.dark_html;
			light_html = html.light_html;
		}
	}

	const updated_descriptions = descriptions
		.map((v) => ({
			...v,
			concatenated: `${v.rule} ${v.description} ${v.examples}`.toLowerCase()
		}))
		.sort((a, b) => (a.rule > b.rule ? 1 : b.rule > a.rule ? -1 : 0));

	$: filtered_list =
		filters.length === 0
			? updated_descriptions
			: updated_descriptions.filter((v) =>
					filters.every((f) => (<string[]>v.keywords).includes(f))
			  );

	$: searched_list = filtered_list.filter((v) => v.concatenated.includes(search.toLowerCase()));

	$: if (uno) {
		generate_css(uno, example).then((response) => {
			example_css = response.trim();
		});
	}

	$: if (example_css) {
		get_highlighted_html();
	}
</script>

<!-- Search input -->
<input
	type="text"
	bind:value={search}
	placeholder="Search classes..."
	class="rounded-container surface-50-900 outline-primary-500 w-full"
/>

<!-- Filters -->
<div class="grid w-full flex flex-wrap gap-2 mt-4">
	{#each filter_values as key, i}
		<div class="min-w-40 flex-1">
			<input
				type="checkbox"
				id="ato-class-filter-{i}"
				bind:group={filters}
				name="filters"
				value={key}
				class="hidden peer"
			/>
			<label
				for="ato-class-filter-{i}"
				class="inline-flex items-center justify-between w-full px-2 py-1 text-surface-900-700-50-200 bg-surface-50-900 border-2 border-surface-200-400 rounded-btn cursor-pointer peer-checked:(border-primary-500)"
			>
				<div class="w-full text-center text-lg font-semibold select-none">{key}</div>
			</label>
		</div>
	{/each}
</div>

<hr class="my-8 border-1 rounded-container border-surface-400-200 mx-auto w-1/3" />

<!-- Classes -->
{#if search || filters.length > 0}
	<div class="font-bold text-lg text-surface-900-50 mb-2">
		Results: {searched_list.length}
	</div>
	<div class="text-surface-900-50 flex flex-col gap-4">
		{#each searched_list as { rule, description, keywords, variablesUsed, examples }}
			<div
				class="rounded-container p-4 border-2 bg-surface-50-600 backdrop-blur-sm transition-all duration-200 border-surface-100-900 hover:(border-primary-500 bg-mesh-primary-x50-y105-primary-x115-y105-primary-x-15-y105)"
				transition:slide={{ duration: 200 }}
			>
				<button
					class="px-2 bg-primary-500/20 border-1 border-primary-500 rounded-container inline-block cursor-pointer select-none"
					on:click|self={() => (example = example === examples[0] ? '' : examples[0])}
				>
					{rule}
				</button>
				<hr class="mx-1 border-1 rounded-container border-surface-400-200 my-2" />
				<div>{description}</div>
				<div class="inline-flex justify-center items-center gap-2">
					<div class="font-bold my-1">Tags:</div>
					<div class="flex gap-1">
						{#each keywords as tag}
							<div
								class="flex justify-center items-center font-medium py-1 px-2 rounded-btn tertiary-500"
							>
								<div class="text-xs font-normal leading-none flex-initial">{tag}</div>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<div class="font-bold my-1">Examples (click to see CSS):</div>
					<div class="flex gap-2">
						{#each examples as ex}
							<button
								class="btn-glass-secondary btn-sm"
								on:click={() => (example = example === ex ? '' : ex)}
							>
								{ex}
							</button>
						{/each}
					</div>
				</div>
				{#if example_css && dark_html && light_html && examples.includes(example)}
					<div transition:slide={{ duration: 200 }}>
						<!-- <CodeBlock
							darkCode={dark_html}
							lightCode={light_html}
							hideHeader={true}
							title={`CSS for: ${example}`}
							lang="css"
							rawCode={example_css}
							showCode={true}
							height="[&>pre]:(h-fit max-h-50)"
						/> -->
					</div>
				{/if}
			</div>
		{/each}
	</div>
{:else}
	<div class="font-bold text-lg text-surface-900-50 mb-2">
		No results shown. Type something or select a filter.
	</div>
{/if}
