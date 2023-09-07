import type { TransitionConfig } from "svelte/transition";

// Props
export type DialogRole = 'dialog' | 'alertdialog';

export type DialogTransition = {
    trans: (node: Element, options: any) => TransitionConfig,
    options: any
}