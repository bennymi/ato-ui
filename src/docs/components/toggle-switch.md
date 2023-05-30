---
title: Toggle Switch
description: A simple toggle switch component.
component: components/toggle-switch/ToggleSwitch.svelte
---

<script>
    import PropsTable from './PropsTable.svelte';
    import docs from '$lib/components/toggle-switch/ToggleSwitch.svelte?raw&sveld';
    import ToggleSwitch from '$lib/components/toggle-switch/ToggleSwitch.svelte';

    const active_colors = ['bg-primary-500', 'bg-secondary-500', 'bg-tertiary-500', 'bg-success-500', 'bg-warning-500', 'bg-error-500'];
</script>

# Toggle Switch

Switches use the `rounded-btn` class, so they change their shape based on the theme variables. See the props table for all available ways of customizing the component.

## Colors

<div class="w-full flex flex-wrap p-4 justify-center gap-4 items-center rounded-container border-1 border-surface-500/30-200/30 my-4">
    {#each active_colors as color}
        <ToggleSwitch checked={true} activeBackground={color} label={color} />
    {/each}
</div>

```svelte
<ToggleSwitch bind:checked activeBackground="bg-success-500" />
```

## Label

<div class="w-full flex flex-wrap justify-center gap-4 p-4 items-center rounded-container border-1 border-surface-500/30-200/30 my-4">
    <ToggleSwitch checked={true} size="sm" activeBackground="bg-secondary-500" label="Toggle" />
    <ToggleSwitch checked={true} size="lg" activeBackground="bg-secondary-500" label="Toggle" />
</div>

```svelte
<ToggleSwitch bind:checked activeBackground="bg-success-500" label="Toggle" />
```

## Sizes

<div class="w-full flex flex-wrap justify-center gap-4 p-4 items-center rounded-container border-1 border-surface-500/30-200/30 my-4">
        <ToggleSwitch checked={true} size="sm" label="sm" />
        <ToggleSwitch checked={true} lable="md" label="md" />
        <ToggleSwitch checked={true} size="lg" label="lg" />
</div>

```svelte
<ToggleSwitch bind:checked activeBackground="bg-success-500" size="lg" />
```

## Props

<PropsTable props={docs.props} />