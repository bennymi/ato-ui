<script lang="ts">
	import Avatar from '$lib/components/avatar/Avatar.svelte';

	let typing: boolean = true;
</script>

<div class="min-h-screen flex flex-col justify-center items-center">
	<button class="btn-bl-success-secondary-warning my-10" on:click={() => (typing = !typing)}
		>Typing On/Off</button
	>
	<div class="flex flex-wrap justify-center items-center gap-8">
		<!-- <Avatar size="w-20 h-20" rounded="rounded-none" />
		<Avatar size="w-20 h-20" />
		<Avatar size="w-20 h-20" rounded="rounded-xl" />
		<Avatar size="w-20 h-20" rounded="rounded-3xl" />
		<Avatar size="w-20 h-20" rounded="rounded-full" /> -->
		<Avatar rounded="rounded-none" badgeBackground="bg-secondary-500" badge />
		<Avatar badge />
		<Avatar badge badgeBackground="bg-warning-500" {typing} typingSpinner="surface-900" />
		<Avatar
			rounded="rounded-xl"
			badgeBackground="bg-red-600"
			badge
			badgeIcon="text-gray-300 w-5 h-5 i-material-symbols:horizontal-rule-rounded"
		/>
		<Avatar rounded="rounded-3xl" badgeBackground="bg-yellow-500" badge />
		<Avatar
			rounded="rounded-full"
			badgeBackground="bg-surface-500"
			badge
			badgeIcon="i-material-symbols:nights-stay-rounded text-yellow-400"
		/>
		<Avatar
			rounded="rounded-full"
			badgeBackground="bg-surface-500"
			badge
			badgeIcon="i-material-symbols:nights-stay-rounded text-yellow-400"
			{typing}
		/>
	</div>
</div>
