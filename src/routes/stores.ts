import { writable, type Writable } from "svelte/store";
import { persisted } from 'svelte-local-storage-store';

import type { LocalStorageTheme } from "./designer/types.d";

export const themeStore: Writable<'ato' | 'air' | 'earth' | 'fire' | 'water' | 'custom-theme'> = writable('ato');

const lightenValues = [5, 25, 50, 70, 85];
const darkenValues = [10, 20, 35, 45, 60];
// const lightenValues = [0.05, 0.25, 0.5, 0.7, 0.85];
// const darkenValues = [0.1, 0.2, 0.35, 0.45, 0.6];

export const custom_theme_hex: Writable<LocalStorageTheme> = persisted('ato-custom-theme-css', {
    primary: { color: '#0371d8', lightenValues, darkenValues },
    secondary: { color: '#10c5ea', lightenValues, darkenValues },
    tertiary: { color: '#18dc6d', lightenValues, darkenValues },
    surface: { color: '#0f0f4d', lightenValues, darkenValues },
    success: { color: '#3bc43b', lightenValues, darkenValues },
    warning: { color: '#e8b017', lightenValues, darkenValues },
    error: { color: '#ff006f', lightenValues, darkenValues }
});

// {
//     primary: '#0371d8',
//     secondary: '#10c5ea',
//     tertiary: '#18dc6d',
//     surface: '#0f0f4d',
//     success: '#3bc43b',
//     warning: '#e8b017',
//     error: '#ff006f'
// }

/**
 * Nice colors:
 * 
 * {"primary":"#0371d8","secondary":"#10c5ea","tertiary":"#18dc6d","surface":"#0f0f4d","success":"#3bc43b","warning":"#e8b017","error":"#ff006f"}
 */