<script lang="ts">
	import { setAccordionOptions } from './context';

	/** By default more than one accordion item can be opened. */
	export let collapse = false;
	/** Set the accordion width. */
	export let width = 'w-full max-w-md';

	// Set the context API for all accordion items.
	setAccordionOptions({ collapse });
</script>

<div
	class="{width} rounded-container bg-white shadow-md shadow-surface-900/40 p-2 flex flex-col gap-2"
>
	<slot />
</div>
