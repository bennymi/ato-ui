<script>
	import '$lib/styles/themes/random.css';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	let dark = false;
</script>

<div class:dark>
	<button on:click={() => (dark = !dark)}>Dark/Light</button>
	<slot />
</div>
