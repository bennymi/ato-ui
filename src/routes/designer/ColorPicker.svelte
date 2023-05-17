<!-- 
    Source: https://stackoverflow.com/questions/11167281/webkit-css-to-control-the-box-around-the-color-in-an-inputtype-color
 -->

<script lang="ts">
	export let value = '';
	export let size = 'w-10 h-10';
	export let rounded = '';
	export let color = '';
</script>

<div
	class="overflow-hidden m-0 {size} {rounded} transition-all duration-200 hover:(scale-110 shadow-md shadow-surface-900/80) focus-within:(scale-110 shadow-md shadow-surface-900/80)"
>
	<label>
		<span class="sr-only">{`pick ${color} color`}</span>
		<input type="color" bind:value class="p-0 w-[150%] h-[150%] m-[-25%] cursor-pointer" />
	</label>
</div>
