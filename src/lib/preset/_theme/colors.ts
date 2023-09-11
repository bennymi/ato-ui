// Reference: https://github.com/unocss/unocss/blob/172f480a9a092538685fddd9cb5fccdab9d59a86/packages/preset-mini/src/_theme/colors.ts

import type { Theme } from '@unocss/preset-wind';
import { shades } from '../../types/colors';

export const colors = {
	primary: Object.fromEntries(shades.map((x) => [x, `rgba(var(--color-primary-${x}), %alpha)`])),
	secondary: Object.fromEntries(
		shades.map((x) => [x, `rgba(var(--color-secondary-${x}), %alpha)`])
	),
	tertiary: Object.fromEntries(shades.map((x) => [x, `rgba(var(--color-tertiary-${x}), %alpha)`])),
	success: Object.fromEntries(shades.map((x) => [x, `rgba(var(--color-success-${x}), %alpha)`])),
	warning: Object.fromEntries(shades.map((x) => [x, `rgba(var(--color-warning-${x}), %alpha)`])),
	error: Object.fromEntries(shades.map((x) => [x, `rgba(var(--color-error-${x}), %alpha)`])),
	surface: Object.fromEntries(shades.map((x) => [x, `rgba(var(--color-surface-${x}), %alpha)`]))
} satisfies Theme['colors'];
