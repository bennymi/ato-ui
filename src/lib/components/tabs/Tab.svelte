<script lang="ts">
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';

	/** Provide the key of the tab content. Should be the same as the header key it belongs to. */
	export let key: string;

	const contentAttrs: Readable<(params: string) => Record<string, string>> =
		getContext('contentAttrs');
</script>

<div {...$contentAttrs(key)}>
	<slot />
</div>
