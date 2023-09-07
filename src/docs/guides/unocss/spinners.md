---
title: Spinners / Loaders
description: Allows you to easily add spinners to your website when loading data.
---

<script>
    import { Preview } from '$components';

    export let previewSnippets;
    export let previewComponents;
</script>


<!-- Dots fading -->
<!-- <span class="s-dots-primary" />
<span class="s-dots-primary-secondary-tertiary" /> -->
<!-- Hovering squares -->
<!-- <span class="s-squares-flip-secondary-600-primary-700-tertiary rounded-xl" /> -->
<!-- Sliding bars -->
<!-- <span class="s-bars-primary-secondary-tertiary" />
<span class="s-bars-primary-800-success-error" /> -->
<!-- Shape shifting square -->
<!-- Squares folding -->
<!-- <span class="s-squares-folding-primary" />
<span class="s-squares-folding-secondary" />
<span class="s-squares-folding-tertiary-700" /> -->
<!-- 2 Squares rotating -->
<!-- </div>
</div> -->

## Iconify Spinners

There is an [svg-spinners](https://icones.js.org/collection/svg-spinners) iconify library with 46 additional spinners, which you can easily add to your project:

```shell hideHeader
pnpm add -D @iconify-json/svg-spinners
```

To customize these spinners use regular Tailwind classes to modify the size and color.

Example: `w-12 h-12 text-primary-500 i-svg-spinners-blocks-scale`.

<Preview previewSnippets={previewSnippets['iconify']}>
    <svelte:component this={previewComponents['iconify']} />
</Preview>

## Size

You can set the size of each spinner by setting the width and height after the `s-` prefix. For example: `s-wh15-circle-secondary`, `s-wh20-flip-tertiary`. This will set the width and height to `w-15 h-15` and `w-20 h-20` respectively.

<Preview previewSnippets={previewSnippets['size']}>
    <svelte:component this={previewComponents['size']} />
</Preview>

## Colors & Variations

Ato-UI's spinners can be customized with different colors. Each one is a bit different. Some might have 2-3 changable colors and others only 1. For each color you can also specify a shade.

### Circle

Pattern: `s-circle-[color]`.

You can change the border type and size of circles by using regular Tailwind classes like: `border-dashed`,  `border-spotted`, `border-6`, and `border-8`.

<Preview previewSnippets={previewSnippets['circle']}>
    <svelte:component this={previewComponents['circle']} />
</Preview>

### Circle Split

Pattern: `s-circle-split-[color]`.

<Preview previewSnippets={previewSnippets['circle-split']}>
    <svelte:component this={previewComponents['circle-split']} />
</Preview>

### Squares Hover

Pattern: `s-squares-hover-[color1]-[color2]-[color3]`. You can set the colors of all three layers.

<Preview previewSnippets={previewSnippets['squares-hover']}>
    <svelte:component this={previewComponents['squares-hover']} />
</Preview>

### Squares Rotate

Pattern: `s-squares-hover-[color1]-[color2]`. You can set the colors of both rotating squares. The second color is optional.

<Preview previewSnippets={previewSnippets['squares-rotate']}>
    <svelte:component this={previewComponents['squares-rotate']} />
</Preview>

### Corners

Pattern: `s-corners-[color]`. 

You can also change the background with some additional classes such as:`bg-gradient-primary-secondary-tertiary`.

<Preview previewSnippets={previewSnippets['corners']}>
    <svelte:component this={previewComponents['corners']} />
</Preview>

### Corners Outline

Pattern: `s-corners-outline-[color]`.

<Preview previewSnippets={previewSnippets['corners-outline']}>
    <svelte:component this={previewComponents['corners-outline']} />
</Preview>