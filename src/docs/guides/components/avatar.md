---
title: Avatar
description: An element to represent a user with an image or their initials.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>


## Add a Badge

Adding a badge is also very simple and can easily be customized, as can be seen in this example.

<Preview previewSnippets={previewSnippets['badge']}>
    <svelte:component this={previewComponents['badge']} />
</Preview>

## Combine with Dropdown

You can also combine the avatar component with the [Dropdown](/docs/components/dropdown-menu) component to open a menu when it or the badge are clicked. For this you also have to deactivate the default Dropdown Menu button styles by setting the `btnStyle=""`.

<Preview previewSnippets={previewSnippets['dropdown']}>
    <svelte:component this={previewComponents['dropdown']} />
</Preview>