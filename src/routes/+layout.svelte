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
					items: data.articles
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
		!allGroupItems || !currentPageIdx || currentPageIdx <= 0
			? null
			: allGroupItems![currentPageIdx! - 1][0];

	$: nextPage =
		!allGroupItems ||
		!currentPageIdx ||
		currentPageIdx < 0 ||
		currentPageIdx === allGroupItems!.length - 1
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
		showSidebar={currentNavPage ? currentNavPage?.showSidebar : false}
		groups={currentNavPage ? currentNavPage?.groups : []}
	/>

	<div
		class="relative bg-inverse-white-surface-700 min-h-screen pt-16 pb-20 text-center {!currentNavPage?.showSidebar
			? ''
			: 'lg:pl-[350px] xl:pr-[300px] xl:pl-[350px] 2xl:pl-[400px]'}"
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
				<div class="pt-20 pb-32">
					<BottomNav previous={previousPage} next={nextPage} />
				</div>
			{/if}
		</div>
	</div>
</div>
