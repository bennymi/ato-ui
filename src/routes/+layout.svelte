<script>
	import '$lib/styles/themes/random.css';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	let dark = false;
</script>

<div class:dark>
	<button class="btn-primary" on:click={() => (dark = !dark)}>Dark/Light</button>
	<button class="btn-gradient-br-primary-200-tertiary-200" on:click={() => (dark = !dark)}
		>Dark/Light</button
	><button class="btn-gradient-tr-primary-tertiary-secondary">Click</button>
	<button class="btn-glass-primary">Click</button>
	<button class="bg-teal-500/40">Click</button>
	<button class="bg-primary-500/40">Click</button>
	<button class="btn-gradient-b-primary-secondary" on:click={() => (dark = !dark)}
		>Dark/Light</button
	>
	<slot />
</div>
