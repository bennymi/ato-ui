<script lang="ts">
    export let href: string;
    export let text: string;
    export let icon: string;
</script>


<a
    class="inline-flex justify-center items-center gap-2 transition-all surface-50 hover:surface-500 dark:(surface-500 hover:surface-800) border-1 border-surface-500/50-200/50 rounded-container px-1"
    {href}
    target="_blank"
    rel="noopener noreferrer"
>
    <span class="text-lg {icon}" />
    <span class="tracking-tight">{text}</span>
</a>