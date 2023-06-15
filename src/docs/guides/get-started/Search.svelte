<script lang="ts">
	// import { highlightCode } from '../../mdsvex/highlight';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { descriptions } from '../../search';
	import { generate_css, get_uno_generator_configs } from '../../search/utils';
	import type { UnoGenerator } from 'unocss';

	import CodeBlock from '../../mdsvex/CodeBlock.svelte';

	let search = '';
	let uno: UnoGenerator;
	let example = '';
	let example_css = '';
	let dark_html = '';
	let light_html = '';

	onMount(async () => {
		uno = await get_uno_generator_configs();
		// highlightCode = (await import('../../mdsvex/highlight')).highlightCode;

		// console.log(highlightCode);
	});

	async function get_highlighted_html() {
		const response = await fetch('/api/highlight', {
			method: 'POST',
			body: JSON.stringify({ code: example_css, lang: 'css' }),
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

	$: filtered_list = updated_descriptions.filter((v) =>
		v.concatenated.includes(search.toLowerCase())
	);

	$: if (uno) {
		generate_css(uno, example).then((response) => {
			example_css = response.trim();
		});
	}

	$: if (example_css) {
		get_highlighted_html();
	}
</script>

{#if example_css && dark_html && light_html}
	<div class="mb-8">
		<CodeBlock
			darkCode={dark_html}
			lightCode={light_html}
			lang="css"
			rawCode={example_css}
			showCode={true}
			height="[&>pre]:(h-fit max-h-50)"
		/>
	</div>
{/if}

<input
	type="text"
	bind:value={search}
	placeholder="Search classes..."
	class="rounded-container surface-50-900 outline-primary-500 w-full"
/>

<hr class="my-8 border-1 rounded-container border-surface-400-200 mx-auto w-1/3" />

<div class="text-surface-900-50 flex flex-col gap-2">
	{#each filtered_list as { rule, description, keywords, variablesUsed, examples }}
		<div
			class="rounded-container p-2 border-1 transition-all duration-200 border-surface-400-200 hover:(border-primary-500 bg-gradient-primary-primary/70-primary/40 text-on-primary) cursor-pointer"
			transition:slide={{ duration: 200 }}
		>
			<div
				class="px-2 bg-primary-500/20 border-1 border-primary-500 rounded-container inline-block"
			>
				<!-- <div
				class="font-mono surface-400 ring-1 ring-primary-500 inline-block px-1 rounded-container"
			> -->
				{rule}
			</div>
			<hr class="mx-1 border-1 rounded-container border-surface-400-200 my-2" />
			<div>{description}</div>
			<div class="font-bold my-1">Examples</div>
			<div class="flex gap-2">
				{#each examples as ex}
					<button
						class="px-2 bg-primary-500/20 border-1 border-primary-500 rounded-container inline-flex"
						on:click={() => {
							if (example === ex) {
								example = '';
							} else {
								example = ex;
							}
						}}
					>
						{ex}
					</button>
				{/each}
			</div>
		</div>
	{/each}
</div>
