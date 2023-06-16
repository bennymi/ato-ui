---
title: Forms
description: Button classes that can be used.
---

# Forms

UnoCSS has a [community preset](https://github.com/Julien-R44/unocss-preset-forms) that is a port of the Tailwind forms plugin. You can see all community presets in the official [UnoCSS docs](https://unocss.dev/presets/community).

To install simply:

```shell showCode=true
pnpm add -D @julr/unocss-preset-forms
```

Next, add the preset to your `unocss.config.ts` file:

```ts title="unocss.config.ts" showCode=true
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    // ...
    presetForms()
  ],
  // ...
})
```