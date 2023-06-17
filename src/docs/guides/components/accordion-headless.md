---
title: Accordion
description: A headless accordion component.
---

<script>
	import Usage from '../Usage.svelte';
    import Accordion from '$lib/components/accordion/Accordion.svelte';
    import AccordionItem from '$lib/components/accordion/AccordionItem.svelte';
</script>

# Accordion | Headless

## Example

<Usage height="h-60">
    <Accordion collapse>
        <AccordionItem label="refund policy" open>
            <svelte:fragment slot="title">What is your refund policy?</svelte:fragment>
            <svelte:fragment slot="content"
                >If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
                you in full, no questions asked.</svelte:fragment
            >
        </AccordionItem>
        <AccordionItem label="technical support" buttonStyles="secondary-200 hover:secondary-300">
            <svelte:fragment slot="title">Do you offer technical support?</svelte:fragment>
            <svelte:fragment slot="content">No.</svelte:fragment>
        </AccordionItem>
    </Accordion>
</Usage>

Please see the [HeadlessUI](https://captaincodeman.github.io/svelte-headlessui/disclosure/) documentation or the Github page for our [Styled Accordion](https://github.com/bennymi/ato-ui/blob/main/src/lib/components/accordion/Accordion.svelte) to see how to create an Accordion. Remember to use Ato UI's tokens to style things like your `background`, `text`, `border`, etc.

```svelte showCode=true
<script lang="ts">
	import { createDisclosure } from 'svelte-headlessui';
	import { slide } from 'svelte/transition';

	const refund = createDisclosure({ label: 'Refund Policy', expanded: true });
	const support = createDisclosure({ label: 'Technical Support', expanded: true });
</script>

<div class="mx-auto w-full max-w-md rounded-container bg-white shadow-md shadow-surface-900/40 p-2">
    <!-- Item 1 -->
	<div>
		<button
			use:refund.button
			class="flex w-full justify-between rounded-btn px-4 py-2 text-left text-sm font-medium transition-all primary-200 hover:primary-300 focus:outline-none focus-visible:(ring ring-primary-500 ring-opacity-75)"
		>
			<span>What is your refund policy?</span>
			<span
				class="transition-all duration-300 text-lg i-mdi-chevron-up {$refund.expanded
					? 'rotate-180'
					: ''}"
			/>
		</button>
		{#if $refund.expanded}
			<div use:refund.panel class="px-4 pt-4 pb-2 text-sm text-surface-500" transition:slide|local>
				If you're unhappy with your purchase for any reason, email us within 90 days and we'll
				refund you in full, no questions asked.
			</div>
		{/if}
	</div>

    <!-- Item 2 -->
	<div class="mt-2">
		<button
			use:support.button
			class="flex w-full justify-between rounded-btn px-4 py-2 text-left text-sm font-medium transition-all primary-200 hover:primary-300 focus:outline-none focus-visible:(ring ring-primary-500 ring-opacity-75)"
		>
			<span>Do you offer technical support?</span>
			<span
				class="transition-all duration-300 text-lg i-mdi-chevron-up {$support.expanded
					? 'rotate-180'
					: ''}"
			/>
		</button>
		{#if $support.expanded}
			<div use:support.panel class="px-4 pt-4 pb-2 text-sm text-surface-500" transition:slide|local>
				No.
			</div>
		{/if}
	</div>
</div>
```