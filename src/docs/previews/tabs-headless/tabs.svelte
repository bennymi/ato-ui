<script lang="ts">
	import { getContext } from 'svelte';
    import type { CreateTabsReturn } from '@melt-ui/svelte';

	/** 
     * Provide the key of the tab content. 
     * Should be the same as the header key it belongs to. 
     * */
	export let key: string;

	const content: CreateTabsReturn['content'] =
		getContext('content');
</script>

<div {...$content(key)} use:content>
	<slot />
</div>
	