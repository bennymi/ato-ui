---
title: Why Ato-UI?
description: Describes why you should choose Ato UI.
icon: i-material-symbols-question-mark-rounded
---

<script>
    import { BackgroundDemo } from '$components';
</script>

## Why Ato-UI?

- 🎯 offers a design system around headless components
- 🎨 easily integrate different themes into your website
- 🌈 provides styled components for components which you do not want to style yourself
- 🦄 headless code examples with Ato UI's design tokens for maximum flexibility
- 💜 all components follow web accessibility standards because it's built with [Melt UI](https://www.melt-ui.com/)
- 🌸 build on top of [UnoCSS](https://unocss.dev/) and the [Wind preset](https://unocss.dev/presets/wind) (Tailwind + Windi CSS), but does not require Tailwind

## Why UnoCSS?

- 😉 pure CSS icons
- 💪 flexible classes defined through regular expressions are perfect for creating a themeable website
- ⚡ [variant group preset](https://unocss.dev/transformers/variant-group) that allows you to group classes efficiently

## Goals

Ato UI is build on top of the fantastic [Melt UI](https://github.com/melt-ui/melt-ui) headless library. The goal of Ato UI is to provide a design system around Melt that allows you to integrate different themes into your website, simplify the creation of light & dark mode with our tokens and shortcuts, and to provide additionaly functionality with our styled components.

While Melt UI provides builders, we provide regular Svelte components. Since you might not want to have to style every component yourself, this will allow you to get started more quickly. These styled components also support light & dark mode out of the box, while still providing props through which you can customize their looks. Additionally, we have examples of how to create the headless components using Ato UI's design system. This way you can easily modify the components to your liking, while keeping them theme-able and consistent with the rest of your website.

Have questions or improvement ideas? Join us on our [Discord](https://discord.gg/7PXN3fs3tN).

## Shortcuts

There are common patterns that we constantly use in Tailwind for defining contrasts, for example between regular and hover states, or regular and dark mode states. For these it would be nice to have shortcuts that just make life a bit easier and reduce the amount of classes that need to be typed.

These shortcuts should also be intuitive and quick to grasp, so rather than feeling like something completely new to learn, they instead feel like a natural extension of the Tailwind classes we are already familiar with.

Ato UI provides a preset that works with UnoCSS's `presetWind` to do exactly that. You can read more about individual shortcuts in the [Tokens](/docs/tokens/background) page.

### Background Demo

<BackgroundDemo />

### Dark & Light Mode

We provide classes that make it easy to define light & dark mode colors.

Example: `text-surface-900-50` uses the `text-surface-900` color for light mode and `text-surface-50` color for dark mode.

### Gradients

Gradients can simply defined in one class. No need to google how to make it work with Tailwind.

Examples: `text-gradient-primary-secondary`, `bg-gradient-secondary-tertiary-700`.

### Hover States

Example: `text-surface-700-900-200-50` turns into `text-surface-700 hover:text-surface-900 dark:text-surface-200 dark:hover:text-surface-50`.

### Backgrounds

You can set both the background color and the corresponding on-color (see the designer page) in one class. We also have convenient classes to create [background gradients](/docs/tokens/background#gradients), [mesh gradients](/docs/tokens/background#mesh-gradients), or [radial gradients](/docs/tokens/background#radial-gradients).

Example: `primary-500` turns into `bg-primary-500 text-on-primary-500`.
