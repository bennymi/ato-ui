import { writable, type Writable } from "svelte/store";
import { persisted } from 'svelte-local-storage-store';

import type { Theme } from "./designer/types.d";

export const themeStore: Writable<'ato' | 'air' | 'earth' | 'fire' | 'water' | 'custom-theme'> = writable('ato');

export const custom_theme_hex: Writable<Theme> = persisted('ato-custom-theme-css', {
    primary: '#4242ff',
    secondary: '#ff0000',
    tertiary: '#0000ff',
    surface: '#161626',
    success: '#00ff00',
    warning: '#f1bb27',
    error: '#ff0000'
});

/**
 * Nice colors:
 * 
 * {"primary":"#0371d8","secondary":"#10c5ea","tertiary":"#18dc6d","surface":"#0f0f4d","success":"#3bc43b","warning":"#e8b017","error":"#ff006f"}
 */