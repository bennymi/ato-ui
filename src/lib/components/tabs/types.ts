import type { Writable } from 'svelte/store';

export type TabHeader = {
    key: string,
    title: string,
    icon?: string,
};

export type TabValue = Writable<string>;

