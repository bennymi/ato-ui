<!-- 
	Credit for this Hamburger Menu goes to Mikael Ainalem: https://codepen.io/ainalem/pen/wvKOEMV
 -->

<script lang="ts">
	export let ariaControls = '';
	export let opened = false;
</script>

<button
	class="menu"
	class:opened
	on:click={() => (opened = !opened)}
	aria-controls={ariaControls}
	aria-expanded={opened}
>
	<svg
		class="w-8 [&>path]:stroke-surface-900 dark:[&>path]:stroke-surface-50"
		viewBox="0 0 100 100"
	>
		<path
			class="line line1"
			d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
		/>
		<path class="line line2" d="M 20,50 H 80" />
		<path
			class="line line3"
			d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
		/>
	</svg>
</button>

<style>
	.menu {
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		padding: 0;
	}
	.line {
		fill: none;
		/* stroke: white; */
		stroke-width: 6;
		transition:
			stroke-dasharray 1s cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.line1 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
	}
	.line2 {
		stroke-dasharray: 60 60;
		stroke-width: 6;
	}
	.line3 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
	}
	.opened .line1 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
	.opened .line2 {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
		stroke-width: 6;
	}
	.opened .line3 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
</style>
