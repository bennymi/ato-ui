<script lang="ts">
	import { setContext } from 'svelte';
	import { default as Tree } from './toc-tree.svelte';
	import { createTableOfContents } from '@melt-ui/svelte';

	import type {
		ToCHeading,
		ToCActiveType,
		ToCScrollBehaviour,
		ToCHeadingFilterFn,
		ToCScrollFn,
		ToCTreeContext
	} from './types';

	/** Set the header label of the ToC. */
	export let label = 'On This Page';
	/** The selector of the container for which the table of contents (ToC) should be created. */
	export let selector: string;
	/** A list of headings that should be excluded from the ToC. Possible values: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'. */
	export let exclude: ToCHeading[] = ['h1'];
	/** The number of pixels to add to the top of the element when scrolling. Can be used if you have a fixed header which might block the scrolled-to element. Has no effect if you overwrite the default scroll function with your own (see scrollFn prop). */
	export let scrollOffset: number = 0;
	/** Defines whether the scroll behaviour should be 'smooth' or 'instant'. Has no effect if you overwrite the default scroll function with your own (see scrollFn prop). */
	export let scrollBehaviour: ToCScrollBehaviour = 'smooth';
	/** Describes which header should be considered active. 'none' means that no intersection observers are added and no headings are considered active. 'all' means that all headings with visible content are considered active. 'lowest' means that the heading of the lowest visible content is considered active. 'highest' means the opposite. 'lowest-parents' means that parents of the heading with the lowest visible content are also considered active, and the same goes for 'highest-parents'. */
	export let activeType: ToCActiveType = 'highest';
	/** Allows you to pass a filter function to filter the headings that are returned in the 'headingsTree' store, so you can define which headings should or should not show up in the table of contents. The filter function gets an HTMLHeadingElement passed to it. */
	export let headingFilterFn: ToCHeadingFilterFn | null = null;
	/** Allows you to overwrite the default scroll function with your own custom one. The scroll function gets the heading id passed to it. Using this overwrites the scrollOffset and scrollBehaviour props. */
	export let scrollFn: ToCScrollFn | null = null;

	/** Set the styles for the label header. */
	export let labelStyles = 'font-semibold text-surface-900-50';
	/** Set the content link styles. */
	export let contentStyles = 'text-surface-700-800-200-100';
	/** Set the active content link styles. */
	export let activeStyles = 'text-surface-900-50';

	const args = {
		selector,
		exclude,
		activeType,
		scrollOffset,
		scrollBehaviour,
		...(headingFilterFn && { headingFilterFn }),
		...(scrollFn && { scrollFn })
	};

	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents(args);

	setContext<ToCTreeContext>('toc-styles', {
		contentStyles,
		activeStyles
	});

	// let nav: HTMLElement;
	// let liElements;

	// $: {
	// 	if (nav) {
	// 		console.log('nav:', nav);
	// 		const ulElement = nav.querySelectorAll('ul');
	// 		liElements = ulElement[0].querySelectorAll('li');
	// 		console.log(liElements);
	// 		console.log('document:', document.querySelectorAll('li'));
	// 	}
	// }
</script>

<div class="ato-toc">
	<p class={labelStyles}>{label}</p>
	<nav>
		{#key $headingsTree}
			<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
		{/key}
	</nav>
</div>
