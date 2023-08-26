import type { Data, APIProp, ExampleHighlights, ComponentAPIExtraInfo } from "../types";

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
    }
]

export const dialogData: Data = {
    highlights,
    apiExtraInfo
}