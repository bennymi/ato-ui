import type { Writable } from "svelte/store";
import { persisted } from 'svelte-local-storage-store';

import type { LocalStorageTheme } from "./types.d";

const lighten_values = [5, 25, 50, 70, 85];
const darken_values = [10, 20, 35, 45, 60];

export const custom_theme_store: Writable<LocalStorageTheme> = persisted('ato-custom-theme-css', {
    colors: {
        primary: { color: '#0371d8', lighten_values, darken_values },
        secondary: { color: '#10c5ea', lighten_values, darken_values },
        tertiary: { color: '#18dc6d', lighten_values, darken_values },
        surface: { color: '#0f0f4d', lighten_values, darken_values },
        success: { color: '#3bc43b', lighten_values, darken_values },
        warning: { color: '#e8b017', lighten_values, darken_values },
        error: { color: '#ff006f', lighten_values, darken_values }
    },
    btn_radius: '6px',
    btn_icon_radius: '6px',
    container_radius: '6px'
});

/**
 * Nice colors:
 * 
 * {"primary":"#0371d8","secondary":"#10c5ea","tertiary":"#18dc6d","surface":"#0f0f4d","success":"#3bc43b","warning":"#e8b017","error":"#ff006f"}
 */