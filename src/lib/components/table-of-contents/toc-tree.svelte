<script lang="ts">
	import { getContext } from 'svelte';
	import type { TableOfContentsItem, CreateTableOfContentsReturn } from '@melt-ui/svelte';

	import type { ToCTreeContext } from './types';

	export let tree: TableOfContentsItem[] = [];
	export let activeHeadingIdxs: number[];
	export let item: CreateTableOfContentsReturn['item'];
	export let level = 1;

	const { contentStyles, activeStyles } = getContext<ToCTreeContext>('toc-styles');
</script>

<ul class="m-0 list-none {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			{@const active = activeHeadingIdxs.includes(heading.index)}
			<li class="mt-0 pt-2">
				<a
					href="#{heading.id}"
					{...$item(heading.id)}
					use:item
					class="inline-block no-underline transition-colors
						{active ? activeStyles : contentStyles}"
				>
					{heading.title}
				</a>
				{#if heading.children && heading.children.length}
					<svelte:self tree={heading.children} level={level + 1} {activeHeadingIdxs} {item} />
				{/if}
			</li>
		{/each}
	{/if}
</ul>
