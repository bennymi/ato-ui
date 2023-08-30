<script lang="ts">
	import { slide } from 'svelte/transition';
	import { default as Heading } from './markdown/heading.svelte';
	import type { APIProp, Data } from '$docs/data/types';

	export let componentData: Data;
	export let componentAPI: APIProp[];

	const filterButtons = [
		{
			value: 'all',
			icon: 'i-material-symbols-filter-alt-off-rounded'
		},
		{
			value: 'required',
			icon: 'h-4 w-4 rounded-container bg-error-500 ring-1 ring-surface-500/50'
		},
		{
			value: 'function',
			icon: 'i-material-symbols-functions-rounded'
		},
		{
			value: 'style',
			icon: 'i-material-symbols-format-color-fill-rounded'
		},
		{
			value: 'icon',
			icon: 'i-mdi-emoticon-wink-outline'
		},
		{
			value: 'transition',
			icon: 'i-mdi-transition'
		}
	];

	let filter: 'all' | 'required' | 'function' | 'style' | 'icon' | 'transition' = 'all';
	let apis: APIProp[] = [];

	function resetFilter(componentData: Data): void {
		filter = 'all';
	}

	$: ({ apiExtraInfo } = componentData);
	$: resetFilter(componentData);

	$: {
		const newAPIs: APIProp[] = [];

		componentAPI?.forEach((component) => {
			const props: typeof component.props = [];

			const idx = apiExtraInfo?.findIndex((item) => item.component === component.component);

			if (!apiExtraInfo || idx === undefined || idx === -1) {
				newAPIs.push({
					component: component.component,
					oldName: component.component,
					props: component.props.map((prop) => ({
						...prop,
						required: false,
						isIcon: false,
						isStyle: false,
						isTransition: false,
					}))
				});
				return;
			}

			component.props?.forEach((prop) => {
				const required = apiExtraInfo![idx].required?.includes(prop.name) ?? false;
				const isStyle = apiExtraInfo![idx].styles?.includes(prop.name) ?? false;
				const isIcon = apiExtraInfo![idx].icons?.includes(prop.name) ?? false;
				const isTransition = apiExtraInfo![idx].transitions?.includes(prop.name) ?? false;
				const isFunction = ((!isStyle && !isIcon && !isTransition) || apiExtraInfo![idx].function?.includes(prop.name)) ?? false;

				props.push({
					...prop,
					required,
					isIcon,
					isStyle,
					isTransition,
					isFunction
				});
			});

			newAPIs.push({
				component: apiExtraInfo[idx].updatedName ?? component.component,
				oldName: component.component,
				props
			});
		});

		// apis = newAPIs;
		apiExtraInfo?.forEach(({ component, events, slots }) => {
			const idx = newAPIs?.findIndex((item) => item.oldName === component);

			if (idx === undefined || idx === -1) return;

			apis.push({ ...newAPIs[idx], events: events, slots: slots });
		});
	}

	$: filteredAPIs =
		filter === 'all'
			? apis
			: apis
					.map((component) => {
						let props: typeof component.props;

						if (filter === 'required') {
							props = component.props.filter((prop) => prop.required);
						} else if (filter === 'icon') {
							props = component.props.filter((prop) => prop.isIcon);
						} else if (filter === 'style') {
							props = component.props.filter((prop) => prop.isStyle);
						} else if (filter === 'transition') {
							props = component.props.filter((prop) => prop.isTransition);
						} else {
							props = component.props.filter((prop) => !prop.isIcon && !prop.isStyle);
						}

						return {
							component: component.component,
							props
						};
					});
					// .filter((component) => component.props.length > 0);
</script>

{#if componentAPI}
	<Heading content="API" headerTag="h2">API</Heading>

	<div class="w-full flex flex-wrap justify-center gap-2 mt-4">
		{#each filterButtons as { value, icon }, i}
			{@const active = filter === value}
			<div class="rounded-btn">
				<input
					type="radio"
					id="prop-filter-{i}"
					bind:group={filter}
					name="filters"
					{value}
					class="hidden peer"
				/>
				<label
					for="prop-filter-{i}"
					class="inline-flex items-center justify-center gap-2 px-2 py-1 ring-0.5 rounded-btn cursor-pointer hover:primary-500/80 {active
						? 'primary-500 ring-primary-500'
						: 'surface-100 dark:surface-500 ring-surface-200/50'}"
				>
					<span class="text-xl {icon}" />
					<div class="shrink-0 text-center text-lg font-semibold select-none">{value}</div>
				</label>
			</div>
		{/each}
	</div>

	{#each filteredAPIs as { component, props }}
		<div>
			<Heading content={component} headerTag="h3">
				{component}
			</Heading>

			<div class="flex flex-col gap-2">
				{#if props.length === 0}
					<div class="rounded-container error-500 p-2 flex justify-left items-center gap-2">
						<span class="i-material-symbols-error-circle-rounded text-2xl" />
						<span class="text-xl font-semibold">
							No props matching the applied filter.
						</span>
					</div>
				{:else}
					{#each props as { name, type, description, defaultValue, isIcon, isStyle, isTransition, isFunction, required }}
						<div
							class:required
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
							<div class="flex justify-left items-center gap-1 font-mono overflow-auto ml-2">
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
							<div class="ml-2 text-justify selection:(text-on-primary bg-primary-500/70)">
								{description}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	{/each}
{/if}

<style>
	.required {
		/* shadow-[rgba(var(--color-error-500))_-4px_0px_0px_0px] */
		box-shadow: -4px 0 0 0 rgba(var(--color-error-500)), 4px 0 0 0 rgba(var(--color-error-500));
	}
</style>