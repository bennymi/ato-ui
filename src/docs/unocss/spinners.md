---
title: Spinners / Loaders
description: Allows you to easily add spinners to your website when loading data.
---

# Spinners / Loaders

## Examples

<!-- <div class="flex justify-center items-center">
	<div class="flex justify-center items-center gap-x-32 gap-y-20 flex-wrap"> -->
<div class="w-full flex flex-wrap gap-x-16 gap-y-4 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4">
	<!-- Regular circle -->
	<span class="s-circle-primary" />
	<span class="s-circle-split-primary" />
	<span class="s-circle-secondary border-dotted border-10" />
	<span class="s-circle-tertiary-800 border-dashed border-6" />
	<!-- Dots fading -->
	<!-- <span class="s-dots-primary" />
	<span class="s-dots-primary-secondary-tertiary" /> -->
	<!-- Hovering squares -->
	<span
		class="s-squares-hover-tertiary-secondary-primary dark:s-squares-hover-tertiary-secondary-primary-200"
	/>
	<!-- Flipping squares -->
	<span class="s-squares-flip-primary" />
	<!-- <span class="s-squares-flip-secondary-600-primary-700-tertiary rounded-xl" /> -->
	<!-- Sliding bars -->
	<!-- <span class="s-bars-primary-secondary-tertiary" />
	<span class="s-bars-primary-800-success-error" /> -->
	<!-- Shape shifting square -->
	<span class="s-corners-outline-tertiary" />
	<span class="s-corners-outline-secondary border-primary/0-bl-error-tertiary-primary" />
	<!-- Squares folding -->
	<!-- <span class="s-squares-folding-primary" />
	<span class="s-squares-folding-secondary" />
	<span class="s-squares-folding-tertiary-700" /> -->
	<!-- 2 Squares rotating -->
	<span class="s-squares-rotate-primary" />
	<span class="s-squares-rotate-primary-secondary" />
</div>
	<!-- </div>
</div> -->

## Iconify Spinners

There is an [svg-spinners](https://icones.js.org/collection/svg-spinners) iconify library with 46 additional spinners, which you can easily add to your project: `pnpm add -D @iconify-json/svg-spinners`.

To customize these spinners colors use regular Tailwind classes to modify the size and color.

Example: `w-12 h-12 text-primary-500 i-svg-spinners-blocks-scale`.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span class="mr-2 w-12 h-12 text-primary-500 i-svg-spinners-blocks-wave" />
		i-svg-spinners-blocks-wave
	</div>
	<div>
		<span class="mr-2 w-12 h-12 text-secondary-500 i-svg-spinners-blocks-shuffle-2" />
		i-svg-spinners-blocks-shuffle-2
	</div>
	<div>
		<span class="mr-2 w-12 h-12 text-tertiary-500 i-svg-spinners-blocks-scale" />
		i-svg-spinners-blocks-scale
	</div>
	<div>
		<span class="mr-2 w-12 h-12 text-success-500 i-svg-spinners-3-dots-move" />
		i-svg-spinners-3-dots-move
	</div>
	<div>
		<span class="mr-2 w-12 h-12 text-warning-500 i-svg-spinners-gooey-balls-2" />
		i-svg-spinners-gooey-balls-2
	</div>
	<div>
		<span class="mr-2 w-12 h-12 text-error-500 i-svg-spinners-pulse-rings-multiple" />
		i-svg-spinners-pulse-rings-multiple
	</div>
</div>

## Size

You can set the size of each spinner by setting the width and height after the the `s-` prefix. For example: `s-wh15-circle-secondary`, `s-wh20-flip-tertiary`. This will set the width and height to `w-15 h-15` and `w-20 h-20` respectively.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span class="mr-2 s-squares-rotate-primary-secondary" />
		s-squares-rotate-primary-secondary
	</div>
	<div>
		<span class="mr-2 s-wh15-squares-rotate-primary-secondary" />
		s-wh15-squares-rotate-primary-secondary
	</div>
	<div>
		<span class="mr-2 s-wh20-squares-rotate-primary-secondary" />
		s-wh20-squares-rotate-primary-secondary
	</div>
</div>

## Colors & Variations

Ato-UI's spinners can be customized with different colors. Each one is a bit different. Some might have 2-3 changable colors and others only 1. For each color you can also specify a shade.

### Circle

Pattern: `s-circle-{color}`.

You can change the border type and size of circles by using regular Tailwind classes like: `border-dashed`,  `border-spotted`, `border-6`, and `border-8`.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span class="mr-2 s-wh8-circle-secondary border-dotted border-4" />
		s-wh8-circle-secondary border-dotted border-4
	</div>
	<div>
		<span class="mr-2 s-wh8-circle-secondary border-dashed border-4" />
		s-wh8-circle-secondary border-dashed border-4
	</div>
</div>

### Circle Split

Pattern: `s-circle-split-{color}`.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span class="mr-2 s-wh8-circle-split-secondary" />
		s-wh8-circle-split-secondary
	</div>
</div>

### Squares Hover

Pattern: `s-squares-hover-{color1}-{color2}-{color3}`. You can set the colors of all three layers.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span
			class="s-wh12-squares-hover-tertiary-secondary-primary"
		/>
		<span>s-squares-hover-tertiary-secondary-primary</span>
	</div>
</div>

### Squares Rotate

Pattern: `s-squares-hover-{color1}-{color2}`. You can set the colors of both rotating squares. The second color is optional.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span class="s-squares-rotate-primary-secondary" />
		s-squares-rotate-primary-secondary
	</div>
</div>

### Corners

Pattern: `s-corners-{color}`. 

You can also change the background with some additional classes such as:`bg-gradient-primary-secondary-tertiary`.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span class="s-wh10-corners-primary" />
		s-corners-primary
	</div>
	<div>
		<span class="s-wh10-corners-primary bg-gradient-error-tertiary-primary" />
		s-corners-primary bg-gradient-error-tertiary-primary
	</div>
</div>

### Corners Outline

Pattern: `s-corners-outline-{color}`.

<div class="w-full flex flex-col gap-6 justify-center items-center p-4 rounded-container border-1 border-surface-500/30-200/30 my-4 text-surface-900-50 font-mono">
	<div>
		<span class="s-wh10-corners-outline-primary" />
		s-corners-outline-primary
	</div>
</div>