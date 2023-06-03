---
title: Background
description: Available background tokens that allow you to easily set gradient or mesh backgrounds.
---

<script>
    import BackgroundDemo from './BackgroundDemo.svelte';
</script>

# Background Tokens

## Demo

<BackgroundDemo />

## Background & Text

`{color}-{shade}`: Sets the background color with the corresponding `text-on` color. 

Example: `primary-500` becomes `bg-primary-500 text-on-primary-500`.

<div class="flex my-4">
    {#each ['primary-500', 'secondary-500', 'tertiary-500'] as token}
        <div class="h-20 flex-1 {token} flex justify-center items-center">
            {token}
        </div>
    {/each}
</div>

## Light & Dark Mode

`bg-{color}-{shade1}-{shade2}`: In light mode the background is set with the color and the first shade, and in dark mode the second shade is used instead.

Example: `bg-surface-50-950` becomes `bg-surface-50 dark:bg-surface-950`. Toggle the dark / light switch to see the changes.

<div class="flex my-4">
    {#each ['bg-primary-700-200', 'bg-secondary-200-700', 'bg-tertiary-700-300'] as token}
        <div class="h-20 flex-1 {token} flex justify-center items-center">
            {token}
        </div>
    {/each}
</div>

## Inverse Light & Dark Mode

`bg-inverse-{color1}-{shade1}-{color2}-{shade2}`: Sets the first color with the first shade as the background color, and the 2nd color with the 2nd shade as the background color in dark mode. `shade` is always optional (`500` is the default).

Example: `bg-inverse-primary-50-surface-800` becomes `bg-primary-50 dark:bg-surface-800`.

You can also add opacity to each color in the same way you would in Tailwind, by adding `/<opacity>` after the color or the shade. The opacity can be `0-100`. If you don't specify a shade the default `500` will be used.

Example: `bg-inverse-primary-500/20-surface/33` or `bg-inverse-primary/20-surface/20`.

<div class="flex my-4">
    {#each ['bg-inverse-primary-secondary text-on-primary dark:text-on-secondary', 'bg-inverse-secondary-tertiary text-on-secondary dark:text-on-tertiary', 'bg-inverse-tertiary-primary text-on-tertiary dark:text-on-primary'] as token}
        <div class="h-20 flex-1 {token} flex justify-center items-center">
            {token.split(' ')[0]}
        </div>
    {/each}
</div>

## Gradients

`bg-gradient-{direction}-{color1}-{shade1}-{color2}-{shade2}-{color3}-{shade3}`: Sets the background to be a gradient of the three colors in the specified direction. The direction and shades are optional. It's also okay to just use 2 colors. For each color you can also specify an opacity. 

Possible directions: `r | l | tr | tl | br | bl | b | t`. The default direction is `r` if no direction is specified.

<div class="flex justify-center items-center my-4 h-20 bg-gradient-primary-secondary text-on-primary">bg-gradient-primary-secondary</div>

<div class="flex justify-center items-center my-4 h-20 bg-gradient-tl-tertiary/10-secondary-700-primary/10 text-on-primary">bg-gradient-tl-tertiary/10-secondary-700-primary/10</div>

## Mesh Gradients

`bg-mesh-{color}-{shade}/{opacity}-x{percentage}-y{percentage}`: This pattern creates a mesh gradient background. The `shade` and `opacity` are optional. For the shade the default is `500` and for the opacity the default is `30`. The `x` and `y` are the coordinates in percent and can be positive or negative values at which the color should be placed (`x50-y50`, `x110-y-10`). You can add as many color points as you want.

You additionally will want to set a background color for the container, for example using the light / dark token: `bg-surface-50-950` or with `surface-50-900` so that text colors are also already properly set.

Examples: `bg-mesh-primary/20-x5-y0`, `bg-mesh-secondary-400/20-x20-y20-success/10-x90-y90-tertiary-x0-y90`.

<div class="flex justify-center items-center my-4 h-64 bg-mesh-primary/20-x4-y0-success-400/30-x95-y95 text-surface-950-50 bg-surface-50-500">bg-mesh-primary/20-x4-y0-success-400/30-x95-y95</div>

<div class="flex justify-center items-center my-4 h-64 bg-mesh-secondary/20-x4-y0-error-400/30-x125-y-25 surface-50-900">bg-mesh-secondary/20-x4-y0-error-400/30-x125-y-25</div>

```html
<div 
    class="min-h-screen bg-mesh-primary/20-x4-y0-success-x95-y95 text-surface-950-50 bg-surface-50-500">
    This div has a background mesh gradient
</div>
```

## Radial Gradients

`bg-radial-{color1}-{shade1}-{color2}-{shade2}-{color3}-{shade3}`: This creates a radial background gradient. The third color is optional. The shades are also optional.

Examples: `bg-radial-primary-secondary`, `bg-radial-primary-700-secondary-700-tertiary-700`.

<div class="flex justify-center items-center my-4 h-64 bg-radial-primary-secondary-tertiary-700 text-on-primary">bg-radial-primary-secondary-tertiary-700</div>

