import type { ExampleHighlights, Data } from "../types";

const highlights: ExampleHighlights = {
    main: {
        'app.svelte': {
            lines: '',
            words: [{ strings: ['createTableOfContents', '<Tree'], id: 'builder' }],
        },
        'tree.svelte': {
            lines: '',
            words: [{ strings: ['activeHeadingIdxs', 'use:item', '$item'], id: 'builder' }]
        }
    }
}


export const tocHeadlessData: Data = {
    highlights,
}