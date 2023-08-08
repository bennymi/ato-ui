<script lang="ts">
	import { createSwitch, createTabs } from '@melt-ui/svelte';

	import { pre as CodeBlock, PreviewTabs } from '$components';
	import { default as PreviewSwitch } from './preview-switch.svelte';
	import type { PreviewTab } from '$docs/utils/preview';

	export let previewSnippets: PreviewTab[] = [];

	/** Set the active header styles. */
	// let activeStyle = 'primary-500';
	let activeStyle = 'shadow-[rgba(var(--color-primary-300))_0px_0px_2px_2px]';
	/** Set the in-active header styles. */
	let inactiveStyle = 'text-surface-900-50 hover:primary-500/60';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		defaultValue: 'app.svelte'
	});

	// const {
	// 	elements: { root: switchRoot, input: switchInput },
	// 	states: { checked: switchChecked },
	// } = createSwitch();

	const { elements: switchElements, states: switchStates } = createSwitch();
	const { root: switchRoot, input: switchInput } = switchElements;
	const { checked: switchChecked } = switchStates;

	type FileTypes = 'css' | 'svelte' | 'ts';

	const icons: Record<FileTypes, string> = {
		svelte: 'i-vscode-icons-file-type-svelte',
		css: 'i-vscode-icons-file-type-css',
		ts: 'i-vscode-icons-file-type-typescript-official'
	};

	function getIcon(filename: string) {
		const fileType = filename.split('.').at(-1);

		return fileType ? icons[<FileTypes>fileType] : '';
	}

	$: if (switchChecked) console.log('checked:', $switchChecked);
</script>

<!-- 
	TODOs:
		[X] multiple previews for one docs page -> have a main folder and any other examples in different ones
		[X] be able to load not just .svelte files into the preview tabs but also .ts files
		[] find a nice way to show and hide code
 -->

<PreviewSwitch />

<form>
	<div class="flex items-center">
		<label class="pr-4 leading-none text-white" for="airplane-mode"> Airplane mode </label>
		<button
			{...$switchRoot}
			use:switchRoot
			class="relative h-6 w-11 cursor-default rounded-full bg-yellow-800 transition-colors data-[state=checked]:bg-yellow-950"
			id="airplane-mode"
		>
			<span
				class="block h-5 w-5 translate-x-0.5 rounded-full bg-white
						transition-transform will-change-transform translate-x-[22px]
						{$switchChecked ? 'translate-x-[22px]' : ''}"
			/>
			<input {...$switchInput} use:switchInput />
		</button>
	</div>
</form>

<div class="preview">
	<div
		class="mb-4 h-96 flex justify-center items-center rounded-container bg-gradient-br-primary-tertiary"
	>
		<slot />
	</div>

	<!-- <PreviewTabs {previewSnippets} /> -->
	<div {...$root} use:root class="w-full">
		<div>
			<!-- Change color -->

			<!-- Toggle show code -->

			<!-- File tabs -->
			<div {...$list} use:list class="w-full flex items-center" aria-label="preview snippet files">
				{#each previewSnippets as { title }}
					{@const activated = $value === title}
					<button
						{...$trigger({ value: title })}
						use:trigger
						class="px-2 py-1 inline-flex gap-1 justify-center items-center font-semibold rounded-t-container focus:(ring-2 ring-surface-300 ring-offset-2)
							{activated ? activeStyle : inactiveStyle}"
					>
						<span class="text-lg {getIcon(title)}" />
						<span>{title}</span>
					</button>
				{/each}
			</div>
		</div>

		<div>
			{#each previewSnippets as { title, file }}
				<div {...$content(title)} use:content>
					<CodeBlock containerMargin="mb-4" containerRounded="rounded-b-container">
						{@html file}
					</CodeBlock>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* .transition-transform {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.will-change-transform {
		will-change: transform;
	} */
</style>
