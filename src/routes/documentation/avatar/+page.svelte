<script lang="ts">
	import Avatar from '$lib/components/avatar/Avatar.svelte';
</script>

<div class="min-h-screen flex justify-center items-center">
	<div class="flex flex-wrap justify-center items-center gap-8">
		<!-- <Avatar size="w-20 h-20" rounded="rounded-none" />
		<Avatar size="w-20 h-20" />
		<Avatar size="w-20 h-20" rounded="rounded-xl" />
		<Avatar size="w-20 h-20" rounded="rounded-3xl" />
		<Avatar size="w-20 h-20" rounded="rounded-full" /> -->
		<Avatar rounded="rounded-none" badgeBackground="bg-secondary-500" badge />
		<Avatar badge />
		<Avatar rounded="rounded-xl" badgeBackground="bg-red-500" badge />
		<Avatar rounded="rounded-3xl" badgeBackground="bg-yellow-500" badge />
		<Avatar
			rounded="rounded-full"
			badgeBackground="bg-surface-500"
			badge
			badgeIcon="i-material-symbols:nights-stay-rounded text-yellow-400"
		/>
	</div>
</div>
