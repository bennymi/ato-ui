<script lang="ts">
	import Avatar from '$lib/components/avatar/Avatar.svelte';
	import { onMount } from 'svelte';

	let src = 'https://ato-ui.vercel.app/corgi-avatar.jpg';

	// onMount(() => {
	// 	setTimeout(() => {
	// 		src = '';
	// 	}, 1000);
	// });
</script>

<div class="flex gap-4 flex-wrap justify-center items-center">
	<Avatar {src} delayMs={1000} />
</div>
