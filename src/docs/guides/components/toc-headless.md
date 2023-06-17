---
title: Table of Contents
description: A headless table of contents component.
---

# Table of Contents | Headless

## Example

You can create a Table of Contents (ToC) by calling the `create_toc()` function with the id of the container in which the content is. The headings and active headings can then be accessed through the `$toc.headings` store which you can iterate over like in the example below. The `icon` inside the `$toc.headings` elements are the ones you can pass to the `create_toc()` function with the `headingIndentationStyles` parameter. You can see an example of that in the [Styled ToC](http://localhost:5173/docs/components/toc) documentation.

```svelte showCode=true
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	import type { Heading, TOCIndentStyles, ToC, TOCType } from 'ato-ui';
	import { default_indentation_styles, create_toc, scroll_to_element } from 'ato-ui';

	export let target = '';
	export let excludeHeadings: Heading[] = [];
	export let label = 'On this page';
	export let tocType: TOCType = 'lowest';
	export let headingIndentationStyles: TOCIndentStyles = default_indentation_styles;

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

{#if toc && $toc.headings.length > 0}
	<div class="border-l-2 border-surface-300/40">
		<div class="relative">
			<div class="ato-toc-label text-left px-4 pt-0 font-bold text-surface-900-50">{label}</div>
			<nav class="ato-toc-list">
				<ul class="list-none text-left">
					{#each $toc.headings as { heading, active, styles, icon }, i}
						<li
							class="ato-toc-heading px-4 py-1 cursor-pointer flex items-center gap-1 transition duration-200 rounded-container hover:(bg-primary-500 text-on-primary!) {styles} {active
								? 'text-surface-900-50'
								: 'text-surface-900-op60-50-op60'}"
							on:click={() => scroll_to_element(heading)}
							on:keypress
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
```