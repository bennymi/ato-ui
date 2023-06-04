/**
 * Source: https://joyofcode.xyz/make-a-svelte-component-library
 */

import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';
import type {
	AccordionOptions,
	AccordionActiveId,
	AccordionActiveIdContext,
	AccordionCollapseContext,
    AccordionNumberItems
} from './types';

export function setAccordionOptions({ collapse }: AccordionOptions) {
    const numberAccordionItems = writable<number>(0);
	const activeComponentId = writable<AccordionActiveId>(null);
	setContext<AccordionCollapseContext>('collapse', collapse);
	setContext<AccordionNumberItems>('items', numberAccordionItems);
	setContext<AccordionActiveIdContext>('active', activeComponentId);
}

export function getAccordionOptions() {
	const collapse = getContext<AccordionCollapseContext>('collapse');
    const numberAccordionItems = getContext<AccordionNumberItems>('items');
	const activeComponentId = getContext<AccordionActiveIdContext>('active');
	return { collapse, numberAccordionItems, activeComponentId };
}
