<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	import type { NavGroup } from './types';

	export let showSidebar = true;
	export let width = 0;
	export let sidebarIsHidden = false;
	export let groups: NavGroup[];

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
			<!-- <div class="text-white py-32 text-4xl font-bold">test</div> -->
			<!-- {#each Array(40) as item, i}
				<div class="text-white text-4xl font-bold">{i} {item}</div>
			{/each} -->
			{#each groups as { groupTitle, hideTitle, groupIcon, items }, i}
				<div
					class="pb-6 space-y-1 {i === groups.length - 1 ? '' : 'border-b-1 border-surface-200/30'}"
				>
					{#if !hideTitle}
						<h2 class="font-bold">{groupTitle}</h2>
					{/if}
					{#each items as { title, path, icon }}
						<a href={path} class="block hover:text-primary-500 {hideTitle ? '' : ''}">{title}</a>
					{/each}
				</div>
			{/each}
		</nav>
	</aside>
{/if}
