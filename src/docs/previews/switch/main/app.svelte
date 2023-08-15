<script lang="ts">
    import { Switch } from 'ato-ui';

    let lightMode = false;
</script>

<div class="bg-surface-50-800 p-4 rounded-container">
    <Switch 
        label="dark / light"
        bind:checked={lightMode}
        hideLabel={false}
        activeBackground="bg-secondary-500" 
        labelPosition="left" 
        activeIcon="text-surface-900 text-lg i-material-symbols-clear-day-rounded"
        inactiveIcon="text-surface-900 text-lg i-material-symbols-dark-mode-rounded"    
    />
</div>