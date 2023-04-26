
import { derived, writable, type Writable } from "svelte/store";

import type { Heading, ElementHeadingLU, HeadingParentsLU } from "./types";

/**
 *  Variables to return as stores:
 *      - headings (list of headings)
 *          - this can then be iterated over to create the ToC
 *      - active headings (list of indexes of the active headings)
 *          - this list also already accounts for whether parents should be highlighted and so on
 *          - this list can then be used to style the headings list by checking if the headings index is in this list
 */


export function create_toc(target: string, excludeHeadings: Heading[]=[], highlightAllActive=false, highlightParentHeadings=false) {

    // Variables
    const possible_headings: Heading[] = ['h2', 'h3', 'h4', 'h5', 'h6'];
    let headings_list: Element[] = [];
    let elements_list: Element[] = [];
    /** Lookup to see which heading an element belongs to. */
    let el_h_lu: ElementHeadingLU = {};
    /** Lookup to see which parent headings a heading has. */
    let h_parents_lu: HeadingParentsLU = {};
    /** List of the active parent indexes. */
    let active_parents_idxs: number[] = [];
    /** List of the indexes of the visible elements. */
    let visible_el_idxs: number[] = [];
    
    let observer: IntersectionObserver | null = null;
    const observer_threshold = 0.25;

    // Stores
    let active_heading: Writable<number> = writable(0);

    /**
     * @param node 
     * @param target An id or class of an element for which the Table of Contents should be generated.
     * @param excludeHeadings A list of HTML heading tags that should be ignored.
     * @param highlightAllActive When set to true, all headings with visible elements will be highlighted.
     * @param highlightParentHeadings When set to true, parent headings of active headings will also be highlighted.
     * @returns 
     */
    function toc(node: HTMLElement) {
        
        function generate_initial_lists(): void {
            const allowed_headings = possible_headings.filter((h) => !excludeHeadings.includes(h));
    
            const el_target = document.querySelector(target);
            const target_headers: NodeListOf<Element> | undefined = el_target?.querySelectorAll(allowed_headings.join(', '));
    
            // Create a unique ID for each heading which doesn't have one.
            target_headers?.forEach((el: Element, i: number) => {
                if (!el.id) {
                    const unique_id = Math.random().toString(16).slice(2);
                    el.id = `heading-${i}-${unique_id}`;
                }
    
                headings_list.push(el);
            });
    
            headings_list = [...headings_list];
    
            // Get all elements in our el_target and convert it from an HTMLCollection to an array.
            elements_list = [].slice.call(el_target?.getElementsByTagName('*'));
    
            // Filter the array, so that only the allowed headings and elements with no children are in the list to avoid problems with elements that wrap around others.
            elements_list = elements_list.filter((el) => (<string[]>allowed_headings).includes(el.nodeName.toLowerCase()) || el.children.length === 0);
    
            // We don't care about elements before our first header element, so we can remove those as well.
            elements_list.splice(0, elements_list.indexOf(headings_list[0]));
        }
    
        function find_parent_idxs(): void {
            /** Get all parents for each heading element, by checking
             *  which previous headings in the list have a lower H value,
             *  so H1 < H2 < H3 < ...
             */
            headings_list.forEach((h, i) => {
                h_parents_lu[i] = null;
    
                let current_heading: string = h.tagName;
                let parents: number[] = [];
    
                for (let j = i - 1; j >= 0; j--) {
                    if (headings_list[j].tagName < current_heading) {
                        current_heading = headings_list[j].tagName;
                        parents = [...parents, j];
                    }
                }
    
                h_parents_lu[i] = parents.length > 0 ? parents : null;
            });
        }
    
        function create_element_heading_lu() {
            headings_list.forEach((h: Element, i: number) => {
                // Find all elements between the current heading and the next one and assign them the current heading.
                const startIndex = elements_list.indexOf(headings_list[i]);
                const endIndex =
                    i !== headings_list.length - 1
                        ? elements_list.indexOf(headings_list[i + 1])
                        : elements_list.length;
    
                for (let j = startIndex; j < endIndex; j++) {
                    el_h_lu[j] = i;
                }
            });
        }
    
        function handle_el_interaction(entries: IntersectionObserverEntry[]) {
            // Iterate through all elements that crossed the observer_threshold.
            for (let i = 0; i < entries.length; i++) {
                // Get the index of the observed element in our elements_list, as well as the ToC heading it belongs to.
                const el_idx = elements_list.indexOf(<HTMLElement>entries[i].target);
                const toc_idx = el_h_lu[el_idx];
    
                if (entries[i].intersectionRatio >= observer_threshold) {
                    // Only add the observed element to the visible_el_idxs list if it isn't added yet.
                    if (visible_el_idxs.indexOf(el_idx) === -1) {
                        visible_el_idxs = [...visible_el_idxs, el_idx];
    
                        // Only add active parents if parent headings should be highlighted.
                        active_parents_idxs =
                            highlightParentHeadings && h_parents_lu[toc_idx]
                                ? [...active_parents_idxs, ...(<number[]>h_parents_lu[toc_idx])]
                                : [];
                    }
                } else {
                    // Remove the observed element from the visible_el_idxs list if the intersection ratio is below the threshold.
                    visible_el_idxs = visible_el_idxs.filter((item) => item !== el_idx);
    
                    // Remove all parents of obsIndex from the active_parents_idxs list.
                    if (highlightParentHeadings && h_parents_lu[toc_idx]) {
                        h_parents_lu[toc_idx]?.forEach((parent: number) => {
                            const index = active_parents_idxs.indexOf(parent);
                            active_parents_idxs.splice(index, 1);
                        });
                    }
                }
            }
        }
    
        function init() {
            generate_initial_lists();
            find_parent_idxs();
            create_element_heading_lu();
    
            // Create observer and observe all elements.
            observer = new IntersectionObserver(handle_el_interaction, { root: null, threshold: observer_threshold });
            elements_list.forEach((el) => observer?.observe(el));
        }
    
        init();
    
        return {
            // update(newTarget: string, newExcludeHeadings: Heading[]=[], newHighlightAllActive=false, newHighlightParentHeadings=false) {
            //     // Reassign values and re-run init function.
            //     target = newTarget;
            //     excludeHeadings = newExcludeHeadings;
            //     highlightAllActive = newHighlightAllActive;
            //     highlightParentHeadings = newHighlightParentHeadings;
                
            //     observer?.disconnect();
            //     init();
            // },
            destroy() {
                observer?.disconnect();
            }
        }
    }

    return {
        toc
    }
}
