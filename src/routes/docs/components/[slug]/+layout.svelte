<script lang="ts">
	import { page } from '$app/stores';

	export let data;

	let { styledExists, headlessExists } = data;

	$: pageIsHeadless = $page.url.pathname.includes('-headless');
</script>

{#if styledExists && headlessExists}
	<nav
		class="flex justify-center items-center w-full mb-4 [&>a]:(min-w-40 flex justify-center items-center gap-1 text-xl font-bold px-2 py-1 transition-all duration-150)"
	>
		<a
			href="/docs/components/{$page.url.pathname.replace('-headless', '')}"
			class="rounded-l-btn {pageIsHeadless ? 'surface-500 hover:primary-500/70' : 'primary-500'}"
		>
			<span class="i-material-symbols-water-drop-rounded" />
			<span>Styled</span>
		</a>
		<a
			href="/docs/components/{$page.url.pathname.replace('-headless', '')}-headless"
			class="rounded-r-btn {pageIsHeadless ? 'primary-500' : 'surface-500 hover:primary-500/70'}"
		>
			<span class="i-material-symbols-water-drop-outline-rounded" />
			<span>Headless</span>
		</a>
	</nav>
{/if}

<slot />
