---
title: Table of Contents
description: An organized list of the content on your page.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>

## Updating ToC on New Page

If you put the table of contents (ToC) in the layout file where the content for which the ToC should be created is updated with each page, you will have to wrap the table of contents in a `#key` block.

```svelte
<script lang="ts">
    import { page } from '$app/stores';
    import { TOC } from 'ato-ui';
</script>

{#key $page.url.pathname}
    <TOC target="#content" />
{/key}
```
