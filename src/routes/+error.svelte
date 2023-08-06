<!-- 
	Text animation source: https://codepen.io/alvarotrigo/pen/qBXeJab
 -->

<script lang="ts">
	import { page } from '$app/stores';

	$: message = $page.status === 404 ? 'Page not found' : 'Something went wrong';
</script>

<svelte:head>
	<style>
		#ato-ui-docu.dark > div {
			background-color: rgb(var(--color-surface-800));
			background-image: radial-gradient(
					at 0% 0%,
					rgba(var(--color-primary-500), 0.35) 0px,
					transparent 50%
				),
				radial-gradient(at 100% 100%, rgba(var(--color-secondary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 0% 100%, rgba(var(--color-surface-600), 0.3) 0px, transparent 50%);
		}
		#ato-ui-docu > div {
			background-color: rgb(var(--color-surface-50));
			background-image: radial-gradient(
					at 0% 0%,
					rgba(var(--color-primary-500), 0.35) 0px,
					transparent 50%
				),
				radial-gradient(at 100% 100%, rgba(var(--color-tertiary-500), 0.3) 0px, transparent 50%),
				radial-gradient(at 0% 100%, rgba(var(--color-surface-100), 0.3) 0px, transparent 50%);
		}
	</style>
</svelte:head>

<main class="min-h-full w-full text-surface-900-50">
	<div class="text-center flex flex-col justify-center items-center">
		<svg class="select-none">
			<symbol id="s-text">
				<text letter-spacing="25" text-anchor="middle" x="50%" y="80%">{$page.status}</text>
				<text letter-spacing="25" text-anchor="middle" x="52%" y="80%">{$page.status}</text>
			</symbol>

			<g class="g-ants">
				<use xlink:href="#s-text" class="text-copy"></use>
				<use xlink:href="#s-text" class="text-copy"></use>
				<use xlink:href="#s-text" class="text-copy"></use>
				<use xlink:href="#s-text" class="text-copy"></use>
			</g>
		</svg>

		<h1 class="text-2xl md:text-6xl font-bold tracking-tight">{message}</h1>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a href="/docs/get-started/1-installation" class="btn-tertiary md:btn-lg">Return to docs</a>
		</div>
	</div>
</main>

<style>
	svg {
		--at-apply: "w-[300px] h-[150px] p-0 text-[7.5em] md:(w-[500px] h-[200px] text-[10.5em]) lg:(text-[12.5em])";
		font: 'Montserrat';
		margin: 0 auto;
	}

	.text-copy {
		fill: none;
		stroke: white;
		stroke-dasharray: 6% 29%;
		stroke-width: 4px;
		stroke-dashoffset: 0%;
		animation: stroke-offset 5.5s infinite linear;
	}

	.text-copy:nth-child(1) {
		stroke: rgb(var(--color-primary-500));
		animation-delay: -1;
	}

	.text-copy:nth-child(2) {
		stroke: rgb(var(--color-secondary-500));
		animation-delay: -2s;
	}

	.text-copy:nth-child(3) {
		stroke: rgb(var(--color-tertiary-500));
		animation-delay: -3s;
	}

	.text-copy:nth-child(4) {
		stroke: rgb(var(--color-warning-500));
		animation-delay: -4s;
	}

	@keyframes stroke-offset {
		100% {
			stroke-dashoffset: -35%;
		}
	}
</style>
