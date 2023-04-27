<script lang="ts">
	import { page } from '$app/stores';
	import type { NavGroupItem } from './types';

	export let isLastGroup = false;
	export let hideTitle = false;
	export let groupIcon = '';
	export let groupTitle: string;
	export let items: NavGroupItem[];

	$: active = (path: string) => path === $page.url.pathname;
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
	{#each items as { title, path, icon, hoverIcon, headless }}
		<div class="flex items-center gap-1">
			<a
				href={path}
				class="flex items-center gap-2 text-surface-600-900-300-50 {active(path) ||
				active(`${path}/headless`)
					? '!text-surface-900-50 font-semibold'
					: ''} group"
			>
				<!-- ? '!text-surface-900-50 font-semibold' -->
				{#if icon}
					<span class="text-lg {icon} {hoverIcon}" />
				{/if}
				<span>
					{title}
				</span>
			</a>

			{#if headless}
				<!-- <span class="px-1 bg-surface-500 text-on-surface rounded-token-base">H</span>
				<span class="px-1 bg-primary-500 text-on-primary rounded-token-base">S</span> -->
				<a
					href={path}
					class="group flex items-center p-1 rounded-token-base {active(path)
						? 'bg-primary-500'
						: 'bg-surface-500 '} hover:bg-primary-500"
				>
					<span
						class="text-lg {active(path)
							? 'text-on-primary'
							: 'text-on-surface'} group-hover:text-on-primary i-material-symbols-water-drop-outline-rounded"
					/>
				</a>
				<a
					href={`${path}/headless`}
					class="group flex items-center p-1 rounded-token-base {active(`${path}/headless`)
						? 'bg-primary-500'
						: 'bg-surface-500 '} hover:bg-primary-500"
				>
					<span
						class="text-lg {active(path)
							? 'text-on-primary'
							: 'text-on-surface'} group-hover:text-on-primary i-material-symbols-water-drop-rounded"
					/>
				</a>
			{/if}
		</div>
	{/each}
</div>
