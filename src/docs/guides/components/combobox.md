---
title: Combobox
description: A filterable list of items that supports selection.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>

## Changing Colors

You can update the active styles with the `activeStyle` prop.

```svelte {7}
<Combobox
	{items}
	label="Choose your favourite book"
	placeholder="Favourite book"
	bind:selected
	width="w-64"
	activeStyle="secondary-500/80"
/>
```

## Adding Icons

You can add a select icon with the `selectIcon` prop.

<Preview previewSnippets={previewSnippets['icon']}>
    <svelte:component this={previewComponents['icon']} />
</Preview>

## Debounce

The debounce time represents the time taken in between a key stroke in the input field and the search taking place. If the debounce time is 1 second, then a search will only take place if there has been no keyboard inputs for 1 second. For a larger list of items this might help improve performance, since it avoids too many searches from happening.

<Preview previewSnippets={previewSnippets['debounce']}>
	<svelte:component this={previewComponents['debounce']} />
</Preview>