import type { Rule, Shortcut } from '@unocss/core';

import { directionsJ } from '../../types/directions';
import { allColorsJ, themeColorsJ, shadesJ } from '../../types/colors';
import { default_dir, reg_dO, reg_c, reg_s, reg_c_sO, cs, reg_c_sO_oO, cso, reg_sO, reg_oO, reg_num } from '../utils/regex';
import { parse_opacity } from '../utils/regex';

export const backgroundRules: Rule[] = [
    // Scrollbar
    [
        /^scrollbar-none$/,
        ([n]: string[]) =>
        `
        .${n}::-webkit-scrollbar {
            display: none;
        }
        .${n} {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        `
    ],
    // Radial background gradients
    [
        new RegExp(`^bg-radial-${reg_c_sO}-${reg_c_sO}$`),
        ([, c1, s1, c2, s2]: string[]) => ({
          "background": `radial-gradient(rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})))`
        }),
        {
            autocomplete: [
                `bg-radial-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `bg-radial-(${themeColorsJ})-(${themeColorsJ})`
            ]
        }
    ],
    [
        new RegExp(`^bg-radial-${reg_c_sO}-${reg_c_sO}-${reg_c_sO}$`),
        ([, c1, s1, c2, s2, c3, s3]: string[]) => ({
          "background": `radial-gradient(rgb(var(--color-${cs(c1, s1)})), rgb(var(--color-${cs(c2, s2)})), rgb(var(--color-${cs(c3, s3)})))`
        }),
        {
            autocomplete: [
                `bg-radial-${reg_c}-${reg_s}-${reg_c}-${reg_s}-${reg_c}-${reg_s}`,
                `bg-radial-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`
            ]
        }
    ],
    // Mesh background
    [
        new RegExp(`^bg-mesh(?:-${reg_c_sO_oO}-x${reg_num}-y${reg_num})+$`),
        (matches) => {
            const regex = new RegExp(`${reg_c_sO_oO}-x${reg_num}-y${reg_num}`, 'g');
            const meshes = [...matches[0].matchAll(regex)];

            let bg_image = '';

            for (let i = 0; i < meshes.length; i++) {
                const [ , c, s, o, x, y ] = meshes[i];

                bg_image += `radial-gradient(at ${x}% ${y}%, rgba(var(--color-${cs(c, s)}), ${parse_opacity(o, '0.3')}) 0px, transparent 50%)`;

                bg_image += i + 1 === meshes.length ? ';' : ', ';
            }

            return {
                "background-image": bg_image
            };
        }
    ]
];

export const backgroundSCs: Shortcut[] = [
    // Background + text on background
    [
        new RegExp(`^${reg_c}-${reg_s}${reg_oO}$`),
        ([, c, s, o]) => `bg-${cso(c, s, o)} text-on-${cs(c, s)}`
    ],
    [
        new RegExp(`^${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`),
        ([, c, s1, o1, s2, o2]) => `bg-${cso(c, s1, o1)} text-on-${cs(c, s1)} dark:(bg-${cso(c, s2, o2)} text-on-${cs(c, s2)})`
    ],

    // Background Tokens
    // ([, b, s1, s2]: string[]) => `bg-${cs(b, s1)} dark:bg-${cs(b, s2)}`,
    [
        new RegExp(`^bg-${reg_c}-${reg_s}${reg_oO}-${reg_s}${reg_oO}$`), 
        ([, c, s1, o1, s2, o2]: string[]) => `bg-${cso(c, s1, o1)} dark:bg-${cso(c, s2, o2)}`,
        // ([, b, s1, o1, s2, o2]: string[]) => `${cs(b, s1)}${o1 ? `/${o1}` : ''} dark:${cs(b, s2)}${o2 ? `/${o2}` : ''}`,
        {
            autocomplete: `bg-${reg_c}-${reg_s}-(${shadesJ})`
        }
    ],

    // Background Inverse Tokens
    [
        new RegExp(`^bg-inverse-(${allColorsJ})${reg_sO}${reg_oO}-(${allColorsJ})${reg_sO}${reg_oO}$`), 
        ([, c1, s1, o1, c2, s2, o2]: string[]) => `bg-${cso(c1, s1, o1)} dark:bg-${cso(c2, s2, o2)}`,
        {
            autocomplete: [
                `bg-inverse-$colors-(${allColorsJ})`, 
                `bg-inverse-$colors-(${shadesJ})-$colors`, 
                `bg-inverse-$colors-(${shadesJ})-$colors-(${shadesJ})`
            ]
        }
    ],

    // Background gradients
    [
        new RegExp(`^bg-gradient${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2, c3, s3, o3]: string[]) => `bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, o1)} via-${cso(c2, s2, o2)} to-${cso(c3, s3, o3)}`, 
        {
            autocomplete: [`bg-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})-(${themeColorsJ})`]
        }
    ],
    [
        new RegExp(`^bg-gradient${reg_dO}-${reg_c_sO_oO}-${reg_c_sO_oO}$`), 
        ([, d, c1, s1, o1, c2, s2, o2]: string[]) => `bg-gradient-to-${d ?? default_dir} from-${cso(c1, s1, o1)} to-${cso(c2, s2, o2)}`, 
        {
            autocomplete: [
                `bg-(${directionsJ})-(${themeColorsJ})-(${themeColorsJ})`,
                `bg-(${directionsJ})-${reg_c}-${reg_s}-${reg_c}-${reg_s}`
            ]
        }
    ],
]