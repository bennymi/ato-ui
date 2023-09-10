import type { ExampleHighlights, Data } from '../types';

const highlights: ExampleHighlights = {
	main: {
		'app.svelte': {
			lines: '2,3,14-20',
			words: [{ strings: ['$root', 'use:root', '$input', 'use:input', 'uniqueId'], id: 'builder' }]
		}
	}
};

export const switchHeadlessData: Data = {
	highlights
};
