---
title: Why Ato-UI?
description: Ato-UI is a component and UI library for Svelte / SvelteKit and UnoCSS.
icon: i-material-symbols:question-mark-rounded
---

# Why Ato-UI?

## Why Ato-UI?

- 🎯 offers a design system around headless components
- 🎨 easily integrate different themes into your website
- 🌈 provides styled components for components which you do not want to style yourself
- 🦄 headless code examples with Ato UI's design tokens for maximum flexibility
- 🌸 build on top of [UnoCSS](https://unocss.dev/) and the [Wind preset](https://unocss.dev/presets/wind) (Tailwind + Windi CSS), but does not require Tailwind

## Why UnoCSS?

- 😉 pure CSS icons
- 💪 flexible classes defined through regular expressions are perfect for creating a themeable website
- 🍻 [variant group preset](https://unocss.dev/transformers/variant-group) that allows you to group classes efficiently `dark:(` `...` `)` or `hover:(` `...` `)`

## Goals

Ato UI is build on top of other fantastic headless libraries, such as [HeadlessUI](https://captaincodeman.github.io/svelte-headlessui/) and [GrailUI](https://grail-ui.vercel.app/). The goal of this library is to provide a design system around headless libraries that allows you to integrate different themes into your website and make the creation of light & dark mode more simple with our tokens.

We provide styled components of these headless libraries, which you can import as regular Svelte components. Since you might not want to have to style every component yourself, this will allow you to get started more quickly.

We also provide examples of how to create the headless components from the above mentioned libraries with Ato UI's design token system. This way you can easily modify the components to your liking.

## Shortcuts

There are common patterns that we constantly use in Tailwind for defining contrasts, for example between regular and hover states, or regular and dark mode states. For these it would be nice to have shortcuts that just make life a bit easier and reduce the amount of classes that need to be typed.

These shortcuts should also be intuitive and quick to grasp, so rather than feeling like something completely new to learn, they instead feel like a natural extension of the Tailwind classes we are already familiar with.

Ato UI provides a preset that works with UnoCSS's `presetWind` to do exactly that. You can read more about individual shortcuts in the [Tokens](/docs/tokens/background) page.

### Dark & Light Mode

We provide classes that make it easy to define light & dark mode colors. 

Example: `text-surface-900-50` uses the `text-surface-900` color for light mode and `text-surface-50` color for dark mode.

### Gradients

Gradients can simply defined in one class. No need to google how to make it work with Tailwind.

Examples: `text-gradient-primary-secondary`, `bg-gradient-secondary-tertiary-700`.

### Hover States

Example: `text-surface-700-900-200-50` turns into `text-surface-700 hover:text-surface-900 dark:text-surface-200 dark:hover:text-surface-50`.

### Backgrounds

You can set both the background color and the corresponding on-color (see the designer page) in one class.

Example: `primary-500` turns into `bg-primary-500 text-on-primary-500`.

We also have convenient classes to create background gradients, mesh gradients, or radial gradients.