import { themeColorsJ, shadesJ } from '../../types/colors';
import { directionsJ } from '../../types/directions';
import { sizesJ } from '../../types/types';
import { pos_j  } from '../../types/positions';

/**
 * reg_... = regular expressions
 * l = size
 * d = direction
 * c = color
 * s = shade
 * o = opacity
 * p = position
 * wh = width & height
 * w = width
 * h = height
 * O = Optional
 * num = negative and positive integers
 * name_... = class names
 */

const white_black = ['white', 'black'];

// ===== Default values
export const default_dir = 'r';

// ===== Regular Expressions
export const reg_l = `(${sizesJ})`;
export const reg_lO = `(?:-(${sizesJ}))?`;

export const reg_p = `(${pos_j})`;
export const reg_pO = `(?:-(${pos_j}))?`;

export const reg_d = `(${directionsJ})`;
export const reg_dO = `(?:-(${directionsJ}))?`;

export const reg_c = `(${themeColorsJ})`;
export const reg_s = `(${shadesJ})`;
export const reg_sO = `(?:-(${shadesJ}))?`;
export const reg_oO = `(?:/(0|100|[1-9][0-9]?))?`;

export const reg_whO = `(?:-wh(\\d+))?`;

export const reg_100 = `(0|100|[1-9][0-9]?)`;

export const reg_num = `(-?\\d+)`;

export const reg_c_s = `${reg_c}-${reg_s}`;
export const reg_c_sO = `${reg_c}${reg_sO}`;
export const reg_c_s_oO = `${reg_c}-${reg_s}${reg_oO}`;
export const reg_c_sO_oO = `${reg_c}${reg_sO}${reg_oO}`;

// ===== Functions used for shortcuts
export function norm_op(o: string) {
    return `${parseInt(o, 10) / 100}`
}

export function parse_opacity(o: string, def_o='1') {
    return `${o ? (parseInt(o, 10) / 100).toFixed(2) : def_o}`
}

export function convert_opacity(o: string) {
    if (!o) return '[1]';

    const opacity = norm_op(o);
    return `[${opacity}]`
}

export function so(s: string, o: string) {
    const shade = s ?? '500';
    return `${shade}/${convert_opacity(o)}`;
}

export function cs(c: string, s: string) {
    if (white_black.includes(c)) {
        return c;
    }

    return `${c}-${s ?? '500'}`;
}

export function cso(c: string, s: string, o: string) {
    if (white_black.includes(c)) {
        return c;
    }

    return `${c}-${so(s, o)}`;
}

export function dim(wh: string, default_wh='12') {
    if (wh) {
        return `w-${wh} h-${wh}`;
    }

    return `w-${default_wh} h-${default_wh}`;
}

// ===== Functions used only for specifying class names in rules
export function name_c_sO_oO(c: string, s='', o='') {
    // console.log(`${c}${s ? `-${s}` : ''}${o ? `/${o}` : ''}`);
    // return `${c}${s ? `-${s}` : ''}${o ? `\/${o}` : ''}`;
    return `${c}${s ? `-${s}` : ''}${o ? `/${o}` : ''}`;
}