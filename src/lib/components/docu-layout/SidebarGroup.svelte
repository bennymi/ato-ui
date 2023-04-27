<script lang="ts">
	import { page } from '$app/stores';
	import type { NavGroupItem } from './types';

	export let isLastGroup = false;
	export let hideTitle = false;
	export let groupIcon = '';
	export let groupTitle: string;
	export let items: NavGroupItem[];
</script>

<div class="pb-6 space-y-1 {isLastGroup ? '' : 'border-b-1 border-surface-200/30'}">
	{#if !hideTitle}
		<div class="flex items-center space-x-1">
			{#if groupIcon}
				<span class="text-xl {groupIcon}" />
			{/if}
			<h2 class="font-bold">
				{groupTitle}
			</h2>
		</div>
	{/if}
	{#each items as { title, path, icon, hoverIcon }}
		<a
			href={path}
			class="flex items-center gap-2 hover:text-primary-500 {path === $page.url.pathname
				? 'text-primary-500'
				: ''} group"
		>
			{#if icon}
				<span class="text-lg {icon} {hoverIcon}" />
			{/if}
			{title}
		</a>
	{/each}
</div>
