<script lang="ts">
	import type { NavIcon } from './types';

	export let icons: NavIcon[] = [];
</script>

<header class="AtoNav">
	<div
		class="bg-inverse-white-surface-800 fixed inset-x-0 top-0 z-40 flex h-12 w-full items-center justify-between px-50 shadow-sm shadow-surface-200 dark:(shadow-md shadow-surface-900)"
	>
		<div class="AtoNavBarTitle">
			<slot name="title"><!-- optional fallback --></slot>
		</div>
		<nav class="AtoNavBarMenu text-surface-900-50">
			<a href="/">Components</a>
		</nav>
		{#if icons.length > 0}
			<div class="AtoNavBarSocials flex gap-x-4 mx-4">
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
