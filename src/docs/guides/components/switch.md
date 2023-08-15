---
title: Switch
description: A checkbox, which allows users to change between two states.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>

## Colors

The background colors of the switch can be changed with the `background` and `activeBackground` props.

<Preview previewSnippets={previewSnippets['colors']}>
    <svelte:component this={previewComponents['colors']} />
</Preview>

## Label

Labels can be changed through the `label` prop. You can also hide labels by setting `hideLabel` to `true`. Hidden labels will still be available to screen readers.

```svelte
<ToggleSwitch bind:checked label="dark / light" hideLabel={true} />
```

## Sizes

The size of the switch can be changed through the `size` prop.

<Preview previewSnippets={previewSnippets['sizes']}>
    <svelte:component this={previewComponents['sizes']} />
</Preview>

## Icons

You can add both an active icon and in-active icon to the switch. This is especially a good idea for when you want to hide the label.

```svelte {3,4}
<Switch 
    label="dark / light"
    activeIcon="text-surface-900 text-lg i-material-symbols-clear-day-rounded"
    inactiveIcon="text-surface-900 text-lg i-material-symbols-dark-mode-rounded"    
/>
```