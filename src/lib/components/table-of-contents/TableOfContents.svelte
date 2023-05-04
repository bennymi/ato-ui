<!-- 
	From a Skeleton UI branch: https://github.com/bennymi/skeleton/blob/chore/toc-active-styles/src/lib/components/TableOfContents/TableOfContents.svelte
 -->
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { BROWSER as browser } from 'esm-env';

	import type { Heading, IndentStyles, ToC, TOCType } from './types';
	import { default_indentation_styles, create_toc, scroll_to_element } from './toc';

	/** Query selector for the container with the headings. Should be an id ('#id') or class ('.class'). */
	export let target = '';
	/** Define which headings should be excluded. Should be a list of h tags: ['h5', 'h6']. */
	export let excludeHeadings: Heading[] = [];
	/** Set the title of the table of contents. */
	export let label = 'On this page';
	/** Define which headings should be considered active.
	 * 'lowest' sets the heading with the lowest visible element as active.
	 * 'highest' does the opposite.
	 * 'all-active' sets all headings as active that have visible elements.
	 * 'lowest-parents' sets the heading as active with the lowest visible element, as well as it's parents.
	 * 'highest-parents' dsets the heading as active with the highest visible element, as well as it's parents.
	 * */
	export let tocType: TOCType = 'lowest';
	/** Set the styles the indentation styles that should be used for each heading type. Additionally you can add an icon at the front of a heading ('i-material-symbols-chevron-right-rounded'). */
	export let headingIndentationStyles: IndentStyles = default_indentation_styles;
	/** Set whether the marker should be shown or not. */
	export let showMarker = true;

	// Style props
	/** Set the component container styles (width, border, etc). */
	export let container = 'w-52 border-l-2 border-surface-300/40';
	/** Set the row text color styles. */
	// export let text = 'text-surface-900-50';
	export let text = 'text-surface-900-op60-50-op60';
	/** Set the hover styles. ('hover:(bg-primary-500 text-surface-50)') */
	export let hover = 'hover:(bg-primary-500 text-on-primary!)';
	/** Set the header item radius styles. */
	export let rounded = 'rounded-token-container';
	/** Set the active header styles. */
	export let activeHeader = 'text-surface-900-50';

	/** Provide styles for the label. */
	export let labelClasses = 'font-bold text-surface-900-50';
	/** Provide styles for the list elements. */
	export let listClasses = 'list-none text-left';

	let toc: ToC;
	let marker_top = 24;
	let marker_height = 28;
	let list_elements: HTMLElement[] = [];

	// Define the select index used for the dynamic marker position.
	const select_idx =
		tocType === 'highest' || tocType === 'highest-parents' || tocType === 'all-active' ? 0 : -1;

	onMount(() => {
		if (browser) {
			toc = create_toc(target, excludeHeadings, tocType, headingIndentationStyles);
		}
	});

	onDestroy(() => {
		toc?.destroy();
	});

	// Update marker position when active elements change.
	$: if (toc && list_elements.length > 0) {
		const lowest_active = $toc.headings.filter((h) => h.active).at(select_idx)?.heading;
		const idx = $toc.headings.findIndex((h) => h.heading === lowest_active);

		if (idx >= 0) {
			const additional_height = list_elements
				.slice(0, idx)
				.map((li) => li.getClientRects()[0])
				.reduce((a, b) => a + b.height, 0);

			// marker_top = 24 + 28 * idx + 2 * (idx + 1) + 2 * idx;
			marker_top = 24 + additional_height;
			marker_height = list_elements[idx].getClientRects()[0].height;
		}
	}
</script>

<!-- @component Create a table of contents component for the target container element, so you can quickly navigate to its page headings. -->

{#if toc && $toc.headings.length > 0}
	<div class="ato-toc {container}">
		<div class="ato-toc-content relative">
			{#if showMarker}
				<div
					class="ato-toc-marker absolute top-0 -left-[2px] w-[2px] bg-secondary-500"
					style={`top: ${marker_top}px; height: ${marker_height}px;`}
				/>
			{/if}
			<div class="ato-toc-label text-left px-4 pt-0 {labelClasses}">{label}</div>
			<nav class="ato-toc-list">
				<ul class={listClasses}>
					{#each $toc.headings as { heading, active, styles, icon }, i}
						<li
							class="ato-toc-heading px-4 py-1 cursor-pointer flex items-center gap-1 {styles} {active
								? activeHeader
								: text} {hover} {rounded}"
							on:click={() => scroll_to_element(heading)}
							on:click
							on:keypress
							bind:this={list_elements[i]}
						>
							{#if icon}
								<span class={icon} />
							{/if}
							{heading.innerText}
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
{/if}

<style>
	.ato-toc-marker {
		transition: top 0.5s cubic-bezier(0, 1, 0.5, 1);
	}
</style>
