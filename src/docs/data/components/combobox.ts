import type { Data, ExampleHighlights, ComponentAPIExtraInfo } from '../types';

const highlights: ExampleHighlights = {
	main: {
		'app.svelte': {
			lines: ''
		}
	},
	debounce: {
		'app.svelte': {
			words: [
				{
					strings: ['debounce'],
					id: 'prop'
				}
			]
		}
	},
	icon: {
		'app.svelte': {
			words: [
				{
					strings: ['selectIcon'],
					id: 'prop'
				}
			]
		}
	}
};

const apiExtraInfo: ComponentAPIExtraInfo[] = [
	{
		component: 'Combobox',
		required: ['label', 'selected', 'items'],
		icons: ['selectIcon'],
		styles: [
			'labelStyle',
			'inputStyle',
			'activeStyle',
			'width',
			'comboboxBgStyle',
			'comboboxBorderStyle',
			'noResultStyle'
		],
		specialTypes: ['ComboboxSelectedStore', 'ComboboxItem[]', 'ComboboxItem']
	}
];

export const comboboxData: Data = {
	highlights,
	apiExtraInfo
};
