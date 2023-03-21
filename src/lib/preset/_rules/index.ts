import type { Rule, Shortcut } from '@unocss/core';

import { backgroundSCs } from './background';
import { buttonRules, buttonSCs } from './buttons';
import { cardSCs } from './cards';
import { chipSCs } from './chips';
import { roundedSCs } from './rounded';
import { textSCs } from './text';

export const rules: Rule[] = [
    ...buttonRules
];

export const shortcuts: Shortcut[] = [
    ...backgroundSCs,
    ...buttonSCs,
    ...cardSCs,
    ...chipSCs,
    ...roundedSCs,
    ...textSCs
];