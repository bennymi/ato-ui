---
title: Search All Classes
description: Search all classes (rules, shortcuts, classes) available in Ato-UI.
icon: i-material-symbols:search-rounded
---

<script>
    import Search from './Search.svelte';
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

<Search />