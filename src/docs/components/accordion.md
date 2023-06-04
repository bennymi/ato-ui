---
title: Accordion
description: A simple accordion component.
---

<script>
    import PropsTable from './PropsTable.svelte';
    import accordion_docs from '$lib/components/accordion/Accordion.svelte?raw&sveld';
    import accordion_item_docs from '$lib/components/accordion/AccordionItem.svelte?raw&sveld';
    import Accordion from '$lib/components/accordion/Accordion.svelte';
    import AccordionItem from '$lib/components/accordion/AccordionItem.svelte';
</script>

# Accordion

## Usage

<div class="w-full flex justify-center items-center px-2 h-60 rounded-container border-1 border-surface-500/30-200/30 my-4">
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
</div>

```svelte
<script lang="ts">
	import Accordion from 'ato-ui';
	import AccordionItem from 'ato-ui';
</script>

<Accordion collapse>
	<AccordionItem label="refund policy" open>
		<svelte:fragment slot="title">What is your refund policy?</svelte:fragment>
		<svelte:fragment slot="content">
            If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
			you in full, no questions asked.
        </svelte:fragment>
	</AccordionItem>
	<AccordionItem label="technical support" buttonStyles="secondary-200 hover:secondary-300">
		<svelte:fragment slot="title">Do you offer technical support?</svelte:fragment>
		<svelte:fragment slot="content">No.</svelte:fragment>
	</AccordionItem>
</Accordion>
```

## Props

### Accordion

<PropsTable props={accordion_docs.props} />

### AccordionItem

<PropsTable props={accordion_item_docs.props} />