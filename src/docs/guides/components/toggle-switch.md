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

Switches use the `rounded-btn` class, so they change their shape based on the theme variables. See the props table for all available ways of customizing the component.

## Colors

<Usage padding="py-12">
    {#each active_colors as color}
        <ToggleSwitch checked={true} activeBackground={color} label={color} />
    {/each}
</Usage>

```svelte
<script lang="ts">
    import { ToggleSwitch } from 'ato-ui';

    let checked = false;
</script>

<ToggleSwitch bind:checked activeBackground="bg-success-500" />
```

## Label

<Usage padding="py-12">
    <ToggleSwitch checked={true} label="On / Off" />
    <ToggleSwitch checked={true} label="Light / Dark" />
</Usage>

```svelte
<ToggleSwitch bind:checked label="Toggle" />
```

## Sizes

<Usage padding="py-12">
        <ToggleSwitch checked={true} size="sm" label="sm" />
        <ToggleSwitch checked={true} lable="md" label="md" />
        <ToggleSwitch checked={true} size="lg" label="lg" />
</Usage>

```svelte
<ToggleSwitch bind:checked size="lg" />
```

## Props

<PropsTable props={docs.props} />