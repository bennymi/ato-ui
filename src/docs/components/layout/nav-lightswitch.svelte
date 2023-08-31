<!-- 
    Adapted from sveltepress: https://github.com/SveltePress/sveltepress/blob/main/packages/theme-default/src/components/ToggleDark.svelte
 -->

<script>
    import { fly } from 'svelte/transition';
    import { darkTheme } from '$docs/utils/stores';

    // import { tick } from 'svelte';

    // let isDark = true;

    // function addOrRemoveClass() {
    //     if (isDark) {
    //         document.querySelector('html').classList.add('dark');
    //     } else {
    //         document.querySelector('html').classList.remove('dark');
    //     }
    // }

    // function toggle(evt) {
    //     const isAppearanceTransition =
    //         document.startViewTransition &&
    //         !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    //     if (!isAppearanceTransition) {
    //         isDark = !isDark;
    //         addOrRemoveClass();
    //         return;
    //     }

    //     const x = evt.clientX;
    //     const y = evt.clientY;

    //     const endRadius = Math.hypot(
    //         Math.max(x, window.innerWidth - x),
    //         Math.max(y, window.innerHeight - y),
    //     );

    //     const transition = document.startViewTransition(async () => {
    //         isDark = !isDark;
    //         await tick();
    //         addOrRemoveClass();
    //     });

    //     transition.ready.then(() => {
    //         const clipPath = [
    //             `circle(0px at ${x}px ${y}px)`,
    //             `circle(${endRadius}px at ${x}px ${y}px)`
    //         ];

    //         document.documentElement.animate(
    //             {
    //                 clipPath: isDark ? [...clipPath].reverse() : clipPath,
    //             },
    //             {
    //                 duration: 500,
    //                 easing: isDark ? 'ease-out' : 'ease-in',
    //                 pseudoElement: isDark
    //                         ? '::view-transition-old(root)'
    //                         : '::view-transition-new(root)'
    //             }
    //         )
    //     });

    //     transition.finished.them(() => darkTheme = !darkTheme);
    // }

</script>

<!-- <button
    class="border-x-1 px-4 mx-2 border-surface-400/50 text-surface-400-900-200-50 hidden md:inline-flex"
    on:click={toggle}
    aria-label="dark-theme"
    aria-pressed={$darkTheme}
>
    {#if isDark}
        <span class="sr-only">Dark mode</span>
        <span in:fly={{ y: -10 }} class="i-material-symbols-dark-mode-rounded text-2xl" />
    {:else}
        <span class="sr-only">Light mode</span>
        <span in:fly={{ y: 10 }} class="i-material-symbols-light-mode text-2xl" />
    {/if}
</button> -->
<button
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
</button>