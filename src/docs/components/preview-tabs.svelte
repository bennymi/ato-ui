<script lang="ts">
	import { createTabs } from '@melt-ui/svelte';
	import { pre as CodeBlock } from '$components';
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

	type FileTypes = 'css' | 'svelte' | 'ts';

	const icons: Record<FileTypes, string> = {
		'svelte': 'i-vscode-icons-file-type-svelte',
		'css': 'i-vscode-icons-file-type-css',
		'ts': 'i-vscode-icons-file-type-typescript-official'
	}

	function getIcon(filename: string) {
		const fileType = filename.split('.').at(-1);
		return icons[fileType];
	}
</script>

<div {...$root} use:root class="w-full">
	<div
		{...$list}
		use:list
		class="w-full flex items-center"
		aria-label="preview snippet files"
	>
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
