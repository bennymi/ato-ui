---
title: Installation
description: Describes how to set up your project to use Ato UI and UnoCSS.
icon: i-material-symbols-rocket-launch-rounded
---

<script>
	import { InstallationTabs, DependenciesTabs, ConstructionBanner } from '$components';
</script>

## Installation

<ConstructionBanner />

Use the package manager of your choice.

<InstallationTabs />

We also rely on a few dependencies, so make sure they are also installed.

<DependenciesTabs />

## UnoCSS Config

Create a `uno.config.ts` file with all the required presets and transformers.

```typescript title="uno.config.ts"
import { defineConfig } from 'unocss';
import presetWind from '@unocss/preset-wind';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';
import presetIcons from '@unocss/preset-icons';

import { presetAtoUI } from 'ato-ui/preset';

export default defineConfig({
	presets: [
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
		}),
		presetWind(),
		presetAtoUI()
	],
	transformers: [
		transformerVariantGroup(),
		transformerDirectives()
	],
})
```

## Vite Config

Set up your `vite.config.ts` file, by importing UnoCSS and passing it the location of the config file.

```typescript title="vite.config.ts"
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS()
	]
});
```

## Update Layout

Next we need to setup the root `+layout.svelte` file by importing `uno.css`. You can also do [style resetting](https://unocss.dev/guide/style-reset) like tailwind does. You can then import a theme from `ato-ui/themes/...` or use a custom one that you created in our [designer](/designer) page. The theme should be added as a `data-theme` attribute, with the same name as the css file name, so make sure to add it to a wrapping `div`, as well as in the top level `app.html` file. This is important because some floating elements might be rendered outside of the below `div` element. 

You can see all our themes in our [styles repo page](https://github.com/bennymi/ato-ui/tree/main/src/lib/styles/themes).

```svelte title="./src/routes/+layout.svelte" {3,9}
<script lang="ts">
	// Import your theme here.
	import 'ato-ui/themes/ato.css';

	import '@unocss/reset/tailwind.css';
	import 'uno.css';
</script>

<div data-theme="ato">
	<slot />	
</div>
```

```svelte /class="dark"/#prop /data-theme="ato-ui"/#prop title="./src/app.html"
<!DOCTYPE html>
<html lang="en" class="dark">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover" data-theme="ato-ui">
		<div>%sveltekit.body%</div>
	</body>
</html>

```

## Recommended VSCode Extensions

We recommend installing a few VSCode extensions to make the development experience more enjoyable: the [Unocss extension](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) and the [Iconify Intellisense extension](https://marketplace.visualstudio.com/items?itemName=antfu.iconify). If you have the Tailwind extension installed you probably also want to disable it for projects in which you are using UnoCSS, since the extensions might not work together well.