<script lang="ts">
    import { setContext } from 'svelte';
    import { createAccordion } from '@melt-ui/svelte';

    /** If true, multiple accordion items can be open at the same time. */
    export let multiple = false;
    /** Whether or not the accordion is disabled. */
    export let disabled = false;
    /** Allows you to set a default open item, by passing in the key of an item. */
    export let defaultValue: string | null = null;

    /** Set the width of the accordion. */
    export let width = 'w-full';
    /** Set the accordion container styles. */
    export let containerStyle = 'surface-50-600 shadow-lg shadow-surface-500/50-300/50 p-2';
    /** Set the disabled styles. */
    export let disabledStyle = 'opacity-70 cursor-not-allowed';

    const {
        elements: { content, item, trigger, root },
        helpers: { isSelected },
        options
    } = createAccordion({
        forceVisible: true,
        multiple,
        disabled,
        ...(defaultValue && { defaultValue })
    });

    setContext('accordion', {
        content,
        item,
        trigger,
        isSelected,
        disabled,
        disabledStyle
    });

    const { multiple: optionMultiple, disabled: optionDisabled } = options;

    // Update options
    $: {
        $optionMultiple = multiple;
        $optionDisabled = disabled;
    }
</script>

<div
    {...$root}
    class="rounded-container flex flex-col gap-1 {width} {containerStyle}"
>
    <slot />
</div>