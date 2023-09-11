import type { ComponentsData } from '../types';

import { accordionHeadlessData } from './accordion-headless';
import { accordionData } from './accordion';
import { avatarHeadlessData } from './avatar-headless';
import { avatarData } from './avatar';
import { comboboxHeadlessData } from './combobox-headless';
import { comboboxData } from './combobox';
import { dialogHeadlessData } from './dialog-headless';
import { dialogData } from './dialog';
import { dropdownMenuHeadlessData } from './dropdown-menu-headless';
import { dropdownMenuData } from './dropdown-menu';
import { radioGroupHeadlessData } from './radio-group-headless';
import { radioGroupData } from './radio-group';
import { switchHeadlessData } from './switch-headless';
import { switchData } from './switch';
import { tabsHeadlessData } from './tabs-headless';
import { tabsData } from './tabs';
import { tocHeadlessData } from './table-of-contents-headless';
import { tocData } from './table-of-contents';

export const componentsList = [
	'accordion-headless',
	'accordion',
	'avatar-headless',
	'avatar',
	'dropdown-menu-headless',
	'dropdown-menu',
	'combobox-headless',
	'combobox',
	'dialog-headless',
	'dialog',
	'radio-group-headless',
	'radio-group',
	'switch-headless',
	'switch',
	'tabs-headless',
	'tabs',
	'table-of-contents-headless',
	'table-of-contents'
];

export const componentsData: ComponentsData = {
	'accordion-headless': accordionHeadlessData,
	accordion: accordionData,
	'avatar-headless': avatarHeadlessData,
	avatar: avatarData,
	'combobox-headless': comboboxHeadlessData,
	combobox: comboboxData,
	'dialog-headless': dialogHeadlessData,
	dialog: dialogData,
	'dropdown-menu-headless': dropdownMenuHeadlessData,
	'dropdown-menu': dropdownMenuData,
	'radio-group-headless': radioGroupHeadlessData,
	'radio-group': radioGroupData,
	'switch-headless': switchHeadlessData,
	switch: switchData,
	'tabs-headless': tabsHeadlessData,
	tabs: tabsData,
	'table-of-contents-headless': tocHeadlessData,
	'table-of-contents': tocData
};

export function isComponent(key: string) {
	return componentsList.includes(key);
	// return key in componentsData;
}
