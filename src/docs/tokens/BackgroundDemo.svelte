<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	let demo = '';
	let block: HTMLElement;

	onMount(() => {
		new TypeIt('#ato-type-it-bg-demo', {
			speed: 50,
			startDelay: 900,
			afterStep: () => {
				// demo = JSON.parse(JSON.stringify(block.innerText.replace('|', '')));
				demo = block.innerHTML;
				// console.log('block.innerHTML:', block.innerHTML);
				// console.log('demo:', demo);
			}
		})
			.type('<div>hello</div> <br>', { delay: 500 })
			.type('more <br> stuff', { delay: 500 })
			.go();
	});
</script>

<!-- <pre bind:this={block} class="text-left whitespace-normal font-mono bg-transparent" /> -->

<!-- <button on:click={() => console.log(block.ATTRIBUTES)}>Click</button>

<pre
	class="text-left text-surface-900-50 whitespace-normal font-mono bg-transparent">{@html demo}</pre> -->

<div>
	<pre
		bind:this={block}
		id="ato-type-it-bg-demo"
		class="text-left text-surface-900-50 whitespace-normal font-mono bg-transparent"
	/>
</div>

<!-- <div class="text-surface-900-50">{demo}</div> -->
