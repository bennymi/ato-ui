<script lang="ts">
	import { createDisclosure } from 'svelte-headlessui';
	import { slide } from 'svelte/transition';

	const refund = createDisclosure({ label: 'Refund Policy', expanded: true });
	const support = createDisclosure({ label: 'Technical Support', expanded: true });
</script>

<div class="w-full px-4 pt-16">
	<div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
		<div>
			<button
				use:refund.button
				class="flex w-full justify-between rounded-lg bg-primary-100 px-4 py-2 text-left text-sm font-medium text-primary-900 hover:primary-200 focus:outline-none focus-visible:(ring ring-primary-500 ring-opacity-75)"
			>
				<span>What is your refund policy?</span>
				<span
					class="transition-all duration-300 text-lg i-mdi-chevron-up {$refund.expanded
						? 'rotate-180'
						: ''}"
				/>
			</button>
			{#if $refund.expanded}
				<div
					use:refund.panel
					class="px-4 pt-4 pb-2 text-sm text-surface-500"
					transition:slide|local
				>
					If you're unhappy with your purchase for any reason, email us within 90 days and we'll
					refund you in full, no questions asked.
				</div>
			{/if}
		</div>
		<div class="mt-2">
			<button
				use:support.button
				class="flex w-full justify-between rounded-lg bg-primary-100 px-4 py-2 text-left text-sm font-medium text-primary-900 hover:primary-200 focus:outline-none focus-visible:(ring ring-primary-500 ring-opacity-75)"
			>
				<span>Do you offer technical support?</span>
				<span
					class="transition-all duration-300 text-lg i-mdi-chevron-up {$support.expanded
						? 'rotate-180'
						: ''}"
				/>
			</button>
			{#if $support.expanded}
				<div
					use:support.panel
					class="px-4 pt-4 pb-2 text-sm text-surface-500"
					transition:slide|local
				>
					No.
				</div>
			{/if}
		</div>
	</div>
</div>
