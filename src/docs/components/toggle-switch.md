---
title: Toggle Switch
description: A simple toggle switch component.
---

<script>
    import ToggleSwitch from '$lib/components/toggle-switch/ToggleSwitch.svelte';
</script>

# Toggle Switch

<div class="w-full flex flex-col justify-center gap-4 h-50 items-center rounded-container border-1 border-surface-500/30-200/30 my-4">
    <div class="flex justify-center items-center gap-4">
        <ToggleSwitch checked={true} size="sm" />
        <ToggleSwitch checked={true} />
        <ToggleSwitch checked={true} size="lg" />
    </div>
    <div class="flex justify-center items-center gap-4">
        <ToggleSwitch checked={true} size="lg" activeBackground="bg-secondary-500" />
        <ToggleSwitch checked={true} size="lg" activeBackground="bg-tertiary-500" />
        <ToggleSwitch checked={true} size="lg" activeBackground="bg-warning-500" />
        <ToggleSwitch checked={true} size="lg" activeBackground="bg-success-500" />
        <ToggleSwitch checked={true} size="lg" activeBackground="bg-error-500" />
    </div>
    <div class="flex justify-center items-center gap-4">
        <ToggleSwitch checked={true} size="sm" activeBackground="bg-secondary-500" label="Toggle" />
        <ToggleSwitch checked={true} size="lg" activeBackground="bg-secondary-500" label="Toggle" />
    </div>
</div>
