<script lang="ts">
	import { themeStore, custom_theme_hex } from '../stores';

	import type { ThemeColor, Theme } from './types.d';

	import ColorPicker from './ColorPicker.svelte';

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
		let rgb_theme: Theme = {};

		theme_colors.forEach((c) => {
			rgb_theme[c] = hex_to_rgb(hex_theme[c] as string);
		});

		return rgb_theme;
	}

	let themeRGB: Theme = convert_theme($custom_theme_hex);

	$: {
		themeRGB = convert_theme($custom_theme_hex);
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
	--color-primary-500: ${themeRGB.primary};
	
	/* Secondary Colors */
	--color-secondary-500: ${themeRGB.secondary};
	
	/* Tertiary Colors */
	--color-tertiary-500: ${themeRGB.tertiary};

	/* Surface Colors */
	--color-surface-500: ${themeRGB.surface};
	
	/* Success Colors */
	--color-success-500: ${themeRGB.success};
	
	/* Warning Colors */
	--color-warning-500: ${themeRGB.warning};
	
	/* Error Colors */
	--color-error-500: ${themeRGB.error};
}
	`;
</script>

<svelte:head>
	{@html `<style>${customThemeCSS}</style>`}
</svelte:head>

<div class="custom-theme flex justify-center items-center">
	<div class="w-[36rem] flex flex-col gap-4">
		<h2 class="text-surface-900-50 font-bold text-2xl">Select Your Colors</h2>
		<div
			class="flex justify-center items-center py-2 bg-white rounded-token-container border-1 border-surface-900/40-50/0"
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
		<div class="bg-primary-secondary-tertiary w-full h-20 rounded-token-container" />
		<div class="bg-animated-gradient w-full h-20 rounded-token-container" />
		<div class="text-center">
			<div class="text-primary-500 font-bold">this is some text</div>
		</div>
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
