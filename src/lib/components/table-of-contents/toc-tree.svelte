<script lang="ts">
	import type {
		TableOfContentsItem,
		CreateTableOfContentsReturn
	} from '@melt-ui/svelte';

	export let tree: TableOfContentsItem[] = [];
	export let activeHeadingIdxs: number[];
	export let item: CreateTableOfContentsReturn['item'];
	export let level = 1;
</script>

<ul class="m-0 list-none {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li class="mt-0 pt-2">
				<a
					href="#{heading.id}"
					{...$item(heading.id)} use:item
					class="inline-block text-neutral-500 no-underline transition-colors
					 hover:!text-primary-600 data-[active]:text-primary-700"
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
