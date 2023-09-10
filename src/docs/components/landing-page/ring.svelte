<script lang="ts">
	import type { ColourType } from './types';
	// Adapted from: https://codepen.io/natewiley/pen/GgONKy?editors=0100

	export let number = 85;
	export let color: ColourType = 'primary';
	export let delay = 0;
	export let size = 5.5;

	function randInt(min: number, max: number) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let particles = [...Array(number)].map((item, i) => ({
		z: randInt(0, 360),
		y: randInt(0, 360),
		color: `rgb(var(--color-${color}-${
			i < number / 3 ? '700' : i < (2 * number) / 3 ? '500' : '300'
		}))`
	}));
</script>

<div
	class="wrap overflow-hide"
	style={`
        --wrap-delay: ${delay}s; 
        --particle-size: ${size}px;
    `}
>
	{#each particles as { z, y, color }, i}
		<div
			class="particle"
			style={`
                --rotate-z: ${z}deg; 
                --animation-delay: ${0.01 * i}s;
                background-color: ${color};
            `}
		/>
	{/each}
</div>

<style>
	:root {
		--orb-size-small: 140px;
		--orb-size: 160px;
		--orb-size-end: 600px;
		--particle-size: 3px;
		--time: 14s;
		--rotate-z: 1deg;
		--animation-delay: 0.1s;
		--wrap-delay: 0s;
	}

	.wrap {
		position: relative;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		transform-style: preserve-3d;
		perspective: 1000px;
		animation: rotate var(--time) infinite linear;
		animation-delay: var(--wrap-delay);
	}

	.particle {
		position: absolute;
		width: var(--particle-size);
		height: var(--particle-size);
		border-radius: 50%;
		opacity: 0;
		animation: orbit var(--time) infinite;
		animation-delay: var(--animation-delay);
	}

	@keyframes rotate {
		/* 0% {
			transform: rotateX(45deg) rotateY(45deg);
		} */
		/* 100% {
			transform: rotateX(360deg) rotateY(360deg);
		} */
		100% {
			/* transform: rotateY(540deg) rotateX(540deg); */
			transform: rotateY(360deg) rotateX(360deg);
		}
	}

	@keyframes orbit {
		20% {
			opacity: 1;
		}
		30% {
			transform: rotateZ(var(--rotate-z)) translateX(var(--orb-size));
		}
		40% {
			transform: rotateZ(var(--rotate-z)) translateX(var(--orb-size-small));
		}
		50% {
			transform: rotateZ(var(--rotate-z)) translateX(var(--orb-size));
		}
		60% {
			transform: rotateZ(var(--rotate-z)) translateX(var(--orb-size-small));
		}
		70% {
			transform: rotateZ(var(--rotate-z)) translateX(var(--orb-size));
		}
		80% {
			transform: rotateZ(var(--rotate-z)) translateX(var(--orb-size-small));
			opacity: 1;
		}
		100% {
			transform: rotateZ(var(--rotate-z)) translateX(var(--orb-size-end));
		}
	}
</style>
