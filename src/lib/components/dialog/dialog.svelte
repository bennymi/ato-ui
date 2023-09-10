<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import { createDialog } from '@melt-ui/svelte';
	import type { DialogRole, DialogTransition } from './types';

	/** A writable store that controls whether or not the dialog is open. */
	export let open: Writable<boolean>;
	/** The role attribute of the dialog element. An alert dialog should be used to display content
	 * that is critical to the user's workflow, whereas a dialog should be used to display content
	 * that isn't critical to the user's workflow.
	 */
	export let role: DialogRole = 'dialog';
	/** Whether or not to close the dialog when the user clicks outside of it. */
	export let closeOnOutsideClick: boolean = true;
	/** Whether or not to prevent scrolling of the document when the dialog is open. */
	export let preventScroll: boolean = true;
	/** Whether the dialog is open by default or not. */
	export let defaultOpen: boolean = false;
	/** Set the overlay transition. */
	export let overlayTransition: DialogTransition = {
		trans: fade,
		options: { duration: 150 }
	};
	/** Set the dialog container transition. */
	export let containerTransition: DialogTransition = {
		trans: fade,
		options: { duration: 150 }
	};
	/** Center modal. */
	export let center = true;

	/** Set the position of the modal. This only has effect if the center prop is set to false. */
	export let position = 'left-0 top-0';
	/** Set the z-index. */
	export let zIndex = 'z-50';
	/** Set overlay style. */
	export let overlayStyle = 'bg-surface-800/40-300/40 backdrop-blur-sm';
	/** Set the container style. */
	export let containerStyle = 'surface-50 dark:surface-700 p-4 shadow-md';

	const {
		elements: { trigger, overlay, content, close }
	} = createDialog({
		forceVisible: true,
		portal: 'body',
		closeOnOutsideClick,
		defaultOpen,
		open,
		preventScroll,
		role
	});

	// const handle_backdrop_close = () => {
	// 	dispatcher('backdrop-clicked');
	// 	showModal = false;
	// };

	const { trans: overlayTrans, options: overlayOptions } = overlayTransition;
	const { trans: containerTrans, options: containerOptions } = containerTransition;

	let centerPosition = 'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]';

	$: dialogPosition = center ? centerPosition : position;
</script>

{#if $open}
	<div
		{...$overlay}
		use:overlay
		transition:overlayTrans={overlayOptions}
		class="fixed inset-0 {zIndex} {overlayStyle}"
	/>

	<div
		{...$content}
		use:content
		transition:containerTrans={containerOptions}
		class="rounded-container fixed {containerStyle} {zIndex} {dialogPosition}"
	>
		<slot />
	</div>
{/if}
