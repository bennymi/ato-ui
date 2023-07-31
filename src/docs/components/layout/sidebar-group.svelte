<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { NavGroupItem } from './types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let isLastGroup = false;
	export let hideTitle = false;
	export let groupIcon = '';
	export let groupTitle: string;
	export let items: NavGroupItem[][];

	let group_id = `ato-sidebar-group-${groupTitle.toLowerCase()}`;
	let hide_group = false;

	const handleClick = (sitePath: string) => {
		dispatch('item-clicked', sitePath);
	};

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
				class=""
				on:click={() => (hide_group = !hide_group)}
				aria-expanded={!hide_group}
				aria-controls={group_id}
			>
				<span class="sr-only"
					>{`${hide_group ? 'show' : 'hide'} ${groupTitle} sidebar menu group`}</span
				>
				<span
					class="text-xl text-surface-600-900-300-50 i-mdi-chevron-right transition-all {hide_group
						? ''
						: 'rotate-90'}"
				/>
			</button>
		</div>
	{/if}

	{#if !hide_group}
		<div id={group_id} transition:slide={{ duration: 300 }}>
			{#each items as item, i}
				<div class="flex items-center gap-1">
					<a
						href={item[0].sitePath}
						class="group flex items-center gap-2 px-1 rounded-btn text-surface-700-900-200-50 hover:(ring-2 ring-primary-500) {active(
							item[0].sitePath
						) ||
						(item.length === 2 && active(`${item[1].sitePath}`))
							? 'primary-500!'
							: ''}"
						on:click={() => handleClick(item[0].sitePath)}
						on:keydown
					>
						{#if item[0].icon}
							<span class="text-lg {item[0].icon} {item[0].hoverIcon}" />
						{/if}
						<span>
							{item[0].title}
						</span>
					</a>

					<!-- {#if item.length === 2}
						<a
							href={`${item[0].sitePath}`}
							class="group flex items-center p-1 rounded-btn {active(item[0].sitePath)
								? 'bg-primary-500'
								: 'bg-surface-500 '} hover:bg-primary-500"
							on:click={() => handleClick(item[0].sitePath)}
							on:keydown
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
							class="group flex items-center p-1 rounded-btn {active(item[1].sitePath)
								? 'bg-primary-500'
								: 'bg-surface-500 '} hover:bg-primary-500"
							on:click={() => handleClick(item[1].sitePath)}
							on:keydown
						>
							<span class="sr-only">{`Styled ${item[1].title} component`}</span>
							<span
								class="text-lg {active(item[1].sitePath)
									? 'text-on-primary'
									: 'text-on-surface'} group-hover:text-on-primary i-material-symbols-water-drop-rounded"
							/>
						</a>
					{/if} -->
				</div>
			{/each}
		</div>
	{/if}
</div>
