import type { Readable } from "svelte/store";

type VisibilityStore = {
    isVisible: boolean;
    intersectionRatio: number;
}

export interface CustomReadable<T> extends Readable<T> {
    destroy: () => void;
};

export type Visibility = CustomReadable<VisibilityStore>;