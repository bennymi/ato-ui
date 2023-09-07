import type { Data, ComponentAPIExtraInfo } from "../types";

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'Switch',
        required: ['label'],
        styles: ['labelStyles', 'background', 'activeBackground'],
        icons: ['inactiveIcon', 'activeIcon'],
        function: ['label', 'name', 'required', 'hideLabel', 'labelPosition', 'checked', 'disabled', 'size'],
        specialTypes: ['SwitchLabelPosition', 'SwitchSize']
    },
];

export const switchData: Data = {
    // componentProps
    apiExtraInfo
};