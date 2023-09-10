<script lang="ts">
	export let text: string;
	export let icon: string;
</script>

<div class="flex justify-between items-center gap-4">
	<span>{text}</span>
	<span class="text-lg {icon}" />
</div>
