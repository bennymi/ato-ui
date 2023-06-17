---
title: Table of Contents
description: Create a table of contents for a target container element, so that you can quickly navigate to heading elements on a page.
---

<script>
    import PropsTable from './PropsTable.svelte';
    import docs from '$lib/components/table-of-contents/TableOfContents.svelte?raw&sveld';
</script>

# Table of Contents

## Example

If you put the table of contents (ToC) in the layout file where the content for which the ToC should be created is updated with each page, you will have to wrap the table of contents in a `{#key ...}` block. Check out the props section to see how you can customize the component.

```svelte
<script lang="ts">
    import { TableOfContents } from 'ato-ui';
</script>

<TableOfContents target="#content" />

<div id="content">
    <h1>Title</h1>
    <h2>...</h2>
</div>
```

## Customizing Indentation

You can customize the margin that is used for different heading types and add an icon in front of the generated ToC headings by passing in styles to the `headingIndentationStyles` prop.

```svelte
<script lang="ts">
    import { TableOfContents, type TOCIndentStyles } from 'ato-ui';

    let headingIndentationStyles: TOCIndentStyles = {
        h2: { styles: '', icon: '' },
        h3: { styles: 'ml-3', icon: 'i-mdi-chevron-right' },
        h4: { styles: 'ml-6', icon: '' },
        h5: { styles: 'ml-9', icon: '' },
        h6: { styles: 'ml-12', icon: '' }
    }
</script>

<TableOfContents target="#content" {headingIndentationStyles} />
```

## Props

<PropsTable props={docs.props} />