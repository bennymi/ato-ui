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
	import BottomNav from '$lib/components/docu-layout/BottomNav.svelte';
	import type { Navigation, NavGroupItem } from '$lib/components/docu-layout/types';
	import { darkTheme } from '$lib/stores/lightswitch';
	import AtoUI from './AtoUI.svelte';

	import { page } from '$app/stores';

	const themes = ['ato', 'water', 'earth', 'fire', 'air'];

	let activeIdx = 0;
	let sidebarWidth: number;
	let sidebarIsHidden = false;
	let previousPage: NavGroupItem | null = null;
	let nextPage: NavGroupItem | null = null;

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
						{
							title: 'Getting Started',
							path: '/',
							icon: 'i-material-symbols-rocket-launch-rounded'
						},
						{ title: 'Why UnoCSS?', path: '/', icon: 'i-material-symbols:question-mark-rounded' },
						{
							title: 'Icons',
							path: '/',
							icon: 'i-mdi-emoticon-outline',
							hoverIcon: 'i-mdi-emoticon-wink'
						},
						{ title: 'Search All Shortcuts', path: '/', icon: 'i-material-symbols:search-rounded' }
					]
				},
				{
					groupTitle: 'Tokens',
					groupIcon: 'i-mdi-dots-grid',
					items: [
						{ title: 'Background', path: 'documentation/backgrounds' },
						{ title: 'Rounded Borders', path: 'documentation/rounded' },
						{ title: 'Text', path: '/documentation/text' }
					]
				},
				{
					groupTitle: 'Shortcuts',
					groupIcon: 'i-vscode-icons-file-type-unocss',
					items: [
						{ title: 'Buttons', path: '/documentation/buttons' },
						{ title: 'Spinners / Loaders', path: '/documentation/spinners' }
					]
				},
				{
					groupTitle: 'Svelte',
					groupIcon: 'i-vscode-icons-file-type-svelte',
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

	$: activeTheme = themes[activeIdx % themes.length];

	$: currentNavPage = navigation.find((item) => $page.url.pathname.includes(item.basePath));

	$: allGroupItems = currentNavPage?.groups.map((g) => g.items).flat();

	$: currentPageIdx = allGroupItems?.findIndex((item) => item.path === $page.url.pathname);

	$: previousPage =
		allGroupItems && currentPageIdx && currentPageIdx === 0
			? null
			: allGroupItems![currentPageIdx! - 1];

	$: nextPage =
		allGroupItems && currentPageIdx && currentPageIdx === allGroupItems!.length - 1
			? null
			: allGroupItems![currentPageIdx! + 1];
</script>

<div class:dark={$darkTheme} class="{activeTheme} min-w-screen min-h-screen">
	<NavBar
		{navigation}
		icons={[
			{ icon: 'i-mdi-github', link: 'https://github.com/bennymi/ato-ui', title: 'Github' },
			{ icon: 'i-mdi-discord', link: '', title: 'Discord' }
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
		style={`padding-left: ${sidebarIsHidden ? 0 : sidebarWidth}px`}
	>
		<div class="py-8">
			<button
				class="btn-border-surface-primary-secondary text-on-primary"
				on:click={() => (activeIdx += 1)}
			>
				{activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)}
			</button>
		</div>

		<div class="AtoContent px-2 lg:px-3/12">
			<slot />
			{#if currentNavPage && currentNavPage.showSidebar}
				<div class="pt-20 pb-32">
					<BottomNav previous={previousPage} next={nextPage} />
				</div>
			{/if}
		</div>
	</div>
</div>
