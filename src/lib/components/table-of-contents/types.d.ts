import type { Readable } from "svelte/store";

export type Heading = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Indent = {
    styles: string;
    icon?: string;
}

export type TOCIndentStyles = {
    [key in Heading]?: Indent;
}

export type ElementHeadingLU = {
    [key: number]: number;
}

export type HeadingParentsLU = {
    [key: number]: number[] | null;
}

export type TOCType = 'lowest' | 'highest' | 'all-active' | 'lowest-parents' | 'highest-parents';

type ActiveHeading = {
    heading: HTMLElement;
    active: boolean;
    styles?: string;
    icon?: string;
}

type TOCStore = {
    headings: ActiveHeading[];
}

export interface CustomReadable<T> extends Readable<T> {
    destroy: () => void;
};

export type ToC = CustomReadable<TOCStore>;