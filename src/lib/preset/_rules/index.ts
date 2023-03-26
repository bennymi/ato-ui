import type { Rule, Shortcut } from '@unocss/core';

export { animation } from './animation';

import { backgroundRules, backgroundSCs } from './background';
import { buttonRules, buttonSCs } from './buttons';
import { cardSCs } from './cards';
import { chipSCs } from './chips';
import { roundedSCs } from './rounded';
import { spinnerRules, spinnerSCs } from './spinners';
import { textSCs } from './text';

export const rules: Rule[] = [
    ...backgroundRules,
    ...buttonRules,
    ...spinnerRules,
];

export const shortcuts: Shortcut[] = [
    ...backgroundSCs,
    ...buttonSCs,
    ...cardSCs,
    ...chipSCs,
    ...roundedSCs,
    ...spinnerSCs,
    ...textSCs
];