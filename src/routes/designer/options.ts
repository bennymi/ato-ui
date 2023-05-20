import type { Options } from "./types";

const radius = [
    '0px',
    '2px',
    '4px',
    '6px',
    '8px',
    '10px',
    '12px',
    '14px',
    '16px',
    '20px',
    '24px'
];

export const options: Options = {
    container_radius: radius,
    btn_sizes: ['sm', 'md', 'lg', 'xl'],
    btn_radius: [...radius, '9999px'],
    btn_icon_radius: [...radius, '9999px'],
    btns: {
        sm: {
            title: 'Small buttons (btn-sm)',
            py: [0.15, 0.2, 0.25],
            px: [0.375, 0.4, 0.5],
            font: [400, 500, 600],
        },
        md: {
            title: 'Medium buttons (btn-md)',
            py: [0.25, 0.3, 0.35, 0.375],
            px: [0.65, 0.7, 0.75],
            font: [500, 600],
        },
        lg: {
            title: 'Large buttons (btn-lg)',
            py: [0.375, 0.5, 0.625],
            px: [0.75, 0.875, 1, 1.125, 1.25],
            font: [500, 600, 700],
        },
        xl: {
            title: 'Extra-large buttons (btn-xl)',
            py: [0.625, 0.75, 0.875],
            px: [1.25, 1.375, 1.5, 1.625, 1.75],
            font: [600, 700, 800, 900],
        }
    }
};