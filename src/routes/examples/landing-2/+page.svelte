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
				'Built on top of accessible headless libraries which strictly adhere to WAI-ARIA standards.'
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

<svelte:head>
	<style>
		.dark #ato-ui-docu > div {
			background-color: rgb(var(--color-surface-800));
		}
		#ato-ui-docu > div {
			background-color: rgb(var(--color-surface-50));
			background-image: radial-gradient(
					at 50% 0%,
					rgba(var(--color-surface-400), 0.25) 0px,
					transparent 50%
				),
				radial-gradient(at 100% 100%, rgba(var(--color-secondary-700), 0.3) 0px, transparent 50%),
				radial-gradient(at 0% 100%, rgba(var(--color-primary-500), 0.3) 0px, transparent 50%);
		}
	</style>
</svelte:head>

<div class="relative flex flex-col justify-center items-center text-surface-900-50">
	<section class="select-none">
		<Particles />

		<div class="font-bold text-xl text-center mt-10">
			The elemental UI component library for Svelte, built with UnoCSS and Melt.
		</div>
	</section>

	<section class="mt-4 mb-0 md:(mt-12 mb-0) flex justify-center items-center gap-8 flex-wrap">
		{#each cards as { icon, title, description }}
			<div
				class="group h-34 w-70 rounded-container shadow-lg shadow-surface-400/70 transition-all duration-300 ease-in-out hover:(surface-50/80-800/80 shadow-primary-700 scale-105) backdrop-blur-sm"
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
					<p
						class="font-sans text-sm text-surface-800-100 group-hover:(text-on-surface-50/90) dark:group-hover:text-on-surface-800/90"
					>
						{description}
					</p>
				</div>
			</div>
		{/each}
	</section>
</div>
