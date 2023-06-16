import type { Shortcut } from '@unocss/core';

export const convenienceSCs: Shortcut[] = [
    // TODO: Attributify mode inside class: text-[red,2xl,lg:5xl] turns into text-red text-2xl lg:text-5xl
    // [
    //     // /^(\w+)-\{(.*)\}$/,
    //     /^(\w+)-\((.*)\)$/,
    //     // /^(\w+)-\{((?:[:a-zA-Z0-9]*,\s)+[:a-zA-Z0-9]+)\}$/,
    //     ([, category, multiple]) => {
    //         const elements = multiple.replace(/\s+/g,' ').trim().split(',');
    //         let classes: string[] = [];
    //         elements.forEach((v) => {
    //             const parts = v.split(':')
    //             if (parts.length === 2) { classes.push(`${parts[0]}:${category}-${parts[1]}`); }
    //             else { classes.push(`${category}-${v.trim()}`); }
    //         });
    //         return classes.join(' ');
    //     }
    // ],
]