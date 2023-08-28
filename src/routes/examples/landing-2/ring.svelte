<script lang="ts">
    import type { ColourType } from './types';
	// Adapted from: https://codepen.io/natewiley/pen/GgONKy?editors=0100

    export let number = 75;
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
		hue: (40 / number) * i + 0,
        color: `rgb(var(--color-${color}-${i < number / 3 ? '700' : i < 2 * number / 3 ? '500' : '300'}))`
	}));
</script>

<div class="wrap" style={`--wrap-delay: ${delay}s;`}>
    {#each particles as { z, y, hue, color }, i}
        <div
            class="c"
            style={`
                --particle-size: ${size}px;
                --base-hue: ${hue}; 
                --rotate-z-n: -${z}deg; 
                --rotate-z: ${z}deg; 
                --rotate-y: ${y}deg; 
                --animation-delay: ${0.01 * i}s;
                background-color: ${color};
            `}
        />
    {/each}
</div>

<style>
	:root {
        --orb-size-small: 135px;
		--orb-size: 155px;
		--orb-size-end: 600px;
		--particle-size: 3px;
		--time: 14s;
		--base-hue: 0;
		--rotate-z-n: -1deg;
		--rotate-z: 1deg;
		--rotate-y: 1deg;
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

	.c {
		position: absolute;
		width: var(--particle-size);
		height: var(--particle-size);
		border-radius: 50%;
		opacity: 0;
		animation: orbit var(--time) infinite;
		animation-delay: var(--animation-delay);
	}

	@keyframes rotate {
		100% {
			transform: rotateX(360deg) rotateY(360deg);
		}
	}

	@keyframes orbit {
		20% {
			opacity: 1;
		}
        /* 30% {
			transform: rotateY(var(--rotate-y)) translateX(var(--orb-size)) rotateZ(var(--rotate-z));
		}
		80% {
			transform: rotateY(var(--rotate-y)) translateX(var(--orb-size)) rotateZ(var(--rotate-z));
			opacity: 1;
		}
		100% {
			transform: rotateY(var(--rotate-y)) translateX(var(--orb-size-end)) rotateZ(var(--rotate-z));
		} */
        /* --------------- */
		/* 30% {
			transform: rotate(var(--rotate-y)) translateX(var(--orb-size)) rotateX(var(--rotate-z));
		}
		80% {
			transform: rotateY(var(--rotate-y)) translateX(var(--orb-size)) rotateX(var(--rotate-z));
			opacity: 1;
		}
		100% {
			transform: rotateY(var(--rotate-y)) translateX(var(--orb-size-end)) rotateX(var(--rotate-z));
		} */
		30% {
			transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size));
		}
		40% {
			transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size-small));
		}
		50% {
			transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size));
		}
		60% {
			transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size-small));
		}
		70% {
			transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size));
		}
		80% {
			transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size));
			opacity: 1;
		}
		100% {
			transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size-end));
			/* transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size-end)) translateZ(40px) translateY(20px); */
			/* transform: rotateZ(var(--rotate-y)) translateX(var(--orb-size-end)) translateY(50px) translateZ(40px); */
		}
	}
</style>
