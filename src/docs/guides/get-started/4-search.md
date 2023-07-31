

<!-- 
title: Search All Classes
description: Search all classes (rules, shortcuts, classes) available in Ato-UI.
icon: i-material-symbols:search-rounded
 -->

<script>
    import { Search } from '$components';
</script>

<svelte:head>
    <style>
		#ato-ui-docu.dark > div {
			background-color: rgb(var(--color-surface-800));
			background-image: radial-gradient(
					at 8% 0%,
					rgba(var(--color-primary-500), 0.35) 0px,
					transparent 50%
				),
				radial-gradient(at 100% 0%, rgba(var(--color-secondary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 0% 100%, rgba(var(--color-secondary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 100% 100%, rgba(var(--color-primary-500), 0.3) 0px, transparent 50%);
		}
		#ato-ui-docu > div {
			background-color: rgb(var(--color-surface-50));
			background-image: radial-gradient(
					at 8% 0%,
					rgba(var(--color-primary-500), 0.35) 0px,
					transparent 50%
				),
				radial-gradient(at 100% 0%, rgba(var(--color-secondary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 0% 100%, rgba(var(--color-secondary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 100% 100%, rgba(var(--color-primary-500), 0.3) 0px, transparent 50%);
		}
	</style>
</svelte:head>

# Search

<div class="flex rounded-container mb-4 font-semibold">
	<div class="warning-900 rounded-l-container p-2">Note</div>
	<div class="warning-500 rounded-r-container p-2">This page is a WIP and currently only shows button classes.</div>
</div>

<Search />