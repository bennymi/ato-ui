import type { Rule } from '@unocss/core';

export const imageRules: Rule[] = [
	[
		'drag-none',
		{
			'user-drag': 'none',
			'-webkit-user-drag': 'none',
			'user-select': 'none',
			'-moz-user-select': 'none',
			'-webkit-user-select': 'none',
			'-ms-user-select': 'none'
		}
	]
];
