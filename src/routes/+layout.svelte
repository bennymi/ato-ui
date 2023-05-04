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
	import type { LayoutData } from './$types';

	const themes = ['ato', 'water', 'earth', 'fire', 'air'];

	export let data: LayoutData;

	let activeIdx = 0;
	let sidebarWidth: number;
	let sidebarIsHidden = false;
	let previousPage: NavGroupItem | null = null;
	let nextPage: NavGroupItem | null = null;

	const navigation: Navigation = [
		{
			navTitle: 'Components',
			showSidebar: true,
			basePath: '/docs',
			landingPath: '/docs/components/avatar',
			groups: [
				{
					groupTitle: 'Introduction',
					hideTitle: true,
					items: [
						[
							{
								title: 'Getting Started',
								mdPath: '/src/docs/get-started/installation.md',
								sitePath: '/docs/get-started/installation',
								icon: 'i-material-symbols-rocket-launch-rounded'
							}
						],
						[
							{
								title: 'Why UnoCSS?',
								mdPath: '/src/docs/get-started/why.md',
								sitePath: '/docs/get-started/why',
								icon: 'i-material-symbols:question-mark-rounded'
							}
						],
						[
							{
								title: 'Icons',
								mdPath: '/src/docs/get-started/icons.md',
								sitePath: '/docs/get-started/icons',
								icon: 'i-mdi-emoticon-outline',
								hoverIcon: 'group-hover:i-mdi-emoticon-wink'
							}
						],
						[
							{
								title: 'Search All Shortcuts',
								mdPath: '/src/docs/get-started/search.md',
								sitePath: '/docs/get-started/search',
								icon: 'i-material-symbols:search-rounded'
							}
						]
					]
				},
				{
					groupTitle: 'Tokens',
					groupIcon: 'i-mdi-dots-grid',
					items: data.tokens
				},
				{
					groupTitle: 'Shortcuts',
					groupIcon: 'i-vscode-icons-file-type-unocss',
					items: data.shortcuts
				},
				{
					groupTitle: 'Svelte',
					groupIcon: 'i-vscode-icons-file-type-svelte',
					items: data.components
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
		(v) => v.findIndex((item) => item.sitePath && item.sitePath === $page.url.pathname) >= 0
	);

	$: previousPage =
		!allGroupItems || !currentPageIdx || currentPageIdx === 0
			? null
			: allGroupItems![currentPageIdx! - 1][0];

	$: nextPage =
		!allGroupItems || !currentPageIdx || currentPageIdx === allGroupItems!.length - 1
			? null
			: allGroupItems![currentPageIdx! + 1][0];
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
			padding-right: ${sidebarIsHidden || !currentNavPage || !currentNavPage?.showSidebar ? 0 : 13}rem;
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
					<TableOfContents target="#AtoContent" tocType="all-active" />
				</div>
			{/key}
		{/if}

		<div id="AtoContent" class="AtoContent text-left px-6 lg:px-3/12">
			<slot />
			{#if currentNavPage && currentNavPage?.showSidebar}
				<div class="pt-20 pb-32">
					<BottomNav previous={previousPage} next={nextPage} />
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(p) {
		@apply text-surface-900-50;
	}

	/* :global(pre) {
		@apply overflow-x-scroll px-4 py-2 rounded-token-container;
	} */
</style>
