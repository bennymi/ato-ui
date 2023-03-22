<script>
	import '$lib/styles/themes/random.css';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	let dark = false;
</script>

<div class:dark>
	<div class="ato-bg-inverse-white-surface-900 min-h-screen">
		<button class="btn-b-primary-secondary" on:click={() => (dark = !dark)}>Dark/Light</button>
		<slot />
	</div>
</div>
