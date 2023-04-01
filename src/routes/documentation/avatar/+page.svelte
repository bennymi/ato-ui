<script lang="ts">
	import Avatar from '$lib/components/avatar/Avatar.svelte';

	let typing: boolean = true;
</script>

<div class="min-h-screen flex flex-col justify-center items-center">
	<button
		class="btn-border-surface-900-bl-success-secondary-tertiary my-10 btn-lg"
		on:click={() => (typing = !typing)}>Typing On/Off</button
	>
	<div class="flex flex-wrap justify-center items-center gap-8">
		<Avatar
			src="/corgi-avatar.jpg"
			rounded="rounded-none"
			badgeBackground="bg-secondary-500"
			border="border-4 border-surface-800 hover:(border-primary-500)"
			badge
		/>
		<Avatar
			src="/corgi-avatar.jpg"
			badge
			badgePosition="bottom-left"
			on:avatar-click={() => console.log('avatar-click')}
			on:badge-mouseenter={() => console.log('badge-mouseenter')}
		/>
		<Avatar text="Ben M." />
		<Avatar text="George R. R. Martin" rounded="rounded-full" badge />
		<Avatar
			src="/corgi-avatar.jpg"
			badge
			rounded="rounded-full"
			badgePosition="bottom-left"
			notifications={42}
		/>
		<Avatar src="/corgi-avatar.jpg" badge badgePosition="top-left" />
		<Avatar
			src="/corgi-avatar.jpg"
			badge
			rounded="rounded-full"
			badgePosition="top-right"
			{typing}
		/>
		<Avatar
			src="/corgi-avatar.jpg"
			badge
			badgeBackground="bg-warning-500"
			{typing}
			typingSpinner="s-dots-surface-900"
		/>
		<Avatar
			src="/corgi-avatar.jpg"
			rounded="rounded-xl"
			badgeBackground="bg-red-600"
			badge
			badgeIcon="text-gray-300 w-5 h-5 i-material-symbols:horizontal-rule-rounded"
		/>
		<Avatar src="/corgi-avatar.jpg" rounded="rounded-3xl" badgeBackground="bg-yellow-500" badge />
		<Avatar
			src="/corgi-avatar.jpg"
			rounded="rounded-full"
			badgeBackground="bg-surface-500"
			badge
			badgeIcon="i-material-symbols:nights-stay-rounded text-yellow-400"
		/>
		<Avatar
			src="/corgi-avatar.jpg"
			rounded="rounded-full"
			badgeBackground="bg-surface-500"
			badge
			badgeIcon="i-material-symbols:nights-stay-rounded text-yellow-400"
			{typing}
		/>
	</div>
</div>
