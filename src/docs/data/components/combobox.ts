import type { Data, ExampleHighlights, ComponentAPIExtraInfo } from "../types";

const highlights: ExampleHighlights = {
    main: {
        'app.svelte': {
            lines: ''
        }
    }
};

const apiExtraInfo: ComponentAPIExtraInfo[] = [
    {
        component: 'Combobox',
        required: [''],
        styles: [''],
    }
]

export const comboboxData: Data = {
    highlights,
    apiExtraInfo
}