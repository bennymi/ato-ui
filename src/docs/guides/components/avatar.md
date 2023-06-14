---
title: Avatar
description: An avatar component.
component: components/avatar/Avatar.svelte
---

<script lang="ts">
	import Usage from '../Usage.svelte';
	import PropsTable from './PropsTable.svelte';
    import docs from '$lib/components/avatar/Avatar.svelte?raw&sveld';
	import Avatar from '$lib/components/avatar/Avatar.svelte';

	let typing = true;
</script>

## Example

<Usage>
	<button
		class="btn-glass-primary mb-4 btn-lg"
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
			badgeBackground="bg-success-500"
			notifications="42"
			notificationsStyle="text-xs font-semibold text-on-success"
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
			defaultSpinnerColor="fill-white"
			{typing}
		/>
	</div>
</Usage>

```svelte
<script lang="ts">
	import Avatar from 'ato-ui';
</script>

<Avatar src="/corgi-avatar.jpg" />
```

## Text

You can set the text for the avatar if you do not have an image. Text will be automatically trimmed if it is longer than 4 characters. For multiple words the first letters of each word will be taken.

<Usage>
	<Avatar text="George R. R. Martin" />
</Usage>

```svelte
<Avatar text="George R. R. Martin" />
```

## Size

You can adjust the size using the `size` prop.

<Usage>
	<Avatar src="/corgi-avatar.jpg" badge />
	<Avatar src="/corgi-avatar.jpg" size="w-18 h-18" badge />
	<Avatar src="/corgi-avatar.jpg" size="w-20 h-20" badge />
</Usage>

```svelte
<Avatar src="/corgi-avatar.jpg" badge />
<Avatar src="/corgi-avatar.jpg" size="w-18 h-18" badge />
<Avatar src="/corgi-avatar.jpg" size="w-20 h-20" badge />
```

## Badge 

### Position

You can specify the position with the `badgePosition` prop.

Possible values: `bottom-right`, `bottom-left`, `top-right`, `top-left`.

<Usage>
	<Avatar src="/corgi-avatar.jpg" badge badgePosition="bottom-right" />
	<Avatar src="/corgi-avatar.jpg" badge badgePosition="bottom-left" />
	<Avatar src="/corgi-avatar.jpg" badge badgePosition="top-right" />
	<Avatar src="/corgi-avatar.jpg" badge badgePosition="top-left" />
</Usage>

```svelte
<Avatar src="/corgi-avatar.jpg" badge badgePosition="bttom-right" />
<Avatar src="/corgi-avatar.jpg" badge badgePosition="bttom-left" />
<Avatar src="/corgi-avatar.jpg" badge badgePosition="top-right" />
<Avatar src="/corgi-avatar.jpg" badge badgePosition="top-left" />
```


### Icon & Background

You can specify a badge icon by passing it to the `badgeIcon` prop. The background can be adjusted with the `badgeBackground` prop.

<Usage>
	<Avatar
		src="/corgi-avatar.jpg"
		rounded="rounded-full"
		badgeBackground="bg-surface-500"
		badge
		badgeIcon="i-material-symbols:nights-stay-rounded text-yellow-400"
	/>
</Usage>

```svelte
<Avatar
	src="/corgi-avatar.jpg"
	badgeBackground="bg-surface-500"
	badge
	badgeIcon="i-material-symbols:nights-stay-rounded text-yellow-400"
/>
```

### Notifications

You can set notifications and their style with the `notifications` and `notificationsStyle` props.

<Usage>
	<Avatar
		src="/corgi-avatar.jpg"
		badgeBackground="bg-primary-500"
		badge
		notifications="3"
		notificationsStyle="text-xs font-semibold text-on-primary"
	/>
</Usage>

```svelte
<Avatar
	src="/corgi-avatar.jpg"
	badgeBackground="bg-primary-500"
	badge
	notifications="3"
	notificationsStyle="text-xs font-semibold text-on-primary"
/>
```

### Typing Spinner

You can set the `typing` prop to `true` to activate a typing spinner. You can also change the color of the default typing spinner with the `defaultSpinnerColor` prop by using `fill-` properties.

<Usage>
	<Avatar
		src="/corgi-avatar.jpg"
		typing
	/>
	<Avatar
		src="/corgi-avatar.jpg"
		badgeBackground="bg-white"
		defaultSpinnerColor="fill-primary-500"
		typing
	/>
</Usage>

```svelte
<Avatar
	src="/corgi-avatar.jpg"
	typing
/>
<Avatar
	src="/corgi-avatar.jpg"
	badgeBackground="bg-white"
	defaultSpinnerColor="fill-primary-500"
	typing
/>
```

### Custom Spinner

You can pass your own custom spinner if you don't like the default one with the `typingSpinner` prop. Use an iconify icon for this. The [svg-spinners](https://icones.js.org/collection/svg-spinners) are good for this.

Also pass in a text color for it. Some spinners are not suited for this since they might take up too much space and will go out of bounds. You can use the `spinnerContainerSize` prop to increase the container in these cases, but it is better to just stick to horizontal spinners.

<Usage>
	<Avatar
		src="/corgi-avatar.jpg"
		badgeBackground="bg-white"
		typingSpinner="text-surface-900 i-svg-spinners-3-dots-move"
		typing
	/>
	<Avatar
		src="/corgi-avatar.jpg"
		badgeBackground="bg-white"
		typingSpinner="text-surface-900 i-svg-spinners-bouncing-ball rotate-90"
		typing
	/>
	<Avatar
		src="/corgi-avatar.jpg"
		badgeBackground="bg-white"
		typingSpinner="text-surface-900 i-svg-spinners-blocks-shuffle-2"
		spinnerContainerSize="w-8 h-6"
		typing
	/>
</Usage>

```svelte
<Avatar
	src="/corgi-avatar.jpg"
	badgeBackground="bg-white"
	typingSpinner="text-surface-900 i-svg-spinners-3-dots-move"
	typing
/>
<Avatar
	src="/corgi-avatar.jpg"
	badgeBackground="bg-white"
	typingSpinner="text-surface-900 i-svg-spinners-bouncing-ball rotate-90"
	typing
/>
<Avatar
	src="/corgi-avatar.jpg"
	badgeBackground="bg-white"
	typingSpinner="text-surface-900 i-svg-spinners-blocks-shuffle-2"
	spinnerContainerSize="w-8 h-6"
	typing
/>
```

## Events

### avatar-mouseenter

This event is emitted when the mouse enters the avatar container.

### avatar-mouseleave

This event is emitted when the mouse leaves the avatar container.

### avatar-click

This event is emitted when the avatar is clicked.

### badge-mouseenter

This event is emitted when the mouse enters the badge container.

### badge-mouseleave

This event is emitted when the mouse leaves the badge container.

### badge-click

This event is emitted when the badge is clicked.


## Props

<PropsTable props={docs.props} />