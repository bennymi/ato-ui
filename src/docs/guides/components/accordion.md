---
title: Accordion
description: An component that allows you to organize your content into sections that can be expanded or collapsed.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>

## Changing Colors

You can update the styles for the title button with the `titleStyle` prop.

<Preview previewSnippets={previewSnippets['colors']}>
    <svelte:component this={previewComponents['colors']} />
</Preview>

## Multiple 

You can allow multiple accordion items to be open at the same time, using the the `multiple` prop and setting it to `true`.

```svelte /multiple/#prop
<Accordion multiple={true} >
    <!-- Items... -->
</Accordion>
```

## Default Open Item

You can set the item that should be open by default by passing in the item's key to the `defaultOpen` prop.

```svelte /defaultOpen/#prop
<Accordion defaultOpen="water" >
    <AccordionItem key="water">
        <!-- Title & Content -->
    </AccordionItem>

    <!-- More items... -->
</Accordion>
```

## Disable Accordion

You can disable the accordion and adjust the disabled styles with the `disabled` and `disabledStyle` props respectively.

```svelte /disabled/#prop
<Accordion disabled={true} >
    <!-- Items... -->
</Accordion>
```