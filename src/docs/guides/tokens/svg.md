---
title: SVG
description: Available shortcuts related to SVGs, such as fill and stroke color.
---

## On-Colors

`fill-on-[color]-[shade]/[opacity]`, `stroke-on-[color]-[shade]/[opacity]`: Applies the fill or stroke color that is best suited for being on the specified color. Shade and opacity are optional.

Example: `fill-on-primary` becomes `fill-[color:rgb(var(--on-primary-500))]`.

## On-Colors Light & Dark Mode

Used to easily set the on-colors for light and dark mode. The opacity is optional.

`fill-on-primary-500/50-400/55` becomes `fill-[color:rgb(var(--on-primary-500))]/[0.5] dark:fill-[color:rgb(var(--on-primary-400))]/[0.55]`.

`stroke-on-primary-500/50-400/55` becomes `stroke-[color:rgb(var(--on-primary-500))]/[0.5] dark:stroke-[color:rgb(var(--on-primary-400))]/[0.55]`.

## On-Colors Inverse

Used to easily set different on-colors for light and dark mode. The opacity is optional.

`fill-on-inverse-primary-500/50-secondary-400/55` becomes `fill-[color:rgb(var(--on-primary-500))]/[0.5] dark:fill-[color:rgb(var(--on-secondary-400))]/[0.55]`.

`stroke-on-inverse-primary-500/50-secondary-400/55` becomes `stroke-[color:rgb(var(--on-primary-500))]/[0.5] dark:stroke-[color:rgb(var(--on-secondary-400))]/[0.55]`.

## Light & Dark Mode

Used to easily set different color shades for light and dark mode. The opacity is optional.

`fill-inverse-primary-500/50-400/55` becomes `fill-primary-500/[0.5] dark:fill-primary-400/[0.55]`.

`stroke-inverse-primary-500/50-400/55` becomes `stroke-primary-500/[0.5] dark:stroke-primary-400/[0.55]`.

## Inverse Light & Dark Mode

Used to easily set different colors for light and dark mode. The opacity is optional.

`fill-inverse-primary-500/50-secondary-400/55` becomes `fill-primary-500/[0.5] dark:fill-secondary-400/[0.55]`.

`stroke-inverse-primary-500/50-secondary-400/55` becomes `stroke-primary-500/[0.5] dark:stroke-secondary-400/[0.55]`.