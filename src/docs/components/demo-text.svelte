<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	let block: HTMLElement;

	const classes = [
		'text-surface-900-50',
		'text-gradient-primary-secondary',
		'text-gradient-primary-secondary-tertiary',
		'text-gradient-tr-primary-secondary-tertiary',
		'text-gradient-bl-primary-secondary-tertiary',
		'text-gradient-tertiary-warning-error'
	];

	let idx = -1;
	const PAUSE = 800;

	const increment = () => (idx += 1);

	onMount(() => {
		new (TypeIt as any)('#ato-type-it-bg-demo', {
			speed: 50,
			startDelay: 900
		})
			.type('text-surface-900-50')
			.exec(increment)
			.pause(PAUSE)
			.delete()
			.type('text-gradient-primary-secondary')
			.exec(increment)
			.pause(PAUSE)
			.type('-tertiary')
			.exec(increment)
			.pause(PAUSE)
			.move(-26)
			.type('tr-')
			.exec(increment)
			.pause(PAUSE)
			.delete(3)
			.type('bl-')
			.exec(increment)
			.pause(PAUSE)
			.move(null, { to: 'END', instant: true, delay: 300 })
			.delete()
			.type('text-gradient-tertiary-warning-error')
			.exec(increment)
			.go();
	});
</script>

<div>
	<pre
		bind:this={block}
		id="ato-type-it-bg-demo"
		class="text-left text-surface-900-50 whitespace-normal font-mono bg-transparent"
	/>
</div>

<div class="flex justify-center items-center my-4">
	<span class="text-center text-6xl font-bold {idx >= 0 ? classes[idx] : ''}"> Gradients </span>
</div>
