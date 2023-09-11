<script lang="ts">
	import '$lib/styles/themes/ato.css';
	import '$lib/styles/themes/water.css';
	import '$lib/styles/themes/earth.css';
	import '$lib/styles/themes/fire.css';
	import '$lib/styles/themes/air.css';

	import '@unocss/reset/tailwind.css';

	/* -->eslint import/no-unresolved: [2, { ignore: ['uno.css'] }] */
	import 'uno.css';
	import './app.css';

	import { NavBar, Sidebar, BottomNav } from '$components';
	import type { Navigation, NavGroupItem } from '$components/layout/types';

	import { TOC } from '$components';

	import { darkTheme } from '$docs/utils/stores';
	import { themeStore, customThemeCSSStore } from '$docs/utils/stores';
	import AtoUI from './AtoUI.svelte';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let previousPage: NavGroupItem | null = null;
	let nextPage: NavGroupItem | null = null;

	const socials = [
		{ icon: 'i-mdi-github', link: 'https://github.com/bennymi/ato-ui', title: 'Github' },
		{ icon: 'i-mdi-discord', link: 'https://discord.gg/7PXN3fs3tN', title: 'Discord' }
	];

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
					groupTitle: 'Shortcuts',
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

	const defaultSEO = {
		title: 'Ato UI',
		description:
			'The elemental accessible and theme-able UI component library for Svelte, built with UnoCSS and Melt UI.',
		keywords:
			'svelte, sveltekit, component library, components, unocss, tailwind, headless, styled, themes, designer, accessible',
		image: '/seo/new-ato-ui-dark-1-resized.png'
	};

	// Update data-theme attribute when theme changes.
	$: if (browser) {
		document.body.setAttribute('data-theme', $themeStore);
	}

	// Update dark mode.
	$: if (browser) {
		const documentClasses = document.documentElement.classList;
		if ($darkTheme) {
			documentClasses.add('dark');
		} else {
			documentClasses.remove('dark');
		}
	}

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

	$: activeSEO = { ...defaultSEO, ...activePage };

	$: seoTitle = `${activeSEO.title}${activeSEO.title.includes('Ato') ? '' : ' | Ato UI'}`;

	$: previousPage =
		!allGroupItems || !currentPageIdx || currentPageIdx <= 0
			? null
			: allGroupItems[currentPageIdx - 1].length === 2
			? allGroupItems[currentPageIdx - 1][1]
			: allGroupItems[currentPageIdx - 1][0];

	$: nextPage =
		!allGroupItems ||
		!currentPageIdx ||
		currentPageIdx < 0 ||
		currentPageIdx === allGroupItems.length - 1
			? null
			: allGroupItems[currentPageIdx + 1].length === 2
			? allGroupItems[currentPageIdx + 1][1]
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
	<meta property="og:image" content={activeSEO.image} />
	<meta property="og:site_name" content="Ato UI" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ato-ui.vercel.app{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={activeSEO.description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="ato-ui.vercel.app" />
	<meta property="twitter:url" content="https://ato-ui.vercel.app{$page.url.pathname}" />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={activeSEO.description} />
	<meta name="twitter:image" content={activeSEO.image} />

	{@html `<style>${$themeStore === 'custom-theme' ? $customThemeCSSStore : ''}</style>`}
</svelte:head>

<!-- Also include data-theme here to avoid FOUC (Flash Of Unstyled Content) on page reloads. -->
<div id="ato-ui-docu" class="min-h-screen" data-theme={$themeStore}>
	<NavBar
		{navigation}
		showSidebar={currentNavPage ? currentNavPage?.showSidebar : false}
		groups={currentNavPage ? currentNavPage?.groups : []}
		icons={socials}
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
				<div
					class="hidden text-left xl:block absolute fixed right-[50px] 2xl:right-[150px] w-[250px]"
				>
					<!-- <TableOfContents
						target="#AtoContent"
						tocType="lowest-parents"
						hover="hover:(text-surface-900-50)"
						markerBackground="bg-secondary-500"
					/> -->
					<TOC />
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
