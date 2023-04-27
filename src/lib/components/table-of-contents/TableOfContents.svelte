<!-- 
	From a Skeleton UI branch: https://github.com/bennymi/skeleton/blob/chore/toc-active-styles/src/lib/components/TableOfContents/TableOfContents.svelte
 -->
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	// import { browser } from '$app/environment';
	import { BROWSER as browser } from 'esm-env';

	// TODO: Import BROWSER

	import type { ToC } from './types';
	import { create_toc, scroll_to_element } from './toc';

	// Props (settings)
	/** Query selector for the element to scan for headings. */
	export let target = '';
	/** Query selector for the allowed headings. From H2-H6. */
	// export let allowedHeadings = 'h2, h3, h4';
	/** Set the label text. */
	export let label = 'On this page';

	// Props (styles)
	/** Set the component width style. */
	export let width = 'w-[200px]';
	/** Set the vertical spacing styles. */
	export let spacing = 'space-y-4';
	/** Set the row text color styles. */
	export let text = 'text-surface-600-300';
	/** Set the row hover styles. */
	export let hover = 'hover:bg-primary-500';
	/** Set the row border radius styles. */
	export let rounded = 'rounded-token-container';
	/** Set the active text styles. */
	export let activeText = 'text-primary-500 font-bold';
	/** Highlight all headings with content visible in the viewport instead of just the top active heading. */
	// export let highlightAllActive = true;
	/** Highlight parent headings along with the current active heading(s). */
	// export let highlightParentHeadings = false;

	// Props Regions
	/** Provide arbitrary styles for the label element. */
	export let regionLabel = 'font-bold text-surface-900-50';
	/** Provide arbitrary styles for the list element. */
	export let regionList = 'list-none';

	// Classes
	const cLabel = 'p-4 pt-0';
	const cListItem = 'px-4 py-2 cursor-pointer';

	// Sets the indentation amount per heading
	function setHeadingClasses(headingElem: HTMLElement): string {
		if (headingElem.tagName === 'H3') return 'ml-3';
		if (headingElem.tagName === 'H4') return 'ml-6';
		if (headingElem.tagName === 'H5') return 'ml-9';
		if (headingElem.tagName === 'H6') return 'ml-12';
		return '';
	}

	// Scrolls to the selected heading
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
	// function scrollToHeading(headingElem: HTMLElement): void {
	// 	const elemTarget: Element | null = document.querySelector(`#${headingElem.id}`);
	// 	elemTarget?.scrollIntoView({ behavior: 'smooth' });
	// }

	let toc: ToC;

	onMount(() => {
		if (browser) {
			toc = create_toc(target, [], 'highestParents');
		}
	});

	onDestroy(() => {
		toc?.destroy();
	});

	$: if (toc) {
		// console.table('toc-headings', $toc.headings);
		console.table($toc.headings);
	}

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel} ${regionLabel}`;
	$: classesList = `${regionList}`;
	$: classesListItem = `${cListItem} ${hover} ${rounded}`;
</script>

<!-- @component Create a table of contents for the target element, so you can quickly navigate to the page headings. -->

{#if toc}
	<div class="toc {classesBase}">
		<nav class="toc-list {classesList}">
			<div class="toc-label text-left {classesLabel}">{label}</div>
			<ul class="list-none text-left">
				{#each $toc.headings as { heading, active }, i}
					<!-- prettier-ignore -->
					<li
					class="toc-list-item {classesListItem} {setHeadingClasses(heading)} {active ? activeText : text}"
					on:click={() => { scroll_to_element(heading); }}
					on:click
					on:keypress
				>
					{heading.innerText}
				</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}
