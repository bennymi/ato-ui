<script lang="ts">
    import { getContext } from 'svelte';

    import type { DropdownMenuContext } from './types';

    /** Set the styles for the separator. */
    export let separatorStyle = 'm-2 h-1 bg-surface-400/50';

    const { separator } = getContext<DropdownMenuContext>('dropdown-menu');
</script>

<div 
    {...$separator} use:separator 
    class="dropdown-menu-separator {separatorStyle}" 
/>