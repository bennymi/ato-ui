<script lang="ts">
	import { getContext } from 'svelte';

	import type { DropdownMenuContext } from './types';

	/** Set the styles for the separator. */
	export let separatorStyle = 'm-2 h-0.5 bg-surface-300/70';

	const { separator } = getContext<DropdownMenuContext>('dropdown-menu');
</script>

<div {...$separator} use:separator class="dropdown-menu-separator {separatorStyle}" />
