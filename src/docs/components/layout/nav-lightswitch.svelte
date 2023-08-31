<script>
    import { fly } from 'svelte/transition';
    import { darkTheme } from '$docs/utils/stores';
</script>

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