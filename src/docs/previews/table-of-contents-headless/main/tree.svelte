<script lang="ts">
	import type {
		TableOfContentsItem,
		TableOfContentsElements
	} from '@melt-ui/svelte';

	export let tree: TableOfContentsItem[] = [];
	export let activeHeadingIdxs: number[];
	export let item: TableOfContentsElements['item'];
	export let level = 1;
</script>

<ul class="m-0 list-none {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			{@const active = activeHeadingIdxs.includes(heading.index)}
			<li class="mt-0 pt-2">
				<a
					href="#{heading.id}"
					{...$item(heading.id)} use:item
					class="inline-block no-underline transition-colors 
						{active ? 'text-surface-900-50' : 'text-surface-700-800-200-100'}"
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
