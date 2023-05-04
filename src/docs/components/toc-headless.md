---
title: Table of Contents
description: A headless table of contents component.
---

# Table of Contents | Headless

## Example


This is a simple button. 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda doloribus harum, corrupti architecto ipsam impedit facilis debitis quos officiis ad quibusdam magni non neque, illo cum vitae perspiciatis a explicabo.

<br />

<button class="btn-border-surface-800-op90-br-primary-secondary-success">3 Gradient border (op90)</button>


<br />


```html title="button"
<button class="btn-border-surface-800-op90-br-primary-secondary-success">
    open
</button>
```

<br />

```svelte
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
	export let headingIndentationStyles: IndentStyles = {
		h2: { styles: '', icon: '' },
		h3: { styles: 'ml-3', icon: '' },
		h4: { styles: 'ml-6', icon: '' },
		h5: { styles: 'ml-9', icon: '' },
		h6: { styles: 'ml-12', icon: '' }
	};

	// Style props
	/** Set the component container styles (width, border, etc). */
	export let container = 'w-52 border-l-1 border-surface-300/40';
	/** Set the row text color styles. */
	export let text = 'text-surface-900-50';
	/** Set the hover styles. ('hover:(bg-primary-500 text-surface-50)') */
	export let hover = 'hover:(bg-primary-500 text-surface-50)';
	/** Set the header item radius styles. */
	export let rounded = 'rounded-token-container';
	/** Set the active header styles. */
	export let activeHeader = 'text-primary-500';

	/** Provide styles for the label. */
	export let labelClasses = 'font-bold text-surface-900-50';
	/** Provide styles for the list elements. */
	export let listClasses = 'list-none text-left';

	let toc: ToC;

	onMount(() => {
		if (browser) {
			toc = create_toc(target, excludeHeadings, tocType, headingIndentationStyles);
		}
	});

	onDestroy(() => {
		toc?.destroy();
	});
</script>

<!-- @component Create a table of contents for the target container element, so you can quickly navigate to its page headings. -->

{#if toc && $toc.headings.length > 0}
	<div class="ato-toc {container}">
		<nav class="ato-toc-list">
			<div class="ato-toc-label text-left px-4 pt-0 {labelClasses}">{label}</div>
			<ul class={listClasses}>
				{#each $toc.headings as { heading, active, styles, icon }}
					<li
						class="ato-toc-heading px-4 py-1 cursor-pointer flex items-center gap-1 {styles} {active
							? activeHeader
							: text} {hover} {rounded}"
						on:click={() => scroll_to_element(heading)}
						on:click
						on:keypress
					>
						<!-- <li
						class="ato-toc-heading px-4 py-1 cursor-pointer flex items-center gap-1 {styles} {text} border-l-1"
						on:click={() => scroll_to_element(heading)}
						on:click
						on:keypress
					> -->
						{#if icon}
							<span class={icon} />
						{/if}
						{heading.innerText}
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}
```