<script lang="ts">
	import { themeStore, custom_theme_hex } from '../stores';

	import type { ThemeColor, FullTheme, LocalStorageTheme } from './types.d';
	import { theme_colors } from './constants';
	import generate_palette, { create_css_colors } from './colors';

	import ColorPicker from './ColorPicker.svelte';
	import Contrasts from './Contrasts.svelte';

	$themeStore = 'ato';

	const update_shades = (store: LocalStorageTheme) =>
		Object.fromEntries(
			theme_colors.map((c) => [c, generate_palette(store[<ThemeColor>c])])
		) as FullTheme;

	let shades = update_shades($custom_theme_hex);

	let options = {
		container_radius: [
			'0px',
			'2px',
			'4px',
			'6px',
			'8px',
			'10px',
			'12px',
			'14px',
			'16px',
			'20px',
			'24px'
		]
	};

	let container_radius = '6px';

	$: shades = update_shades($custom_theme_hex);

	$: custom_theme_css_variables = `
:root .custom-theme {
	--theme-font-family-base: system-ui;
	--theme-font-family-heading: system-ui;
	--theme-font-color-base: 0, 0, 0;
	--theme-font-color-dark: 255, 255, 255;
	--theme-rounded-base: 6px;
	--theme-rounded-container: ${container_radius};
	--theme-border-base: 1px;

	/* On Colors */
	--on-primary: 255, 255, 255;
	--on-secondary: 0, 0, 0;
	--on-tertiary: 0, 0, 0;
	--on-success: 0, 0, 0;
	--on-warning: 0, 0, 0;
	--on-error: 255, 255, 255;
	--on-surface: 255, 255, 255;

	${create_css_colors(<FullTheme>shades)}
}
	`;
</script>

<svelte:head>
	{@html `<style>${custom_theme_css_variables}</style>`}
</svelte:head>

<div class="custom-theme flex flex-col justify-center items-center gap-8 text-surface-900-50">
	<div
		class="w-1/2 flex flex-col xl:flex-row justify-center items-center gap-8 text-surface-900-50"
	>
		<!-- Select main theme colors -->
		<div class="flex flex-col items-center gap-4">
			<h2 class="font-semibold text-4xl">
				Select your
				<span class="font-extrabold text-gradient-br-primary-secondary-tertiary"> colors </span>
			</h2>
			<div
				class="flex justify-center items-center py-0.5 w-[24.75rem] sm:(py-1 w-[29rem]) md:(py-2 w-[36rem]) bg-white rounded-token-container border-1 border-surface-900/40-50/0"
			>
				{#each theme_colors as c, i}
					<div class="flex flex-col">
						<div
							class="text-surface-950 capitalize text-center mb-2 select-none text-xs sm:text-sm md:(font-semibold text-base)"
						>
							{c}
						</div>
						<ColorPicker
							color={c}
							bind:value={$custom_theme_hex[c].color}
							size="w-14 h-14 sm:(w-16 h-16) md:(w-20 h-20)"
							rounded={i === 0
								? 'rounded-l-token-container'
								: i === theme_colors.length - 1
								? 'rounded-r-token-container'
								: ''}
						/>
					</div>
				{/each}
			</div>
			<div
				class="bg-primary-secondary-tertiary w-[24.75rem] h-14 sm:(w-[29rem] h-16) md:(w-[36rem] h-20) xl:h-32 rounded-token-container"
			/>
			<div
				class="bg-animated-gradient w-[24.75rem] h-14 sm:(w-[29rem] h-16) md:(w-[36rem] h-20) xl:h-32 rounded-token-container"
			/>
		</div>

		<!-- Shade Contrasts -->
		<div class="flex flex-col items-center gap-2">
			<h3 class="font-semibold text-3xl">
				Update shade
				<span class="bg-surface-950-50 text-surface-50-950 rounded-token-container px-1">
					contrasts
				</span>
			</h3>
			<p class="text-justify">
				The numbers show the contrast between the text color and the background color (<code
					>#fff</code
				>
				or <code>#000</code> is chosen by default). You can read more about
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast"
				>
					accessibility contrast guidelines
				</a>
				here. Click on the buttons to see which contrasts do not meet the requirements and click on the
				shades to make them lighter or darker.
			</p>
			<Contrasts bind:shades />
		</div>
	</div>

	<div class="w-full">
		<label>
			<span>Container Radius</span>
			<select bind:value={container_radius}>
				{#each options.container_radius as rad}
					<option value={rad}>{rad}</option>
				{/each}
				<!-- <option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option> -->
			</select>
		</label>
	</div>
</div>

<style>
	select {
		@apply rounded-token-container bg-surface-100-950 outline-primary-500;
	}

	.bg-animated-gradient {
		background: linear-gradient(
			to right,
			rgb(var(--color-primary-500)),
			rgb(var(--color-secondary-500)),
			rgb(var(--color-tertiary-500)),
			rgb(var(--color-success-500)),
			rgb(var(--color-warning-500)),
			rgb(var(--color-error-500))
		);
		background-size: 300% 100%;
		animation: gradient 10s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
