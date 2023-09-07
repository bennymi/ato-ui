<script lang="ts">
	import { getContext } from 'svelte';
    import type { Tabs } from '@melt-ui/svelte';

	/** 
     * Provide the key of the tab content. 
     * Should be the same as the header key it belongs to. 
     * */
	export let key: string;

	const content: Tabs['elements']['content'] =
		getContext('content');
</script>

<div {...$content(key)} use:content>
	<slot />
</div>
	