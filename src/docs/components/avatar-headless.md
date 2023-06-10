---
title: Avatar
description: A headless avatar component.
---

# Avatar | Headless


```svelte
<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/** Set the image source. */
	export let src = '';
	/** Set the image alt value. */
	export let alt = 'avatar';
	/** Set the text value in case you don't have an image. The string automatically gets shortened to 4 characters. If you pass in separate words it will use the first letters of each word. */
	export let text = '';

	const formatText = () => {
		let letters = text
			.trim()
			.split(/\s/g)
			.map((item) => item[0]);

		return letters.slice(0, 4).join('');
	};

	$: formattedText = text.length < 5 ? text : formatText();
</script>

<div class="avatar w-16 h-16 rounded-btn relative inline-flex justify-center items-center">
	<div
		class="avatar-image w-16 h-16 rounded-btn border-2 border-surface-500-800 bg-primary-500 inline-flex justify-center items-center drag-none overflow-hidden"
		on:mouseenter={(event) => dispatch('avatar-mouseenter', event)}
		on:mouseleave={(event) => dispatch('avatar-mouseleave', event)}
		on:click={(event) => dispatch('avatar-click', event)}
		on:keydown
	>
		{#if src}
			<img class="w-16 h-16 rounded-btn drag-none transition-all hover:(scale-110)" {src} {alt} />
		{:else}
			<span class="font-bold text-on-primary">{formattedText}</span>
		{/if}
	</div>
</div>
```