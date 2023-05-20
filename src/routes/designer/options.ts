import type { Options } from "./types";


export const options: Options = {
    container_radius: [
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
    ],
    btn_sizes: ['sm', 'md', 'lg', 'xl'],
    btns: {
        sm: {
            title: 'Small button (btn-sm)',
            py: [0.125, 0.25],
            px: [0.375, 0.5],
            font: [400, 500, 600],
        },
        md: {
            title: 'Medium button (btn-md)',
            py: [0.25, 0.375],
            px: [0.625, 0.75],
            font: [400, 500, 600],
        },
        lg: {
            title: 'Large button (btn-lg)',
            py: [0.375, 0.5, 0.625],
            px: [0.875, 1, 1.25],
            font: [500, 600, 700],
        },
        xl: {
            title: 'Extra-large button (btn-xl)',
            py: [0.625, 0.75, 0.875],
            px: [1.25, 1.5, 1.75],
            font: [600, 700, 800],
        }
    }
};