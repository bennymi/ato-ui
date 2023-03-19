// Reference: https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/index.ts

import type { Preset } from '@unocss/core';

import { colors } from './_theme/colors';

export const presetAtoUI = (): Preset => {
    return {
        name: 'presetAtoUI',
        theme: {
            colors,
        }
    }
}

export default presetAtoUI;