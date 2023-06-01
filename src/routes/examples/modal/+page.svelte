<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';
	import { slide } from 'svelte/transition';

	let showModal = false;
</script>

<Modal
	bind:showModal
	buttonText="Open dialog"
	zIndex="z-999"
	backdropTransition={{ trans: slide, options: { duration: 200 } }}
>
	<div
		class="w-full max-w-md transform overflow-hidden rounded-container surface-50 p-6 text-left align-middle shadow-xl transition-all"
	>
		<h3 class="text-2xl font-bold">Payment successful</h3>
		<div class="mt-2">
			<p>
				Your payment has been successfully submitted. We’ve sent you an email with all of the
				details of your order.
			</p>
		</div>

		<div class="mt-4">
			<button class="btn-success" on:click={() => (showModal = false)}> Got it, thanks! </button>
		</div>
	</div>
</Modal>
