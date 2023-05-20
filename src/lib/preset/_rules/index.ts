import type { Rule, Shortcut } from '@unocss/core';

import { animationRules } from './animation';
import { backgroundRules, backgroundSCs } from './background';
import { buttonRules, buttonSCs } from './buttons';
import { cardSCs } from './cards';
import { chipSCs } from './chips';
import { imageRules } from './image';
import { borderSCs } from './border';
import { shadowSCs } from './shadow';
import { spinnerRules, spinnerSCs } from './spinners';
import { textRules, textSCs } from './text';

export { animation } from './animation';

export const rules: Rule[] = [
    ...animationRules,
    ...backgroundRules,
    ...buttonRules,
    ...imageRules,
    ...spinnerRules,
    ...textRules,
];

export const shortcuts: Shortcut[] = [
    ...backgroundSCs,
    ...buttonSCs,
    ...cardSCs,
    ...chipSCs,
    ...borderSCs,
    ...shadowSCs,
    ...spinnerSCs,
    ...textSCs
];