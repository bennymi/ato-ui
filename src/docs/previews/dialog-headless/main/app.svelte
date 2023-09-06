<script lang="ts">
	import { writable } from 'svelte/store';
	import { createDialog } from '@melt-ui/svelte';

	let open = writable(false);
	let zIndex = 'z-50';

	const {
		elements: { trigger, overlay, content, close }
	} = createDialog({
		forceVisible: true,
		portal: 'body',
		open,
	});

	let centerPosition = '';
</script>

<div class="bg-surface-50-800 p-4 rounded-container">
    <button
        class="btn-primary"
        on:click={() => $open = true}
    >
        Open Dialog
    </button>
</div>

{#if $open}
    <div 
        {...$overlay} 
        use:overlay 
        class="fixed inset-0 bg-surface-800/40-300/40 backdrop-blur-sm {zIndex}" 
    />

    <div 
        {...$content} 
        use:content 
        class="rounded-container fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] surface-50 dark:surface-700 p-4 shadow-md {zIndex}"
    >
        <h2 class="m-0 text-xl font-semibold">
            Edit profile
        </h2>
        <p class="mb-5 mt-2 leading-normal">
            Make changes to your profile here.
        </p>

        <fieldset class="mb-4 flex items-center gap-5">
            <label class="w-[90px] text-right" for="name"> Name </label>
            <input
                id="name"
                value="Ben M."
            />
        </fieldset>
        <fieldset class="mb-4 flex items-center gap-5">
            <label class="w-[90px] text-right" for="username">
                Username
            </label>
            <input
                id="username"
                value="@bennymi"
            />
        </fieldset>
        <div class="mt-6 flex justify-end gap-4">
            <button
                on:click={() => $open = false}
                class="btn-error"
            >
                Cancel
            </button>
            <button
                on:click={() => $open = false}
                class="btn-success"
            >
                Save changes
            </button>
        </div>
    </div>
{/if}

<style>
    input {
        --at-apply: "rounded-container p-2 w-full bg-surface-100-800 outline-primary-500 border-1 border-solid border-surface-300/50 selection:(text-on-primary bg-primary-500/70)";
    }
</style>