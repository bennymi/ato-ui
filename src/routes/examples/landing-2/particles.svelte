<script lang="ts">
	import Ring from './ring.svelte';
</script>

<div class="text-9xl text-center">
	<span
		id="title-ato"
		class="text-gradient-b-primary-secondary-600 font-extrabold inline-flex items-center">Ato</span
	>
	<Ring color="primary" delay={1} />
	<Ring color="secondary" delay={2} />
	<Ring color="tertiary" delay={3} />
	<Ring color="success" delay={4} />
	<Ring color="warning" delay={5} />
	<Ring color="error" delay={6} />
	<span class="font-bold inline-flex items-center">UI</span>
</div>
