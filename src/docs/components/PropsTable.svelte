<!-- 
	Table source: https://preline.co/docs/tables.html
 -->

<script lang="ts">
	type Prop = {
		name: string;
		kind: string;
		description: string;
		type: string;
		value: string;
		isFunction: boolean;
		isRequired: boolean;
		constant: boolean;
		reactive: boolean;
	};

	export let props: Prop[] | null = null;
</script>

{#if props}
	<div class="flex flex-col">
		<div class="-m-1.5 overflow-x-auto">
			<div class="p-1.5 min-w-full inline-block align-middle">
				<div class="border rounded-container overflow-hidden border-primary-700/70">
					<table class="min-w-full table-fixed">
						<thead class="bg-primary-500 text-on-primary">
							<tr class="[&>th]:(px-6 py-3 text-left text-xs font-medium uppercase)">
								<th scope="col">Prop</th>
								<th scope="col">Default</th>
								<th scope="col">Description</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-primary-500/50">
							{#each props as { name, value, description }}
								<tr
									class="[&>td]:(px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-900-50)"
								>
									<td>{name}</td>
									<td class="min-w-[200px]">{value}</td>
									<td
										><div class="break-all whitespace-pre-wrap min-w-[200px]">
											{description}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
{/if}
