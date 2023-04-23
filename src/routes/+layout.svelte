<script lang="ts">
	import '$lib/styles/themes/ato.css';
	import '$lib/styles/themes/water.css';
	import '$lib/styles/themes/earth.css';
	import '$lib/styles/themes/fire.css';
	import '$lib/styles/themes/air.css';

	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import './app.css';

	import NavBar from '$lib/components/docu-layout/NavBar.svelte';
	import Sidebar from '$lib/components/docu-layout/Sidebar.svelte';
	import type { Navigation } from '$lib/components/docu-layout/types';
	import { darkTheme } from '$lib/stores/lightswitch';
	import AtoUI from './AtoUI.svelte';

	import { page } from '$app/stores';

	const themes = ['ato', 'water', 'earth', 'fire', 'air'];

	let activeIdx = 0;
	let sidebarWidth: number;
	let sidebarIsHidden = false;

	const navigation: Navigation = [
		{
			navTitle: 'Components',
			showSidebar: true,
			basePath: '/documentation',
			landingPath: '/documentation/buttons',
			groups: [
				{
					groupTitle: 'Introduction',
					hideTitle: true,
					items: [
						{ title: 'Getting Started', path: '/' },
						{ title: 'Why UnoCSS?', path: '/' },
						{ title: 'Search All Shortcuts', path: '/' }
					]
				},
				{
					groupTitle: 'Shortcuts',
					groupIcon: 'i-vscode-icons:file-type-unocss',
					items: [
						{ title: 'Buttons', path: '/documentation/buttons' },
						{ title: 'Spinners / Loaders', path: '/documentation/spinners' }
					]
				},
				{
					groupTitle: 'Svelte',
					groupIcon: 'i-vscode-icons:file-type-svelte',
					items: [{ title: 'Avatar', path: '/documentation/avatar' }]
				}
			]
		},
		{
			navTitle: 'Designer',
			showSidebar: false,
			basePath: '/designer',
			landingPath: '/designer',
			groups: []
		}
	];

	$: currentNavPage = navigation.find((item) => $page.url.pathname.includes(item.basePath));
	$: activeTheme = themes[activeIdx % themes.length];
</script>

<!-- <div class:dark class="min-w-screen">
	<div class="flex justify-between">
		<div>hi</div>
		<div>bye</div>
	</div>
	<slot />
</div> -->

<div class:dark={$darkTheme} class="{activeTheme} min-w-screen min-h-screen">
	<NavBar
		{navigation}
		icons={[
			{ icon: 'i-mdi:github', link: 'https://github.com/bennymi/ato-ui', title: 'Github' },
			{ icon: 'i-mdi:discord', link: '', title: 'Discord' }
		]}
	>
		<svelte:fragment slot="title">
			<a href="/" class="text-surface-900-50 text-3xl select-none">
				<AtoUI />
			</a>
		</svelte:fragment>
	</NavBar>

	<Sidebar
		bind:width={sidebarWidth}
		bind:sidebarIsHidden
		showSidebar={currentNavPage ? currentNavPage.showSidebar : false}
		groups={currentNavPage ? currentNavPage.groups : []}
	/>

	<div
		class="bg-inverse-white-surface-700 min-h-screen pt-16 pb-20 text-center"
		style={sidebarIsHidden ? '' : `padding-left: ${sidebarWidth}px;`}
	>
		<div class="py-8">
			<button
				class="btn-border-surface-primary-secondary text-on-primary"
				on:click={() => (activeIdx += 1)}
			>
				{activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)}
			</button>
		</div>
		<slot />
	</div>
</div>
