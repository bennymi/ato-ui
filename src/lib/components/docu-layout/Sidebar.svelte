<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	import SidebarGroup from './SidebarGroup.svelte';
	import type { NavGroup } from './types';

	export let showSidebar = true;
	export let groups: NavGroup[];

	export let width = 0;
	export let sidebarIsHidden = false;

	let observer: IntersectionObserver;

	onMount(() => {
		if (browser) {
			/* 
                Check if the element is visible (display: block) or not (hidden). We use this to adjust the left padding of the content pages on the website.
            */
			const element = document.getElementsByClassName('AtoSidebar')[0];

			observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0) {
						sidebarIsHidden = false;
					} else {
						sidebarIsHidden = true;
					}
				});
			});

			observer.observe(element);
		}
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

{#if showSidebar}
	<aside
		class="AtoSidebar bg-inverse-white-surface-800 fixed top-12 left-0 bottom-0 z-40 hidden md:block"
		bind:clientWidth={width}
	>
		<nav class="h-full space-y-2 overflow-y-auto md:pl-10 lg:pl-32 pr-8 text-surface-900-200 py-12">
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
