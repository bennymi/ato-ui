// Reference: https://github.com/unocss/unocss/blob/172f480a9a092538685fddd9cb5fccdab9d59a86/packages/preset-mini/src/_theme/colors.ts

import type { Theme } from "@unocss/preset-uno"
import { colorValues } from "../../types/colors.d"

export const colors = {
    primary: Object.fromEntries(colorValues.map(x => [x, `var(--color-primary-${x})`])),
    secondary: Object.fromEntries(colorValues.map(x => [x, `var(--color-secondary-${x})`])),
    tertiary: Object.fromEntries(colorValues.map(x => [x, `var(--color-tertiary-${x})`])),
    success: Object.fromEntries(colorValues.map(x => [x, `var(--color-success-${x})`])),
    warning: Object.fromEntries(colorValues.map(x => [x, `var(--color-warning-${x})`])),
    error: Object.fromEntries(colorValues.map(x => [x, `var(--color-error-${x})`])),
    surface: Object.fromEntries(colorValues.map(x => [x, `var(--color-surface-${x})`]))
} satisfies Theme['colors']

// export const colors = {
//     primary: Object.fromEntries(colorValues.map(x => [x, `rgb(var(--color-primary-${x}))`])),
//     secondary: Object.fromEntries(colorValues.map(x => [x, `rgb(var(--color-secondary-${x}))`])),
//     tertiary: Object.fromEntries(colorValues.map(x => [x, `rgb(var(--color-tertiary-${x})`])),
//     success: Object.fromEntries(colorValues.map(x => [x, `rgb(var(--color-success-${x}))`])),
//     warning: Object.fromEntries(colorValues.map(x => [x, `rgb(var(--color-warning-${x}))`])),
//     error: Object.fromEntries(colorValues.map(x => [x, `rgb(var(--color-error-${x}))`])),
//     surface: Object.fromEntries(colorValues.map(x => [x, `rgb(var(--color-surface-${x}))`]))
// } satisfies Theme['colors']