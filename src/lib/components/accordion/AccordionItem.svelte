<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createDisclosure } from 'svelte-headlessui';
	import { getAccordionOptions } from './context';

	/** Set the default open state of the accordion item. */
	export let open = false;
	/** Set the aria label. */
	export let label: string;
	/** Set the collapse icon that should be used. */
	export let collapseIcon = '';
	/** Set the button styles. */
	export let buttonStyle = 'primary-200 hover:primary-300';
	/** Set the expanded panel style. */
	export let panelStyle = 'text-sm text-surface-900';

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
		class="flex w-full justify-between rounded-btn px-4 py-2 text-left text-sm font-medium transition-all {buttonStyle} focus:outline-none focus-visible:(ring ring-primary-500 ring-opacity-75)"
		on:click={handleClick}
	>
		<span><slot name="title" /></span>
		{#if collapseIcon}
			<span
				class="transition-all duration-300 text-lg {collapseIcon} {$accordion_item.expanded
					? 'rotate-180'
					: ''}"
			/>
		{:else}
			<span class="transition-all duration-300 {$accordion_item.expanded ? 'rotate-180' : ''}">
				<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"
					/></svg
				>
			</span>
		{/if}
	</button>
	{#if $accordion_item.expanded}
		<div use:accordion_item.panel class="px-4 pt-4 pb-2 {panelStyle}" transition:slide|local>
			<slot name="content" />
		</div>
	{/if}
</div>
