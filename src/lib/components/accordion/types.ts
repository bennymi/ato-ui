import type { Accordion } from '@melt-ui/svelte';

export type AccordionContext = {
	content: Accordion['elements']['content'];
	item: Accordion['elements']['item'];
	trigger: Accordion['elements']['trigger'];
	isSelected: Accordion['helpers']['isSelected'];
	disabled: boolean;
	disabledStyle: string;
};
