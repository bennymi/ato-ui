
export type Dependency = '@melt-ui/svelte' | 'svelte-headlessui';

/**
 * Maybe I shouldn't use colors here but instead use a more abstract
 * type... 'surface', 'border', etc, so they will always be highlighted
 * the same?
 */
export type HighlightColors = 'builder' | 'prop';

export type StringHighlights = {
    strings: string[];
    id: HighlightColors;
}

export type FileHighlights = {
    lines?: string;
    words?: StringHighlights[];
}

export type ExampleHighlights = Record<string, Record<string, FileHighlights>>;

export type Prop = {
    name: string;
    type: string;
    defaultValue?: string;
    description: string;
    required?: boolean;
    isStyle?: boolean;
    isIcon?: boolean;
    isFunction?: boolean;
}

export type ComponentAPIExtraInfo = {
    component: string;
    required?: string[];
    styles?: string[]; // Props that are used for styling.
    icons?: string[]; // Props that allow the user to pass icons.
    function?: string[]; // Props that are function related.
}

export type APIProp = {
    component: string;
    props: Prop[];
}

/**
 * For some components we have multiple different versions,
 * so in the docs we need to define which components belong to
 * which group.
 */
export type ComponentGroup = {
    group: string;
    components: string[];
}

export type Data = {
    highlights?: ExampleHighlights;
    dependencies?: Dependency[];
    apiExtraInfo?: ComponentAPIExtraInfo[];
    // componentProps?: APIProp[];
    groups?: ComponentGroup[];
}

export type ComponentsData = Record<string, Data>;

export type ComponentsAPI = Record<string, APIProp[]>;