---
---
<!-- title: Accordion
description: A simple accordion component. -->

<script>
    import Accordion from '$lib/components/accordion/Accordion.svelte';
    import AccordionItem from '$lib/components/accordion/AccordionItem.svelte';
</script>

## Preview

```svelte example height="h-60"
<!-- tab:example -->
<Accordion collapse>
    <AccordionItem label="refund policy" open>
        <svelte:fragment slot="title">What is your refund policy?</svelte:fragment>
        <svelte:fragment slot="content"
            >If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
            you in full, no questions asked.</svelte:fragment
        >
    </AccordionItem>
    <AccordionItem label="technical support" buttonStyle="secondary-200 hover:secondary-300">
        <svelte:fragment slot="title">Do you offer technical support?</svelte:fragment>
        <svelte:fragment slot="content">No.</svelte:fragment>
    </AccordionItem>
</Accordion>
<!-- tab:code -->
<script lang="ts">
	import { Accordion, AccordionItem } from 'ato-ui';
</script>

<Accordion collapse>
	<AccordionItem label="refund policy" open>
		<svelte:fragment slot="title">What is your refund policy?</svelte:fragment>
		<svelte:fragment slot="content">
            If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
			you in full, no questions asked.
        </svelte:fragment>
	</AccordionItem>
	<AccordionItem label="technical support" buttonStyle="secondary-200 hover:secondary-300">
		<svelte:fragment slot="title">Do you offer technical support?</svelte:fragment>
		<svelte:fragment slot="content">No.</svelte:fragment>
	</AccordionItem>
</Accordion>
```

## Collapse

The `collapse` prop allows you to set whether multiple accordion items are allowed to be open at the same time. If `collapse = true` it will close other items if a new one is opened. By default `collapse = false`.

```svelte example height="h-60"
<!-- tab:example -->
<Accordion>
    <AccordionItem label="refund policy" open>
        <svelte:fragment slot="title">What is your refund policy?</svelte:fragment>
        <svelte:fragment slot="content"
            >If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
            you in full, no questions asked.</svelte:fragment
        >
    </AccordionItem>
    <AccordionItem label="technical support" open buttonStyle="secondary-200 hover:secondary-300">
        <svelte:fragment slot="title">Do you offer technical support?</svelte:fragment>
        <svelte:fragment slot="content">No.</svelte:fragment>
    </AccordionItem>
</Accordion>
<!-- tab:code -->
<Accordion collapse={false}>
    <!-- Items... -->
</Accordion>
```

## Button Style

You can change an item's button styles with the `buttonStyle` prop.

```svelte example height="h-60"
<!-- tab:example -->
<Accordion>
    <AccordionItem label="refund policy" buttonStyle="success-200 hover:success-300">
        <svelte:fragment slot="title">What is your refund policy?</svelte:fragment>
        <svelte:fragment slot="content"
            >If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
            you in full, no questions asked.</svelte:fragment
        >
    </AccordionItem>
    <AccordionItem label="technical support" buttonStyle="error-200 hover:error-300">
        <svelte:fragment slot="title">Do you offer technical support?</svelte:fragment>
        <svelte:fragment slot="content">No.</svelte:fragment>
    </AccordionItem>
</Accordion>
<!-- tab:code -->
<Accordion>
    <AccordionItem label="refund policy" buttonStyle="success-200 hover:success-300">
        <!-- title & content -->
    </AccordionItem>
    <AccordionItem label="technical support" buttonStyle="error-200 hover:error-300">
        <!-- title & content -->
    </AccordionItem>
</Accordion>
```

## Collapse Icon

You can change the item's default collapse icon with the `collapseIcon` prop by passing it an iconify icon.

```svelte example height="h-60"
<!-- tab:example -->
<Accordion>
    <AccordionItem label="refund policy" collapseIcon="i-material-symbols-local-fire-department-rounded">
        <svelte:fragment slot="title">What is your refund policy?</svelte:fragment>
        <svelte:fragment slot="content"
            >If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
            you in full, no questions asked.</svelte:fragment
        >
    </AccordionItem>
    <AccordionItem label="technical support" collapseIcon="i-material-symbols-rocket-rounded">
        <svelte:fragment slot="title">Do you offer technical support?</svelte:fragment>
        <svelte:fragment slot="content">No.</svelte:fragment>
    </AccordionItem>
</Accordion>
<!-- tab:code -->
<Accordion>
    <AccordionItem label="fire" collapseIcon="i-material-symbols-local-fire-department-rounded">
        <!-- title & content -->
    </AccordionItem>
    <AccordionItem label="rocket" collapseIcon="i-material-symbols-rocket-rounded">
        <!-- title & content -->
    </AccordionItem>
</Accordion>
```