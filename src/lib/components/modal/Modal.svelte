<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createDialog } from 'svelte-headlessui';
	import { fade } from 'svelte/transition';
	import type { BackdropTransition } from './types';

	const dispatcher = createEventDispatcher();

	/** Button text. */
	export let buttonText = '';
	/** Set button style. */
	export let buttonStyle = 'btn-primary';
	/** Open modal. */
	export let showModal = false;
	/** Set the z-index. */
	export let zIndex = 'z-10';
	/** Set backdrop style. */
	export let backdropStyle = 'bg-surface-900/30 backdrop-blur-sm';
	/** Center modal. */
	export let center = true;
	/** Set aria-label. */
	export let ariaLabel = '';

	export let backdropTransition: BackdropTransition = {
		trans: fade,
		options: { duration: 150 }
	};

	const { trans, options } = backdropTransition;
	const dialog = createDialog({ label: ariaLabel });

	const handle_button_open = () => {
		dispatcher('open-modal-btn-clicked');
		showModal = true;
	};

	const handle_backdrop_close = () => {
		dispatcher('backdrop-clicked');
		showModal = false;
	};

	$: if (!showModal) {
		dialog.close();
	}
	$: if (showModal) {
		dialog.open();
	}
	$: showModal = $dialog.expanded;
</script>

<button class={buttonStyle} on:click={handle_button_open}>
	{buttonText}
</button>

{#if showModal}
	<div class="absolute inset-0 {zIndex}" transition:trans={options}>
		<div class="relative">
			<div class="fixed inset-0 {backdropStyle}" on:click={handle_backdrop_close} on:keydown />

			<div class={center ? 'min-h-screen flex justify-center items-center' : ''} use:dialog.modal>
				<slot />
			</div>
		</div>
	</div>
{/if}
