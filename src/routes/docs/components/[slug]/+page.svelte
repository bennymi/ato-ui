<script lang="ts">
	import { page } from '$app/stores';

	export let data;

	let unavailableStyle = 'text-surface-500-100 opacity-50 cursor-not-allowed';
	let inactiveStyle = 'text-surface-800-100 hover:primary-500/80!';

	$: pageIsHeadless = $page.url.pathname.includes('-headless');
	$: styledPath = data.styledExists ? $page.url.pathname.replace('-headless', '') : '';
	$: headlessPath = data.headlessExists
		? `${$page.url.pathname.replace('-headless', '')}-headless`
		: '';
</script>

<svelte:head>
	<title>{data.meta.title}{data.slug.includes('-headless') ? ' - Headless' : ''} | Ato-UI</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="text-surface-900-50">
	<h1 class="text-4xl font-bold">{data.meta.title}</h1>

	<p class="text-surface-800-100 my-2">{data.meta.description}</p>

	<nav
		class="flex items-center rounded-btn border-1 border-primary-500 w-fit [&>a]:(flex justify-center items-center gap-1 font-semibold p-1 min-w-34 transition-all duration-150)"
	>
		<a
			href={data.headlessExists ? headlessPath : '#'}
			class="rounded-l-btn {!data.headlessExists
				? unavailableStyle
				: pageIsHeadless
				? 'primary-500'
				: inactiveStyle}"
		>
			<span class="i-material-symbols-water-drop-outline-rounded" />
			<span>Headless</span>
		</a>
		<a
			href={data.styledExists ? styledPath : '#'}
			class="rounded-r-btn {!data.styledExists
				? unavailableStyle
				: pageIsHeadless
				? inactiveStyle
				: 'primary-500'}"
		>
			<span class="i-material-symbols-water-drop-rounded" />
			<span>Styled</span>
		</a>
	</nav>
</div>

<svelte:component this={data.content} />
