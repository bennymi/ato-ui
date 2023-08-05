---
title: Text
description: Text tokens allow you to easily create gradient texts or select the font colour that should be used on top of specific theme background colors.
---

<script>
    import { TextDemo } from '$components';
</script>

# Text Tokens

## Demo

<TextDemo />

## Text-On Colors

`text-on-[color]-[shade]/[opacity]`: This sets the appropriate text color for the background color and shade, so if you have a background of `bg-primary-900` for example, and want to put text on it, then you could use `text-on-primary-900`. The shade and opacity are optional. We also provide a token for that which is described in the [Background Tokens](/docs/tokens/background#background--text) documentation to make this simpler by just writing `primary-900`.

Examples: `text-on-primary/20`, `text-on-surface-950/80`, `text-on-tertiary-600`.

## Text-On Light & Dark Mode

`text-on-[color]-[shade1]/[opacity1]-[shade2]/[opacity2]`: This sets the appropriate text on color for the background color and shade for both light and dark mode.The opacities are optional.

Example: `text-on-surface-50-900` becomes `text-on-surface-50 dark:text-on-tertiary-900`.

## Light & Dark Mode

`text-[color]-[shade]/[opacity]-[shade]/[opacity]`: In light mode the text is set with the color and the first shade, and in dark mode the second shade is used instead. The opacities are always optional.

Example: `text-surface-950-50` becomes `text-surface-950 dark:text-surface-50`, `text-surface-950/80-50/80`.

## Light & Dark Mode + Hover

`text-[color]-[shade]-[hover_shade]-[shade]-[hover_shade]`: In light mode the text is set with the color and the first shade. When the text is hovered, the first `hover_shade` is used. In dark mode the second shade is used instead with the second `hover_shade`. For each shade and hover shade you can also optionally add an opacity `/[opacity]`.

Example: `text-surface-200-50-700-950` becomes `text-surface-200 hover:text-surface-50 dark:(text-surface-700 hover:text-surface-950)`.

More examples: `text-surface-950/70-950-50/80-50`.

<div class="flex justify-center items-center h-30 border-1 border-surface-900/20-50/20 rounded-container mt-4">
    <div class="text-surface-900/50-900-50/50-50 font-bold cursor-pointer">Hover me (text-surface-900/50-900-50/50-50)</div>
</div>

## Inverse Light & Dark Mode

`text-inverse-[color]-[shade]-[color]-[shade]`: In light mode the text is set with the first color and the first shade, and in dark mode the second color and shade are used. Opacity and shades are optional. 

Example: `text-inverse-primary-secondary` becomes `text-primary-500 dark:text-secondary-500`.

More examples: `text-inverse-primary/90-secondary-400/90`.

<div class="flex justify-center items-center h-30 border-1 border-surface-900/20-50/20 rounded-container mt-4">
    <div class="text-inverse-primary-secondary font-bold">text-inverse-primary-secondary</div>
</div>

## Inverse Light & Dark Mode + Hover

`text-inverse-[color]-[shade]-[hover_shade]-[color]-[shade]-[hover_shade]`: In light mode the text is set with the first color and the first shade. When the text is hovered the first hover shade is used. Same thing with the second color and shades, but for dark mode. Opacity can be included for each shade if needed. 

Example: `text-inverse-primary-500-700-secondary-500-700` becomes `text-primary-500 hover:text-primary-700 dark:text-secondary-500 dark:hover:text-secondary-700`.

More examples: `text-inverse-primary-500/70-500-secondary-400/70-400`.

<div class="flex justify-center items-center h-30 border-1 border-surface-900/20-50/20 rounded-container mt-4">
    <div class="text-inverse-primary-500-700-secondary-500-700 font-bold">Hover me (text-inverse-primary-500-700-secondary-500-700)</div>
</div>

## Gradients

`text-gradient-[direction]-[color1]-[shade1]-[color2]-[shade2]-[color3]-[shade3]`: This sets a text gradient in the specified direction with the 3 colors. The third color is optional. All shades are optional (`500` is the default).

Possible directions: `r | l | tr | tl | br | bl | b | t`. The default direction is `r` if no direction is specified.

Examples: `text-gradient-br-primary-secondary-tertiary`, `text-gradient-tertiary-warning`.

<div class="flex justify-center items-center border-1 border-surface-900/20-50/20 rounded-container mt-4 text-5xl">
    <span class="text-gradient-primary-secondary font-bold py-4">Easy.</span>
    <span class="text-gradient-tertiary-warning-error font-bold py-4">Elegant.</span>
</div>