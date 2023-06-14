---
title: Icons
description: How to use UnoCSS icons with Ato-UI.
icon: i-mdi-emoticon-outline
hoverIcon: group-hover:i-mdi-emoticon-wink
---

<script>
    import Usage from '../Usage.svelte';
</script>

# UnoCSS Icons

## Installation

We use the [UnoCSS Icons preset](https://unocss.dev/presets/icons) for our icons, which gives you access to all [iconify](https://iconify.design/) icons as CSS classes. Here's a quick start, but head over to the official documentation to see how it works.

```shell showCode
pnpm add -D @unocss/preset-icons
```

You can then simply install icon collections like so:

```shell showCode
pnpm add -D @iconify-json/[the-collection-you-want]
```

For example, if you want to get the `material-symbols` icons:

```shell showCode
pnpm add -D @iconify-json/material-symbols
```

## Searching for Icons

I would recommend using [icones](https://icones.js.org/) to search for icons. When you're there, change the naming convention of copied icon classes to the UnoCSS naming convention, which starts with an `i-` prefix:

<div class="flex justify-center items-center my-4">
    <!-- ![unocss icons naming convention](/get-started/icons.png) -->
    <img src="/get-started/icons.png" alt="unocss icons naming convention" />
</div>

## Examples

You can then apply regular tailwind classes to the icons (hover the icons).

<Usage>
    <span class="i-vscode-icons-file-type-svelte text-5xl transition-all duration-200 hover:scale-125" />
    <span class="i-material-symbols-water-drop-outline-rounded text-5xl transition-all duration-200 hover:i-material-symbols-water-drop-rounded hover:text-cyan-500" />
    <span class="i-material-symbols-local-fire-department-rounded text-5xl transition-all duration-900 text-red-500 hover:rotate-360" />
</Usage>

```html
<span class="i-vscode-icons-file-type-svelte text-5xl transition-all duration-200 hover:scale-125" />
<span class="i-material-symbols-water-drop-outline-rounded text-5xl transition-all duration-200 hover:i-material-symbols-water-drop-rounded hover:text-cyan-500" />
<span class="i-material-symbols-local-fire-department-rounded text-5xl transition-all duration-900 text-red-500 hover:rotate-360" />
```