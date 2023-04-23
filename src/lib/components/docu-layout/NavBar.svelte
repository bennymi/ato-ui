<script lang="ts">
	import type { NavIcon, Navigation } from './types';
	import { darkTheme } from '../../stores/lightswitch';

	export let navigation: Navigation = {};
	export let icons: NavIcon[] = [];

	$: pages = Object.keys(navigation);
</script>

<header
	class="AtoNav bg-inverse-white-surface-800 fixed inset-x-0 top-0 z-40 flex h-12 w-full items-center justify-between px-2 md:px-10 lg:px-32 shadow-sm shadow-surface-200 dark:(shadow-md shadow-surface-900)"
>
	<!-- <div
		class="bg-inverse-white-surface-800 fixed inset-x-0 top-0 z-40 flex h-12 w-full items-center justify-between shadow-sm shadow-surface-200 dark:(shadow-md shadow-surface-900)"
	> -->
	<!-- <div class="flex items-center"> -->
	<!-- <div class="fixed flex h-12 w-f items-center justify-between"> -->
	<div class="AtoNavBarTitle">
		<slot name="title"><!-- optional fallback --></slot>
	</div>
	<div class="flex justify-between items-center">
		<nav class="AtoNavBarMenu space-x-4 text-surface-900-50 hidden md:inline-flex">
			<!-- <a href="/">Components</a> -->
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
				<span class="i-material-symbols:dark-mode-rounded text-2xl" />
			{:else}
				<span class="sr-only">Light mode</span>
				<span class="i-material-symbols:light-mode text-2xl" />
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
	<!-- </div> -->
</header>
