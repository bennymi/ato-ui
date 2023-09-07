<script lang="ts">
	import { setContext } from 'svelte';
	import { default as Tree } from './toc-tree.svelte';
	import { createTableOfContents } from '@melt-ui/svelte';

	import type {
		ToCHeading,
		ToCActiveType,
		ToCScrollBehaviour,
		ToCHeadingFilterFn,
		ToCMarkerType,
		ToCScrollFn,
		ToCTreeContext
	} from './types';

	/** The selector of the container for which the table of contents (ToC) should be created. */
	export let selector: string;
	/** Set the header label of the ToC. */
	export let label = 'On This Page';
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
	/** Show a marker beside the active element. */
	export let showMarker = true;
	/** Define beside which heading the marker should appear. 'highest' is the first active heading. 'lowest' is the last active heading. */
	export let markerType: ToCMarkerType = 'highest';

	/** Set the styles for the label header. */
	export let labelStyles = 'font-semibold text-surface-900-50';
	/** Set the content link styles. */
	export let contentStyles = 'text-surface-700-800-200-100';
	/** Set the active content link styles. */
	export let activeStyles = 'text-surface-900-50';
	/** Set the marker styles. */
	export let markerStyles = 'w-0.5 rounded-container bg-tertiary-500';

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

	let nav: HTMLElement;
	let anchorEls: HTMLAnchorElement[] = [];
	let markerTop = -1;
	let markerHeight = 24;

	$: if (nav && $headingsTree.length > 0 && $activeHeadingIdxs.length > 0) {
		anchorEls = <HTMLAnchorElement[]>(
			Array.from(nav.querySelectorAll('a')).filter((a) => a.hasAttribute('data-toc-item'))
		);
	}

	// Update marker position when active elements change.
	$: if (anchorEls.length > 0 && $activeHeadingIdxs.length > 0) {
		const activeAnchors = anchorEls.filter((a) => a.hasAttribute('data-toc-active'));

		const idx = markerType === 'highest' ? 0 : -1;

		const activeMarkerEl = activeAnchors.at(idx);

		if (activeAnchors.length > 0 && activeMarkerEl) {
			const firstRects = activeMarkerEl.getBoundingClientRect();

			markerTop = firstRects.top - nav.getBoundingClientRect().top + firstRects.height;
			markerHeight = activeMarkerEl.offsetHeight;
		}
	}
</script>

<div class="ato-toc">
	<p class={labelStyles}>{label}</p>
	{#key $headingsTree}
		{#if showMarker && $activeHeadingIdxs.length > 0 && markerTop !== -1}
			<div
				class="ato-toc-marker transition-all absolute top-0 -left-2 {markerStyles}"
				style={`top: ${markerTop}px; height: ${markerHeight}px;`}
			/>
		{/if}
		<nav bind:this={nav}>
			<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
		</nav>
	{/key}
</div>
