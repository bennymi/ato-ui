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
		component: 'TOC',
		required: ['selector'],
		styles: ['labelStyles', 'contentStyles', 'activeStyles'],
		specialTypes: [
			'ToCScrollFn',
			'ToCHeading[]',
			'ToCScrollBehaviour',
			'ToCActiveType',
			'ToCHeadingFilterFn',
			'ToCMarkerType'
		],
		function: ['']
	}
];

export const tocData: Data = {
	highlights,
	// componentProps
	apiExtraInfo
};
