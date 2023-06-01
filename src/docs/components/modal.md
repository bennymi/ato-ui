---
title: Dialog (Modal)
component: components/modal/Modal.svelte
description: An accessible modal component with a backdrop.
---

<script>
    import PropsTable from './PropsTable.svelte';
    import docs from '$lib/components/modal/Modal.svelte?raw&sveld';
    import Modal from '$lib/components/modal/Modal.svelte';

    let showModal = false;
</script>

# Dialog (Modal)

## Usage

<div class="w-full flex justify-center items-center py-20 px-2 rounded-container border-1 border-surface-500/30-200/30 my-4">
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
</div>

You can open and close the modal by binding the `showModal` prop and setting it to `true` or `false`.

```svelte
<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';

	let showModal = false;
</script>

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
```

## Button Style

You can change the button style by passing it a button class.

```svelte

<Modal
	bind:showModal
	buttonText="Open dialog"
    buttonStyle="btn-secondary"
>
    <!-- Content -->
</Modal>
```

## Transition

You can change the transition for the modal opening and closing by using the `backdropTransition` prop and passing it an object with a function and options like so:

```svelte
<script>
    import Modal from '$lib/components/modal/Modal.svelte';
	import { slide } from 'svelte/transition';

	let showModal = false;
</script>

<Modal
	bind:showModal
	buttonText="Open dialog"
	backdropTransition={{ trans: slide, options: { duration: 200 } }}
>
    <!-- Content -->
</Modal>
```

## Props

<PropsTable props={docs.props} />