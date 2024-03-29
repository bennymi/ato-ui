<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { page } from '$app/stores';

	import type { NavIcon, Navigation, NavGroup } from '$components';
	import { HamburgerMenu, NavLightSwitch, SidebarGroup, ThemeDropdown, TOC } from '$components';

	export let navigation: Navigation = [];
	export let icons: NavIcon[] = [];
	export let groups: NavGroup[];
	export let showSidebar = false;

	let revealTOC = false;
	let revealSidebar = false;
	let revealNavItems = false;

	$: pathname = $page.url.pathname;
</script>

<header
	class="AtoNav bg-inverse-white-surface-800 fixed inset-x-0 top-0 z-50 flex h-12 w-full items-center justify-between px-4 md:px-10 lg:pl-[150px] lg:pr-[100px] xl:pl-[200px] xl:pr-[100px] 2xl:pr-[200px] shadow-sm shadow-surface-200 dark:(shadow-md shadow-surface-900)"
>
	<div class="AtoNavBarTitle">
		<slot name="title"><!-- optional fallback --></slot>
	</div>

	<div class="flex gap-2 justify-between items-center">
		<nav class="space-x-4 text-surface-900-50 hidden md:inline-flex">
			{#each navigation as { navTitle, landingPath }}
				<a class="font-semibold transition-all duration-200 hover:underline" href={landingPath}
					>{navTitle}</a
				>
			{/each}
		</nav>
		<div class="hidden md:inline-flex">
			<ThemeDropdown />
		</div>

		<div class="md:hidden">
			<HamburgerMenu bind:opened={revealNavItems} ariaControls="ato-mobile-nav-items" />
		</div>

		<NavLightSwitch />

		{#if icons.length > 0}
			<div class="gap-x-2 hidden md:inline-flex">
				{#each icons as { icon, link, title }}
					<a href={link} class="text-surface-400-900-200-50">
						<span class="sr-only">{title}</span>
						<span class="text-2xl {icon}" />
					</a>
				{/each}
			</div>
		{/if}
	</div>
</header>

{#if revealNavItems}
	<div
		id="ato-mobile-nav-items"
		class="fixed w-full text-md bg-inverse-white-surface-800 z-50 top-12 h-96 min-h-[calc(100vh-48px)] flex justify-center"
		transition:fade={{ duration: 150 }}
	>
		<div class="w-1/2 min-w-[200px]">
			<div class="py-4">
				<nav class="flex flex-col text-surface-900-50">
					{#each navigation as { navTitle, landingPath }}
						<a
							on:click={() => (revealNavItems = false)}
							class="font-semibold py-2 border-b-1 border-surface-100/60 hover:text-primary-500"
							href={landingPath}>{navTitle}</a
						>
					{/each}
				</nav>
			</div>
			<div
				class="flex flex-col gap-2 justify-around w-full items-center bg-surface-100-700 py-4 rounded-container text-surface-900-50"
			>
				<ThemeDropdown />
				<NavLightSwitch isMobile={true} />
			</div>
			{#if icons.length > 0}
				<div class="w-full py-4 gap-x-2 inline-flex justify-center items-center">
					{#each icons as { icon, link, title }}
						<a href={link} class="text-surface-400-900-200-50">
							<span class="sr-only">{title}</span>
							<span class="text-2xl {icon}" />
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}

{#if showSidebar}
	<div
		class="fixed top-12 z-40 overflow-y-auto bg-inverse-surface-50/40-surface-800/70 backdrop-blur-md text-surface-400-900-200-50 xl:hidden {revealTOC
			? ''
			: 'shadow-sm shadow-surface-200 dark:(shadow-md shadow-surface-900)'}"
	>
		<div class="w-screen flex justify-between lg:justify-end py-2 px-4 md:px-10 lg:px-[100px]">
			<button
				class="inline-flex justify-center items-center gap-1 lg:hidden"
				aria-controls="ato-mobile-sidebar"
				aria-expanded={revealSidebar}
				on:click={() => {
					revealSidebar = !revealSidebar;
					revealTOC = false;
				}}
			>
				<span
					class="text-2xl {revealSidebar
						? 'i-material-symbols-cancel-outline-rounded'
						: 'i-material-symbols-list-alt-rounded'}"
				/>

				<span>Menu</span>
			</button>
			<button
				class="inline-flex justify-center items-center"
				aria-controls="ato-mobile-toc"
				aria-expanded={revealTOC}
				on:click={() => {
					revealTOC = !revealTOC;
					revealSidebar = false;
				}}
			>
				<span>On this page</span>
				<span class="text-2xl {revealTOC ? 'i-mdi-chevron-down' : 'i-mdi-chevron-right'}" />
				<!-- <span
					class="text-2xl {revealTOC
						? 'i-material-symbols-cancel-outline-rounded'
						: 'i-material-symbols-filter-list-rounded'}"
				/> -->
			</button>
		</div>

		{#if revealTOC}
			<div
				id="ato-mobile-toc"
				class="flex justify-end px-4 pb-4 md:px-10 lg:px-[100px] shadow shadow-md shadow-primary-700/50"
			>
				{#key pathname}
					<!-- <TableOfContents
						target="#AtoContent"
						showLabel={false}
						tocType="lowest-parents"
						hover="hover:(text-surface-900-50)"
						markerBackground="bg-secondary-500"
						on:heading-clicked={() => (revealTOC = false)}
					/> -->
					<TOC scrollOffset={90} />
				{/key}
			</div>
		{/if}

		{#if revealSidebar}
			<aside
				id="ato-mobile-sidebar"
				class="px-4 py-2 md:px-10 shadow shadow-md shadow-primary-700/50"
				transition:slide
			>
				<nav
					class="h-96 min-h-[calc(100vh-88px)] space-y-2 overflow-y-auto md:pl-10 lg:pl-32 pr-8 text-surface-900-200"
				>
					{#each groups as { groupTitle, hideTitle, groupIcon, items }, i}
						<SidebarGroup
							{groupTitle}
							{hideTitle}
							{groupIcon}
							{items}
							isLastGroup={groups.length - 1 === i}
							on:item-clicked={() => (revealSidebar = false)}
						/>
					{/each}
				</nav>
			</aside>
		{/if}
	</div>
{/if}
