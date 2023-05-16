<script lang="ts">
	import type { FullTheme, ThemeColor } from './types.d';
	import { shade_values, theme_colors } from './constants';

	import RangeSlider from 'svelte-range-slider-pips';
	import { slide } from 'svelte/transition';

	export let shades: FullTheme;

	let bg_colors: { [key in ThemeColor]: string[] } = {
		primary: [
			'bg-primary-50',
			'bg-primary-100',
			'bg-primary-200',
			'bg-primary-300',
			'bg-primary-400',
			'bg-primary-500',
			'bg-primary-600',
			'bg-primary-700',
			'bg-primary-800',
			'bg-primary-900',
			'bg-primary-950'
		],
		secondary: [
			'bg-secondary-50',
			'bg-secondary-100',
			'bg-secondary-200',
			'bg-secondary-300',
			'bg-secondary-400',
			'bg-secondary-500',
			'bg-secondary-600',
			'bg-secondary-700',
			'bg-secondary-800',
			'bg-secondary-900',
			'bg-secondary-950'
		],
		tertiary: [
			'bg-tertiary-50',
			'bg-tertiary-100',
			'bg-tertiary-200',
			'bg-tertiary-300',
			'bg-tertiary-400',
			'bg-tertiary-500',
			'bg-tertiary-600',
			'bg-tertiary-700',
			'bg-tertiary-800',
			'bg-tertiary-900',
			'bg-tertiary-950'
		],
		surface: [
			'bg-surface-50',
			'bg-surface-100',
			'bg-surface-200',
			'bg-surface-300',
			'bg-surface-400',
			'bg-surface-500',
			'bg-surface-600',
			'bg-surface-700',
			'bg-surface-800',
			'bg-surface-900',
			'bg-surface-950'
		],
		success: [
			'bg-success-50',
			'bg-success-100',
			'bg-success-200',
			'bg-success-300',
			'bg-success-400',
			'bg-success-500',
			'bg-success-600',
			'bg-success-700',
			'bg-success-800',
			'bg-success-900',
			'bg-success-950'
		],
		warning: [
			'bg-warning-50',
			'bg-warning-100',
			'bg-warning-200',
			'bg-warning-300',
			'bg-warning-400',
			'bg-warning-500',
			'bg-warning-600',
			'bg-warning-700',
			'bg-warning-800',
			'bg-warning-900',
			'bg-warning-950'
		],
		error: [
			'bg-error-50',
			'bg-error-100',
			'bg-error-200',
			'bg-error-300',
			'bg-error-400',
			'bg-error-500',
			'bg-error-600',
			'bg-error-700',
			'bg-error-800',
			'bg-error-900',
			'bg-error-950'
		]
	};

	// let bg_gradients = {
	// 	primary: 'hover:(bg-primary-50-primary-950)',
	// 	secondary: 'hover:(bg-secondary-50-secondary-950)',
	// 	tertiary: 'hover:(bg-tertiary-50-tertiary-950)',
	// 	surface: 'hover:(bg-surface-50-surface-950)',
	// 	success: 'hover:(bg-success-50-success-950)',
	// 	warning: 'hover:(bg-warning-50-warning-950)',
	// 	error: 'hover:(bg-error-50-error-950)'
	// };

	let contrast_threshold = 21;
	let show_slider = '';
</script>

<div class="flex gap-2 my-2">
	<button
		class="btn-sm btn-border-surface-tl-primary-secondary"
		on:click={() => (contrast_threshold = 21)}>Show all</button
	>
	<button
		class="btn-sm btn-border-surface-tl-primary-secondary"
		on:click={() => (contrast_threshold = 4)}>4+ (AA)</button
	>
	<button
		class="btn-sm btn-border-surface-tl-primary-secondary"
		on:click={() => (contrast_threshold = 7)}>7+ (AAA)</button
	>
</div>

<div class="flex flex-col gap-1">
	<div class="flex gap-1">
		{#each shade_values as shade}
			<span class="w-12 text-center font-bold">{shade}</span>
		{/each}
	</div>
	{#each theme_colors as palette}
		<div class="flex flex-col">
			<button
				class="flex gap-1 justify-center items-center"
				on:click={() => (show_slider = show_slider === palette ? '' : palette)}
				aria-expanded={show_slider === palette}
				aria-controls="slider-{palette}"
			>
				{#each shade_values as shade}
					{@const { contrast, color, onColor } = shades[palette][shade]}
					<div
						class="group flex justify-center items-center cursor-pointer h-12 w-12 rounded-token-container transition-all duration-400 {contrast >=
						contrast_threshold
							? 'scale-80 opacity-50'
							: ''}"
						style="background: {color};"
					>
						<span class="transition-all group-hover:(scale-120)" style="color: {onColor};">
							{contrast.toFixed(2)}
						</span>
					</div>
				{/each}
			</button>
			{#if show_slider === palette}
				<div
					id="slider-{palette}"
					class="mb-4 mt-5 flex gap-12"
					transition:slide={{ duration: 250 }}
				>
					<div class="w-65">
						<RangeSlider
							values={[50, 60, 70]}
							--range-slider={shades[palette][200].color}
							--range-handle-inactive={shades[palette][300].color}
							--range-handle-focus={shades[palette][600].color}
							--range-handle={shades[palette][400].color}
						/>
						<div class="font-semibold mt-2">Lighten</div>
					</div>
					<div class="w-65">
						<RangeSlider
							values={[50, 60, 70]}
							--range-slider={shades[palette][200].color}
							--range-handle-inactive={shades[palette][300].color}
							--range-handle-focus={shades[palette][600].color}
							--range-handle={shades[palette][400].color}
						/>
						<div class="font-semibold mt-2">Darken</div>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<!-- <div class="flex flex-col gap-1">
	{#each theme_colors as palette}
		<div class="flex gap-1 justify-center items-center">
			{#each bg_colors[palette] as shade}
				<div
					class="group flex justify-center items-center cursor-pointer h-10 w-10 rounded-token-container transition-all hover:() {shade}"
				>
					<span class="transition-all group-hover:(scale-120)">1.0</span>
				</div>
			{/each}
		</div>
	{/each}
	<div class="flex gap-1 justify-center items-center">
		<div class="h-10 w-10 rounded-token-container bg-teal-50" />
		<div class="h-10 w-10 rounded-token-container bg-teal-100" />
		<div class="h-10 w-10 rounded-token-container bg-teal-200" />
		<div class="h-10 w-10 rounded-token-container bg-teal-300" />
		<div class="h-10 w-10 rounded-token-container bg-teal-400" />
		<div class="h-10 w-10 rounded-token-container bg-teal-500" />
		<div class="h-10 w-10 rounded-token-container bg-teal-600" />
		<div class="h-10 w-10 rounded-token-container bg-teal-700" />
		<div class="h-10 w-10 rounded-token-container bg-teal-800" />
		<div class="h-10 w-10 rounded-token-container bg-teal-900" />
		<div class="h-10 w-10 rounded-token-container bg-teal-950" />
	</div>
</div> -->

<!-- <div class="flex flex-col gap-1 [&>div>div]:(h-10 w-10 rounded-token-container)">
	{#each theme_colors as palette}
		<div class="flex gap-1 justify-center items-center">
			{#each bg_colors[palette] as shade}
				<div
					class="group relative flex justify-center items-center cursor-pointer transition-all hover:(rotate-90) {shade}"
				>
					<span class="absolute transition-all group-hover:(-rotate-90)">1.0</span>
				</div>
			{/each}
		</div>
	{/each}
</div> -->

<!-- <div class="relative flex w-full h-[calc(20.5rem)]">
	<div class="bg-surface-950 w-1/2 h-full rounded-l-token-container" />
	<div class="bg-surface-50 w-1/2 h-full rounded-r-token-container" />
	<div
		class="absolute top-0 left-0 right-0 bottom-0 m-auto flex flex-col gap-1 [&>div>div]:(h-10 w-10 rounded-token-container)"
	>
		{#each theme_colors as palette}
			<div class="flex gap-1 justify-center items-center">
				{#each bg_colors[palette] as shade}
					<div
						class="group relative flex justify-center items-center cursor-pointer transition-all hover:(rotate-90) {shade}"
					>
						<span class="absolute transition-all group-hover:(-rotate-90)">1.0</span>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div> -->

<style>
	:global(.rangeSlider) {
		margin: 0;
	}
</style>
