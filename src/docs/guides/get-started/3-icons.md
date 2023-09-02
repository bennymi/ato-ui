---
title: Icons
description: Describes how to use UnoCSS icons with Ato UI.
icon: i-mdi-emoticon-outline
hoverIcon: group-hover:i-mdi-emoticon-wink
---

Icons can be implemented as simple CSS classes, to which you can then apply regular tailwind classes to (hover the icons to see it in action).

## Installation

We use the [UnoCSS Icons preset](https://unocss.dev/presets/icons) for our icons, which gives you access to all [iconify](https://iconify.design/) icons as CSS classes. Here's a quick start, but head over to the official documentation to see how it works.

```shell hideHeader
pnpm add -D @unocss/preset-icons
```

You can then simply install icon collections like so:

```shell hideHeader
pnpm add -D @iconify-json/[the-collection-you-want]
```

For example, if you want to get the `material-symbols` icons:

```shell hideHeader
pnpm add -D @iconify-json/material-symbols
```

## Searching for Icons

I would recommend using [icones](https://icones.js.org/) to search for icons. When you're there, change the naming convention of copied icon classes to the UnoCSS naming convention, which starts with an `i-` prefix:

<div class="flex justify-center items-center my-4">
    <!-- ![unocss icons naming convention](/get-started/icons.png) -->
    <img src="/get-started/icons.png" alt="unocss icons naming convention" />
</div>