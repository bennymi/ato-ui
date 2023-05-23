---
title: Border
description: Available border tokens for theme roundedness or selecting border colors for light and dark modes.
---

# Border Tokens

## Light & Dark Mode

`border-{color}-{shade1}/{opacity1}-{shade2}/{opacity2}`: Sets the border color with shades 1 and 2 for light and dark mode respectively. The opacities are optional.

Examples: `border-surface-700-200`, `border-surface-800/50-200/50`.

<div class="flex justify-center items-center h-30 border-1 border-primary-500-400 rounded-token-container mt-4">
    <div class="font-bold text-surface-900-50">border-primary-500-400</div>
</div>

## Inverse Light & Dark Mode

`border-inverse-{color1}-{shade1}/{opacity1}-{color2}-{shade2}/{opacity2}`: Allows you to set a different border color for light and dark mode with the two specified colors. Shades and opacities are optional.

Examples: `border-inverse-primary-secondary`, `border-inverse-surface/50-surface-200/40`.

<div class="flex justify-center items-center h-30 border-1 border-inverse-primary/80-secondary-400/70 rounded-token-container mt-4">
    <div class="font-bold text-surface-900-50">border-inverse-primary/80-secondary-400/70</div>
</div>