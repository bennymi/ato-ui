<script lang="ts">
	import { pre as CodeBlock } from '$components';
	import type { PreviewTab } from '$docs/utils/preview';

	export let previewSnippets: PreviewTab[] = [];

	let tabs = previewSnippets.map((item) => item.title);
</script>

<!-- 
	TODOs:
		[X] multiple previews for one docs page -> have a main folder and any other examples in different ones
		[X] be able to load not just .svelte files into the preview tabs but also .ts files
		[] find a nice way to show and hide code
 -->

<div>
	<slot />
</div>

<div class="text-surface-900-50 text-lg">
	{tabs}
</div>

<CodeBlock>
	{@html previewSnippets[1].file}
</CodeBlock>
