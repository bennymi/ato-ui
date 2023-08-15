<script lang="ts">
    import { default as Heading } from './markdown/heading.svelte';
    import type { Data } from '$docs/data/types';

    export let componentsData: Data;

    const { componentProps } = componentsData;
</script>

<Heading content="API" headerTag="h2">
    API
</Heading>

{#if componentProps}
    {#each componentProps as { component, props }}
        <Heading content={component} headerTag="h3">
            {component}
        </Heading>

        <div>
            {#each props as { name, type, description, required, isStyle, defaultValue }}
                <div>{name}</div>
            {/each}
        </div>
    {/each}
{/if}