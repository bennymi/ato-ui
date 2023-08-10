
export type Dependency = '@melt-ui/svelte' | 'svelte-headlessui';

/**
 * Maybe I shouldn't use colors here but instead use a more abstract
 * type... 'surface', 'border', etc, so they will always be highlighted
 * the same?
 */
export type HighlightColors = 'builder';

export type StringHighlights = {
    strings: string[];
    id: HighlightColors;
}

export type FileHighlights = {
    lines: string;
    words: StringHighlights[];
}

export type ExampleHighlights = Record<string, Record<string, FileHighlights>>;

export type Data = {
    highlights: ExampleHighlights;
    dependencies: Dependency[];
}

export type ComponentsData = Record<string, Data>;