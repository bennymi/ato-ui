import type { Highlighter } from 'shiki';
import { writable } from 'svelte/store';
import type { IShikiTheme } from 'shiki';

export const highlighterStore = writable<Highlighter | null>(null);
export const themeStore = writable<IShikiTheme | null>(null);