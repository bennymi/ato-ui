// import type { Writable } from 'svelte/store';
import type { Accordion } from '@melt-ui/svelte';

// export type AccordionOptions = { collapse: boolean };
// export type AccordionActiveId = string | null;
// export type AccordionCollapseContext = boolean;
// export type AccordionActiveIdContext = Writable<AccordionActiveId>;
// export type AccordionNumberItems = Writable<number>;

export type AccordionContext = {
    content: Accordion["elements"]["content"];
    item: Accordion["elements"]["item"];
    trigger: Accordion["elements"]["trigger"];
    isSelected: Accordion["helpers"]["isSelected"];
    disabled: boolean;
    disabledStyle: string;
};