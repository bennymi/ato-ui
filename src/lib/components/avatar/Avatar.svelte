<script lang="ts">
	import { getContext } from 'svelte';
	import type { Rounded, Position } from '../../types/types.d';

	export let size: string = 'w-16'; //  h-16
	export let rounded: Rounded = 'rounded-token-base';
	export let badge: boolean = false;
	export let badgeBackground: string = 'bg-green-500';
	export let badgePosition: Position = 'bottom-right';
	export let badgeIcon: string = '';
	export let typing: boolean = false;
	export let typingSpinner: string = 's-dots-primary-100';

	// Test getContext without a parent
	// $: console.log('context', getContext('loading'));

	let positions: any = {
		'bottom-right': {
			'rounded-full': 'bottom-0.5 right-0.5',
			other: 'bottom-0 right-0'
		},
		'bottom-left': {
			'rounded-full': 'bottom-0.5 left-0.5',
			other: 'bottom-0 left-0'
		},
		'top-right': {
			'rounded-full': 'top-0.5 right-0.5',
			other: 'top-0 right-0'
		},
		'top-left': {
			'rounded-full': 'top-0.5 left-0.5',
			other: 'top-0 left-0'
		}
	};

	$: badgePos =
		rounded === 'rounded-full'
			? positions[badgePosition]['rounded-full']
			: positions[badgePosition]['other'];
</script>

<div class="{size} {rounded} relative inline-flex justify-center items-center">
	<div
		class="{size} {rounded} drag-none overflow-hidden transition-all border-4 border-surface-800"
	>
		<!-- hover:(border-primary-500) -->
		<img
			class="{size} {rounded} drag-none transition-all hover:(scale-110)"
			src="/corgi-avatar.jpg"
			alt="Rounded avatar"
		/>
	</div>
	{#if typing}
		<span
			class="absolute {badgePos} {badgeBackground} w-8 h-4 rounded-token-base border-2 border-surface-800 flex justify-center items-center"
		>
			<span class="inline-flex {typingSpinner} scale-[0.3]" />
		</span>
	{/if}
	{#if badge && !typing}
		<span
			class="absolute {badgePos} {badgeBackground} w-5 h-5 rounded-full border-2 border-surface-800 flex justify-center items-center"
		>
			{#if badgeIcon}
				<span class="inline-flex w-3 h-3 {badgeIcon}" />
			{/if}
		</span>
	{/if}
</div>
