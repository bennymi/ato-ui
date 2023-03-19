import type { Theme } from "@unocss/preset-uno"
import { colorValues } from "../../types/colors"

export const colors = {
    primary: Object.fromEntries(colorValues.map(x => [x, `var(--color-primary-${x})`])),
      secondary: Object.fromEntries(colorValues.map(x => [x, `var(--color-secondary-${x})`])),
      tertiary: Object.fromEntries(colorValues.map(x => [x, `var(--color-tertiary-${x})`])),
      success: Object.fromEntries(colorValues.map(x => [x, `var(--color-success-${x})`])),
      warning: Object.fromEntries(colorValues.map(x => [x, `var(--color-warning-${x})`])),
      error: Object.fromEntries(colorValues.map(x => [x, `var(--color-error-${x})`])),
      surface: Object.fromEntries(colorValues.map(x => [x, `var(--color-surface-${x})`])),
} satisfies Theme['colors']