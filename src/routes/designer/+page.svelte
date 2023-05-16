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

	let shades: Partial<FullTheme> = Object.fromEntries(
		Object.keys($custom_theme_hex).map((c) => [
			c,
			generate_palette($custom_theme_hex[<ThemeColor>c])
		])
	);

	$: {
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
	--color-primary-50: ${hex_to_rgb(shades.primary![50].color)}; /* ${shades.primary![50].color} */
	--color-primary-100: ${hex_to_rgb(shades.primary![100].color)}; /* ${shades.primary![100].color} */
	--color-primary-200: ${hex_to_rgb(shades.primary![200].color)}; /* ${shades.primary![200].color} */
	--color-primary-300: ${hex_to_rgb(shades.primary![300].color)}; /* ${shades.primary![300].color} */
	--color-primary-400: ${hex_to_rgb(shades.primary![400].color)}; /* ${shades.primary![400].color} */
	--color-primary-500: ${hex_to_rgb(shades.primary![500].color)}; /* ${shades.primary![500].color} */
	--color-primary-600: ${hex_to_rgb(shades.primary![600].color)}; /* ${shades.primary![600].color} */
	--color-primary-700: ${hex_to_rgb(shades.primary![700].color)}; /* ${shades.primary![700].color} */
	--color-primary-800: ${hex_to_rgb(shades.primary![800].color)}; /* ${shades.primary![800].color} */
	--color-primary-900: ${hex_to_rgb(shades.primary![900].color)}; /* ${shades.primary![900].color} */
	--color-primary-950: ${hex_to_rgb(shades.primary![950].color)}; /* ${shades.primary![950].color} */
	
	/* Secondary Colors */
	--color-secondary-50: ${hex_to_rgb(shades.secondary![50].color)}; /* ${
		shades.secondary![50].color
	} */
	--color-secondary-100: ${hex_to_rgb(shades.secondary![100].color)}; /* ${
		shades.secondary![100].color
	} */
	--color-secondary-200: ${hex_to_rgb(shades.secondary![200].color)}; /* ${
		shades.secondary![200].color
	} */
	--color-secondary-300: ${hex_to_rgb(shades.secondary![300].color)}; /* ${
		shades.secondary![300].color
	} */
	--color-secondary-400: ${hex_to_rgb(shades.secondary![400].color)}; /* ${
		shades.secondary![400].color
	} */
	--color-secondary-500: ${hex_to_rgb(shades.secondary![500].color)}; /* ${
		shades.secondary![500].color
	} */
	--color-secondary-600: ${hex_to_rgb(shades.secondary![600].color)}; /* ${
		shades.secondary![600].color
	} */
	--color-secondary-700: ${hex_to_rgb(shades.secondary![700].color)}; /* ${
		shades.secondary![700].color
	} */
	--color-secondary-800: ${hex_to_rgb(shades.secondary![800].color)}; /* ${
		shades.secondary![800].color
	} */
	--color-secondary-900: ${hex_to_rgb(shades.secondary![900].color)}; /* ${
		shades.secondary![900].color
	} */
	--color-secondary-950: ${hex_to_rgb(shades.secondary![950].color)}; /* ${
		shades.secondary![950].color
	} */
	
	/* Tertiary Colors */
	--color-tertiary-50: ${hex_to_rgb(shades.tertiary![50].color)}; /* ${shades.tertiary![50].color} */
	--color-tertiary-100: ${hex_to_rgb(shades.tertiary![100].color)}; /* ${
		shades.tertiary![100].color
	} */
	--color-tertiary-200: ${hex_to_rgb(shades.tertiary![200].color)}; /* ${
		shades.tertiary![200].color
	} */
	--color-tertiary-300: ${hex_to_rgb(shades.tertiary![300].color)}; /* ${
		shades.tertiary![300].color
	} */
	--color-tertiary-400: ${hex_to_rgb(shades.tertiary![400].color)}; /* ${
		shades.tertiary![400].color
	} */
	--color-tertiary-500: ${hex_to_rgb(shades.tertiary![500].color)}; /* ${
		shades.tertiary![500].color
	} */
	--color-tertiary-600: ${hex_to_rgb(shades.tertiary![600].color)}; /* ${
		shades.tertiary![600].color
	} */
	--color-tertiary-700: ${hex_to_rgb(shades.tertiary![700].color)}; /* ${
		shades.tertiary![700].color
	} */
	--color-tertiary-800: ${hex_to_rgb(shades.tertiary![800].color)}; /* ${
		shades.tertiary![800].color
	} */
	--color-tertiary-900: ${hex_to_rgb(shades.tertiary![900].color)}; /* ${
		shades.tertiary![900].color
	} */
	--color-tertiary-950: ${hex_to_rgb(shades.tertiary![950].color)}; /* ${
		shades.tertiary![950].color
	} */

	/* Surface Colors */
	--color-surface-50: ${hex_to_rgb(shades.surface![50].color)}; /* ${shades.surface![50].color} */
	--color-surface-100: ${hex_to_rgb(shades.surface![100].color)}; /* ${shades.surface![100].color} */
	--color-surface-200: ${hex_to_rgb(shades.surface![200].color)}; /* ${shades.surface![200].color} */
	--color-surface-300: ${hex_to_rgb(shades.surface![300].color)}; /* ${shades.surface![300].color} */
	--color-surface-400: ${hex_to_rgb(shades.surface![400].color)}; /* ${shades.surface![400].color} */
	--color-surface-500: ${hex_to_rgb(shades.surface![500].color)}; /* ${shades.surface![500].color} */
	--color-surface-600: ${hex_to_rgb(shades.surface![600].color)}; /* ${shades.surface![600].color} */
	--color-surface-700: ${hex_to_rgb(shades.surface![700].color)}; /* ${shades.surface![700].color} */
	--color-surface-800: ${hex_to_rgb(shades.surface![800].color)}; /* ${shades.surface![800].color} */
	--color-surface-900: ${hex_to_rgb(shades.surface![900].color)}; /* ${shades.surface![900].color} */
	--color-surface-950: ${hex_to_rgb(shades.surface![950].color)}; /* ${shades.surface![950].color} */
	
	/* Success Colors */
	--color-success-50: ${hex_to_rgb(shades.success![50].color)}; /* ${shades.success![50].color} */
	--color-success-100: ${hex_to_rgb(shades.success![100].color)}; /* ${shades.success![100].color} */
	--color-success-200: ${hex_to_rgb(shades.success![200].color)}; /* ${shades.success![200].color} */
	--color-success-300: ${hex_to_rgb(shades.success![300].color)}; /* ${shades.success![300].color} */
	--color-success-400: ${hex_to_rgb(shades.success![400].color)}; /* ${shades.success![400].color} */
	--color-success-500: ${hex_to_rgb(shades.success![500].color)}; /* ${shades.success![500].color} */
	--color-success-600: ${hex_to_rgb(shades.success![600].color)}; /* ${shades.success![600].color} */
	--color-success-700: ${hex_to_rgb(shades.success![700].color)}; /* ${shades.success![700].color} */
	--color-success-800: ${hex_to_rgb(shades.success![800].color)}; /* ${shades.success![800].color} */
	--color-success-900: ${hex_to_rgb(shades.success![900].color)}; /* ${shades.success![900].color} */
	--color-success-950: ${hex_to_rgb(shades.success![950].color)}; /* ${shades.success![950].color} */
	
	/* Warning Colors */
	--color-warning-50: ${hex_to_rgb(shades.warning![50].color)}; /* ${shades.warning![50].color} */
	--color-warning-100: ${hex_to_rgb(shades.warning![100].color)}; /* ${shades.warning![100].color} */
	--color-warning-200: ${hex_to_rgb(shades.warning![200].color)}; /* ${shades.warning![200].color} */
	--color-warning-300: ${hex_to_rgb(shades.warning![300].color)}; /* ${shades.warning![300].color} */
	--color-warning-400: ${hex_to_rgb(shades.warning![400].color)}; /* ${shades.warning![400].color} */
	--color-warning-500: ${hex_to_rgb(shades.warning![500].color)}; /* ${shades.warning![500].color} */
	--color-warning-600: ${hex_to_rgb(shades.warning![600].color)}; /* ${shades.warning![600].color} */
	--color-warning-700: ${hex_to_rgb(shades.warning![700].color)}; /* ${shades.warning![700].color} */
	--color-warning-800: ${hex_to_rgb(shades.warning![800].color)}; /* ${shades.warning![800].color} */
	--color-warning-900: ${hex_to_rgb(shades.warning![900].color)}; /* ${shades.warning![900].color} */
	--color-warning-950: ${hex_to_rgb(shades.warning![950].color)}; /* ${shades.warning![950].color} */
	
	/* Error Colors */
	--color-error-50: ${hex_to_rgb(shades.error![50].color)}; /* ${shades.error![50].color} */
	--color-error-100: ${hex_to_rgb(shades.error![100].color)}; /* ${shades.error![100].color} */
	--color-error-200: ${hex_to_rgb(shades.error![200].color)}; /* ${shades.error![200].color} */
	--color-error-300: ${hex_to_rgb(shades.error![300].color)}; /* ${shades.error![300].color} */
	--color-error-400: ${hex_to_rgb(shades.error![400].color)}; /* ${shades.error![400].color} */
	--color-error-500: ${hex_to_rgb(shades.error![500].color)}; /* ${shades.error![500].color} */
	--color-error-600: ${hex_to_rgb(shades.error![600].color)}; /* ${shades.error![600].color} */
	--color-error-700: ${hex_to_rgb(shades.error![700].color)}; /* ${shades.error![700].color} */
	--color-error-800: ${hex_to_rgb(shades.error![800].color)}; /* ${shades.error![800].color} */
	--color-error-900: ${hex_to_rgb(shades.error![900].color)}; /* ${shades.error![900].color} */
	--color-error-950: ${hex_to_rgb(shades.error![950].color)}; /* ${shades.error![950].color} */
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

		<Contrasts {shades} />
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
