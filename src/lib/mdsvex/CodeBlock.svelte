<script lang="ts">
	export let lang = '';
	export let code: string | null = null;
	export let title: string | null = null;
	export let rawCode: string | null = null;
	// export let highlightLines: string | null = null;

	let copiedSuccessfully = false;
	let copyState = false;

	let copyCode = async () => {
		try {
			const copiedCode = rawCode;
			await navigator.clipboard.writeText(copiedCode ?? '');
		} catch (e) {
			console.log(e);
		}
		copiedSuccessfully = true;
	};
	const handleCopy = () => {
		// Add code to clipboard
		navigator.clipboard.writeText(rawCode ?? '');

		// Give feedback
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);
	};

	// $: console.log('Title:', title);
	// $: console.log('Lines to highlight =', highlightLines);

	// $: if (copiedSuccessfully) {
	// 	setTimeout(() => {
	// 		copiedSuccessfully = false;
	// 	}, 1000);
	// }
	$: tag = title ?? lang.toUpperCase();
</script>

<div
	class="AtoCodeBlock mt-4 overflow-y-auto rounded-token-container shadow-md shadow-primary-900 dark:shadow-primary-400"
>
	<header
		class="code-header rounded-t-token-container flex justify-between items-center p-2 pl-4 bg-surface-500 text-on-surface/80 text-xs font-bold"
	>
		<!-- Language Text -->
		<span class="code-block-language select-none">{tag}</span>

		<!-- Copy Button -->
		<button
			class="code-block-copy-btn px-2 py-1 rounded-token-container transition-all duration-200 text-on-surface/70 hover:text-on-surface/95 hover:scale-110"
			on:click={handleCopy}
			aria-label="copy code button"
		>
			{#if copyState}
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm-4 4q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22Z"
					/></svg
				>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"
					/></svg
				>
			{/if}
		</button>
	</header>
	<div
		class="code-block-code hide-scrollbar [&>pre]:(px-4 py-2 overflow-x-scroll rounded-b-token-container)"
	>
		{@html code}
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	:global(.hide-scrollbar > pre)::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	:global(.hide-scrollbar > pre) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
