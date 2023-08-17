<script lang="ts">
	import { default as Heading } from './markdown/heading.svelte';
	import type { APIProp, Data } from '$docs/data/types';

	export let componentData: Data;
	export let componentAPI: APIProp[];

	const { apiExtraInfo } = componentData;

	function isRequired(component: string, prop: string): boolean {
		if (!apiExtraInfo) return false;

		const idx = apiExtraInfo.findIndex((item) => item.component === component);
		if (idx === -1) return false;

		return apiExtraInfo[idx].required?.includes(prop) ?? false;
	}

	function isStyleProp(component: string, prop: string): boolean {
		if (!apiExtraInfo) return false;

		const idx = apiExtraInfo.findIndex((item) => item.component === component);
		if (idx === -1) return false;

		return apiExtraInfo[idx].styles?.includes(prop) ?? false;
	}

	function isIconProp(component: string, prop: string): boolean {
		if (!apiExtraInfo) return false;

		const idx = apiExtraInfo.findIndex((item) => item.component === component);
		if (idx === -1) return false;

		return apiExtraInfo[idx].icons?.includes(prop) ?? false;
	}
</script>

{#if componentAPI}
	<Heading content="API" headerTag="h2">API</Heading>

	{#each componentAPI as { component, props }}
		<Heading content={component} headerTag="h3">
			{component}
		</Heading>

		<div class="flex flex-col gap-2">
			{#each props as { name, type, description, defaultValue }}
				{@const required = isRequired(component, name)}
				{@const isStyle = isStyleProp(component, name)}
				{@const isIcon = isIconProp(component, name)}
				<div
					class="flex flex-col gap-2 surface-100 dark:surface-500 p-4 rounded-container hover:(ring-1 ring-primary-500)
                {required ? 'shadow-[rgba(var(--color-error-500))_-4px_0px_0px_0px]' : ''}"
				>
					<div class="flex justify-left items-center gap-1 font-mono overflow-auto">
						{#if isStyle}
							<span class="text-xl i-material-symbols-format-color-fill-rounded" />
						{:else if isIcon}
							<span class="text-xl i-mdi-emoticon-wink-outline" />
						{:else}
							<span class="text-xl i-material-symbols-functions-rounded" />
						{/if}
						<div class="shrink-0 px-2 bg-primary-500 rounded-container text-on-primary-500 w-fit">
							{name}
						</div>
						<div>:</div>
						<!-- TODO: add tooltip on type -> shows options -->
						<div class="shrink-0 px-2 bg-surface-400 text-on-surface-400 rounded-container">
							{type}
						</div>
						{#if defaultValue}
							<div>=</div>
							<div class="shrink-0 px-2 bg-secondary-500 text-on-secondary-500 rounded-container">
								{defaultValue}
							</div>
						{/if}
					</div>
					<div>
						{description}
					</div>
				</div>
			{/each}
		</div>
	{/each}
{/if}
