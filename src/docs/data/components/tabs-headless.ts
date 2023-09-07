import type { ExampleHighlights, Dependency, Data } from "../types";

const highlights: ExampleHighlights = {
    main: {
        'tabs-list.svelte': {
            lines: '3,15-17',
            words: [{ strings: ['$root', 'use:root', '$list', 'use:list', '$trigger', 'use:trigger'], id: 'builder' }],
        }
    }
}

const dependencies: Dependency[] = [
    "@melt-ui/svelte"
]

export const tabsHeadlessData: Data = {
    highlights,
    dependencies
}