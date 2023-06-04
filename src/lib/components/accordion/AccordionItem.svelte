<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createDisclosure } from 'svelte-headlessui';
	import { getAccordionOptions } from './context';

	/** Set the default open state of the accordion item. */
	export let open = false;
	/** Set the aria label. */
	export let label: string;
	/** Set the button styles. */
	export let buttonStyles = 'primary-200 hover:primary-300';

	// Assign a unique identifier for the component.
	const componentId = crypto.randomUUID();

	// Get the accordion options using the context api.
	const { collapse, activeComponentId } = getAccordionOptions();

	// Create the accordion item.
	const accordion_item = createDisclosure({ label, expanded: false });

	function setActive() {
		// update the store value in the context
		$activeComponentId = componentId;
	}

	function handleClick() {
		if (collapse) {
			setActive();
		}
	}

	// Set the accordion item to be open by default.
	$: if (open) {
		setActive();
		accordion_item.open();
	}

	$: {
		const isActive = $activeComponentId === componentId;

		if (collapse && !isActive) {
			accordion_item.close();
		}
	}

	$: {
		const shouldExpand = $accordion_item.expanded;

		if (collapse && shouldExpand) {
			setActive();
		}
	}
</script>

<div>
	<button
		use:accordion_item.button
		class="flex w-full justify-between rounded-btn px-4 py-2 text-left text-sm font-medium transition-all {buttonStyles} focus:outline-none focus-visible:(ring ring-primary-500 ring-opacity-75)"
		on:click={handleClick}
	>
		<span><slot name="title" /></span>
		<span
			class="transition-all duration-300 text-lg i-mdi-chevron-up {$accordion_item.expanded
				? 'rotate-180'
				: ''}"
		/>
	</button>
	{#if $accordion_item.expanded}
		<div
			use:accordion_item.panel
			class="px-4 pt-4 pb-2 text-sm text-surface-500"
			transition:slide|local
		>
			<slot name="content" />
		</div>
	{/if}
</div>
