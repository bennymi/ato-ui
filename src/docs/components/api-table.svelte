<script lang="ts">
	import { slide } from 'svelte/transition';
	import { default as Heading } from './markdown/heading.svelte';
	import type { APIProp, Data } from '$docs/data/types';

	import { default as ApiTableItem } from './api-table-item.svelte';

	// import { TabsList, Tab, type TabHeader } from 'ato-ui';

	export let componentData: Data;
	export let componentAPI: APIProp[];
	export let typesSnippet = '';

	// const tabHeaders: TabHeader[] = [
	// 	{
	// 		key: 'props',
	// 		title: 'Props',
	// 		icon: 'text-xl i-material-symbols-play-shapes-rounded'
	// 	},
	// 	{
	// 		key: 'events',
	// 		title: 'Events',
	// 		icon: 'text-xl i-mdi-lightning-bolt'
	// 	},
	// 	{
	// 		key: 'slots',
	// 		title: 'Slots',
	// 		icon: 'text-xl i-material-symbols-space-bar-rounded'
	// 	}
	// ];

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
		apis = [];
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
						isTransition: false
					}))
				});
				return;
			}

			component.props?.forEach((prop) => {
				const required = apiExtraInfo![idx].required?.includes(prop.name) ?? false;
				const isStyle = apiExtraInfo![idx].styles?.includes(prop.name) ?? false;
				const isIcon = apiExtraInfo![idx].icons?.includes(prop.name) ?? false;
				const isTransition = apiExtraInfo![idx].transitions?.includes(prop.name) ?? false;
				const isFunction =
					((!isStyle && !isIcon && !isTransition) ||
						apiExtraInfo![idx].function?.includes(prop.name)) ??
					false;

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
		apiExtraInfo?.forEach(({ component, events, slots, specialTypes }) => {
			const idx = newAPIs?.findIndex((item) => item.oldName === component);

			if (idx === undefined || idx === -1) return;

			apis.push({ ...newAPIs[idx], events, slots, specialTypes });
		});
	}

	$: console.log('apis:', apis);

	$: filteredAPIs =
		filter === 'all'
			? apis
			: apis.map((component) => {
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
						props = component.props.filter(
							(prop) => !prop.isIcon && !prop.isStyle && !prop.isTransition
						);
					}

					return {
						component: component.component,
						props
					};
			  });
	// .filter((component) => component.props.length > 0);

	$: showEvents = apis.some((item) => item.events?.length > 0);
	$: showSlots = apis.some((item) => item.slots?.length > 0);
</script>

{#if componentAPI}
	<Heading content="API" headerTag="h2">API</Heading>

	<Heading content="API" headerTag="h3">Props</Heading>

	<!-- <TabsList activeTab="props" borderStyle="my-8" activeStyle="primary-500" inactiveStyle="surface-400" justifyHeaders="gap-1 justify-center" {tabHeaders} headerStyle="px-2 py-1 rounded-container" ariaLabel="API sections" headerWidth="min-w-20 md:min-w-40">
		<Tab key="props">
		</Tab>

		<Tab key="events">TODO: Events...</Tab>
		<Tab key="slots">TODO: Slots...</Tab>
	</TabsList> -->

	<div class="w-full flex flex-wrap justify-center gap-2 mt-8">
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

	{#each filteredAPIs as { component, props, specialTypes }}
		<div>
			<Heading content={`props-${component}`} headerTag="h4">
				{component}
			</Heading>

			<div class="flex flex-col gap-2">
				{#if props.length === 0}
					<div class="rounded-container error-500 p-2 flex justify-left items-center gap-2">
						<span class="i-material-symbols-error-circle-rounded text-2xl" />
						<span class="text-xl font-semibold"> No props matching the applied filter. </span>
					</div>
				{:else}
					{#each props as { name, type, description, defaultValue, isIcon, isStyle, isTransition, isFunction, required }}
						<ApiTableItem 
							{name} {type} {description} {defaultValue} {isIcon} 
							{isStyle} {isTransition} {isFunction} {typesSnippet} {specialTypes}
							highlight={required}
							showIcons={true}
						/>
					{/each}
				{/if}
			</div>
		</div>
	{/each}

	{#if showEvents}
		<Heading content="Events" headerTag="h3">Events</Heading>

		{#each apis as {component, events, specialTypes}}
			{#if events?.length > 0}
				<Heading content={`events-${component}`} headerTag="h4">{component}</Heading>

				{#each events as {name, description, type}}
					<ApiTableItem {name} {description} {type} {typesSnippet} {specialTypes} />
				{/each}
			{/if}
		{/each}
	{/if}

	{#if showSlots}
		<Heading content="Slots" headerTag="h3">Slots</Heading>

		{#each apis as {component, slots}}
			{#if slots?.length > 0}
				<Heading content={`slots-${component}`} headerTag="h4">{component}</Heading>

				{#each slots as {name, description}}
					<ApiTableItem {name} {description} />
				{/each}
			{/if}
		{/each}
	{/if}
{/if}

<style>
	.required {
		/* shadow-[rgba(var(--color-error-500))_-4px_0px_0px_0px] */
		box-shadow:
			-4px 0 0 0 rgba(var(--color-error-500)),
			4px 0 0 0 rgba(var(--color-error-500));
	}
</style>
