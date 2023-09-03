<script lang="ts">
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { pre as CodeBlock } from '$components';

	import { Dialog } from 'ato-ui';

	export let name: string;
	export let description: string;

	export let type = '';
	export let defaultValue = '';
	export let typesSnippet = '';
	export let parentElement: string | null = '';
	export let specialTypes: string[] | null = [];

	export let highlight = false;
	export let showIcons = false;
	export let isFunction = false;
	export let isIcon = false;
	export let isStyle = false;
	export let isTransition = false;

	let open = writable(false);
	let clickedType = '';

	$: typeParts = type.split('|').map((item) => item.trim());
</script>

<div
	class:highlight
	transition:slide
	class="relative flex flex-col gap-2 surface-100 dark:surface-500 p-4 rounded-container ring-0.5 ring-surface-200/50 hover:(ring-primary-500)
"
>
	<!-- <div
        class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 inline-flex justify-center items-center rounded-container p-1 surface-100 dark:surface-500 ring-1 ring-surface-200/50"
    >
        {#if isStyle}
            <span class="text-xl i-material-symbols-format-color-fill-rounded" />
        {:else if isIcon}
            <span class="text-xl i-mdi-emoticon-wink-outline" />
        {:else}
            <span class="text-xl i-material-symbols-functions-rounded" />
        {/if}
    </div> -->
	{#if showIcons}
		<div
			class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 inline-flex flex-col gap-1 justify-center items-center rounded-container p-1 surface-100 dark:surface-500 ring-1 ring-surface-200/50"
		>
			{#if isFunction}
				<span class="text-xl i-material-symbols-functions-rounded" />
			{/if}
			{#if isStyle}
				<span class="text-xl i-material-symbols-format-color-fill-rounded" />
			{/if}
			{#if isIcon}
				<span class="text-xl i-mdi-emoticon-wink-outline" />
			{/if}
			{#if isTransition}
				<span class="text-xl i-mdi-transition" />
			{/if}
		</div>
	{/if}

	<div class="flex justify-left items-center gap-1 font-mono overflow-auto ml-2">
		<div class="shrink-0 px-2 bg-primary-500 rounded-container text-on-primary-500 w-fit">
			{name}
		</div>
		<!-- TODO: add tooltip on type -> shows options -->
		{#if type}
			<div>:</div>
			<div class="shrink-0 px-2 bg-surface-400 text-on-surface-400 rounded-container">
				{#each typeParts as option, i}
					{@const isSpecialType = specialTypes?.includes(option)}
					{@const isLast = i === typeParts.length - 1}

					{#if isSpecialType}
						<button
							class="underline"
							on:click={() => {
								clickedType = option;
								$open = true;
							}}
						>
							{option}
						</button>
						{`${!isLast ? ' | ' : ''}`}
					{:else}
						{`${option}${!isLast ? ' | ' : ''}`}
					{/if}
				{/each}
			</div>
		{/if}
		{#if defaultValue}
			<div>=</div>
			<div class="shrink-0 px-2 bg-secondary-500 text-on-secondary-500 rounded-container">
				{defaultValue}
			</div>
		{/if}
	</div>
	<!-- {#if parentElement}
		<div class="shrink-0 px-2 bg-surface-400 text-on-surface-400 rounded-container">
			Parent elemnt: {parentElement}
		</div>
	{/if} -->
	<div class="ml-2 text-justify selection:(text-on-primary bg-primary-500/70)">
		{description}
	</div>
</div>

<Dialog
	{open}
	preventScroll={true}
	containerStyle="p-4 w-fit max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl surface-50 dark:surface-700 p-4 shadow-md"
>
	<div class="inline-flex mb-4 px-2 surface-400 text-lg font-semibold rounded-container">
		{clickedType}
	</div>
	<div class="relative">
		<CodeBlock containerMargin="mb-4" height="h-fit max-h-[300px] md:max-h-[400px]">
			{@html typesSnippet}
		</CodeBlock>

		<button
			class="absolute z-60 left-1/2 bottom-1 transform -translate-y-1/2 -translate-x-1/2 btn-primary"
			on:click={() => {
				$open = false;
				clickedType = '';
			}}
		>
			<!-- <span class="sr-only">Close</span> -->
			<span class="text-xl i-material-symbols-cancel-outline-rounded" />
			<span>Close</span>
		</button>
	</div>
</Dialog>

<style>
	.highlight {
		/* shadow-[rgba(var(--color-error-500))_-4px_0px_0px_0px] */
		box-shadow:
			-4px 0 0 0 rgba(var(--color-error-500)),
			4px 0 0 0 rgba(var(--color-error-500));
	}
</style>
