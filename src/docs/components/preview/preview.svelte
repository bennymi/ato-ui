<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createSwitch, createTabs } from '@melt-ui/svelte';

	import { pre as CodeBlock, PreviewPopover } from '$components';
	import { Switch } from '$lib/components';
	import type { PreviewTab } from '$docs/utils/preview';

	export let previewSnippets: PreviewTab[] = [];

	let showCode = false;
	let backgroundClass = 'bg-gradient-br-primary-tertiary';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		defaultValue: 'app.svelte'
	});

	const {
		elements: { root: switchRoot, input: switchInput },
		states: { checked: switchChecked },
	} = createSwitch();

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
</script>

<div class="preview overflow-hide my-8">
	<div
		class="h-[450px] flex justify-center items-center rounded-container {backgroundClass}"
	>
		<slot />
	</div>

	<div {...$root} use:root class="w-full">
		<div>
			<!-- Toggle show code -->
			<div class="mt-2 mb-1 px-1 flex justify-between items-center">
				<Switch 
					label="Show code"
					bind:checked={showCode}
					hideLabel={false}
					activeBackground="bg-primary-500" 
					labelPosition="right" 
					activeIcon="text-surface-900 text-lg i-material-symbols-code-rounded"
					inactiveIcon="text-surface-900 text-lg i-material-symbols-code-off-rounded"    
				/>

				<!-- Change background color -->
				<PreviewPopover bind:backgroundClass />
			</div>

			<!-- File tabs -->
			{#if showCode}
				<div {...$list} use:list class="py-1 px-1 w-full flex gap-0.5 items-center overflow-auto rounded-t-container" aria-label="preview snippet files" transition:slide>
					{#each previewSnippets as { title }, i}
						{@const isLast = i === previewSnippets.length - 1}
						{@const activated = $value === title}
						<button
							{...$trigger({ value: title })}
							use:trigger
							class="px-2 py-1 inline-flex shrink-0 gap-1 justify-center items-center font-semibold rounded-container
								focus:(ring-1 ring-surface-300 ring-offset-1)
								{activated 
									? 'surface-400/90' 
									: 'surface-600 hover:surface-300/60'}"
						>
							<span class="text-lg {getIcon(title)}" />
							<span>{title}</span>
						</button>
					{/each}
				</div>
			{/if}
		</div>

		{#if showCode}
			<div transition:slide class="px-0.5">
				{#each previewSnippets as { title, file }}
					<div {...$content(title)} use:content tabindex="-1">
						<CodeBlock containerMargin="mb-4" >
							{@html file}
						</CodeBlock>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
