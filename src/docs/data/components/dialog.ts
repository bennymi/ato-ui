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
        component: 'Dialog',
        required: ['open'],
        styles: ['overlayStyle', 'containerStyle', 'zIndex', 'position'],
        transitions: ['overlayTransition', 'containerTransition']
    }
]

export const dialogData: Data = {
    highlights,
    apiExtraInfo
}