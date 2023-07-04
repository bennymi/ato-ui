<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	import SidebarGroup from './SidebarGroup.svelte';
	import type { NavGroup } from './types';

	export let showSidebar = true;
	export let groups: NavGroup[];

	export let sidebarIsHidden = false;

	let observer: IntersectionObserver;

	onMount(() => {
		if (browser) {
			/* 
                Check if the element is visible (display: block) or not (hidden). We use this to adjust the left padding of the content pages on the website.
            */
			const element: Element | null = document.getElementsByClassName('AtoSidebar')[0];

			observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0) {
						sidebarIsHidden = false;
					} else {
						sidebarIsHidden = true;
					}
				});
			});

			if (element) {
				observer.observe(element);
			}
		}
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

{#if showSidebar}
	<aside
		class="AtoSidebar bg-inverse-white-surface-800 fixed top-12 left-0 bottom-0 z-40 border-r-1 border-surface-200/50 dark:border-0 hidden lg:block w-[350px] xl:w-[350px] 2xl:w-[400px] 2xl:pl-[50px]"
	>
		<nav class="h-full space-y-2 overflow-y-auto md:pl-10 lg:pl-16 pr-4 text-surface-900-200 py-12">
			{#each groups as { groupTitle, hideTitle, groupIcon, items }, i}
				<SidebarGroup
					{groupTitle}
					{hideTitle}
					{groupIcon}
					{items}
					isLastGroup={groups.length - 1 === i}
				/>
			{/each}
		</nav>
	</aside>
{/if}
