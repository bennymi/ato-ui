<script lang="ts">
	import { page } from '$app/stores';
	import type { Dependency } from '$docs/data/types';
	import type { Metadata } from '$docs/utils/preview';
	
	import { HeaderLink } from '$components';

	export let meta: Metadata | undefined;
	export let githubPath: string | undefined;
	export let dependencies: Dependency[] = [];
	export let isComponent = false;
	export let headlessExists = false;
	export let styledExists = false;

	const unavailableStyle = 'text-surface-500-100 opacity-50 cursor-not-allowed';
	const inactiveStyle = 'text-surface-800-100 hover:primary-500/80!';

	$: pageIsHeadless = $page.url.pathname.includes('-headless');
	$: styledPath = styledExists ? $page.url.pathname.replace('-headless', '') : '';
	$: headlessPath = headlessExists ? `${$page.url.pathname.replace('-headless', '')}-headless` : '';
</script>

<div class="text-surface-900-50 mb-10">
	<h1 class="text-4xl font-bold scroll-m-20 tracking-tight">{meta?.title}</h1>

	<p class="text-surface-800-100 text-xl mt-2 mb-4">{meta?.description}</p>

	{#if isComponent}
		<nav
			class="my-4 flex items-center rounded-btn border-1 border-primary-500 w-fit [&>a]:(flex justify-center items-center gap-1 font-semibold p-1 min-w-28 transition-all duration-150)"
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

	<div class="flex gap-2">
		<!-- <a
			class="inline-flex justify-center items-center gap-2 transition-all surface-500 hover:surface-800 border-1 border-surface-500/50 rounded-container px-1"
			href={`https://github.com/bennymi/ato-ui/tree/main${githubPath}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="text-lg i-material-symbols-edit-square-outline-rounded"></span>
			<span class="tracking-tight">Edit page</span>
		</a> -->
		<HeaderLink
			href={`https://github.com/bennymi/ato-ui/tree/main${githubPath}`}
			text="Edit page"
			icon="i-material-symbols-edit-square-outline-rounded"
		/>

		{#if isComponent && styledExists}
			<HeaderLink
				href={`https://github.com/bennymi/ato-ui/tree/main/src/lib/components/${$page.params.slug}`}
				text="Styled source"
				icon="i-mdi-github"
			/>
			<!-- <a
				class="inline-flex justify-center items-center gap-1 surface-700 border-1 border-surface-800 rounded-container px-1"
				href={`https://github.com/bennymi/ato-ui/tree/main/src/lib/components${$page.url.pathname}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="text-lg i-mdi-github"></span>
				<span class="tracking-tight">Styled source</span>
			</a> -->
		{/if}

	</div>

	<!-- <a
		class="inline-flex items-center gap-1 underline underline-offset-2 transition-colors hover:text-surface-800/80-100/80 selection:(text-on-primary bg-primary-500/70)"
		href={`https://github.com/bennymi/ato-ui/tree/main${githubPath}`}
		target="_blank"
		rel="noopener noreferrer"
	>
		<span class="h-5 w-5 i-material-symbols-edit-square-outline-rounded"></span>
		<span>Suggest changes to this page</span>
	</a> -->

	<!-- {#if isComponent}
		<div class="mt-2 flex items-center gap-2">
			<div class="mr-4 inline-flex gap-1 justify-center items-center font-semibold">
				<span class="h-5 w-5 i-mdi-package-check" />
				<span>{dependencies.length > 1 ? 'Dependencies' : 'Dependency'}:</span>
			</div>
			<div class="flex items-center gap-1">
				{#each dependencies as dep}
					<code
						class="px-2 bg-primary-500/20 border-1 border-primary-500 rounded-container selection:(text-on-primary bg-primary-500/70)"
						>{dep}</code
					>
				{/each}
			</div>
		</div>
	{/if} -->
</div>
