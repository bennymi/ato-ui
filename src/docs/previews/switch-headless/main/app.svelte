<script lang="ts">
	import { createSwitch } from '@melt-ui/svelte';
	import { generateId } from '@melt-ui/svelte/internal/helpers';

	let label = 'Dark / Light';
	let name = '';
	let required = false;
	let disabled = false;
    let checked = false;

	let background = 'bg-surface-300-400';
	let activeBackground = 'bg-primary-500';

	const {
		elements: { root, input },
		states: { checked: switchChecked },
		options: {
			disabled: switchDisabled
		}
	} = createSwitch({ disabled, name, required, defaultChecked: checked });

	let uniqueId = generateId();

	$: bgClasses = $switchChecked ? `${activeBackground}` : `${background}`;
</script>

<div class="bg-surface-50-800 p-4 rounded-container">
    <form>
        <div class="flex items-center">
            <label class="select-none px-2 text-surface-900-50" for={uniqueId}>
                {label}
            </label>

            <button
                {...$root}
                use:root
                class="relative w-9 h-5 cursor-default rounded-btn transition-colors {bgClasses} 
                    {$switchDisabled ? 'cursor-not-allowed opacity-70' : ''}"
                id={uniqueId}
            >
                <span
                    class="flex justify-center items-center w-4 h-4 translate-x-0.5 rounded-btn 
                        bg-white transition-transform will-change-transform
                        {$switchChecked ? 'translate-x-4.5' : ''}"
                />

                <input {...$input} use:input />
            </button>
        </div>
    </form>
</div>