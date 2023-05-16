<script lang="ts">
	import { themeStore, custom_theme_hex } from '../stores';

	import type { ThemeColor, FullTheme } from './types.d';
	import { theme_colors } from './constants';
	import generate_palette, { create_css_colors } from './colors';

	import ColorPicker from './ColorPicker.svelte';
	import Contrasts from './Contrasts.svelte';

	$themeStore = 'ato';

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

	let shades = Object.fromEntries(
		theme_colors.map((c) => [c, generate_palette($custom_theme_hex[<ThemeColor>c])])
	) as FullTheme;

	$: {
		shades = Object.fromEntries(
			theme_colors.map((c) => [c, generate_palette($custom_theme_hex[<ThemeColor>c])])
		) as FullTheme;
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

	${create_css_colors(<FullTheme>shades)}
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
