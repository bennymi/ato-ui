import type { Readable } from "svelte/store";

export type Heading = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ElementHeadingLU = {
    [key: number]: number;
}

export type HeadingParentsLU = {
    [key: number]: number[] | null;
}

export type TOCType = 'lowest' | 'highest' | 'allActive' | 'lowestParents' | 'highestParents';

type ActiveHeading = {
    heading: HTMLElement;
    active: boolean;
}

type TOCStore = {
    headings: ActiveHeading[];
}

interface CustomReadable<T> extends Readable<T> {
    destroy: () => void;
};

export type ToC = CustomReadable<TOCStore>;