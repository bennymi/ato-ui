<script lang="ts">
	import { page } from '$app/stores';

	export let data;

	let unavailableStyle = 'text-surface-500-100 opacity-50 cursor-not-allowed';
	let inactiveStyle = 'text-surface-800-100 hover:primary-500/80!';

	$: pageIsHeadless = $page.url.pathname.includes('-headless');
	$: styledPath = data.styledExists ? $page.url.pathname.replace('-headless', '') : '';
	$: headlessPath = data.headlessExists ? `${$page.url.pathname.replace('-headless', '')}-headless` : '';
</script>

<svelte:head>
	<title>{data.meta.title}{data.slug.includes('-headless') ? ' - Headless' : ''} | Ato-UI</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<nav
	class="flex items-center mb-4 rounded-btn border-1 border-primary-500 w-fit [&>a]:(flex justify-center items-center gap-1 text-xl font-bold px-2 py-1 transition-all duration-150)"
>
	<a
		href={data.headlessExists ? headlessPath : '#'}
		class="rounded-l-btn {!data.headlessExists ? unavailableStyle : pageIsHeadless ? 'primary-500' : inactiveStyle}"
	>
		<span class="sr-only">Headless component</span>
		<span class="i-material-symbols-water-drop-outline-rounded" />
	</a>
	<a
		href={data.styledExists ? styledPath : '#'}
		class="rounded-r-btn {!data.styledExists ? unavailableStyle : pageIsHeadless ? inactiveStyle: 'primary-500'}"
	>
		<span class="sr-only">Styled component</span>
		<span class="i-material-symbols-water-drop-rounded" />
	</a>
</nav>

<svelte:component this={data.content} />
