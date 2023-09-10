<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	import type { AccordionContext } from './types';

	/** A unique key to identify the accordion item. */
	export let key: string;

	/** Set the title styles. */
	export let titleStyle = 'font-semibold leading-none';
	/** Set the title background style. */
	export let titleBgStyle = 'transition-all primary-400 hover:primary-500';
	/** Set the content styles. */
	export let contentStyle = 'px-2 py-4';

	const { content, item, trigger, isSelected, disabled, disabledStyle } =
		getContext<AccordionContext>('accordion');
</script>

<div {...$item(key)} use:item class="overflow-hidden transition-colors">
	<div>
		<button
			{...$trigger(key)}
			use:trigger
			class="p-4 w-full rounded-container {titleStyle} {titleBgStyle}
                {disabled ? disabledStyle : 'cursor-pointer'}"
		>
			<slot name="title" />
		</button>
	</div>

	{#if $isSelected(key)}
		<div {...$content(key)} use:content class="content {contentStyle}" transition:slide>
			<slot />
		</div>
	{/if}
</div>
