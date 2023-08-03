---
title: Buttons
description: Button classes that can be used.
---

# Buttons

## Examples
<Usage>
	<button class="btn-primary">Regular</button>
	<button class="btn-glass-secondary">Glass Secondary</button>
	<button class="btn-glass-tl-tertiary-primary">Glass Gradient</button>
	<button class="btn-border-surface-800-br-secondary-success-error">Border Gradient</button>
	<button class="btn-primary btn-icon btn-lg">
		<span class="sr-only">Alarm</span>
		<span class="i-material-symbols:notifications-active-rounded" />
	</button>
	<button class="btn-border-surface-tl-primary-tertiary-error">
		<span class="i-material-symbols:notifications-active-rounded" />
		<span>Alarm</span>
	</button>
	<div class="btn-group-primary">
		<button>
			<span class="text-xl i-material-symbols:water-drop-rounded" />
			<span>Water</span>
		</button>
		<button>
			<span class="text-xl i-material-symbols:globe-uk" />
			<span>Earth</span>
		</button>
		<button>
			<span class="text-xl i-mdi:fire" />
			<span>Fire</span>
		</button>
		<button>
			<span class="text-xl i-mdi-weather-windy-variant" />
			<span>Air</span>
		</button>
	</div>
	<div class="btn-group-vertical-tertiary">
		<button>
			<span class="text-xl i-material-symbols:water-drop-rounded" />
			<span>Water</span>
		</button>
		<button>
			<span class="text-xl i-material-symbols:globe-uk" />
			<span>Earth</span>
		</button>
		<button>
			<span class="text-xl i-mdi:fire" />
			<span>Fire</span>
		</button>
		<button>
			<span class="text-xl i-mdi-weather-windy-variant" />
			<span>Air</span>
		</button>
	</div>
	<div class="btn-group-outline-secondary">
		<button>
			<span class="text-xl i-material-symbols:water-drop-rounded" />
			<span>Water</span>
		</button>
		<button>
			<span class="text-xl i-material-symbols:globe-uk" />
			<span>Earth</span>
		</button>
		<button>
			<span class="text-xl i-mdi:fire" />
			<span>Fire</span>
		</button>
		<button>
			<span class="text-xl i-mdi-weather-windy-variant" />
			<span>Air</span>
		</button>
	</div>
</Usage>

## Size

Pattern: `btn-[size]`. 

`size` can be `sm | md | lg | xl`.

```svelte example
<button class="btn-glass-tl-tertiary-primary-secondary btn-sm">sm</button>
<button class="btn-glass-tl-tertiary-primary-secondary btn-md">md</button>
<button class="btn-glass-tl-tertiary-primary-secondary btn-lg">lg</button>
<button class="btn-glass-tl-tertiary-primary-secondary btn-xl">xl</button>
```  
 

## Glass

Pattern: `btn-glass-[color]-[shade]`.

The shade is optional.

```svelte example
<button class="btn-glass-primary">Glass Primary</button>
<button class="btn-glass-secondary">Glass Secondary</button>
<button class="btn-glass-tertiary">Glass Tertiary</button>
<button class="btn-glass-success">Glass Success</button>
<button class="btn-glass-warning">Glass Warning</button>
<button class="btn-glass-error">Glass Error</button>
```

### Glass Gradients

Pattern: `btn-glass-[direction]-[color1]-[shade1]-[color2]-[shade2]-[color3]-[shade3]`.

For each color you can also specify an opacity if you want. The shades are always optional and the third color is also optional.

```svelte example
<button class="btn-glass-tl-tertiary-primary">Glass Gradient</button>
<button class="btn-glass-tertiary/50-primary/50">Glass (Bg-Opacity 50%)</button>
<button class="btn-glass-tl-tertiary-primary-secondary">Glass 3 Gradient</button>
<button class="btn-b-primary-secondary">Gradient</button>
<button class="btn-br-primary-400-secondary-800">Gradient</button>
```

## Gradient Border

Pattern: `btn-border-[base_color]-[base_shade]-[direction]-[color1]-[shade1]-[color2]-[shade2]-[color3]-[shade3]`.

The base color and shade are the background overlay color of the button. You can add an opacity to overwrite the deafault opacity to it.

The `direction` can be: `l | r | t | b | bl | br | tl | tr`. If you do not provide a direction `r` will be chosen.

The 3 color values are for the gradient. For each color you can optionally define a shade. Shade `500` is the default.

```svelte example
<button class="btn-border-surface-800-primary-secondary">Gradient border</button>
<button class="btn-border-surface-800-br-primary-tertiary">Gradient disabled</button>
<button class="btn-border-surface-800-tr-secondary-success">3 Gradient</button>
<button class="btn-border-surface-800-tl-warning-error-secondary">3 Gradient</button>
<button class="btn-border-surface-800/90-br-primary-success-tertiary">3 Gradient (op90)</button>
```

## Icon

You can add icons inside `span` elements inside your button and use the regular `btn` classes to set the colors and size. 

Add the `btn-icon` class to buttons that only have an icon and no text.

```svelte example
<button class="btn-primary btn-icon btn-lg">
	<span class="sr-only">Alarm</span>
	<span class="i-material-symbols:notifications-active-rounded" />
</button>
<button class="btn-border-surface-bl-primary-secondary-success btn-icon">
	<span class="sr-only">Buy</span>
	<span class="i-material-symbols:add-shopping-cart-outline-rounded" />
</button>
<button class="btn-border-surface-tl-primary-tertiary-error">
	<span class="i-material-symbols:notifications-active-rounded" />
	<span>Alarm</span>
</button>
<button class="btn-border-surface-tr-success-warning hover:(text-surface-900)">
	<span class="i-material-symbols:temp-preferences-eco-outline" />
	<span>Green</span>
</button>
```

## Button Groups

Allows you to group children button or anchor elements together.

### Regular

Pattern: `btn-group-[color]-[shade]`.

Creates a horizontal button group with the given color and shade. The shade is optional.

```svelte example
<div class="btn-group-error">
	<button>
		<span class="text-xl i-material-symbols:water-drop-rounded" />
		<span>Water</span>
	</button>
	<button>
		<span class="text-xl i-material-symbols:globe-uk" />
		<span>Earth</span>
	</button>
	<button>
		<span class="text-xl i-mdi:fire" />
		<span>Fire</span>
	</button>
	<button>
		<span class="text-xl i-mdi-weather-windy-variant" />
		<span>Air</span>
	</button>
</div>
<div class="btn-group-tertiary">
	<button>
		<span class="text-xl i-material-symbols:water-drop-rounded" />
	</button>
	<button>
		<span class="text-xl i-material-symbols:globe-uk" />
	</button>
	<button>
		<span class="text-xl i-mdi:fire" />
	</button>
</div>
```

### Vertical

Pattern: `btn-group-vertical-[color]-[shade]`.

Creates a vertical button group with the given color and shade. The shade is optional.

```svelte example
<div class="btn-group-vertical-tertiary">
	<button>
		<span class="text-xl i-material-symbols:water-drop-rounded" />
		<span>Water</span>
	</button>
	<button>
		<span class="text-xl i-material-symbols:globe-uk" />
		<span>Earth</span>
	</button>
	<button>
		<span class="text-xl i-mdi:fire" />
		<span>Fire</span>
	</button>
	<button>
		<span class="text-xl i-mdi-weather-windy-variant" />
		<span>Air</span>
	</button>
</div>
<div class="btn-group-vertical-warning">
	<button>
		<span class="text-xl i-material-symbols:water-drop-rounded" />
	</button>
	<button>
		<span class="text-xl i-material-symbols:globe-uk" />
	</button>
	<button>
		<span class="text-xl i-mdi:fire" />
	</button>
</div>
```

### Outline

Pattern: `btn-group-outline-[color]-[shade]` or `btn-group-vertical-outline-[color]-[shade]`.

Create a button group with outlines. This works for both horizontal and vertical groups. Shades are optional.

```svelte example
<div class="btn-group-outline-primary">
	<button>
		<span class="text-xl i-material-symbols:water-drop-rounded" />
		<span>Water</span>
	</button>
	<button>
		<span class="text-xl i-material-symbols:globe-uk" />
		<span>Earth</span>
	</button>
	<button>
		<span class="text-xl i-mdi:fire" />
		<span>Fire</span>
	</button>
	<button>
		<span class="text-xl i-mdi-weather-windy-variant" />
		<span>Air</span>
	</button>
</div>
<div class="btn-group-vertical-outline-warning">
	<button>
		<span class="text-xl i-material-symbols:water-drop-rounded" />
		<span>Water</span>
	</button>
	<button>
		<span class="text-xl i-material-symbols:globe-uk" />
		<span>Earth</span>
	</button>
	<button>
		<span class="text-xl i-mdi:fire" />
		<span>Fire</span>
	</button>
	<button>
		<span class="text-xl i-mdi-weather-windy-variant" />
		<span>Air</span>
	</button>
</div>
```
