

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
    'tabs-headless',
    'tabs',
    'toc-headless',
    'toc',
    // 'toggle-switch-headless',
    'toggle-switch',
];


export function isComponent(key: string) {
    return componentsList.includes(key);
}

