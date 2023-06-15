<script lang="ts">
	import { slide } from 'svelte/transition';
	import { descriptions } from '../../search';

	import { createGenerator } from '@unocss/core';

	import { presetUno, presetWind } from 'unocss';

	import presetIcons from '@unocss/preset-icons';
	import { presetForms } from '@julr/unocss-preset-forms';

	// import { colors, presetAtoUI } from './src/lib/preset/index';
	import { presetAtoUI } from '$lib/preset/index';
	import { onMount } from 'svelte';

	export const unocss_config = {
		presets: [
			presetUno(),
			presetIcons({
				extraProperties: {
					display: 'inline-block',
					'vertical-align': 'middle'
				}
			}),
			presetWind(),
			presetForms(),
			presetAtoUI()
		]
	};

	let search = '';

	let regexExample = /g&/;

	const uno = createGenerator(unocss_config);
	let generate: any;
	let prettier: typeof import('prettier/standalone')['format'];
	let prettierParserCSS: typeof import('prettier/parser-postcss');
	let prettierFormat: any;

	onMount(async () => {
		generate = await uno.generate(new Set(['btn-primary']), { preflights: false, minify: true });

		await Promise.all([
			import('prettier/standalone').then((r) => (prettier = r.format)),
			import('prettier/parser-postcss').then((r) => (prettierParserCSS = r.default))
		]);

		prettierFormat = prettier(generate.css, {
			parser: 'css',
			plugins: [prettierParserCSS],
			printWidth: Infinity
		});
	});

	// console.log('uno:', uno);

	$: console.log('generate:', generate);
	$: console.log('prettierFormat:', prettierFormat);

	const updated_descriptions = descriptions
		.map((v) => ({
			...v,
			concatenated: `${v.rule} ${v.description} ${v.examples}`.toLowerCase()
		}))
		.sort((a, b) => (a.rule > b.rule ? 1 : b.rule > a.rule ? -1 : 0));

	$: filtered_list = updated_descriptions.filter((v) =>
		v.concatenated.includes(search.toLowerCase())
	);
</script>

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
		</div>
	{/each}
</div>
