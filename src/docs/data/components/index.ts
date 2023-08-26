import type { ComponentsData } from "../types";

import { radioGroupHeadlessData } from "./radio-group-headless";
import { radioGroupData } from "./radio-group";
import { switchHeadlessData } from './switch-headless';
import { switchData } from './switch';
import { tabsHeadlessData } from "./tabs-headless";
import { tabsData } from "./tabs";
import { tocHeadlessData } from './table-of-contents-headless';
import { tocData } from './table-of-contents';

export const componentsList = [
    // 'accordion-headless',
    // 'accordion',
    // 'avatar-headless',
    // 'avatar',
    // 'combobox-headless',
    // 'combobox',
    // 'drop-menu-headless',
    // 'drop-menu',
    // 'modal-headless',
    // 'modal',
    'radio-group-headless',
    'radio-group',
    'switch-headless',
    'switch',
    'tabs-headless',
    'tabs',
    'table-of-contents-headless',
    'table-of-contents'
    // 'toc-headless',
    // 'toc',
];

export const componentsData: ComponentsData = {
    'radio-group-headless': radioGroupHeadlessData,
    'radio-group': radioGroupData,
    'switch-headless': switchHeadlessData,
    'switch': switchData,
    'tabs-headless': tabsHeadlessData,
    'tabs': tabsData,
    'table-of-contents-headless': tocHeadlessData,
    'table-of-contents': tocData,
}

export function isComponent(key: string) {
    return componentsList.includes(key);
    // return key in componentsData;
}