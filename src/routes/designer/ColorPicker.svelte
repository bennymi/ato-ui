<!-- 
    Source: https://stackoverflow.com/questions/11167281/webkit-css-to-control-the-box-around-the-color-in-an-inputtype-color
 -->

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value = '';
	export let size = 'w-10 h-10';
	export let rounded = '';

	function onSelect(e: Event) {
		dispatch('select', (e as CustomEvent).detail);
	}

	// $: console.log('value:', value);
</script>

<div
	class="overflow-hidden m-0 {size} {rounded} transition-all duration-200 hover:(scale-110 shadow-md shadow-surface-900/80) focus-within:(scale-110 shadow-md shadow-surface-900/80)"
>
	<input type="color" bind:value class="p-0 w-[150%] h-[150%] m-[-25%] cursor-pointer" />
</div>
