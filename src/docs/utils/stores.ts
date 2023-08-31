import type { Highlighter } from 'shiki';
import { writable } from 'svelte/store';
import type { IShikiTheme } from 'shiki';

// For code shiki code higlighting.
export const highlighterStore = writable<Highlighter | null>(null);
export const shikiThemeStore = writable<IShikiTheme | null>(null);

// For docs themes.

export type Themes = 'ato' | 'air' | 'earth' | 'fire' | 'water' | 'custom-theme';

export const themeStore: Writable<Themes> = writable('ato');

export const customThemeCSSStore: Writable<string> = writable('');

export const darkTheme: Writable<boolean> = writable(true);