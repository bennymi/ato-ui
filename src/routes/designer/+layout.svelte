<svelte:head>
	<title>Designer | Ato UI</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Designer" />
	<meta name="description" content="Create your own custom Ato UI CSS theme." />
	<meta name="author" content="Benedikt Mielke" />

	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:title" content="Designer | Ato UI" />
	<meta property="og:description" content="Create your own custom Ato UI CSS theme." />

	<style>
		.dark #ato-ui-docu > div {
			background-color: rgb(var(--color-surface-800));
			background-image: radial-gradient(
					at 8% 0%,
					rgba(var(--color-primary-500), 0.35) 0px,
					transparent 50%
				),
				radial-gradient(at 100% 96%, rgba(var(--color-secondary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 0% 96%, rgba(var(--color-surface-600), 0.3) 0px, transparent 50%);
		}
		#ato-ui-docu > div {
			background-color: rgb(var(--color-surface-50));
			background-image: radial-gradient(
					at 8% 0%,
					rgba(var(--color-primary-500), 0.35) 0px,
					transparent 50%
				),
				radial-gradient(at 100% 96%, rgba(var(--color-tertiary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 0% 96%, rgba(var(--color-surface-100), 0.3) 0px, transparent 50%);
		}
	</style>
</svelte:head>

<div id="ato-designer-page">
	<slot />
</div>
