<script lang="ts">
	import type { Rounded, Position } from '../../types/types.d';

	export let size: string = 'w-16 h-16';
	export let rounded: Rounded = 'rounded-token-base';
	export let badge: boolean = false;
	export let badgeBackground: string = 'bg-green-500';
	export let badgePosition: Position = 'bottom-right';
	export let badgeIcon: string = '';

	$: badgePos = rounded === 'rounded-full' ? 'bottom-1 right-1' : 'bottom-0 right-0';
</script>

<div class="{size} relative inline-flex justify-center items-center">
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
	{#if badge}
		<span
			class="absolute {badgePos} {badgeBackground} w-5 h-5 rounded-full border-2 border-surface-800 flex justify-center items-center"
		>
			{#if badgeIcon}
				<span class="w-full inline-flex w-3 h-3 {badgeIcon}" />
			{/if}
		</span>
	{/if}
</div>
