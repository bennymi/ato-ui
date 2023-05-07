<script lang="ts">
	import type { NavIcon, Navigation, NavGroup } from './types';
	import { darkTheme } from '../../stores/lightswitch';
	import TableOfContents from '../table-of-contents/TableOfContents.svelte';
	import SidebarGroup from './SidebarGroup.svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	export let navigation: Navigation = [];
	export let icons: NavIcon[] = [];
	export let groups: NavGroup[];
	export let showSidebar = false;

	let revealTOC = false;
	let revealSidebar = false;

	$: pathname = $page.url.pathname;
</script>

<header
	class="AtoNav bg-inverse-white-surface-800 fixed inset-x-0 top-0 z-40 flex h-12 w-full items-center justify-between px-4 md:px-10 lg:pl-[150px] lg:pr-[100px] xl:pl-[200px] xl:pr-[100px] 2xl:pr-[200px] shadow-sm shadow-surface-200 dark:(shadow-md shadow-surface-900)"
>
	<div class="AtoNavBarTitle">
		<slot name="title"><!-- optional fallback --></slot>
	</div>
	<div class="flex justify-between items-center">
		<nav class="AtoNavBarMenu space-x-4 text-surface-900-50 hidden md:inline-flex">
			{#each navigation as { navTitle, landingPath }}
				<a class="font-semibold hover:text-primary-500" href={landingPath}>{navTitle}</a>
			{/each}
		</nav>
		<button
			class="border-x-1 px-4 mx-4 border-surface-400/50 text-surface-400-900-200-50 hidden md:inline-flex"
			on:click={() => ($darkTheme = !$darkTheme)}
			aria-label="dark-theme"
			aria-pressed={$darkTheme}
		>
			{#if $darkTheme}
				<span class="sr-only">Dark mode</span>
				<span class="i-material-symbols-dark-mode-rounded text-2xl" />
			{:else}
				<span class="sr-only">Light mode</span>
				<span class="i-material-symbols-light-mode text-2xl" />
			{/if}
		</button>
		{#if icons.length > 0}
			<div class="AtoNavBarSocials gap-x-2 hidden md:inline-flex">
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

{#if showSidebar}
	<div
		class="fixed top-12 z-40 overflow-y-auto bg-inverse-surface-50-op40-surface-800-op70 backdrop-blur-md text-surface-400-900-200-50 xl:hidden {revealTOC
			? ''
			: 'shadow-sm shadow-surface-200 dark:(shadow-md shadow-surface-900)'}"
	>
		<div class="w-screen flex justify-between lg:justify-end py-2 px-4 md:px-10 lg:px-[100px]">
			<button
				class="inline-flex justify-center items-center gap-1 lg:hidden"
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
				class="flex justify-end px-4 pb-4 md:px-10 lg:px-[100px] shadow shadow-md shadow-primary-700/50"
			>
				{#key pathname}
					<TableOfContents
						target="#AtoContent"
						showLabel={false}
						tocType="lowest-parents"
						hover="hover:(text-surface-900-50)"
						markerBackground="bg-secondary-500"
						on:heading-clicked={() => (revealTOC = false)}
					/>
				{/key}
			</div>
		{/if}

		{#if revealSidebar}
			<aside class="px-4 py-2 md:px-10 shadow shadow-md shadow-primary-700/50" transition:slide>
				<nav class="h-96 space-y-2 overflow-y-auto md:pl-10 lg:pl-32 pr-8 text-surface-900-200">
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
