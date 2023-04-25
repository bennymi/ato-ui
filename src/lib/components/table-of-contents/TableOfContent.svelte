<!-- 
	From a Skeleton UI branch: https://github.com/bennymi/skeleton/blob/chore/toc-active-styles/src/lib/components/TableOfContents/TableOfContents.svelte
 -->
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Props (settings)
	/** Query selector for the element to scan for headings. */
	export let target = '#page-content';
	/** Query selector for the allowed headings. From H2-H6. */
	export let allowedHeadings = 'h2, h3, h4';
	/** Set the label text. */
	export let label = 'On this page';

	// Props (styles)
	/** Set the component width style. */
	export let width = 'w-[200px]';
	/** Set the vertical spacing styles. */
	export let spacing = 'space-y-4';
	/** Set the row text color styles. */
	export let text = 'text-surface-600-300';
	/** Set the row hover styles. */
	export let hover = 'hover:bg-primary-500';
	/** Set the row border radius styles. */
	export let rounded = 'rounded-token-container';
	/** Set the active text styles. */
	export let activeText = 'text-primary-500 font-bold';
	/** Highlight all headings with content visible in the viewport instead of just the top active heading. */
	export let highlightAllActive = true;
	/** Highlight parent headings along with the current active heading(s). */
	export let highlightParentHeadings = false;

	// Props Regions
	/** Provide arbitrary styles for the label element. */
	export let regionLabel = 'font-bold text-surface-900-50';
	/** Provide arbitrary styles for the list element. */
	export let regionList = 'list-none';

	// Classes
	const cLabel = 'p-4 pt-0';
	const cListItem = 'px-4 py-2 cursor-pointer';

	// Local
	let headingsList: HTMLElement[] = [];
	let elementsList: HTMLElement[] = [];
	const elementToHeading: any = {}; // lookup table to see which heading an element belongs to
	const headingsParents: any = {}; // lookup table to see which parent headings a heading has
	let activeParents: number[] = [];
	let observer: IntersectionObserver | null = null;
	let visibleElementIndexes: number[] = [];
	const observerThreshold = 0.25; // used for the Intersection Observer API

	function generateHeadingAndElementList(): void {
		const elemTarget = document.querySelector(target);
		const elemHeadersList: any = elemTarget?.querySelectorAll(allowedHeadings);

		// Select only relevant headings
		elemHeadersList?.forEach((elem: HTMLElement, i: number) => {
			// Generate a unique ID if none present
			if (!elem.id) {
				const newId = elem.innerText
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				elem.id = `${newId}-${i}`;
			}
			// Generate headings whitelist
			headingsList.push(elem);
		});
		// Update Headings list
		headingsList = [...headingsList];

		// Get all elements in our elemTarget and convert it from an HTMLCollection to an array.
		const allowedHeadingsLowerCase = allowedHeadings.toLowerCase();
		elementsList = [].slice.call(elemTarget?.getElementsByTagName('*'));
		// Filter the array, so that only the allowed headings and elements with no children are in the list to avoid problems with elements that wrap around others.
		elementsList = elementsList.filter(
			(item) =>
				allowedHeadingsLowerCase.includes(item.nodeName.toLowerCase()) || item.children.length === 0
		);
		// We don't care about elements before our first header element, so we can remove those as well.
		elementsList.splice(0, elementsList.indexOf(headingsList[0]));
	}

	// Sets the indentation amount per heading
	function setHeadingClasses(headingElem: HTMLElement): string {
		if (headingElem.tagName === 'H3') return 'ml-3';
		if (headingElem.tagName === 'H4') return 'ml-6';
		if (headingElem.tagName === 'H5') return 'ml-9';
		if (headingElem.tagName === 'H6') return 'ml-12';
		return '';
	}

	// Scrolls to the selected heading
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
	function scrollToHeading(headingElem: HTMLElement, i: number): void {
		const elemTarget: any = document.querySelector(`#${headingElem.id}`);
		elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	function findParentIndexes(): void {
		/** Get all parents for each heading element, by checking
		 *  which previous headings in the list have a lower H value,
		 *  so H1 < H2 < H3 < ...
		 */
		headingsList.forEach((h, i) => {
			headingsParents[i] = null;
			let currHeading: string = h.tagName;

			let parents: number[] = [];

			for (let j = i - 1; j >= 0; j--) {
				if (headingsList[j].tagName < currHeading) {
					currHeading = headingsList[j].tagName;
					parents = [...parents, j];
				}
			}

			headingsParents[i] = parents.length > 0 ? parents : null;
		});
	}

	function handleElementIntersection(entries: IntersectionObserverEntry[]) {
		// Iterate through all triggered elements, so all elements that crossed the observerThreshold.
		for (let i = 0; i < entries.length; i++) {
			// Get the index of the observed element in our elementList, as well as the ToC heading it belongs to.
			const elementIndex = elementsList.indexOf(<HTMLElement>entries[i].target);
			const tocIndex = elementToHeading[elementIndex];

			if (entries[i].intersectionRatio >= observerThreshold) {
				// Only add the observed element to the visibleElementIndexes list if it isn't added yet.
				if (visibleElementIndexes.indexOf(elementIndex) === -1) {
					visibleElementIndexes = [...visibleElementIndexes, elementIndex];

					// Only add active parents if parent headings should be highlighted.
					activeParents =
						highlightParentHeadings && headingsParents[tocIndex]
							? [...activeParents, ...headingsParents[tocIndex]]
							: [];
				}
			} else {
				// Remove the observed element from the visibleElementIndexes list if the intersection ratio is below the threshold.
				visibleElementIndexes = visibleElementIndexes.filter((item) => item !== elementIndex);

				// Remove all parents of obsIndex from the activeParents list.
				if (highlightParentHeadings && headingsParents[tocIndex]) {
					headingsParents[tocIndex]?.forEach((parent: number) => {
						const index = activeParents.indexOf(parent);
						activeParents.splice(index, 1);
					});
				}
			}
		}
	}

	function createElementHeadingCorrespondence() {
		headingsList.forEach((h: HTMLElement, i: number) => {
			// Find all elements between the current heading and the next one and assign them the current heading.
			const startIndex = elementsList.indexOf(headingsList[i]);
			const endIndex =
				i !== headingsList.length - 1
					? elementsList.indexOf(headingsList[i + 1])
					: elementsList.length;

			for (let j = startIndex; j < endIndex; j++) {
				elementToHeading[j] = i;
			}
		});
	}

	// Lifecycle
	onMount(() => {
		generateHeadingAndElementList();
		if (activeText) {
			// Only add observers if activeText is not empty.
			findParentIndexes();
			createElementHeadingCorrespondence();

			// Create one observer, that observes all elements.
			observer = new IntersectionObserver(handleElementIntersection, {
				root: null,
				threshold: observerThreshold
			});
			// Observe all elements
			elementsList.forEach((e) => observer?.observe(e));
		}
	});

	onDestroy(() => {
		observer?.disconnect();
	});

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel} ${regionLabel}`;
	$: classesList = `${regionList}`;
	$: classesListItem = `${cListItem} ${hover} ${rounded}`;

	// Find active heading by looking at the lowest active index.
	$: activeHeading = Math.min(...visibleElementIndexes.map((item) => elementToHeading[item]));
	$: setTextClasses = (index: number): string => {
		// Highlight parent headings of active headings
		if (
			highlightParentHeadings &&
			(headingsParents[activeHeading]?.includes(index) ||
				(highlightAllActive && activeParents.includes(index)))
		) {
			return activeText;
		}

		// Highlight all headings with visible content
		if (
			highlightAllActive &&
			visibleElementIndexes.some((item) => elementToHeading[item] === index)
		) {
			return activeText;
		}

		// Highlight only active (top most heading)
		if (index === activeHeading) {
			return activeText;
		}

		// Else - default: not an active element
		return text;
	};
</script>

<!-- @component Allows you to quickly navigate the hierarchy of headings for the current page. -->

<div class="toc {classesBase}">
	<nav class="toc-list {classesList}">
		<div class="toc-label {classesLabel}">{label}</div>
		<ul class="list-none">
			{#each headingsList as headingElem, i}
				<!-- prettier-ignore -->
				<li
					class="toc-list-item {classesListItem} {setHeadingClasses(headingElem)} {setTextClasses(i)}"
					on:click={() => { scrollToHeading(headingElem, i); }}
					on:click
					on:keypress
				>
					{headingElem.innerText}
				</li>
			{/each}
		</ul>
	</nav>
</div>
