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

	/** Set the border style. */
	export let borderStyle = 'border-b-1 border-surface-100-200';
	/** Set the active header styles. */
	export let activeStyle = 'primary-500';
	/** Set the in-active header styles. */
	export let inactiveStyle = 'text-surface-900-50 hover:primary-500/60';
	/** Set the header width. */
	export let headerWidth = 'min-w-40';
	/** Set how the headers should be aligned with the justify property. */
	export let justifyHeaders = 'justify-center';

	const { value, root, list, content, trigger } = createTabs({
		value: activeTab
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
	<div {...$list} use:list class="w-full flex {justifyHeaders} items-center mb-4 {borderStyle}">
		{#each tabHeaders as item}
			{@const activated = $value === item.key}
			{@const deactivated = isDisabled(item.key)}
			<button
				{...$trigger({ value: item.key, disabled: deactivated })}
				use:trigger
				class="px-2 py-1 {headerWidth} inline-flex gap-1 justify-center items-center shadow-md shadow-surface-900/20 transition-all duration-150 font-semibold rounded-t-btn focus:(ring-2 ring-surface-300 ring-offset-2) {deactivated
					? 'opacity-70 cursor-not-allowed'
					: ''} {activated ? activeStyle : inactiveStyle}"
			>
				<span class={item.icon} />
				<span>{item.title}</span>
			</button>
		{/each}
	</div>
	<slot />
</div>
