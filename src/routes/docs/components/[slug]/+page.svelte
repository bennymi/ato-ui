<!-- 
	Table source: https://preline.co/docs/tables.html
 -->

<script lang="ts">
	import { onMount } from 'svelte';

	export let data;

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

	let props: Prop[];

	onMount(async () => {
		if ('component' in data.meta) {
			props = (await import(/* @vite-ignore */ `${data.meta.component}?raw&sveld`)).default.props;
		}
	});
</script>

<svelte:head>
	<title>{data.meta.title}{data.slug.includes('-headless') ? ' - Headless' : ''} | Ato-UI</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<svelte:component this={data.content} />

{#if props}
	<div class="flex flex-col">
		<div class="-m-1.5 overflow-x-auto">
			<div class="p-1.5 min-w-full inline-block align-middle">
				<div class="border rounded-token-container overflow-hidden border-primary-700/70">
					<table class="min-w-full">
						<thead class="bg-primary-500 text-on-primary">
							<tr class="[&>th]:(px-6 py-3 text-left text-xs font-medium uppercase)">
								<th scope="col">Prop</th>
								<th scope="col">Value</th>
								<th scope="col">Description</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-primary-500/50">
							{#each props as { name, value, description }}
								<tr
									class="[&>td]:(px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-900-50)"
								>
									<td>{name}</td>
									<td>{value}</td>
									<td>{description}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
{/if}
