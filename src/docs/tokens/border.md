---
title: Border
description: Available border tokens for theme roundedness or selecting border colors for light and dark modes.
---

# Border Tokens

## Border Radius

Please do not use Tailwind classes like `rounded-lg | rounded-xl` and so on in your application, and instead use the variables that you set up in your theme. This means that it will be easier for you to make changes down the road and assure a consistent look & feel across your entire application.

### rounded-btn

`rounded-btn` can be used for buttons and elements that should look similar to buttons. The available [button classes](/docs/unocss/buttons) automatically already use this token.

### rounded-container

`rounded-container` can be used for any containers, such as form containers, hero containers, cards, etc. This class is also already used in a few of Ato-UI's available shortcuts.

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