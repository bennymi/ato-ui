
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
    isTransition?: boolean;
    isFunction?: boolean;
}

export type ComponentEvents = {
    name: string;
    description: string;
    type: string;
}

export type ComponentSlots = {
    name: string;
    description: string;
    parentElement: string;
}

export type ComponentAPIExtraInfo = {
    component: string;
    updatedName?: string; // You can update the name of the component.
    required?: string[]; // Props that are required.
    styles?: string[]; // Props that are used for styling.
    icons?: string[]; // Props that allow the user to pass icons.
    transitions?: string[]; // Props that are transitions.
    function?: string[]; // Props that are functionality related. This is the default, so you only need to fill in props that can be multiple things at once.
    specialTypes?: string[]; // Special types defined within the types.ts file that should show up when clicked in the docs (props + events).
    events?: ComponentEvents[];
    slots?: ComponentSlots[];
}

export type APIProp = {
    component: string;
    oldName: string;
    props: Prop[];
    events?: ComponentEvents[];
    slots?: ComponentSlots[];
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

// export type ComponentsAPI = Record<string, APIProp[]>;