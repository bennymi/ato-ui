<script lang="ts">
	import { pre as CodeBlock, PreviewTabs } from '$components';
	import type { PreviewTab } from '$docs/utils/preview';

	export let previewSnippets: PreviewTab[] = [];
</script>

<!-- 
	TODOs:
		[X] multiple previews for one docs page -> have a main folder and any other examples in different ones
		[X] be able to load not just .svelte files into the preview tabs but also .ts files
		[] find a nice way to show and hide code
 -->

<div class="preview">
	<div class="mb-4 h-96 flex justify-center items-center bg-gradient-br-primary-tertiary">
		<slot />
	</div>

	<PreviewTabs {previewSnippets} />
</div>
