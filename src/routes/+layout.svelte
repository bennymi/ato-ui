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
	import TableOfContents from '$lib/components/table-of-contents/TableOfContents.svelte';
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
			basePath: '/docu',
			landingPath: '/docu/shortcuts/buttons',
			groups: [
				{
					groupTitle: 'Introduction',
					hideTitle: true,
					items: [
						{
							title: 'Getting Started',
							path: '/docu/get-started/installation',
							icon: 'i-material-symbols-rocket-launch-rounded'
						},
						{
							title: 'Why UnoCSS?',
							path: '/docu/get-started/why',
							icon: 'i-material-symbols:question-mark-rounded'
						},
						{
							title: 'Icons',
							path: '/docu/get-started/icons',
							icon: 'i-mdi-emoticon-outline',
							hoverIcon: 'group-hover:i-mdi-emoticon-wink'
						},
						{
							title: 'Search All Shortcuts',
							path: '/docu/get-started/search',
							icon: 'i-material-symbols:search-rounded'
						}
					]
				},
				{
					groupTitle: 'Tokens',
					groupIcon: 'i-mdi-dots-grid',
					items: [
						{ title: 'Background', path: '/docu/tokens/background' },
						{ title: 'Border', path: '/docu/tokens/border' },
						{ title: 'Text', path: '/docu/tokens/text' }
					]
				},
				{
					groupTitle: 'Shortcuts',
					groupIcon: 'i-vscode-icons-file-type-unocss',
					items: [
						{ title: 'Buttons', path: '/docu/shortcuts/buttons' },
						{ title: 'Spinners / Loaders', path: '/docu/shortcuts/spinners' }
					]
				},
				{
					groupTitle: 'Svelte',
					groupIcon: 'i-vscode-icons-file-type-svelte',
					items: [
						{ title: 'Avatar', path: '/docu/components/avatar' },
						{
							title: 'Table of Contents',
							path: '/docu/components/table-of-contents',
							headless: true
						}
					]
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

	$: currentPageIdx = allGroupItems?.findIndex(
		(item) => item.path === $page.url.pathname || `${item.path}/headless` === $page.url.pathname
	);

	$: previousPage =
		!allGroupItems || !currentPageIdx || currentPageIdx === 0
			? null
			: allGroupItems![currentPageIdx! - 1];

	$: nextPage =
		!allGroupItems || !currentPageIdx || currentPageIdx === allGroupItems!.length - 1
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
		showSidebar={currentNavPage ? currentNavPage?.showSidebar : false}
		groups={currentNavPage ? currentNavPage?.groups : []}
	/>

	<div
		class="bg-inverse-white-surface-700 min-h-screen pt-16 pb-20 text-center"
		style={`
			padding-left: ${sidebarIsHidden ? 0 : sidebarWidth}px;
			padding-right: ${sidebarIsHidden || !currentNavPage || !currentNavPage?.showSidebar ? 0 : 200}px;
		`}
	>
		<div class="py-8">
			<button
				class="btn-border-surface-primary-secondary text-on-primary"
				on:click={() => (activeIdx += 1)}
			>
				{activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)}
			</button>
		</div>

		{#if currentNavPage && currentNavPage?.showSidebar}
			{#key currentPageIdx}
				<div class="hidden xl:block absolute fixed right-20">
					<TableOfContents target="#AtoContent" tocType="lowest-parents" />
				</div>
			{/key}
		{/if}

		<div id="AtoContent" class="AtoContent px-6 lg:px-3/12">
			<slot />
			{#if currentNavPage && currentNavPage?.showSidebar}
				<div class="pt-20 pb-32">
					<BottomNav previous={previousPage} next={nextPage} />
				</div>
			{/if}
		</div>
	</div>
</div>
