import { writable, type Writable } from "svelte/store";

export const themeStore: Writable<'ato' | 'air' | 'earth' | 'fire' | 'water' | 'custom-theme'> = writable('ato');

export const customThemeCSSStore: Writable<string> = writable('');