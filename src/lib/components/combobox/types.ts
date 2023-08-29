import type { Writable } from 'svelte/store';
import type { ComboboxOption } from '@melt-ui/svelte';

export type ComboboxItem = {
    value: string;
    subtitle?: string;
    disabled?: boolean;
}

export type ComboboxSelectedStore = Writable<ComboboxOption<ComboboxItem>>;