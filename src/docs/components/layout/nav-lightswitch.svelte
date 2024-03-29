<!-- 
    Adapted from sveltepress: https://github.com/SveltePress/sveltepress/blob/main/packages/theme-default/src/components/ToggleDark.svelte
 -->

<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { darkTheme } from '$docs/utils/stores';

	import { tick } from 'svelte';

	export let isMobile = false;

	const isLandingPage = () => $page.route.id === '/';

	function addOrRemoveClass() {
		if ($darkTheme) {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}
	}

	function toggle(evt: MouseEvent) {
		// prettier-ignore
		// @ts-ignore:next-line
		const isAppearanceTransition = document.startViewTransition &&
			!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!isAppearanceTransition || isLandingPage()) {
			$darkTheme = !$darkTheme;
			addOrRemoveClass();
			return;
		}

		const x = evt.clientX;
		const y = evt.clientY;

		const endRadius = Math.hypot(
			Math.max(x, window.innerWidth - x),
			Math.max(y, window.innerHeight - y)
		);

		// @ts-ignore:next-line
		const transition = document.startViewTransition(async () => {
			$darkTheme = !$darkTheme;
			await tick();
			addOrRemoveClass();
		});

		transition.ready.then(() => {
			const clipPath = [
				`circle(0px at ${x}px ${y}px)`,
				`circle(${endRadius}px at ${x}px ${y}px)`
				// `circle(0px at 100% 0%)`,
				// `circle(${endRadius}px at 50% 100%)`
				// `ellipse(80% 80%)`,
				// `ellipse(0% 20%)`
				// 'inset(0% round 0%)',
				// 'inset(50% round 50%)'
			];

			document.documentElement.animate(
				{
					clipPath: $darkTheme ? [...clipPath].reverse() : clipPath
				},
				{
					duration: 500,
					easing: $darkTheme ? 'ease-out' : 'ease-in',
					pseudoElement: $darkTheme ? '::view-transition-old(root)' : '::view-transition-new(root)'
				}
			);
		});

		// transition.finished.then(() => ($darkTheme = !$darkTheme));
	}

	$: btnClasses = isMobile
		? 'inline-flex'
		: 'border-x-1 hidden md:inline-flex border-surface-400/50 mx-2';
</script>

<button
	class="px-4 text-surface-400-900-200-50 {btnClasses}"
	on:click={toggle}
	aria-label="dark-theme"
	aria-pressed={$darkTheme}
>
	{#if $darkTheme}
		<span class="sr-only">Dark mode</span>
		<span
			in:fly={{ y: -10, delay: isLandingPage() ? 0 : 500 }}
			class="i-material-symbols-dark-mode-rounded text-2xl"
		/>
	{:else}
		<span class="sr-only">Light mode</span>
		<span
			in:fly={{ y: 10, delay: isLandingPage() ? 0 : 500 }}
			class="i-material-symbols-light-mode text-2xl"
		/>
	{/if}
</button>

<!-- <button
    class="border-x-1 px-4 mx-2 border-surface-400/50 text-surface-400-900-200-50 hidden md:inline-flex"
    on:click={() => ($darkTheme = !$darkTheme)}
    aria-label="dark-theme"
    aria-pressed={$darkTheme}
>
    {#if $darkTheme}
        <span class="sr-only">Dark mode</span>
        <span in:fly={{ y: -10 }} class="i-material-symbols-dark-mode-rounded text-2xl" />
    {:else}
        <span class="sr-only">Light mode</span>
        <span in:fly={{ y: 10 }} class="i-material-symbols-light-mode text-2xl" />
    {/if}
</button> -->
