import type { ExampleHighlights, Data } from '../types';

const highlights: ExampleHighlights = {
	main: {
		'app.svelte': {
			lines: '',
			words: [
				{
					strings: [
						'$content',
						'$item',
						'$trigger',
						'$root',
						'$isSelected',
						'use:item',
						'use:trigger',
						'use:content'
					],
					id: 'builder'
				}
			]
		}
	}
};

export const accordionHeadlessData: Data = {
	highlights
};
