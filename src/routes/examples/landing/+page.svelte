<script lang="ts">
	import { default as Particles } from './particles.svelte';

	let cards: { icon: string; title: string; description: string }[] = [
		{
			icon: 'i-mdi-palette-swatch',
			title: 'Themeable',
			description: 'Create custom themes for your project with our designer page.'
		},
		{
			icon: 'i-material-symbols-accessibility-new-rounded',
			title: 'Accessible',
			description:
				'Built on top of accessible headless libraries which adhere to WAI-ARIA standards.'
		},
		{
			icon: 'i-material-symbols-water-drop-rounded',
			title: 'Styled Components',
			description: 'We offer already styled components for you to get started quickly.'
		},
		{
			icon: 'i-material-symbols-water-drop-outline-rounded',
			title: 'Headless Components',
			description:
				'We provide examples of headless components built with our design tokens for maximum customizability.'
		},
		{
			icon: 'i-vscode-icons-file-type-unocss',
			title: 'Built with UnoCSS',
			description: 'An instant on-demand CSS engine with powerful presets (Tailwind, Windi, etc.).'
		},
		{
			icon: 'i-mdi-emoticon-wink',
			title: 'CSS Icons',
			description: 'Easy to use icons, thanks to iconify and UnoCSS.'
		},
		{
			icon: 'i-mdi-dots-grid',
			title: 'Tokens & Shortcuts',
			description: 'Helpful shortcuts make it simpler to design projects with fewer CSS classes.'
		}
	];
</script>

<div class="relative flex flex-col justify-center items-center text-surface-900-50">
	<div class="fixed inset-0">
		<Particles />
	</div>
	<section class="flex flex-col gap-8 justify-center select-none">
		<!-- <h1 class="text-inverse-primary-secondary text-8xl font-bold text-center">Ato-UI</h1>
		<h1 class="text-gradient-bl-secondary-primary-tertiary text-8xl font-bold text-center">
			Ato-UI
		</h1> -->
		<!-- <h1 class="text-gradient-b-primary-secondary-600 text-8xl font-bold text-center">AtoUI</h1> -->
		<h1 class="text-9xl text-center">
			<span class="text-gradient-b-primary-secondary-600 font-extrabold">Ato</span><span
				class="font-bold">UI</span
			>
		</h1>
		<div class="font-bold text-xl">
			The elemental ato(mic) UI component library for Svelte, built with UnoCSS.
		</div>
	</section>

	<section class="my-12 md:my-20 flex justify-center items-center gap-8 flex-wrap">

		{#each cards as { icon, title, description }}
			<div
				class="group h-34 w-70 rounded-container shadow-lg shadow-surface-400/70 transition-all duration-300 ease-in-out hover:(surface-400/80-800/80 shadow-primary-700 scale-105) backdrop-blur-sm"
			>
				<div class="mx-4 py-4">
					<div class="mb-1">
						<div class="mb-1 w-fit flex justify-center items-center">
							<span class="text-2xl {icon}" />
							<span class="font-sans text-xl font-bold ml-2">
								{title}
							</span>
						</div>
						<span
							class="block h-0.5 max-w-0 rounded-btn bg-secondary-500 transition-all duration-500 group-hover:max-w-full"
						/>
					</div>
					<p class="font-sans text-sm">
						{description}
					</p>
				</div>
			</div>
		{/each}
	</section>
</div>