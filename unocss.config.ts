import {
  defineConfig
} from 'unocss';

import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';
import extractorSvelte from '@unocss/extractor-svelte';
import presetIcons from '@unocss/preset-icons';
import presetWind from '@unocss/preset-wind';
import { presetForms } from '@julr/unocss-preset-forms';

import { presetAtoUI } from './src/lib/preset/index';

export default defineConfig({
	extractors: [extractorSvelte],
	presets: [
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
		}),
		presetWind(),
		presetForms(),
		presetAtoUI()
	],
	transformers: [
		transformerVariantGroup(),
		transformerDirectives()
	],
});
