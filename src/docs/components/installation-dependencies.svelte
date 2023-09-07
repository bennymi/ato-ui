<script lang="ts">
	import { createTabs } from '@melt-ui/svelte';
	import { pre as CodeBlock } from '$components';

	const {
		elements: { root, list, content, trigger }
	} = createTabs({
		defaultValue: 'npm'
	});

    const value = 'unocss @unocss/transformer-variant-group @unocss/transformer-directives @unocss/preset-icons @unocss/reset';

	const tabs = [
		{
			name: 'npm',
			icon: 'i-logos-npm-icon',
			value: `npm install --save-dev ${value}`
		},
		{
			name: 'pnpm',
			icon: 'i-vscode-icons-file-type-light-pnpm',
			value: `pnpm add -D ${value}`
		}
	]
</script>

<div
	{...$root}
	use:root
	class="flex flex-col"
>
	<div
		{...$list}
		use:list
		class="flex gap-2"
		aria-label="Manage your account"
	>
		{#each tabs as { name, icon }}
			<button {...$trigger(name)} use:trigger class="flex gap-2 justify-center items-center font-semibold py-2 px-3 rounded-container surface-400 border-surface-400 border-1">
				<span class="text-lg {icon}" />
				<span>{name}</span>
			</button>
		{/each}
	</div>
	{#each tabs as { name, value }}
		<div {...$content(name)} use:content>
			<CodeBlock>
				<code data-language="bash" data-theme="default"><span data-line=""><span style="color: #c8d3f5">{value}</span></span></code>
			</CodeBlock>
		</div>
	{/each}
</div>

<style>
	button[data-state='active'] {
      --at-apply: "shadow-[rgba(var(--color-primary-300))_0px_0px_2px_2px]";
    }
</style>