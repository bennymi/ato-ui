import type { Writable } from 'svelte/store';

export type AccordionOptions = { collapse: boolean };
export type AccordionActiveId = string | null;
export type AccordionCollapseContext = boolean;
export type AccordionActiveIdContext = Writable<AccordionActiveId>;
export type AccordionNumberItems = Writable<number>;