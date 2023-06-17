<script lang="ts">
	import '$lib/styles/themes/ato.css';
	import '$lib/styles/themes/water.css';
	import '$lib/styles/themes/earth.css';
	import '$lib/styles/themes/fire.css';
	import '$lib/styles/themes/air.css';

	import '@unocss/reset/tailwind.css';
	/* eslint import/no-unresolved: [2, { ignore: ['uno.css'] }] */
	import 'uno.css';
	import './app.css';

	import { NavBar, Sidebar, BottomNav } from '../docs/layout';
	import type { Navigation, NavGroupItem } from '../docs/layout/types';
	import TableOfContents from '$lib/components/table-of-contents/TableOfContents.svelte';
	import type { DropMenuGroup } from '$lib/components/dropdown-menu/types';

	import { darkTheme } from '$lib/stores/lightswitch';
	import { themeStore, customThemeCSSStore } from './stores';
	import AtoUI from './AtoUI.svelte';

	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const themes: DropMenuGroup[] = [
		{
			items: [
				{ icon: 'i-mdi-atom-variant', text: `Ato` },
				{ icon: 'i-material-symbols-water-drop-outline-rounded', text: `Water` },
				{ icon: 'i-mdi-earth', text: `Earth` },
				{ icon: 'i-material-symbols-local-fire-department-rounded', text: `Fire` },
				{ icon: 'i-mdi-weather-windy-variant', text: `Air` }
			]
		}
	];

	let previousPage: NavGroupItem | null = null;
	let nextPage: NavGroupItem | null = null;

	const navigation: Navigation = [
		{
			navTitle: 'Components',
			showSidebar: true,
			basePath: '/docs',
			landingPath: '/docs/get-started/1-installation',
			groups: [
				{
					groupTitle: 'Introduction',
					hideTitle: true,
					items: data.articles
				},
				{
					groupTitle: 'Tokens',
					groupIcon: 'i-mdi-dots-grid',
					items: data.tokens
				},
				{
					groupTitle: 'UnoCSS',
					groupIcon: 'i-vscode-icons-file-type-unocss',
					items: data.unocss
				},
				// {
				// 	groupTitle: 'Actions',
				// 	groupIcon: 'i-mdi-target',
				// 	items: data.actions
				// },
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

	const default_seo = {
		title: 'Ato UI',
		description:
			'A component UI library for Svelte and UnoCSS offering both styled and headless components.',
		keywords:
			'svelte, sveltekit, component library, components, unocss, tailwind, headless, styled, themes, designer'
	};

	$: currentNavPage = navigation.find((item) => $page.url.pathname.includes(item.basePath));

	$: allGroupItems = currentNavPage?.groups.map((g) => g.items).flat();

	$: currentPageIdx = allGroupItems?.findIndex(
		(v) => v.findIndex((item) => item.sitePath && item.sitePath === $page.url.pathname) >= 0
	);

	$: isComponentPage = currentNavPage?.navTitle === 'Components';
	$: isDesignerPage = currentNavPage?.navTitle === 'Designer';
	$: hasStyledAndHeadless =
		isComponentPage &&
		allGroupItems &&
		currentPageIdx &&
		allGroupItems[currentPageIdx].length === 2;
	$: isHeadlessPage = $page.url.pathname.includes('-headless');

	$: activePage =
		!isDesignerPage && allGroupItems
			? allGroupItems[currentPageIdx ?? 0][hasStyledAndHeadless && !isHeadlessPage ? 1 : 0]
			: {};

	$: activeSEO = { ...default_seo, ...activePage };

	$: previousPage =
		!allGroupItems || !currentPageIdx || currentPageIdx <= 0
			? null
			: allGroupItems[currentPageIdx - 1][0];

	$: nextPage =
		!allGroupItems ||
		!currentPageIdx ||
		currentPageIdx < 0 ||
		currentPageIdx === allGroupItems.length - 1
			? null
			: allGroupItems[currentPageIdx + 1][0];
</script>

<svelte:head>
	<title>{`${activeSEO.title}${activeSEO.title.includes('Ato') ? '' : ' | Ato UI'}`}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={activeSEO.title} />
	<meta name="keywords" content={activeSEO.keywords} />
	<meta name="description" content={activeSEO.description} />
	<meta name="author" content="Benedikt Mielke" />

	<meta name="theme-color" content="currentColor" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="Ato UI" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ato-ui.vercel.app{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta
		property="og:title"
		content={`${activeSEO.title}${activeSEO.title.includes('Ato') ? '' : ' | Ato UI'}`}
	/>
	<meta property="og:description" content={activeSEO.description} />

	{@html `<style>${$themeStore === 'custom-theme' ? $customThemeCSSStore : ''}</style>`}
</svelte:head>

<div id="ato-ui-docu" class:dark={$darkTheme} class="{$themeStore} min-w-screen min-h-screen">
	<NavBar
		{navigation}
		showSidebar={currentNavPage ? currentNavPage?.showSidebar : false}
		groups={currentNavPage ? currentNavPage?.groups : []}
		{themes}
		icons={[
			{ icon: 'i-mdi-github', link: 'https://github.com/bennymi/ato-ui', title: 'Github' },
			{ icon: 'i-mdi-discord', link: 'https://discord.gg/7PXN3fs3tN', title: 'Discord' }
		]}
		on:select={(event) => ($themeStore = event.detail.selected.toLowerCase())}
	>
		<svelte:fragment slot="title">
			<a href="/" class="text-surface-900-50 text-3xl select-none">
				<AtoUI />
			</a>
		</svelte:fragment>
	</NavBar>

	<Sidebar
		showSidebar={currentNavPage ? currentNavPage?.showSidebar : false}
		groups={currentNavPage ? currentNavPage?.groups : []}
	/>

	<div
		class="relative bg-inverse-white-surface-700 min-h-screen pt-28 pb-42 text-center {!currentNavPage?.showSidebar
			? ''
			: 'lg:pl-[350px] xl:pr-[300px] xl:pl-[350px] 2xl:pl-[400px]'}"
	>
		{#if currentNavPage && currentNavPage?.showSidebar}
			{#key $page.url.pathname}
				<div class="hidden xl:block absolute fixed right-[50px] 2xl:right-[150px] w-[250px]">
					<TableOfContents
						target="#AtoContent"
						tocType="lowest-parents"
						hover="hover:(text-surface-900-50)"
						markerBackground="bg-secondary-500"
					/>
				</div>
			{/key}
		{/if}

		<div
			id="AtoContent"
			class="AtoContent text-left mx-auto px-6 md:px-8 lg:px-10 xl:px-1/12 2xl:px-2/12"
		>
			<div class="prose w-full">
				<slot />
			</div>
			{#if currentNavPage && currentNavPage?.showSidebar}
				<div class="pt-20">
					<BottomNav previous={previousPage} next={nextPage} />
				</div>
			{/if}
		</div>
	</div>
</div>
