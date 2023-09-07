<script lang="ts">
	import { getContext } from 'svelte';
	import type { TableOfContentsItem, TableOfContentsElements } from '@melt-ui/svelte';

	import type { ToCTreeContext } from './types';

	export let tree: TableOfContentsItem[] = [];
	export let activeHeadingIdxs: number[];
	export let item: TableOfContentsElements['item'];
	export let level = 1;

	const { contentStyles, activeStyles } = getContext<ToCTreeContext>('toc-styles');
</script>

<ul class="m-0 list-none {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			{@const active = activeHeadingIdxs.includes(heading.index)}
			<li class="py-1 my-auto">
				<a
					href="#{heading.id}"
					{...$item(heading.id)}
					use:item
					data-toc-item
					data-toc-active={active || null}
					class="inline-block no-underline transition-colors
						{active ? activeStyles : contentStyles}"
				>
					<!-- {heading.title} -->
					{@html heading.node.innerHTML}
				</a>
				{#if heading.children && heading.children.length}
					<svelte:self tree={heading.children} level={level + 1} {activeHeadingIdxs} {item} />
				{/if}
			</li>
		{/each}
	{/if}
</ul>
