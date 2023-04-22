import { writable, type Writable } from "svelte/store";

export const darkTheme: Writable<boolean> = writable(true);