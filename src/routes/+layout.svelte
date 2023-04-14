<script lang="ts">
	import '$lib/styles/themes/ato.css';
	import '$lib/styles/themes/water.css';
	import '$lib/styles/themes/earth.css';
	import '$lib/styles/themes/fire.css';
	import '$lib/styles/themes/air.css';

	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import './app.css';

	import NavBar from '$lib/components/navbar/NavBar.svelte';

	const themes = ['ato', 'water', 'earth', 'fire', 'air'];

	let activeIdx = 0;
	let dark = true;

	$: activeTheme = themes[activeIdx % themes.length];
</script>

<!-- <div class:dark class="min-w-screen">
	<div class="flex justify-between">
		<div>hi</div>
		<div>bye</div>
	</div>
	<slot />
</div> -->

<div class:dark class="{activeTheme} min-w-screen min-h-screen">
	<NavBar
		icons={[
			{ icon: 'i-mdi:github', link: 'https://github.com/bennymi/ato-ui', title: 'Github' },
			{ icon: 'i-mdi:discord', link: '', title: 'Discord' }
		]}
	>
		<svelte:fragment slot="title">
			<a href="/" class="text-surface-900-50 text-3xl select-none">
				<span class="text-gradient-b-primary-secondary-600 font-extrabold">Ato</span><span
					class="font-bold">UI</span
				>
			</a>
		</svelte:fragment>
	</NavBar>
	<div class="bg-inverse-white-surface-700 min-h-screen">
		<div class="AtoContent mt-12 pt-4 flex flex-col">
			<div class="px-12">
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
</div>
