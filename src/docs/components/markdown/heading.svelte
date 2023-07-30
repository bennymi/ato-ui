<script lang="ts">
	import { page } from '$app/stores';

	// let className: string | undefined | null = undefined;
	// export { className as class };

    type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	export let content = '';
    export let headerTag: HeaderTag;

	let headerId = '';
	let showCopyButton = false;
	let hoveringButton = false;

    const baseClasses = 'scroll-m-20 tracking-tight';

    const headerClasses = {
        h1: { size: 'text-4xl', classes: 'mb-4 font-bold' },
        h2: { size: 'text-2xl', classes: 'mb-3 mt-12 pb-1 font-semibold border-b border-surface-300/50' },
        h3: { size: 'text-xl', classes: 'mb-2 mt-12 pb-1 font-bold' },
        h4: { size: 'text-lg', classes: 'mb-1 mt-8 pb-1 font-bold' },
        h5: { size: 'text-lg', classes: 'mb-1 mt-8 pb-1 font-semibold' },
        h6: { size: 'text-base', classes: 'mb-1 mt-8 font-semibold' },
    };

    function enterHeader() {
        showCopyButton = true;
    }

    function leaveHeader() {
        setTimeout(() => {
            if (!hoveringButton) {
                showCopyButton = false;
            }
        }, 800)
    }

	function copyUrl() {
		const { origin, pathname } = $page.url;
		navigator.clipboard.writeText(`${origin}${pathname}#${headerId}`);
	}

	$: if (content) {
		headerId = content
			.replaceAll(/[^a-zA-Z0-9 ]/g, '')
			.replaceAll(' ', '-')
			.toLowerCase();
	}

    $: hClasses = `${baseClasses} ${headerClasses[headerTag].classes} ${headerClasses[headerTag].size}`;
</script>

<div class="relative text-surface-900-50">
    {#if headerTag === 'h1'}
        <h1
            class="{hClasses}"
            on:mouseenter={enterHeader}
            on:mouseleave={leaveHeader}
            {...$$restProps}
        >
            <slot />
        </h1>
    {:else if headerTag === 'h2'}
        <h2
            id={headerId}
            class="{hClasses}"
            on:mouseenter={enterHeader}
            on:mouseleave={leaveHeader}
            {...$$restProps}
        >
            <a href="#{headerId}">
                <slot />
            </a>
        </h2>
    {:else if headerTag === 'h3'}
        <h3
            id={headerId}
            class="{hClasses}"
            on:mouseenter={enterHeader}
            on:mouseleave={leaveHeader}
            {...$$restProps}
        >
            <a href="#{headerId}">
                <slot />
            </a>
        </h3>
    {:else if headerTag === 'h4'}
        <h4
            id={headerId}
            class="{hClasses}"
            on:mouseenter={enterHeader}
            on:mouseleave={leaveHeader}
            {...$$restProps}
        >
            <a href="#{headerId}">
                <slot />
            </a>
        </h4>
    {:else if headerTag === 'h5'}
        <h5
            id={headerId}
            class="{hClasses}"
            on:mouseenter={enterHeader}
            on:mouseleave={leaveHeader}
            {...$$restProps}
        >
            <a href="#{headerId}">
                <slot />
            </a>
        </h5>
    {:else if headerTag === 'h6'}
        <h6
            id={headerId}
            class="{hClasses}"
            on:mouseenter={enterHeader}
            on:mouseleave={leaveHeader}
            {...$$restProps}
        >
            <a href="#{headerId}">
                <slot />
            </a>
        </h6>
    {/if}

	{#if showCopyButton && headerTag !== 'h1'}
		<button
			on:click={copyUrl}
			on:mouseenter={() => (hoveringButton = true)}
			on:mouseleave={() => {
				showCopyButton = false;
				hoveringButton = false;
			}}
			class="absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2"
		>
			<span class="i-material-symbols-link-rounded {headerClasses[headerTag].size} -rotate-45 transition-all" />
			<span class="sr-only">copy heading url</span>
		</button>
	{/if}
</div>
