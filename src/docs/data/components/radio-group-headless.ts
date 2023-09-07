import type { ExampleHighlights, Dependency, Data } from "../types";

const highlights: ExampleHighlights = {
    main: {
        'app.svelte': {
            lines: '',
            words: [{ strings: ['$root', 'use:root', '$item', 'use:item', '$isChecked(value)', '$value'], id: 'builder' }],
        }
    }
}

const dependencies: Dependency[] = [
    "@melt-ui/svelte"
]

export const radioGroupHeadlessData: Data = {
    highlights,
    dependencies
}