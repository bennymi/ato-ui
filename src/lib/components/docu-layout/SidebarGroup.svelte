<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { NavGroupItem } from './types';

	export let isLastGroup = false;
	export let hideTitle = false;
	export let groupIcon = '';
	export let groupTitle: string;
	export let items: NavGroupItem[][];

	let hideGroup = false;

	$: active = (path: string) => path === $page.url.pathname;
</script>

<div class="pb-6 space-y-1 {isLastGroup ? '' : 'border-b-1 border-surface-200/30'}">
	{#if !hideTitle}
		<div class="flex justify-between items-center">
			<div class="flex items-center space-x-1">
				{#if groupIcon}
					<span class="text-xl {groupIcon}" />
				{/if}
				<h2 class="font-bold">
					{groupTitle}
				</h2>
			</div>
			<button
				class="text-xl text-surface-600-900-300-50 {hideGroup
					? 'i-mdi-chevron-right'
					: 'i-mdi-chevron-down'}"
				on:click={() => (hideGroup = !hideGroup)}
			/>
		</div>
	{/if}
	<!-- {#each items as { title, path, icon, hoverIcon, headless }} -->
	{#if !hideGroup}
		{#each items as item, i}
			<div class="flex items-center gap-1" transition:slide={{ duration: 100, delay: i * 60 }}>
				<a
					href={item[0].sitePath}
					class="flex items-center gap-2 text-surface-600-900-300-50 {active(item[0].sitePath) ||
					(item.length === 2 && active(`${item[1].sitePath}`))
						? '!text-surface-900-50 font-semibold'
						: ''} group"
				>
					<!-- ? '!text-surface-900-50 font-semibold' -->
					{#if item[0].icon}
						<span class="text-lg {item[0].icon} {item[0].hoverIcon}" />
					{/if}
					<span>
						{item[0].title}
					</span>
				</a>

				{#if item.length === 2}
					<!-- <span class="px-1 bg-surface-500 text-on-surface rounded-token-base">H</span>
				<span class="px-1 bg-primary-500 text-on-primary rounded-token-base">S</span> -->
					<a
						href={`${item[0].sitePath}`}
						class="group flex items-center p-1 rounded-token-base {active(item[0].sitePath)
							? 'bg-primary-500'
							: 'bg-surface-500 '} hover:bg-primary-500"
					>
						<span class="sr-only">{`Headless ${item[0].title} component`}</span>
						<span
							class="text-lg {active(item[0].sitePath)
								? 'text-on-primary'
								: 'text-on-surface'} group-hover:text-on-primary i-material-symbols-water-drop-outline-rounded"
						/>
					</a>
					<a
						href={item[1].sitePath}
						class="group flex items-center p-1 rounded-token-base {active(item[1].sitePath)
							? 'bg-primary-500'
							: 'bg-surface-500 '} hover:bg-primary-500"
					>
						<span class="sr-only">{`Styled ${item[1].title} component`}</span>
						<span
							class="text-lg {active(item[1].sitePath)
								? 'text-on-primary'
								: 'text-on-surface'} group-hover:text-on-primary i-material-symbols-water-drop-rounded"
						/>
					</a>
				{/if}
			</div>
		{/each}
	{/if}
</div>
