<script>
	let clicked = false;

	$: color = clicked ? '#14B8A6' : '#4338CA';

	$: rootCSSVariables = `
:root {
	--color-primary-700: ${color}
}
	`;
</script>

<svelte:head>
	{@html `<style>${rootCSSVariables}</style>`}
</svelte:head>

<div class="flex gap-4 flex-col justify-center items-center bg-gray-400 h-screen">
	<button on:click={() => (clicked = !clicked)} class="bg-teal-500 p-2 hover:bg-teal-600 rounded-lg"
		>Update Shadow</button
	>
	<div class="border-2 shadow-xl p-4 rounded-lg shadow-primary-700 border-solid bg-gray-100 w-96">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quibusdam fugiat laboriosam, non
		sed in, perferendis delectus aspernatur commodi et recusandae maiores sit itaque alias
		consequatur quas sint magni quasi!
	</div>
</div>
