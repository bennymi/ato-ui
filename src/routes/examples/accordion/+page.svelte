<script lang="ts">
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/accordion/AccordionItem.svelte';
</script>

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
