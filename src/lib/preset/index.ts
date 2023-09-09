// Reference: https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/index.ts

import type { Preset } from '@unocss/core';
import { presetWind } from '@unocss/preset-wind';

import { colors } from './_theme/colors';
import { animation, rules, shortcuts } from './_rules/index';

export { colors } from './_theme/colors';

// export const presetAtoUI = (): Preset => ({
//     name: 'presetAtoUI',
//     theme: {
//         colors,
//         animation
//     },
//     rules,
//     shortcuts
// });

const ato = presetWind();

export const presetAtoUI = (): Preset => ({
    ...ato,
    name: 'presetAtoUI',
    theme: {
        ...ato.theme,
        colors,
        animation: {
            ...<[]>ato.theme?.animation, 
            ...animation
        }
    },
    rules: [...<[]>ato.rules, ...rules],
    shortcuts: [...<[]>ato.shortcuts, ...shortcuts],
});

// export const presetAtoUI = (): Preset => {

//     ato.theme!.colors = {
//         ...ato.theme!.colors,
//         ...colors
//     };

//     ato.shortcuts = [...<[]>ato.shortcuts, ...shortcuts];

//     ato.name = 'presetAtoUI';

//     return ato
// }

export default presetAtoUI;