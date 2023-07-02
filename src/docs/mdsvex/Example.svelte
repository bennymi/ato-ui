<script lang="ts">
	import { slide } from 'svelte/transition';
	import { darkTheme } from '$lib/stores/lightswitch';
	import { ToggleSwitch } from '$lib';

	// export let lang = '';
	export let darkCode: string | null = null;
	export let lightCode: string | null = null;
	// export let title: string | null = null;
	export let rawCode: string | null = null;
	// export let showHeader = true;
	export let showCode = false;
	export let height = 'h-full';
	export let padding = 'p-4';
	export let column = false;

	let copyState = false;
	let code_id = crypto.randomUUID();

	let backgrounds = [
		{ bg: 'bg-surface-50', text: 'text-on-surface-50' },
		{ bg: 'bg-surface-900', text: 'text-on-surface-900' },
		{ bg: 'bg-primary-700', text: 'text-on-primary-700' },
		{ bg: 'bg-secondary-700', text: 'text-on-secondary-700' },
		{ bg: 'bg-tertiary-700', text: 'text-on-tertiary-700' },
		{ bg: 'bg-warning-700', text: 'text-on-warning-700' },
		{ bg: 'bg-gradient-primary-700-secondary-700', text: 'text-on-primary-700' },
		{ bg: 'bg-gradient-br-primary-700/70-tertiary-700/70', text: 'text-on-primary-700' },
		{
			bg: 'bg-mesh-primary/40-x0-y0-secondary/40-x100-y0-tertiary/40-x100-y100-success/40-x0-y100',
			text: 'text-on-primary-900 dark:text-on-surface-900'
		}
	];

	let activeBackground = backgrounds[0].bg;

	const handleCopy = () => {
		// Add code to clipboard
		navigator.clipboard.writeText(rawCode ?? '');

		// Give feedback
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);
	};
</script>

<div>
	<div class="flex justify-between items-center h-12">
		{#if showCode}
			<button
				class="code-block-copy-btn rounded-container text-surface-900-50 w-10 h-10 border-1 border-surface-900-50 inline-flex justify-center items-center group"
				on:click={handleCopy}
				aria-label="copy code"
			>
				{#if copyState}
					<span
						class="i-material-symbols-content-copy-rounded text-2xl transition-all duration-200 group-hover:(scale-110)"
					/>
					<!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
                        ><path
                            fill="currentColor"
                            d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm-4 4q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22Z"
                        /></svg
                    > -->
				{:else}
					<span
						class="i-material-symbols-content-copy-outline-rounded text-2xl transition-all duration-200 group-hover:(scale-110)"
					/>
					<!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
                        ><path
                            fill="currentColor"
                            d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"
                        /></svg
                    > -->
				{/if}
			</button>
		{:else}
			<div class="flex justify-center items-center gap-1">
				{#each backgrounds as { bg, text }}
					{@const isActive = bg === activeBackground}
					<button
						class="rounded-container w-10 h-10 {bg} border-1 border-surface-900-50 inline-flex justify-center items-center focus:scale-110"
						on:click={() => (activeBackground = bg)}
					>
						{#if isActive}
							<span class="{text} text-2xl i-material-symbols-check-circle-rounded" />
						{/if}
					</button>
				{/each}
			</div>
		{/if}
		<ToggleSwitch bind:checked={showCode} label="Show Code" />
	</div>
	<div class="rounded-container border-1 border-surface-500/30-200/30">
		{#if !showCode}
			<div
				class="ato-example w-full flex {height} {padding} {activeBackground} {column
					? 'flex-col'
					: ''} flex-wrap gap-x-16 gap-y-4 justify-center items-center rounded-container"
			>
				<slot />
			</div>
		{:else}
			<div class="ato-code-block overflow-y-auto rounded-container">
				<!-- {#if showHeader}
                    <header
                        class="code-header rounded-t-container flex justify-between items-center p-2 pl-4 surface-400 dark:surface-500 text-xs font-bold"
                    >
                        <div class="flex justify-center items-center gap-1">
                            <button
                                class="code-block-copy-btn px-2 py-1 rounded-container transition-all duration-200 hover:scale-110"
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
                            <button
                                class="code-block-hide-btn px-2 py-1 rounded-container transition-all duration-200 hover:scale-110"
                                aria-label="show / hide code"
                                aria-expanded={showCode}
                                aria-controls={code_id}
                                on:click={() => (showCode = !showCode)}
                            >
                                <span
                                    class="text-xl {showCode
                                        ? 'i-material-symbols-code-rounded'
                                        : 'i-material-symbols-code-off-rounded'}"
                                />
                            </button>
                        </div>
                    </header>
                {/if} -->
				<div
					id={code_id}
					class="code-block-code {height} hide-scrollbar [&>pre]:(px-4 py-2 overflow-x-scroll rounded-b-container)"
				>
					{#if $darkTheme}
						{@html darkCode}
					{:else}
						{@html lightCode}
					{/if}
				</div>
			</div>
		{/if}
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
