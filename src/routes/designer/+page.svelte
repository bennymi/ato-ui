<script lang="ts">
	import { themeStore, custom_theme_hex } from '../stores';

	import type { ThemeColor, Theme, FullTheme } from './types.d';
	import generate_palette from './colors';

	import ColorPicker from './ColorPicker.svelte';
	import Contrasts from './Contrasts.svelte';

	$themeStore = 'ato';

	let theme_colors: ThemeColor[] = [
		'primary',
		'secondary',
		'tertiary',
		'surface',
		'success',
		'warning',
		'error'
	];

	function hex_to_rgb(hex: string) {
		const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);

		if (m) {
			const r = parseInt(m[1], 16);
			const g = parseInt(m[2], 16);
			const b = parseInt(m[3], 16);

			return `${r}, ${g}, ${b}`;
		}

		return '';
	}

	function convert_theme(hex_theme: Theme) {
		let rgb_theme: Partial<Theme> = {};

		theme_colors.forEach((c) => {
			rgb_theme[c] = hex_to_rgb(hex_theme[c] as string);
		});

		return rgb_theme;
	}

	// let themeRGB: Partial<Theme> = convert_theme($custom_theme_hex);
	let shades: Partial<FullTheme> = Object.fromEntries(
		Object.keys($custom_theme_hex).map((c) => [
			c,
			generate_palette($custom_theme_hex[<ThemeColor>c])
		])
	);

	$: {
		// themeRGB = convert_theme($custom_theme_hex);

		shades = Object.fromEntries(
			Object.keys($custom_theme_hex).map((c) => [
				c,
				generate_palette($custom_theme_hex[<ThemeColor>c])
			])
		);
	}

	$: customThemeCSS = `
:root .custom-theme {
	--theme-font-family-base: system-ui;
	--theme-font-family-heading: system-ui;
	--theme-font-color-base: 0, 0, 0;
	--theme-font-color-dark: 255, 255, 255;
	--theme-rounded-base: 6px;
	--theme-rounded-container: 6px;
	--theme-border-base: 1px;

	/* On Colors */
	--on-primary: 255, 255, 255;
	--on-secondary: 0, 0, 0;
	--on-tertiary: 255, 255, 255;
	--on-success: 0, 0, 0;
	--on-warning: 0, 0, 0;
	--on-error: 255, 255, 255;
	--on-surface: 255, 255, 255;

	/* Primary Colors */
	--color-primary-50: ${hex_to_rgb(shades.primary![50])}; /* ${shades.primary![50]} */
	--color-primary-100: ${hex_to_rgb(shades.primary![100])}; /* ${shades.primary![100]} */
	--color-primary-200: ${hex_to_rgb(shades.primary![200])}; /* ${shades.primary![200]} */
	--color-primary-300: ${hex_to_rgb(shades.primary![300])}; /* ${shades.primary![300]} */
	--color-primary-400: ${hex_to_rgb(shades.primary![400])}; /* ${shades.primary![400]} */
	--color-primary-500: ${hex_to_rgb(shades.primary![500])}; /* ${shades.primary![500]} */
	--color-primary-600: ${hex_to_rgb(shades.primary![600])}; /* ${shades.primary![600]} */
	--color-primary-700: ${hex_to_rgb(shades.primary![700])}; /* ${shades.primary![700]} */
	--color-primary-800: ${hex_to_rgb(shades.primary![800])}; /* ${shades.primary![800]} */
	--color-primary-900: ${hex_to_rgb(shades.primary![900])}; /* ${shades.primary![900]} */
	--color-primary-950: ${hex_to_rgb(shades.primary![950])}; /* ${shades.primary![950]} */
	
	/* Secondary Colors */
	--color-secondary-50: ${hex_to_rgb(shades.secondary![50])}; /* ${shades.secondary![50]} */
	--color-secondary-100: ${hex_to_rgb(shades.secondary![100])}; /* ${shades.secondary![100]} */
	--color-secondary-200: ${hex_to_rgb(shades.secondary![200])}; /* ${shades.secondary![200]} */
	--color-secondary-300: ${hex_to_rgb(shades.secondary![300])}; /* ${shades.secondary![300]} */
	--color-secondary-400: ${hex_to_rgb(shades.secondary![400])}; /* ${shades.secondary![400]} */
	--color-secondary-500: ${hex_to_rgb(shades.secondary![500])}; /* ${shades.secondary![500]} */
	--color-secondary-600: ${hex_to_rgb(shades.secondary![600])}; /* ${shades.secondary![600]} */
	--color-secondary-700: ${hex_to_rgb(shades.secondary![700])}; /* ${shades.secondary![700]} */
	--color-secondary-800: ${hex_to_rgb(shades.secondary![800])}; /* ${shades.secondary![800]} */
	--color-secondary-900: ${hex_to_rgb(shades.secondary![900])}; /* ${shades.secondary![900]} */
	--color-secondary-950: ${hex_to_rgb(shades.secondary![950])}; /* ${shades.secondary![950]} */
	
	/* Tertiary Colors */
	--color-tertiary-50: ${hex_to_rgb(shades.tertiary![50])}; /* ${shades.tertiary![50]} */
	--color-tertiary-100: ${hex_to_rgb(shades.tertiary![100])}; /* ${shades.tertiary![100]} */
	--color-tertiary-200: ${hex_to_rgb(shades.tertiary![200])}; /* ${shades.tertiary![200]} */
	--color-tertiary-300: ${hex_to_rgb(shades.tertiary![300])}; /* ${shades.tertiary![300]} */
	--color-tertiary-400: ${hex_to_rgb(shades.tertiary![400])}; /* ${shades.tertiary![400]} */
	--color-tertiary-500: ${hex_to_rgb(shades.tertiary![500])}; /* ${shades.tertiary![500]} */
	--color-tertiary-600: ${hex_to_rgb(shades.tertiary![600])}; /* ${shades.tertiary![600]} */
	--color-tertiary-700: ${hex_to_rgb(shades.tertiary![700])}; /* ${shades.tertiary![700]} */
	--color-tertiary-800: ${hex_to_rgb(shades.tertiary![800])}; /* ${shades.tertiary![800]} */
	--color-tertiary-900: ${hex_to_rgb(shades.tertiary![900])}; /* ${shades.tertiary![900]} */
	--color-tertiary-950: ${hex_to_rgb(shades.tertiary![950])}; /* ${shades.tertiary![950]} */

	/* Surface Colors */
	--color-surface-50: ${hex_to_rgb(shades.surface![50])}; /* ${shades.surface![50]} */
	--color-surface-100: ${hex_to_rgb(shades.surface![100])}; /* ${shades.surface![100]} */
	--color-surface-200: ${hex_to_rgb(shades.surface![200])}; /* ${shades.surface![200]} */
	--color-surface-300: ${hex_to_rgb(shades.surface![300])}; /* ${shades.surface![300]} */
	--color-surface-400: ${hex_to_rgb(shades.surface![400])}; /* ${shades.surface![400]} */
	--color-surface-500: ${hex_to_rgb(shades.surface![500])}; /* ${shades.surface![500]} */
	--color-surface-600: ${hex_to_rgb(shades.surface![600])}; /* ${shades.surface![600]} */
	--color-surface-700: ${hex_to_rgb(shades.surface![700])}; /* ${shades.surface![700]} */
	--color-surface-800: ${hex_to_rgb(shades.surface![800])}; /* ${shades.surface![800]} */
	--color-surface-900: ${hex_to_rgb(shades.surface![900])}; /* ${shades.surface![900]} */
	--color-surface-950: ${hex_to_rgb(shades.surface![950])}; /* ${shades.surface![950]} */
	
	/* Success Colors */
	--color-success-50: ${hex_to_rgb(shades.success![50])}; /* ${shades.success![50]} */
	--color-success-100: ${hex_to_rgb(shades.success![100])}; /* ${shades.success![100]} */
	--color-success-200: ${hex_to_rgb(shades.success![200])}; /* ${shades.success![200]} */
	--color-success-300: ${hex_to_rgb(shades.success![300])}; /* ${shades.success![300]} */
	--color-success-400: ${hex_to_rgb(shades.success![400])}; /* ${shades.success![400]} */
	--color-success-500: ${hex_to_rgb(shades.success![500])}; /* ${shades.success![500]} */
	--color-success-600: ${hex_to_rgb(shades.success![600])}; /* ${shades.success![600]} */
	--color-success-700: ${hex_to_rgb(shades.success![700])}; /* ${shades.success![700]} */
	--color-success-800: ${hex_to_rgb(shades.success![800])}; /* ${shades.success![800]} */
	--color-success-900: ${hex_to_rgb(shades.success![900])}; /* ${shades.success![900]} */
	--color-success-950: ${hex_to_rgb(shades.success![950])}; /* ${shades.success![950]} */
	
	/* Warning Colors */
	--color-warning-50: ${hex_to_rgb(shades.warning![50])}; /* ${shades.warning![50]} */
	--color-warning-100: ${hex_to_rgb(shades.warning![100])}; /* ${shades.warning![100]} */
	--color-warning-200: ${hex_to_rgb(shades.warning![200])}; /* ${shades.warning![200]} */
	--color-warning-300: ${hex_to_rgb(shades.warning![300])}; /* ${shades.warning![300]} */
	--color-warning-400: ${hex_to_rgb(shades.warning![400])}; /* ${shades.warning![400]} */
	--color-warning-500: ${hex_to_rgb(shades.warning![500])}; /* ${shades.warning![500]} */
	--color-warning-600: ${hex_to_rgb(shades.warning![600])}; /* ${shades.warning![600]} */
	--color-warning-700: ${hex_to_rgb(shades.warning![700])}; /* ${shades.warning![700]} */
	--color-warning-800: ${hex_to_rgb(shades.warning![800])}; /* ${shades.warning![800]} */
	--color-warning-900: ${hex_to_rgb(shades.warning![900])}; /* ${shades.warning![900]} */
	--color-warning-950: ${hex_to_rgb(shades.warning![950])}; /* ${shades.warning![950]} */
	
	/* Error Colors */
	--color-error-50: ${hex_to_rgb(shades.error![50])}; /* ${shades.error![50]} */
	--color-error-100: ${hex_to_rgb(shades.error![100])}; /* ${shades.error![100]} */
	--color-error-200: ${hex_to_rgb(shades.error![200])}; /* ${shades.error![200]} */
	--color-error-300: ${hex_to_rgb(shades.error![300])}; /* ${shades.error![300]} */
	--color-error-400: ${hex_to_rgb(shades.error![400])}; /* ${shades.error![400]} */
	--color-error-500: ${hex_to_rgb(shades.error![500])}; /* ${shades.error![500]} */
	--color-error-600: ${hex_to_rgb(shades.error![600])}; /* ${shades.error![600]} */
	--color-error-700: ${hex_to_rgb(shades.error![700])}; /* ${shades.error![700]} */
	--color-error-800: ${hex_to_rgb(shades.error![800])}; /* ${shades.error![800]} */
	--color-error-900: ${hex_to_rgb(shades.error![900])}; /* ${shades.error![900]} */
	--color-error-950: ${hex_to_rgb(shades.error![950])}; /* ${shades.error![950]} */
}
	`;
</script>

<svelte:head>
	{@html `<style>${customThemeCSS}</style>`}
</svelte:head>

<div class="custom-theme flex justify-center items-center">
	<div class="w-1/2 flex flex-col justify-center items-center gap-4">
		<h2 class="text-surface-900-50 font-semibold text-4xl">
			Select Your
			<span class="font-extrabold text-gradient-br-primary-secondary-tertiary"> Colors </span>
		</h2>
		<div
			class="flex justify-center items-center py-2 w-[36rem] bg-white rounded-token-container border-1 border-surface-900/40-50/0"
		>
			{#each theme_colors as c, i}
				<div class="flex flex-col">
					<div class="capitalize font-semibold text-center mb-2 select-none">{c}</div>
					<ColorPicker
						bind:value={$custom_theme_hex[c]}
						size="w-20 h-20"
						rounded={i === 0
							? 'rounded-l-token-container'
							: i === theme_colors.length - 1
							? 'rounded-r-token-container'
							: ''}
					/>
				</div>
			{/each}
		</div>
		<div class="bg-primary-secondary-tertiary w-[36rem] h-20 rounded-token-container" />
		<div class="bg-animated-gradient w-[36rem] h-20 rounded-token-container" />

		<Contrasts />
	</div>
</div>

<style>
	.bg-animated-gradient {
		/* background: linear-gradient(
			to right,
			#ee7752,
			#e73c7e,
			#23a6d5,
			#23d5ab,
			#23a6d5,
			#e73c7e,
			#ee7752
		); */
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
