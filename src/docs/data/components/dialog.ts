import type { Data, ExampleHighlights, ComponentAPIExtraInfo } from '../types';

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
		transitions: ['overlayTransition', 'containerTransition'],
		specialTypes: ['DialogRole', 'DialogTransition'],
		slots: [
			{
				name: 'default',
				description: 'The default slot for putting your dialog content into.'
			}
		]
	}
];

export const dialogData: Data = {
	highlights,
	apiExtraInfo
};
