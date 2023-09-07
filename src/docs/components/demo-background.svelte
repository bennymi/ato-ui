<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	let block: HTMLElement;

	const classes = [
		'bg-gradient-br-primary-700-secondary',
		'bg-gradient-tl-primary-700-secondary',
		'bg-gradient-tl-primary-700-secondary-tertiary',
		'bg-radial-primary-secondary',
		'bg-radial-primary-warning-600',
		'bg-primary-700',
		'bg-primary-700 bg-mesh-primary/40-x4-y0-success-400/40-x50-y95',
		'bg-surface-50/15-900/15 bg-mesh-primary/40-x4-y0-success-400/40-x50-y95',
		'bg-surface-50/15-900 bg-mesh-primary/40-x4-y0-success-400/20-x100-y95',
		'bg-surface-50/15-900 bg-mesh-primary/40-x4-y0-success-400/20-x100-y95-error/40-x98-y1',
		'bg-surface-50/15-900 bg-mesh-primary/40-x4-y0-success-400/20-x100-y95-error/40-x0-y100'
	];

	let idx = -1;
	const PAUSE = 800;

	const increment = () => (idx += 1);

	onMount(() => {
		new (TypeIt as any)('#ato-type-it-bg-demo', {
			speed: 50,
			startDelay: 900
		})
			.type('bg-gradient-br-primary-700-secondary')
			.exec(increment)
			.pause(PAUSE)
			.move(-22)
			.delete(2)
			.type('tl')
			.exec(increment)
			.pause(PAUSE)
			.move(null, { to: 'END', instant: true, delay: 300 })
			.type('-tertiary')
			.exec(increment)
			.pause(PAUSE)
			.delete()
			.type('bg-radial-primary-secondary')
			.exec(increment)
			.pause(PAUSE)
			.delete(9)
			.type('warning-600')
			.exec(increment)
			.pause(PAUSE)
			.delete()
			.type('bg-primary-700')
			.exec(increment)
			.pause(PAUSE)
			.type(' bg-mesh-primary/40-x4-y0-success-400/40-x50-y95')
			.exec(increment)
			.pause(PAUSE)
			.move(null, { to: 'START', instant: true, delay: 300 })
			.move(14)
			.delete(11)
			.type('surface-50/15-900/15')
			.exec(increment)
			.pause(PAUSE)
			.move(null, { to: 'END', instant: true, delay: 300 })
			.move(-4)
			.delete(6)
			.type('20-x100')
			.exec(increment)
			.pause(PAUSE)
			.move(null, { to: 'END', instant: true, delay: 300 })
			.type('-error/40-x98-y1')
			.exec(increment)
			.pause(PAUSE)
			.delete(5)
			.type('0-y100')
			.exec(increment)
			.go();
	});
</script>

<div class="mb-2">
	<pre
		bind:this={block}
		id="ato-type-it-bg-demo"
		class="text-left text-surface-900-50 whitespace-normal font-mono bg-transparent"
	/>
</div>

<div class="w-full h-96 {idx >= 0 ? classes[idx] : ''}" />
