<svelte:head>
	<style>
		#ato-ui-docu.dark > div {
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
