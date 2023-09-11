import type { Writable } from 'svelte/store';
import type { ComboboxOption } from '@melt-ui/svelte';

export type Item = {
	value: string;
	subtitle?: string;
	disabled?: boolean;
};

export type SelectedStore = Writable<ComboboxOption<Item>>;
