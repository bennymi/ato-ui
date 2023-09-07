<script lang="ts">
    import { TOC } from 'ato-ui';

    const scrollFn = (id: string) => {
        /**
			 * Here we're overwriting the default scroll function
			 * so that we only scroll within the ToC preview
			 * container, instead of the entire page.
			 */
			const container = document.getElementById('toc-preview');
			const element = document.getElementById(id);

			if (container && element) {
				container.scrollTo({
					top: element.offsetTop - container.offsetTop,
					behavior: 'smooth'
				});
			}
    }

    const headingFilterFn = (heading: HTMLElement) => !heading.hasAttribute('data-toc-ignore');

	let hideHeading = false;
</script>

<div class="grid h-[18rem] grid-cols-1 mx-2 gap-2 sm:grid-cols-2">
	<!-- Page Content -->
	<div
		id="toc-preview"
		class="space-y-2 overflow-y-auto rounded-container bg-surface-50-800 p-4 text-surface-900-50 "
	>
		<button
			class="btn-primary"
			on:click={() => hideHeading = !hideHeading}
		>
			{hideHeading ? 'Show heading' : 'Hide heading'}
		</button>

		<h2>First Heading</h2>
		<p>This is the first heading.</p>
		<h3>Sub-Heading</h3>
		<p>This is a sub-heading H3 example.</p>
		{#if !hideHeading}
			<h2>Reactive ToC</h2>
			<p>
				The ToC reacts to changes on the page and updates when headings change or get added or removed.
			</p>
			<h3>Another sub-heading</h3>
			<p>This one also gets added and removed.</p>
		{/if}
		<h4>This H4 is excluded</h4>
		<p>
			H4 headings were added to the list of excluded heading tags, so this will not show up in the
			table of contents.
		</p>
		<h2 data-toc-ignore>This H2 gets ignored</h2>
		<p>
			You can adjust the filter function to show or hide headings based on specific requirements.
			Check the code for an example.
		</p>
		<h2>Accessible by Design</h2>
		<p>
			Ato UI is built on top of Melt UI, an accessible headless library that follows WAI-ARIA design
			patterns and takes care of all the nitty-gritty details like aria attributes, role management,
			focus handling, and keyboard navigation. You can read more about it on the official Melt UI
			docs website, where each builder has a thorough description of implemented accessibility
			features.
		</p>
		<h2>
			<span class="text-lg i-material-symbols-water-drop-rounded" />
			Styled Components
		</h2>
		<p>
			Our styled components offer additional functionalities on top of Melt UI builders, while also
			staying flexible and offering ways to customize each component. This is done through our theme
			designer, which controls the color palette as well as things like border radiuses and text
			colors, and through style props that components offer, where you can overwrite default
			component styles.
		</p>
	</div>

	<!-- Table of Contents -->
	<div class="overflow-y-auto rounded-container p-4 bg-surface-50-800">
		<TOC
            selector="#toc-preview"
            exclude={['h1', 'h4', 'h5', 'h6']}
            activeType="highest"
            {scrollFn}
            {headingFilterFn}
        />
	</div>
</div>

<style>
	#toc-preview > h2 {
		--at-apply: "text-xl font-bold";
	}

	#toc-preview > h3 {
		--at-apply: "text-lg font-bold";
	}

	#toc-preview > h4 {
		--at-apply: "text-lg font-semibold";
	}
</style>
