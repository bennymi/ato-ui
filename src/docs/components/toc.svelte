<script lang="ts">
    import { TOC } from 'ato-ui';

    const headingFilterFn = (heading: HTMLElement) => {
        return heading.parentElement !== null &&
			heading.parentElement.id !== 'toc-preview' &&
			!heading.parentElement.hasAttribute('data-melt-accordion-item');
	};
</script>

<TOC
    selector="#AtoContent"
    scrollOffset={50}
    activeType="all"
    {headingFilterFn}
/>