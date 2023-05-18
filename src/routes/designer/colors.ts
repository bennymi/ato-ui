/**
 * Provided by @javisperez under the MIT license: https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts
 */

import tinycolor from 'tinycolor2';

import type { Rgb, Palette, Contrast, PaletteShades, Shade, ShadeValues, FullTheme, ColorManipulation } from "./types.d";
import { theme_colors, shade_values } from './constants';

function hexToRgb(hex: string): Rgb | null {
	const sanitizedHex = hex.replaceAll('##', '#');
	const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);

	if (!colorParts) {
		return null;
	}

	const [, r, g, b] = colorParts;

	return {
		r: parseInt(r, 16),
		g: parseInt(g, 16),
		b: parseInt(b, 16)
	} as Rgb;
}

function hex_to_rgb_string(hex: string): string {
	const rgb: Rgb | null = hexToRgb(hex);

	if (rgb) {
		const { r, g, b} = rgb;
		return `${r}, ${g}, ${b}`;
	}

	return '';
}

function rgbToHex(r: number, g: number, b: number): string {
	const toHex = (c: number) => `0${c.toString(16)}`.slice(-2);
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function getTextColor(color: string): '#FFF' | '#333' {
	const rgbColor = hexToRgb(color);

	if (!rgbColor) {
		return '#333';
	}

	const { r, g, b } = rgbColor;
	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	return luma < 120 ? '#FFF' : '#333';
}

function lighten(hex: string, intensity: number): string {
	const color = hexToRgb(`#${hex}`);

	if (!color) {
		return '';
	}

	const r = Math.round(color.r + (255 - color.r) * intensity);
	const g = Math.round(color.g + (255 - color.g) * intensity);
	const b = Math.round(color.b + (255 - color.b) * intensity);

	return rgbToHex(r, g, b);
}

function darken(hex: string, intensity: number): string {
	const color = hexToRgb(hex);

	if (!color) {
		return '';
	}

	const r = Math.round(color.r * intensity);
	const g = Math.round(color.g * intensity);
	const b = Math.round(color.b * intensity);

	return rgbToHex(r, g, b);
}

function find_best_contrast(hex: string): Contrast {
	const black_contrast = tinycolor.readability(hex, '#000');
	const white_contrast = tinycolor.readability(hex, '#fff');

	let contrast = black_contrast;
	let contrast_color = '#000000';

	if (white_contrast > black_contrast) {
		contrast = white_contrast;
		contrast_color = '#ffffff';
	}

	return {
		contrast,
		on_color: contrast_color
	}
}

export default function generate_palette(baseColor: ColorManipulation): PaletteShades {
	const response: any = {
		500: `#${baseColor.color}`.replace('##', '#')
	};

	const lighten_values = baseColor.lighten_values.sort((a, b) => a - b);
	const darken_values = baseColor.darken_values.sort((a, b) => a - b);

	(<ShadeValues[]>[50, 100, 200, 300, 400]).forEach((level, i) => {
		response[level] = lighten(baseColor.color, (100 - lighten_values[i]) / 100);
	});

	(<ShadeValues[]>[600, 700, 800, 900, 950]).forEach((level, i) => {
		response[level] = darken(baseColor.color, (100 - darken_values[i]) / 100);
	});

	let palette_shades: any = {};

	shade_values.forEach((v) => {
		const contrast = find_best_contrast(<string>response[v]);
		
		palette_shades[v] = {
			color: <string>response[v],
			...contrast
		} satisfies Shade;
	});

	return palette_shades satisfies PaletteShades;
}

export function create_css_colors(theme: FullTheme): string {
	let css_string = '';

	theme_colors.forEach((c, i) => {
		if (c in theme) {
			css_string += `\t/* ${c} colors */\n`
			shade_values.forEach((v) => {
				if (v in theme[c]) {
					css_string += `\t--color-${c}-${v}: ${hex_to_rgb_string(<string>theme[c][v]?.color)}; /* ${theme[c][v]?.color} */\n`
				}
			});

			css_string += '\n';
			shade_values.forEach((v) => {
				if (v in theme[c]) {
					css_string += `\t--on-${c}-${v}: ${hex_to_rgb_string(<string>theme[c][v]?.on_color)}; /* ${theme[c][v]?.on_color} */\n`
				}
			});

			css_string += i === theme_colors.length - 1 ? '' : '\n';
		}
	})

	return css_string;
}