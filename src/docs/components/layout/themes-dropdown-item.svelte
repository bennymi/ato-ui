<script lang="ts">
    export let theme: string;
    export let icon: string;

    let colours = [
        'bg-primary-500',
        'bg-secondary-500',
        'bg-tertiary-500'
    ];
</script>

<div class="flex justify-between items-center gap-2">
    <span class="text-lg {icon}" />
    <span>{theme}</span>
    <div
        data-theme="{theme.toLowerCase()}"
    >
        <div class="flex rounded-container border-0.5 border-surface-900">
            {#each colours as col, i}
                {@const isFirst = i === 0}
                {@const isLast = i === colours.length - 1}
                <div class="w-4 h-4 {col} {isFirst ? 'rounded-l-container' : ''} {isLast ? 'rounded-r-container' : ''}" />
            {/each}
        </div>
    </div>
</div>