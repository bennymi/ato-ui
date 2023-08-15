import type { ComponentsData } from "../types";

import { switchData } from './switch';
import { tabsHeadlessData } from "./tabs-headless";
import { tabsData } from "./tabs";

export const componentsList = [
    'accordion-headless',
    'accordion',
    'avatar-headless',
    'avatar',
    'combobox-headless',
    'combobox',
    'drop-menu-headless',
    'drop-menu',
    'modal-headless',
    'modal',
    'radio-group-headless',
    'radio-group',
    'switch',
    'tabs-headless',
    'tabs',
    'toc-headless',
    'toc',
    // 'toggle-switch-headless',
];

export const componentsData: ComponentsData = {
    'switch': switchData,
    'tabs-headless': tabsHeadlessData,
    'tabs': tabsData
}

export function isComponent(key: string) {
    // return componentsList.includes(key);
    return key in componentsData;
}