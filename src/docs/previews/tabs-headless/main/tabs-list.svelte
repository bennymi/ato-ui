<script lang="ts">
	import { setContext } from 'svelte';
	import { createTabs } from '@melt-ui/svelte';
	import type { TabHeader } from './types';

	/** Set the key of the tab that should be active by default. */
	export let activeTab: string;
	/** Set the tabs that should be disabled. You can pass individual tabs in a list of strings or disable all tabs by setting this prop to 'true'. */
	export let disabledTabs: boolean | string[] = [];
	/** Set the tab headers. For each header provide a key, a title, and optionally an iconify icon. */
	export let tabHeaders: TabHeader[];
	/** Aria label for the tabs. */
	export let ariaLabel: string;

	const { elements: { root, list, content, trigger}, states: { value } } = createTabs({
		defaultValue: activeTab
	});

	$: isDisabled = (key: string) =>
		((typeof disabledTabs === 'boolean' && disabledTabs) ||
		 (typeof disabledTabs !== 'boolean' && disabledTabs.includes(key)));

	setContext('content', content);

	$: {
		activeTab = $value;
	}
</script>

<div {...$root} use:root class="w-full">
	<div 
		{...$list} use:list 
		class="w-full flex justify-center items-center mb-4 border-b-1 border-surface-100-200"
		aria-label={ariaLabel}
	>
		{#each tabHeaders as item}
			{@const activated = $value === item.key}
			{@const deactivated = isDisabled(item.key)}
			<button
				{...$trigger({ value: item.key, disabled: deactivated })}
				use:trigger
				class="px-2 py-1 min-w-20 md:min-w-40 inline-flex gap-1 justify-center items-center 
					shadow-md shadow-surface-900/20 transition-all duration-150 font-semibold 
					rounded-t-btn focus:(ring-2 ring-surface-300 ring-offset-2) 
					{deactivated
						? 'opacity-70 cursor-not-allowed'
						: ''} 
					{activated 
						? 'primary-500' 
						: 'text-surface-900-50 hover:primary-500/60'}"
			>
				<span class={item.icon} />
				<span>{item.title}</span>
			</button>
		{/each}
	</div>
	<slot />
</div>
