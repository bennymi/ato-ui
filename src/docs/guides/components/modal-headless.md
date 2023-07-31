---
title: Dialog (Modal)
description: An accessible headless modal component.
---

<script>
    import docs from '$lib/components/modal/Modal.svelte?raw&sveld';
    import Modal from '$lib/components/modal/Modal.svelte';

    let showModal = false;
</script>

## Preview

<Usage padding="py-20">
    <Modal bind:showModal buttonText="Open dialog" zIndex="z-999">
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
</Usage>

Please see the [HeadlessUI Modal](https://captaincodeman.github.io/svelte-headlessui/dialog/) documentation or the Github page for our [Styled Menu](https://github.com/bennymi/ato-ui/blob/main/src/lib/components/modal/Modal.svelte) to see how to create a modal. Remember to use Ato UI's tokens to style things like your `background`, `text`, `border`, etc.

```svelte showCode=true
<script lang="ts">
	import { createDialog } from 'svelte-headlessui';
    import { slide } from 'svelte/transition';

    const dialog = createDialog({ label: 'Payment successful' })
</script>

<button class="btn-primary" on:click={dialog.open}>
	Open dialog
</button>

{#if $dialog.expanded}
	<div class="absolute inset-0 z-10" transition:slide={{ duration: 200 }}>
		<div class="relative">
			<div class="fixed inset-0 bg-surface-900/30 backdrop-blur-sm" on:click={dialog.close} on:keydown />

			<div class="min-h-screen flex justify-center items-center" use:dialog.modal>
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
                        <button class="btn-success" on:click={dialog.close}> Got it, thanks! </button>
                    </div>
                </div>
			</div>
		</div>
	</div>
{/if}
```