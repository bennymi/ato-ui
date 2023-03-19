// Reference: https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/index.ts

import type { Preset } from '@unocss/core';

import { colors } from './_theme/colors';
import { shortcuts } from './_rules/shortcuts';

export const presetAtoUI = (): Preset => {
    return {
        name: 'presetAtoUI',
        theme: {
            colors,
        },
        shortcuts
    }
}

export default presetAtoUI;