// Reference: https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/index.ts

import type { Preset } from '@unocss/core';
import { presetWind } from '@unocss/preset-wind';

import { colors } from './_theme/colors';
import { shortcuts } from './_rules/shortcuts';

export { colors } from './_theme/colors';

export const presetAtoUI = (): Preset => {
    return {
        name: 'presetAtoUI',
        theme: {
            colors,
        },
        shortcuts
    }
}

// export const presetAtoUI = (): Preset => {
//     let ato = presetWind();

//     ato.theme!.colors = {
//         ...ato.theme!.colors,
//         ...colors
//     };

//     ato.shortcuts = [...<[]>ato.shortcuts, ...shortcuts];

//     ato.name = 'presetAtoUI';

//     return ato
// }

export default presetAtoUI;