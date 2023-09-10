<script lang="ts">
	import { writable } from 'svelte/store';
	import { Avatar, Dropdown } from 'ato-ui';

	import { default as Badge } from './badge.svelte';
	import { default as IconItem } from './icon-item.svelte';

	const openAvatar = writable(false);
	const openBadge = writable(false);

	const statusStyles = 'w-4 h-4 rounded-container';
	const statuses = [
		{ text: 'Online', styles: 'bg-green-500' },
		{ text: 'Busy', styles: 'bg-red-500' },
		{ text: 'Offline', styles: 'bg-gray-500' }
	];

	const badgeStatus = writable(statuses[0].styles);

	let checkedIcon = 'i-material-symbols-check-small-rounded';
</script>

<div class="relative inline-flex justify-center items-center">
	<Dropdown.Menu ariaLabel="open avatar menu" open={openAvatar} btnStyle="">
		<!-- Avatar -->
		<svelte:fragment slot="dropdown-menu-trigger">
			<Avatar src="/corgi-avatar.jpg" />
		</svelte:fragment>

		<!-- Your dropdown menu items... -->
		<Dropdown.Item>
			<IconItem text="View Profile" icon="i-material-symbols-account-circle" />
		</Dropdown.Item>

		<Dropdown.Item>
			<IconItem text="Switch Account" icon="i-material-symbols-switch-account-rounded" />
		</Dropdown.Item>

		<Dropdown.Separator />

		<Dropdown.Item>
			<IconItem text="Logout" icon="i-material-symbols-logout-rounded" />
		</Dropdown.Item>
	</Dropdown.Menu>

	<!-- Badge -->
	<Dropdown.Menu ariaLabel="open avatar badge menu" open={openBadge} btnStyle="">
		<!-- Badge -->
		<svelte:fragment slot="dropdown-menu-trigger">
			<Badge styles={$badgeStatus} />
		</svelte:fragment>

		<!-- Badge dropdown menu -->
		<Dropdown.RadioGroup
			value={badgeStatus}
			{checkedIcon}
			on:value-change={(e) => {
				console.log('something');
			}}
		>
			{#each statuses as { text, styles }}
				<Dropdown.RadioGroupItem value={styles}>
					<div class="flex justify-between items-center gap-4">
						<span class="{statusStyles} {styles}" />
						<span>{text}</span>
					</div>
				</Dropdown.RadioGroupItem>
			{/each}
		</Dropdown.RadioGroup>
	</Dropdown.Menu>
</div>
