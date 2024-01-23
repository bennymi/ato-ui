import type { Shortcut } from '@unocss/core';

import { cso, reg_c, reg_c_sO_oO, reg_oO, reg_p, reg_pO, reg_s } from '../utils/regex';

export const borderSCs: Shortcut[] = [
	// rounded container
	[
		new RegExp(`^rounded-container${reg_pO}$`),
		([, p]: string[]) => `rounded-${p ? `${p}-` : ''}[var(--radius-container)]`,
		{
			autocomplete: ['rounded-container', `rounded-container-${reg_p}`]
		}
	],
	[
		new RegExp(`^rounded-input${reg_pO}$`),
		([, p]: string[]) => `rounded-${p ? `${p}-` : ''}[var(--radius-input)]`,
		{
			autocomplete: ['rounded-input', `rounded-input-${reg_p}`]
		}
	],
	[
		new RegExp(`^rounded-switch${reg_pO}$`),
		([, p]: string[]) => `rounded-${p ? `${p}-` : ''}[var(--radius-switch)]`,
		{
			autocomplete: ['rounded-switch', `rounded-switch-${reg_p}`]
		}
	],
	[
		new RegExp(`rounded-btn${reg_pO}`),
		([, side]: string[]) => `rounded-${side ? `${side}-` : ''}[var(--radius-btn)]`
	],
	[
		new RegExp(`rounded-btn-icon${reg_pO}`),
		([, side]: string[]) => `rounded-${side ? `${side}-` : ''}[var(--radius-btn-icon)]!`,
		{
			autocomplete: [
				'rounded-btn',
				'rounded-btn-icon',
				`rounded-btn-${reg_p}`,
				`rounded-btn-icon-${reg_p}`
			]
		}
	],

	// Border light - dark
	[
		new RegExp(`^border-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`),
		([, c1, s1, o1, s2, o2]: string[]) =>
			`border-${cso(c1, s1, o1)} dark:border-${cso(c1, s2, o2)}`,
		{
			autocomplete: [
				`border-${reg_c}-${reg_s}-${reg_s}`,
				`border-${reg_c}-${reg_s}/<percent>-${reg_s}`,
				`border-${reg_c}-${reg_s}-${reg_s}/<percent>`,
				`border-${reg_c}-${reg_s}/<percent>-${reg_s}/<percent>`
			]
		}
	],

	// Ring light - dark
	[
		new RegExp(`^ring-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`),
		([, c1, s1, o1, s2, o2]: string[]) => `ring-${cso(c1, s1, o1)} dark:ring-${cso(c1, s2, o2)}`,
		{
			autocomplete: [
				`ring-${reg_c}-${reg_s}-${reg_s}`
			]
		}
	],

	// Border inverse light - dark
	[
		new RegExp(`^border-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}$`),
		([, c1, s1, o1, c2, s2, o2]: string[]) =>
			`border-${cso(c1, s1, o1)} dark:border-${cso(c2, s2, o2)}`,
		{
			autocomplete: [
				`border-inverse`,
				`border-inverse-${reg_c}`,
				`border-inverse-${reg_c}-${reg_c}`,
				`border-inverse-${reg_c}-${reg_s}`,
				`border-inverse-${reg_c}-${reg_s}-${reg_c}`,
				`border-inverse-${reg_c}-${reg_c}-${reg_s}`,
				`border-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`
			]
		}
	],

	// Ring inverse light - dark
	[
		new RegExp(`^ring-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}$`),
		([, c1, s1, o1, c2, s2, o2]: string[]) =>
			`ring-${cso(c1, s1, o1)} dark:ring-${cso(c2, s2, o2)}`,
		{
			autocomplete: [
				`ring-inverse`,
				`ring-inverse-${reg_c}`,
				`ring-inverse-${reg_c}-${reg_c}`,
				`ring-inverse-${reg_c}-${reg_s}`,
				`ring-inverse-${reg_c}-${reg_s}-${reg_c}`,
				`ring-inverse-${reg_c}-${reg_c}-${reg_s}`,
				`ring-inverse-${reg_c}-${reg_s}-${reg_c}-${reg_s}`
			]
		}
	]
];
