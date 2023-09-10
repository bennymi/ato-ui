<script lang="ts">
	import { TOC } from 'ato-ui';

	export let scrollOffset = 50;

	const headingFilterFn = (heading: HTMLElement) => {
		return (
			heading.parentElement !== null &&
			heading.parentElement.id !== 'toc-preview' &&
			!heading.parentElement.hasAttribute('data-melt-accordion-item')
		);
	};
</script>

<TOC selector="#AtoContent" {scrollOffset} activeType="all" {headingFilterFn} />
