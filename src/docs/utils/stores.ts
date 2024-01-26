// import type { Highlighter } from 'shiki';
import type { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shikiji';
import { writable, type Writable } from 'svelte/store';
// import type { IShikiTheme } from 'shiki';
import { persisted } from 'svelte-local-storage-store';

// For code shiki code higlighting.
export const highlighterStore = writable<HighlighterGeneric<BundledLanguage, BundledTheme> | null>(null);
export const shikiThemeStore = writable<BundledTheme | null>(null);

// For docs themes.
export type Themes = 'ato' | 'air' | 'earth' | 'fire' | 'water' | 'custom-theme';

export const themeStore: Writable<Themes> = writable('ato');
// export const themeStore: Writable<Themes> = persisted('ato-selected-theme', 'ato');

export const customThemeCSSStore: Writable<string> = writable('');

export const darkTheme: Writable<boolean> = persisted('ato-dark-mode', true);
