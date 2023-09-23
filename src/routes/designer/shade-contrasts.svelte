<script lang="ts">
	import type { FullTheme } from './types';
	import { shade_values, theme_colors } from './constants';

	import RangeSlider from 'svelte-range-slider-pips';
	import { slide } from 'svelte/transition';

	import { Switch, RadioGroup } from 'ato-ui';

	import { new_theme } from './stores';
	import type { RadioItem } from 'ato-ui/components/radio-group/types';

	export let shades: FullTheme;

	let items: RadioItem[] = [
		{ value: 'all', label: 'Show All' },
		{ value: 'aa', label: '4+ (AA)' },
		{ value: 'aaa', label: '7+ (AAA)' }
	];

	let contrast_threshold = 22;
	let show_slider = 'primary';
	let showNumbers = true;

	let contrastGroup = 'all';

	$: {
		if (contrastGroup === 'all') {
			contrast_threshold = 22;
		} else if (contrastGroup === 'aa') {
			contrast_threshold = 4;
		} else if (contrastGroup === 'aaa') {
			contrast_threshold = 7;
		}
	}
</script>

<div class="flex gap-2 my-2 w-full justify-between">
	<Switch
		label="Toggle Contrast"
		bind:checked={showNumbers}
		hideLabel={false}
		activeBackground="bg-primary-500"
		labelPosition="left"
		activeIcon="text-surface-900 text-lg i-material-symbols-contrast"
		inactiveIcon="text-surface-900 text-lg i-material-symbols-contrast-rtl-off-rounded"
	/>
	<div>
		<RadioGroup
			{items}
			bind:group={contrastGroup}
			ariaLabel="contrast-guidelines"
			size="sm"
			bgActiveStyles="primary-500"
		/>
	</div>
</div>

<div class="flex flex-col gap-1">
	<div class="flex gap-1">
		{#each shade_values as shade}
			<span class="w-8 font-semibold md:(w-12 font-bold) text-center">{shade}</span>
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
					{@const { contrast, color, on_color } = shades[palette][shade]}
					<div
						class="group h-8 w-8 md:(h-12 w-12) flex justify-center items-center cursor-pointer rounded-container transition-all duration-400 {contrast >=
						contrast_threshold
							? 'scale-80 opacity-50'
							: ''}"
						style="background: {color};"
					>
						{#if showNumbers}
							<span
								class="transition-all text-sm md:text-base group-hover:(font-semibold md:font-bold)"
								style="color: {on_color};"
							>
								{contrast.toFixed(2)}
							</span>
						{/if}
					</div>
				{/each}
			</button>
			{#if show_slider === palette}
				<div
					id="slider-{palette}"
					class="mb-4 mt-5 flex justify-center gap-8 [&>.range-slider]:(w-45) md:(gap-12 [&>.range-slider]:w-65)"
					transition:slide={{ duration: 250 }}
				>
					<div class="range-slider">
						<RangeSlider
							pips
							bind:values={$new_theme.colors[palette].lighten_values}
							--range-slider={shades[palette][200].color}
							--range-handle-inactive={shades[palette][300].color}
							--range-handle-focus={shades[palette][600].color}
							--range-handle={shades[palette][400].color}
						/>
						<div class="font-semibold mt-2">Lighten</div>
					</div>
					<div class="range-slider">
						<RangeSlider
							pips
							bind:values={$new_theme.colors[palette].darken_values}
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
		margin: 0 !important;
	}
</style>
