<script lang="ts">
    import { default as Heading } from './markdown/heading.svelte';
    import type { Data } from '$docs/data/types';

    export let componentsData: Data;

    $: ({ componentProps } = componentsData);
</script>


{#if componentProps}
    <Heading content="API" headerTag="h2">
        API
    </Heading>

    {#each componentProps as { component, props }}
        <Heading content={component} headerTag="h3">
            {component}
        </Heading>

        <div class="flex flex-col gap-2">
            {#each props as { name, type, description, required, isStyle, defaultValue }}
                <div class="flex flex-col gap-1 surface-100 dark:surface-500 p-4 rounded-container hover:(ring-1 ring-primary-500) 
                {required 
                    ? 'shadow-[rgba(var(--color-error-500))_-4px_0px_0px_0px]'
                    : ''}"
                >
                    <div class="flex gap-1 font-mono">
                        <div class="px-2 bg-primary-500 rounded-container text-on-primary-500 w-fit">
                            {name}
                        </div>
                        <div>:</div>
                        <div class="px-2 bg-surface-400 text-on-surface-400 rounded-container">{type}</div>
                        {#if defaultValue}
                            <div>=</div>
                            <div class="px-2 bg-secondary-500 text-on-secondary-500 rounded-container">{defaultValue}</div>
                        {/if}
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
            {/each}
        </div>
    {/each}
{/if}