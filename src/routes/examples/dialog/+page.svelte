<script lang="ts">
	import { writable } from 'svelte/store';
	import { Dialog } from 'ato-ui';

	let open = writable(false);
</script>

<button
    class="btn-primary"
    on:click={() => $open = true}
>
    Open Dialog
</button>

<Dialog {open}>
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
</Dialog>

<style>
    input {
        /* class="inline-flex h-8 w-full flex-1 items-center justify-center
                        rounded-sm border border-solid px-3 leading-none" */
        --at-apply: "rounded-container p-2 w-full bg-surface-100-800 outline-primary-500 border-1 border-solid border-surface-300/50 selection:(text-on-primary bg-primary-500/70)";
    }
</style>