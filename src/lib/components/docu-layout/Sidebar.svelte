<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let width = 0;
	export let sidebarIsHidden = false;

	let observer: IntersectionObserver;

	onMount(() => {
		if (browser) {
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

<aside
	class="AtoSidebar bg-inverse-white-surface-800 fixed top-12 left-0 bottom-0 z-40 hidden md:block"
	bind:clientWidth={width}
>
	<nav class="h-full space-y-4 overflow-y-auto md:pl-10 lg:pl-32 pr-4">
		<!-- <div class="text-white py-32 text-4xl font-bold">test</div> -->
		{#each Array(40) as item, i}
			<div class="text-white text-4xl font-bold">{i} {item}</div>
		{/each}
	</nav>
</aside>
