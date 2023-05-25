<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Rounded, Position } from '../../types/types.d';

	const dispatch = createEventDispatcher();

	/** Set the image source. */
	export let src = '';
	/** Set the image alt value. */
	export let alt = 'avatar';
	/** Set the text value in case you don't have an image. The string automatically gets shortened to 4 characters. If you pass in separate words it will use the first letters of each word. */
	export let text = '';
	/** Set the width and height of the avatar. */
	export let size = 'w-16 h-16';
	/** Set the rounded shape. */
	export let rounded: Rounded = 'rounded-btn';
	/** Set the border size. You can also use this to apply hover effects: hover:(...). */
	export let borderSize = 'border-2';
	/** Set the border color. You can also use this to apply hover effects: hover:(...). */
	export let borderColor = 'border-surface-500-800';
	/** Set the background color, for when the text is being shown. Has no effect for when an image is being shown. */
	export let background = 'bg-primary-500';
	/** Set the text styles. */
	export let textStyles = 'font-bold text-on-primary';

	/** Show a badge. */
	export let badge = false;
	/** Set the badge color. */
	export let badgeBackground = 'bg-green-500';
	/** Set the badge position. */
	export let badgePosition: Position = 'bottom-right';
	/** Show notifications. */
	export let notifications = '';
	/** Set the notifications style. */
	export let notificationsStyle = 'text-xs font-semibold';
	/** Specify an icon to show in the badge. Use UnoCSS css icons. */
	export let badgeIcon = '';
	/** Show a typing animation. */
	export let typing = false;
	/** Specify the animation to use. */
	export let typingSpinner = 's-dots-primary-100';

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

	const formatText = () => {
		let letters = text
			.trim()
			.split(/\s/g)
			.map((item) => item[0]);

		return letters.slice(0, 4).join('');
	};

	$: formattedText = text.length < 5 ? text : formatText();

	$: badgePos =
		rounded === 'rounded-full'
			? positions[badgePosition]['rounded-full']
			: positions[badgePosition].other;
</script>

<div class="avatar {size} {rounded} relative inline-flex justify-center items-center">
	<div
		class="avatar-image {size} {rounded} {borderSize} {borderColor} {background} inline-flex justify-center items-center drag-none overflow-hidden"
		on:mouseenter={(event) => dispatch('avatar-mouseenter', event)}
		on:mouseleave={(event) => dispatch('avatar-mouseleave', event)}
		on:click={(event) => dispatch('avatar-click', event)}
		on:keydown
	>
		{#if src}
			<img class="{size} {rounded} drag-none transition-all hover:(scale-110)" {src} {alt} />
		{:else}
			<span class={textStyles}>{formattedText}</span>
		{/if}
	</div>
	{#if typing}
		<span
			class="avatar-typing absolute {badgePos} {badgeBackground} w-8 h-4 rounded-btn border-2 {borderColor} flex justify-center items-center"
		>
			<span class="inline-flex {typingSpinner} scale-[0.3]" />
		</span>
	{/if}
	{#if badge && !typing}
		<div
			class="avatar-badge absolute w-5 h-5 rounded-lg border-2 {borderColor} flex justify-center items-center {badgePos} {badgeBackground}"
			on:mouseenter={(event) => dispatch('badge-mouseenter', event)}
			on:mouseleave={(event) => dispatch('badge-mouseleave', event)}
			on:click={(event) => dispatch('badge-click', event)}
			on:keydown
		>
			{#if notifications}
				<span class={notificationsStyle}>{notifications}</span>
			{:else if badgeIcon}
				<span class="inline-flex w-3 h-3 {badgeIcon}" />
			{/if}
		</div>
	{/if}
</div>
