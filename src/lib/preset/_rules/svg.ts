import type { Shortcut } from '@unocss/core';
import { convert_opacity, cs, cso, reg_c, reg_c_sO_oO, reg_c_s_oO, reg_oO, reg_s } from '../utils/regex';

export const svgSCs: Shortcut[] = [
    // Fill colors
    [
        new RegExp(`^fill-on-${reg_c_sO_oO}`),
        ([_, c, s, op]: string[]) => `fill-[color:rgb(var(--on-${cs(c, s)}))]${op ? `/${convert_opacity(op)}` : ''}`,
        {
            autocomplete: `fill-on-${reg_c}/<num>`
        }
    ], 

    // Fill-on light - dark
    [
        new RegExp(`^fill-on-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([_, c1, s1, o1, s2, o2]: string[]) => `fill-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:fill-[color:rgb(var(--on-${cs(c1, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: `fill-on-${reg_c}/<num>-${reg_c}/<num>`
        }
    ], 

    // Fill-on inverse light - dark
    [
        new RegExp(`^fill-on-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([_, c1, s1, o1, c2, s2, o2]: string[]) => `fill-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:fill-[color:rgb(var(--on-${cs(c2, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: `fill-on-inverse-${reg_c}/<num>-${reg_c}/<num>`
        }
    ], 

    // Fill light - dark
    [
        new RegExp(`^fill-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([_, c1, s1, o1, s2, o2]: string[]) => `fill-${cso(c1, s1, o1)} dark:fill-${cso(c1, s2, o2)}`,
        {
            autocomplete: `fill-${reg_c}/<num>-${reg_c}/<num>`
        }
    ], 

    // Fill inverse light - dark
    [
        new RegExp(`^fill-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([_, c1, s1, o1, c2, s2, o2]: string[]) => `fill-${cso(c1, s1, o1)} dark:fill-${cso(c2, s2, o2)}`,
        {
            autocomplete: `fill-inverse-${reg_c}/<num>-${reg_c}/<num>`
        }
    ], 
    
    // Stroke colors
    [
        new RegExp(`^stroke-on-${reg_c_sO_oO}`),
        ([_, c, s, op]: string[]) => `stroke-[color:rgb(var(--on-${cs(c, s)}))]${op ? `/${op}` : ''}`,
        {
            autocomplete: `stroke-on-${reg_c}/<num>`
        }
    ], 

    // Stroke-on light - dark
    [
        new RegExp(`^stroke-on-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([_, c1, s1, o1, s2, o2]: string[]) => `stroke-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:stroke-[color:rgb(var(--on-${cs(c1, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: `stroke-on-${reg_c}/<num>-${reg_c}/</num>`
        }
    ], 

    // Stroke-on inverse light - dark
    [
        new RegExp(`^stroke-on-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([_, c1, s1, o1, c2, s2, o2]: string[]) => `stroke-[color:rgb(var(--on-${cs(c1, s1)}))]${o1 ? `/${convert_opacity(o1)}` : ''} dark:stroke-[color:rgb(var(--on-${cs(c2, s2)}))]${o2 ? `/${convert_opacity(o2)}` : ''}`,
        {
            autocomplete: `stroke-on-inverse-${reg_c}/<num>-${reg_c}/</num>`
        }
    ], 

    // Stroke light - dark
    [
        new RegExp(`^stroke-${reg_c_s_oO}-${reg_s}${reg_oO}`),
        ([_, c1, s1, o1, s2, o2]: string[]) => `stroke-${cso(c1, s1, o1)} dark:stroke-${cso(c1, s2, o2)}`,
        {
            autocomplete: `stroke-${reg_c}/<num>-${reg_c}/<num>`
        }
    ], 

    // Stroke inverse light - dark
    [
        new RegExp(`^stroke-inverse-${reg_c_sO_oO}-${reg_c_sO_oO}`),
        ([_, c1, s1, o1, c2, s2, o2]: string[]) => `stroke-${cso(c1, s1, o1)} dark:stroke-${cso(c2, s2, o2)}`,
        {
            autocomplete: `stroke-inverse-${reg_c}/<num>-${reg_c}/<num>`
        }
    ], 
]