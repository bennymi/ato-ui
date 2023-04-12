<script>
	import '$lib/styles/themes/ato.css';
	import '$lib/styles/themes/water.css';
	import '$lib/styles/themes/earth.css';
	import '$lib/styles/themes/fire.css';
	import '$lib/styles/themes/air.css';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	const themes = ['ato', 'water', 'earth', 'fire', 'air'];

	let activeIdx = 0;
	let dark = true;

	$: activeTheme = themes[activeIdx % themes.length];
</script>

<div class:dark class={activeTheme}>
	<div class="bg-inverse-white-surface-900 min-h-screen">
		<div class="p-4">
			<button class="btn-b-primary-secondary" on:click={() => (dark = !dark)}>Dark/Light</button>
			<button
				class="btn-border-surface-primary-secondary text-on-primary"
				on:click={() => (activeIdx += 1)}
			>
				{activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)}
			</button>
		</div>
		<slot />
	</div>
</div>
