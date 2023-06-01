<script lang="ts">
	import { createCombobox } from 'svelte-headlessui';

	// prettier-ignore
	const people = [
		{ name: 'Wade Cooper' },
		{ name: 'Arlene Mccoy' },
		{ name: 'Devon Webb' },
		{ name: 'Tom Cook' },
		{ name: 'Tanya Fox' },
		{ name: 'Hellen Schmidt' },
	]

	const combobox = createCombobox({ label: 'Actions', selected: people[2] });

	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
	}

	$: filtered = people.filter((person) =>
		person.name
			.toLowerCase()
			.replace(/\s+/g, '')
			.includes($combobox.filter.toLowerCase().replace(/\s+/g, ''))
	);
</script>

<div class="flex w-full flex-col items-center justify-center">
	<div class="fixed top-16 w-72">
		<div class="relative mt-1">
			<div
				class="flex w-full cursor-default overflow-hidden rounded-container text-left shadow-md focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75 ring-offset-2 ring-offset-primary-300)"
			>
				<input
					use:combobox.input
					on:select={onSelect}
					class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 transition-all"
					value={$combobox.selected.name}
				/>
				<button
					use:combobox.button
					type="button"
					class="flex justify-center items-center px-2 primary-500/90 hover:primary-500 rounded-r-container transition-all"
				>
					<span class="text-2xl i-material-symbols-search-check-rounded" />
				</button>
			</div>
			<!-- <div
				class="relative w-full cursor-default overflow-hidden rounded-container text-left shadow-md focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75 ring-offset-2 ring-offset-primary-300)"
			>
				<input
					use:combobox.input
					on:select={onSelect}
					class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 transition-all"
					value={$combobox.selected.name}
				/>
				<button
					use:combobox.button
					type="button"
					class="absolute inset-y-0 right-0 flex justify-center items-center px-2 primary-500/90 hover:primary-500 rounded-r-container transition-all"
				>
					<span class="text-2xl i-material-symbols-search-check-rounded" />
				</button>
			</div> -->

			{#if $combobox.expanded}
				<ul
					use:combobox.items
					class="absolute mt-1 max-h-60 w-full overflow-auto rounded-container bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
					{#each filtered as value}
						{@const active = $combobox.active === value}
						{@const selected = $combobox.selected === value}
						<li
							class="relative cursor-default select-none py-2 pl-10 pr-4 {active
								? 'primary-500'
								: 'text-surface-900'}"
							use:combobox.item={{ value }}
						>
							<span class="block truncate {selected ? 'font-medium' : 'font-normal'}"
								>{value.name}</span
							>
							{#if selected}
								<span
									class="absolute inset-y-0 left-0 flex items-center pl-3 {active
										? 'text-on-primary'
										: 'text-primary-500'}"
								>
									<span class="text-2xl i-material-symbols-check-small-rounded" />
								</span>
							{/if}
						</li>
					{:else}
						<li class="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900">
							<span class="block truncate font-normal">Nothing found</span>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>
