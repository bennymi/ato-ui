// Reference: https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/index.ts

import type { Preset } from '@unocss/core';
// import { presetWind } from '@unocss/preset-wind';

import { colors } from './_theme/colors';
// import { animation, rules, shortcuts } from './_rules/index';
import { animation, rules } from './_rules/index';

export { colors } from './_theme/colors';

export const presetAtoUI = (): Preset => ({
    name: 'presetAtoUI',
    theme: {
        colors,
        animation
    },
    rules,
    // shortcuts
});

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