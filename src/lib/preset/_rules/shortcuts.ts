import type { Shortcut } from '@unocss/core';

import { backgroundSCs } from './background';
import { buttonSCs } from './buttons';
import { cardSCs } from './cards';
import { chipSCs } from './chips';
import { roundedSCs } from './rounded';
import { textSCs } from './text';

export const shortcuts: Shortcut[] = [
    ...backgroundSCs,
    ...buttonSCs,
    ...cardSCs,
    ...chipSCs,
    ...roundedSCs,
    ...textSCs
]