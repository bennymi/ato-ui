import type { Shortcut } from '@unocss/core';
import { convert_opacity, cs, cso, reg_c, reg_c_sO_oO, reg_c_s_oO, reg_oO, reg_s } from '../utils/regex';

export const svgSCs: Shortcut[] = [
    // Fill colors
    [
        new RegExp(`^fill-on-${reg_c_sO_oO}`),
        ([, c, s, op]: string[]) => `fill-[color:rgb(var(--on-${cs(c, s)}))]${op ? `/${convert_opacity(op)}` : ''}`
    ], 

    // Fill-on light - dark
    [
        new RegExp(`^fill-on-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([, c1, s1, o1, s2, o2]: string[]) => `fill-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:fill-[color:rgb(var(--on-${cs(c1, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: [
                `fill-on-${reg_c}`,
                `fill-on-${reg_c}/<percent>`,
                `fill-on-${reg_c}/<percent>-${reg_c}/<percent>`
            ]
        }
    ], 

    // Fill-on inverse light - dark
    [
        new RegExp(`^fill-on-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `fill-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:fill-[color:rgb(var(--on-${cs(c2, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: [
                `fill-on-inverse-${reg_c}`,
                `fill-on-inverse-${reg_c}-${reg_c}`,
                `fill-on-inverse-${reg_c}/<percent>`,
                `fill-on-inverse-${reg_c}/<percent>-${reg_c}`,
                `fill-on-inverse-${reg_c}/<percent>-${reg_c}/<percent>`
            ]
        }
    ], 

    // Fill light - dark
    [
        new RegExp(`^fill-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([, c1, s1, o1, s2, o2]: string[]) => `fill-${cso(c1, s1, o1)} dark:fill-${cso(c1, s2, o2)}`
    ], 

    // Fill inverse light - dark
    [
        new RegExp(`^fill-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `fill-${cso(c1, s1, o1)} dark:fill-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                `fill-inverse-${reg_c}`,
                `fill-inverse-${reg_c}/<percent>`,
                `fill-inverse-${reg_c}-${reg_c}`,
                `fill-inverse-${reg_c}/<percent>-${reg_c}`,
                `fill-inverse-${reg_c}/<percent>-${reg_c}/<percent>`
            ]
        }
    ], 
    
    // Stroke colors
    [
        new RegExp(`^stroke-on-${reg_c_sO_oO}`),
        ([, c, s, op]: string[]) => `stroke-[color:rgb(var(--on-${cs(c, s)}))]${op ? `/${op}` : ''}`
    ], 

    // Stroke-on light - dark
    [
        new RegExp(`^stroke-on-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([, c1, s1, o1, s2, o2]: string[]) => `stroke-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:stroke-[color:rgb(var(--on-${cs(c1, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: [
                `stroke-on-${reg_c}`,
                `stroke-on-${reg_c}/<percent>`,
                `stroke-on-${reg_c}-${reg_c}`,
                `stroke-on-${reg_c}/<percent>-${reg_c}`,
                `stroke-on-${reg_c}/<percent>-${reg_c}/</percent>`
            ]
        }
    ], 

    // Stroke-on inverse light - dark
    [
        new RegExp(`^stroke-on-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `stroke-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:stroke-[color:rgb(var(--on-${cs(c2, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: [
                `stroke-on-inverse-${reg_c}`,
                `stroke-on-inverse-${reg_c}-${reg_c}`,
                `stroke-on-inverse-${reg_c}/<percent>`,
                `stroke-on-inverse-${reg_c}/<percent>-${reg_c}`,
                `stroke-on-inverse-${reg_c}/<percent>-${reg_c}/</percent>`,
            ]
        }
    ], 

    // Stroke light - dark
    [
        new RegExp(`^stroke-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([, c1, s1, o1, s2, o2]: string[]) => `stroke-${cso(c1, s1, o1)} dark:stroke-${cso(c1, s2, o2)}`
    ], 

    // Stroke inverse light - dark
    [
        new RegExp(`^stroke-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `stroke-${cso(c1, s1, o1)} dark:stroke-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                `stroke-inverse-${reg_c}`,
                `stroke-inverse-${reg_c}-${reg_c}`,
                `stroke-inverse-${reg_c}/<percent>`,
                `stroke-inverse-${reg_c}/<percent>-${reg_c}`,
                `stroke-inverse-${reg_c}/<percent>-${reg_c}/<percent>`,
            ]
        }
    ], 
]