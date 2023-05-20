<script lang="ts">
	import { themeStore, customThemeCSSStore } from '../stores';
	import { new_theme } from './stores';

	import type { ThemeColor, FullTheme, LocalStorageColor } from './types.d';
	import { theme_colors } from './constants';
	import generate_palette, { create_css_colors } from './colors';
	import { options } from './options';

	import CodeBlock from '$lib/mdsvex/CodeBlock.svelte';

	import ColorPicker from './ColorPicker.svelte';
	import Contrasts from './Contrasts.svelte';

	$themeStore = 'custom-theme';

	const update_shades = (store: LocalStorageColor) =>
		Object.fromEntries(
			theme_colors.map((c) => [c, generate_palette(store[<ThemeColor>c])])
		) as FullTheme;

	let shades = update_shades($new_theme.colors);
	let copy_state = false;

	function copy_to_clipboard(css: string) {
		// Add code to clipboard
		navigator.clipboard.writeText(css ?? '');

		// Give feedback
		copy_state = true;
		setTimeout(() => {
			copy_state = false;
		}, 1500);
	}

	$: shades = update_shades($new_theme.colors);

	$: custom_theme_css_variables = `
:root .custom-theme {
	--theme-font-family-base: system-ui;
	--theme-font-family-heading: system-ui;

	--theme-font-color-base: 0, 0, 0;
	--theme-font-color-dark: 255, 255, 255;

	--theme-rounded-base: ${$new_theme.btns.radius};
	--theme-rounded-container: ${$new_theme.container_radius};
	--theme-border-base: 1px;

	/* Buttons */
	--btn-radius: ${$new_theme.btns.radius};
	--btn-icon-radius: ${$new_theme.btns.icon_radius};

	--btn-sm-p-y: ${$new_theme.btns.sm.py}rem;
	--btn-sm-p-x: ${$new_theme.btns.sm.px}rem;
	--btn-sm-font-weight: ${$new_theme.btns.sm.font};
	
	--btn-md-p-y: ${$new_theme.btns.md.py}rem;
	--btn-md-p-x: ${$new_theme.btns.md.px}rem;
	--btn-md-font-weight: ${$new_theme.btns.md.font};

	--btn-lg-p-y: ${$new_theme.btns.lg.py}rem;
	--btn-lg-p-x: ${$new_theme.btns.lg.px}rem;
	--btn-lg-font-weight: ${$new_theme.btns.lg.font};

	--btn-xl-p-y: ${$new_theme.btns.xl.py}rem;
	--btn-xl-p-x: ${$new_theme.btns.xl.px}rem;
	--btn-xl-font-weight: ${$new_theme.btns.xl.font};

	${create_css_colors(<FullTheme>shades)}
}
	`;

	$: $customThemeCSSStore = custom_theme_css_variables;
</script>

<div class="px-6" />

<svelte:head>
	{@html `<style>${custom_theme_css_variables}</style>`}
</svelte:head>

<div class="absolute fixed bottom-5 right-5 2xl:(bottom-10 right-20)">
	<button
		class="btn-border-surface-bl-primary-secondary-success btn-md xl:btn-lg"
		on:click={() => copy_to_clipboard(custom_theme_css_variables)}
	>
		<span
			class={copy_state
				? 'i-material-symbols-content-copy-rounded'
				: 'i-material-symbols-content-copy-outline-rounded'}
		/>
		<span>Copy CSS</span>
	</button>
</div>

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
			<p class="text-justify">
				You can browse the rest of the website with this theme as well. (1) First pick your theme
				colors. (2) Next, check that the contrasts of the text colors on the theme colors meet the
				AA or AAA requirements for all shades. (3) After that you can adjust other variables, such
				as the radius and size of your buttons. (4) Finally, copy the CSS and the <code
					>unocss.config.ts</code
				> into your project.
			</p>
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
							bind:value={$new_theme.colors[c].color}
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

	<!-- Other theme values -->
	<div class="w-full">
		<div class="w-full px-4 py-2 border-1 border-surface-900/40-200/20 rounded-token-container">
			<div class="flex items-center gap-2">
				<label class="w-1/2">
					<span>Button Radius</span>
					<select bind:value={$new_theme.btns.radius}>
						{#each options.btn_radius as rad}
							<option value={rad}>{rad}</option>
						{/each}
					</select>
				</label>
				<div class="w-1/2 flex justify-center items-center gap-4">
					<button class="btn-primary btn-sm">Click</button>
					<button class="btn-primary-secondary-tertiary btn-md">Click</button>
					<button class="btn-glass-primary-secondary btn-lg">Click</button>
					<button class="btn-border-surface-primary-secondary btn-xl">Click</button>
					<button class="btn-primary btn-icon btn-lg">
						<span class="i-material-symbols:notifications-active-rounded" />
					</button>
				</div>
			</div>
			<label>
				<span>Icon Button Radius</span>
				<select bind:value={$new_theme.btns.icon_radius}>
					{#each options.btn_icon_radius as rad}
						<option value={rad}>{rad}</option>
					{/each}
				</select>
			</label>
			<label>
				<span>Container Radius</span>
				<select bind:value={$new_theme.container_radius}>
					{#each options.container_radius as rad}
						<option value={rad}>{rad}</option>
					{/each}
				</select>
			</label>
			<div class="flex flex-col gap-4">
				{#each options.btn_sizes as size}
					<div>
						<div class="text-xl font-bold">{options.btns[size].title}</div>
						<!-- <div class="flex gap-2 [&>label]:(flex-1)"> -->
						<div class="flex gap-2 [&>label]:(w-30)">
							<label>
								<span>p-x</span>
								<select bind:value={$new_theme.btns[size].px}>
									{#each options.btns[size].px as px}
										<option value={px}>{px}rem</option>
									{/each}
								</select>
							</label>
							<label>
								<span>p-y</span>
								<select bind:value={$new_theme.btns[size].py}>
									{#each options.btns[size].py as py}
										<option value={py}>{py}rem</option>
									{/each}
								</select>
							</label>
							<label>
								<span>Font weight</span>
								<select bind:value={$new_theme.btns[size].font}>
									{#each options.btns[size].font as weight}
										<option value={weight}>{weight}</option>
									{/each}
								</select>
							</label>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	label {
		@apply flex flex-col gap-2 mb-4;
	}

	label > span {
		@apply font-bold;
	}

	select {
		@apply rounded-token-container bg-surface-50-900 outline-primary-500;
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
