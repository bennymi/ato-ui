<!-- 
    Adapted from: https://codepen.io/stufreen/pen/KOWKBw?editors=0010
 -->
<script lang="ts">
    import { themeStore } from '../../stores';
    import type { Colour, NormalArgs } from './types';

	export let numberOfParticles = 100;
	export let particleSize = 0.8;
	export let speed = 18000;

	let canvas: HTMLElement;
    let ctx;
	let particles = [];
    let variableColours: Colour[] = [];

    function randomNormal(o: NormalArgs) {
        const { mean, dev } = o;

        let r: number;
        let n: number;
        let a: number;

        do {
            a = 2 * Math.random() - 1;
            n = 2 * Math.random() - 1;
            r = a * a + n * n;
        } while (r >= 1);

        let e = a * Math.sqrt((-2 * Math.log(r)) / r);

        return e * dev + mean;
    }

    function rand(low: number, high: number) {
        return Math.random() * (high - low) + low;
    }

    function randInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function createParticle(canvas: HTMLElement) {
        // TODO: update with theme colour variables
        let colour: Colour;

        const a = rand(0, 1);

        if (variableColours.length === 3) {
            colour = variableColours[randInt(0, 2)];
        } else {
            colour = {
                r: 255,
                g: randomNormal({ mean: 125, dev: 20 }),
                b: 50,
            };
        }

        return {
            x: -2,
            y: -2,
            diameter: Math.max(0, randomNormal({ mean: particleSize, dev: particleSize / 2 })),
            duration: randomNormal({ mean: speed, dev: speed * 0.1 }),
            amplitude: randomNormal({ mean: 20, dev: 40 }),
            offsetY: randomNormal({ mean: 0, dev: 20 }),
            arc: Math.PI * 1,
            startTime: performance.now() - rand(0, speed),
            colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${a})`
        }
    }

    function moveParticle(particle, canvas: HTMLElement, time) {
        // TODO: refresh particle if progress is complete -> test with only 1 particle
        const progress = ((time - particle.startTime) % particle.duration) / particle.duration;

        return {
            ...particle,
            x: progress,
            y: Math.sin(progress * particle.arc) * particle.amplitude + particle.offsetY
        };
    }

    function drawParticle(particle, canvas, ctx) {
        const vh = canvas.height / 100;

        ctx.fillStyle = particle.colour;
        ctx.beginPath();
        ctx.ellipse(
            particle.x * canvas.width,
            particle.y * vh + canvas.height / 2,
            particle.diameter * vh,
            particle.diameter * vh,
            0, 
            0,
            2 * Math.PI
        );

        ctx.fill();
    }

    function draw(time, canvas, ctx) {
        // Move particles
        particles.forEach((particle, index) => {
            particles[index] = moveParticle(particle, canvas, time);
        });

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the particles
        particles.forEach((particle) => drawParticle(particle, canvas, ctx))

        // Schedule next frame
        requestAnimationFrame((time) => draw(time, canvas, ctx));
    }

    function updateCanvasAttributes() {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }

    function initializeCanvas() {
        updateCanvasAttributes();

        ctx = canvas.getContext('2d');

        window.addEventListener('resize', () => {
            updateCanvasAttributes();
        });

        return [canvas, ctx];
    }

    function startAnimation() {
        const [canvas, ctx] = initializeCanvas();

        // Create a bunch of particles
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(createParticle(canvas));
        }

        requestAnimationFrame((time) => draw(time, canvas, ctx));
    }

    $: if (canvas && $themeStore) {
        variableColours = [];

        ['primary', 'secondary', 'tertiary'].forEach((colour) => {
            const variable = getComputedStyle(canvas).getPropertyValue(`--color-${colour}-500`);

            const rgbValues = variable.split(',').map((value) => parseInt(value.trim()));

            if (rgbValues.length === 3) {
                variableColours.push({
                    r: rgbValues[0],
                    g: rgbValues[1],
                    b: rgbValues[2]
                })
            }
        });

        particles = [];
        if (ctx) {
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        startAnimation();
    }
</script>

<canvas bind:this={canvas} class="w-full h-full" />
