---
title: Buttons
description: Create nice buttons with simple CSS classes. Can be used for anchors and button elements.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>

## Size

Pattern: `btn-[size]`. 

`size` can be `sm | md | lg | xl`.

<Preview previewSnippets={previewSnippets['size']}>
    <svelte:component this={previewComponents['size']} />
</Preview>

## Regular Gradients

Pattern: `btn-gradient-[direction]-[color1]-[shade1]-[color2]-[shade2]-[color3]-[shade3]`.

For each color you can also specify an opacity if you want. The shades are always optional and the third color is also optional.

<Preview previewSnippets={previewSnippets['gradient']}>
    <svelte:component this={previewComponents['gradient']} />
</Preview>

## Glass

Pattern: `btn-glass-[color]-[shade]`.

The shade is optional.

<Preview previewSnippets={previewSnippets['glass']}>
    <svelte:component this={previewComponents['glass']} />
</Preview>

## Glass Gradients

Pattern: `btn-glass-[direction]-[color1]-[shade1]-[color2]-[shade2]-[color3]-[shade3]`.

For each color you can also specify an opacity if you want. The shades are always optional and the third color is also optional.

<Preview previewSnippets={previewSnippets['glass-gradient']}>
    <svelte:component this={previewComponents['glass-gradient']} />
</Preview>

## Gradient Border

Pattern: `btn-border-[base_color]-[base_shade]-[direction]-[color1]-[shade1]-[color2]-[shade2]-[color3]-[shade3]`.

The base color and shade are the background overlay color of the button. You can add an opacity to overwrite the deafault opacity to it. The `direction` can be: `l | r | t | b | bl | br | tl | tr`. If you do not provide a direction `r` will be chosen. The 3 color values are for the gradient. For each color you can optionally define a shade. Shade `500` is the default.

<Preview previewSnippets={previewSnippets['gradient-border']}>
    <svelte:component this={previewComponents['gradient-border']} />
</Preview>

## Icon

You can add icons inside `span` elements inside your button and use the regular `btn` classes to set the colors and size. 

Add the `btn-icon` class to buttons that only have an icon and no text.

<Preview previewSnippets={previewSnippets['icon']}>
    <svelte:component this={previewComponents['icon']} />
</Preview>

## Button Groups

Allows you to group children button or anchor elements together.

### Regular

Pattern: `btn-group-[color]-[shade]`.

Creates a horizontal button group with the given color and shade. The shade is optional.

<Preview previewSnippets={previewSnippets['group-regular']}>
    <svelte:component this={previewComponents['group-regular']} />
</Preview>

### Vertical

Pattern: `btn-group-vertical-[color]-[shade]`.

Creates a vertical button group with the given color and shade. The shade is optional.

<Preview previewSnippets={previewSnippets['group-vertical']}>
    <svelte:component this={previewComponents['group-vertical']} />
</Preview>

### Outline

Pattern: `btn-group-outline-[color]-[shade]` or `btn-group-vertical-outline-[color]-[shade]`.

Create a button group with outlines. This works for both horizontal and vertical groups. Shades are optional.

<Preview previewSnippets={previewSnippets['group-outline']}>
    <svelte:component this={previewComponents['group-outline']} />
</Preview>