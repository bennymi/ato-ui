---
title: Background
description: Available background tokens that allow you to easily set gradient or mesh backgrounds.
---

# Background Tokens

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

`bg-{color}-{shade1}-{shade2}`: In light mode the background is set with the color and the first shade, and in dark mode the second shade is used instead. It also sets the appropriate text colors for the shades.

Example: `bg-surface-50-950` becomes `surface-50 dark:surface-950`. Toggle the dark / light switch to see the changes.

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

<div class="flex justify-center items-center my-4 h-20 bg-primary-secondary text-on-primary">bg-primary-secondary</div>

<div class="flex justify-center items-center my-4 h-20 bg-tl-tertiary/10-secondary-700-primary/10 text-on-primary">bg-tl-tertiary/10-secondary-700-primary/10</div>