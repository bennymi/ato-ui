<!-- TODO -->
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
