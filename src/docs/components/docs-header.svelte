<script lang="ts">
    import { page } from '$app/stores';
    import type { Metadata } from '$docs/utils/preview';

    export let meta: Metadata;
    export let isComponent = false;
    export let headlessExists = false;
    export let styledExists = false;

    const { title, description } = meta;

    const unavailableStyle = 'text-surface-500-100 opacity-50 cursor-not-allowed';
	const inactiveStyle = 'text-surface-800-100 hover:primary-500/80!';

    $: pageIsHeadless = $page.url.pathname.includes('-headless');
	$: styledPath = styledExists ? $page.url.pathname.replace('-headless', '') : '';
	$: headlessPath = headlessExists
		? `${$page.url.pathname.replace('-headless', '')}-headless`
		: '';
</script>

<div class="text-surface-900-50 mb-10">
	<h1 class="text-4xl font-bold scroll-m-20 tracking-tight">{title}</h1>

	<p class="text-surface-800-100 text-lg my-2">{description}</p>

    {#if isComponent}
        <nav
            class="flex items-center rounded-btn border-1 border-primary-500 w-fit [&>a]:(flex justify-center items-center gap-1 font-semibold p-1 min-w-34 transition-all duration-150)"
        >
            <a
                href={headlessExists ? headlessPath : '#'}
                class="rounded-l-btn {!headlessExists
                    ? unavailableStyle
                    : pageIsHeadless
                    ? 'primary-500'
                    : inactiveStyle}"
            >
                <span class="i-material-symbols-water-drop-outline-rounded" />
                <span class={!headlessExists ? 'line-through' : ''}>Headless</span>
            </a>
            <a
                href={styledExists ? styledPath : '#'}
                class="rounded-r-btn {!styledExists
                    ? unavailableStyle
                    : pageIsHeadless
                    ? inactiveStyle
                    : 'primary-500'}"
            >
                <span class="i-material-symbols-water-drop-rounded" />
                <span class={!styledExists ? 'line-through' : ''}>Styled</span>
            </a>
        </nav>
    {/if}
</div>