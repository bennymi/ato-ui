<script lang="ts">
	import type { FullTheme } from './types.d';
	import { shade_values, theme_colors } from './constants';

	import RangeSlider from 'svelte-range-slider-pips';
	import { slide } from 'svelte/transition';

	import { custom_theme_hex } from '../stores';

	export let shades: FullTheme;

	let contrast_threshold = 21;
	let show_slider = '';
	let showNumbers = true;
</script>

<div class="flex gap-2 my-2">
	<button
		class="btn-sm btn-border-surface-tertiary-tertiary"
		on:click={() => (showNumbers = !showNumbers)}
	>
		Toggle Numbers
	</button>
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
						{#if showNumbers}
							<span class="transition-all group-hover:(scale-120)" style="color: {onColor};">
								{contrast.toFixed(2)}
							</span>
						{/if}
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
						<!-- values={[50, 60, 70]} -->
						<RangeSlider
							pips
							bind:values={$custom_theme_hex[palette].lightenValues}
							--range-slider={shades[palette][200].color}
							--range-handle-inactive={shades[palette][300].color}
							--range-handle-focus={shades[palette][600].color}
							--range-handle={shades[palette][400].color}
						/>
						<div class="font-semibold mt-2">Lighten</div>
					</div>
					<div class="w-65">
						<RangeSlider
							pips
							bind:values={$custom_theme_hex[palette].darkenValues}
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

<style>
	:global(.rangeSlider) {
		margin: 0;
	}
</style>
