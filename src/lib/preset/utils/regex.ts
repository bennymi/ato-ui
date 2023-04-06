import { themeColorsJ, shadesJ } from '../../types/colors.d';
import { directionsJ } from '../../types/directions.d';
import { sizesJ } from '../../types/types.d';

/**
 * reg_... = regular expressions
 * c = color
 * s = shade
 * o = opacity
 * O = Optional
 * name_... = class names
 */

// ===== Regular Expressions
export const reg_c = `(${themeColorsJ})`;
export const reg_sO = `(?:-(${shadesJ}))?`;
export const reg_oO = `(?:-op(0|100|[1-9][0-9]?))?`;
// export const re_oO = `(?:\/(0|100|[1-9][0-9]?))?`;

export const reg_c_sO_oO = `${reg_c}${reg_sO}${reg_oO}`;

// ===== Functions used for shortcuts
export function convert_opacity(o: string) {
    if (!o) return '[1]';

    const opacity = parseInt(o) / 100;
    return `[${opacity}]`
}

export function so(s: string, o: string) {
    let shade = s ?? '500';
    // return `${shade}/${convert_opacity(o)}`
    const final = `${shade}/${convert_opacity(o)}`
    return final;
}

export function cs(c: string, s: string) {
    return `${c}-${s ?? '500'}`;
}

export function cso(c: string, s: string, o: string) {
    return `${c}-${so(s, o)}`;
}

// ===== Functions used only for specifying class names in rules
export function name_c_sO_oO(c: string, s: string='', o: string='') {
    // console.log(`${c}${s ? `-${s}` : ''}${o ? `/${o}` : ''}`);
    // return `${c}${s ? `-${s}` : ''}${o ? `\/${o}` : ''}`;
    return `${c}${s ? `-${s}` : ''}${o ? `-op${o}` : ''}`;
}