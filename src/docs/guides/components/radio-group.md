---
title: Radio Group
description: A set of checkable buttons, where only one of the buttons can be selected at a time.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>

We have two different versions for the Radio Group. A more classical (`RadioGroupRegular`) one that might be better for use inside forms, and a more fancy one (`RadioGroup`). They have slightly different APIs, so reference the [API](#api) section below to see how to implement them.

## Colors

You can change the active and inactive colors with the `bgActiveStyles` and `bgStyles` props.

<Preview previewSnippets={previewSnippets['colors']}>
<svelte:component this={previewComponents['colors']} />
</Preview>

## Active Icon

You can change the active icon that is used when an option is selected, by passing an icon through the `activeIcon` prop.

<Preview previewSnippets={previewSnippets['active-icon']}>
<svelte:component this={previewComponents['active-icon']} />
</Preview>

## Size

You can change the size of the groups with the `size` prop by selecting `sm`, `md`, or `lg`.

<Preview previewSnippets={previewSnippets['size']}>
<svelte:component this={previewComponents['size']} />
</Preview>
