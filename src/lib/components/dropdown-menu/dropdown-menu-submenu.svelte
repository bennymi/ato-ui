<script lang="ts">
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

    import type { DropdownMenuTransition } from './types';

    /** The transition for the submenu opening and closing. */
    export let transition: DropdownMenuTransition = { trans: fly };
</script>