import type { Theme } from "@unocss/preset-wind";

export const animation = {
    keyframes: {
        layers1: "{0% {box-shadow: 0px 0px 0 0px} 90%, 100% {box-shadow: 20px 20px 0 -4px}}",
        layerTr: "{0% {transform: translate(0, 0) scale(1)} 100% {transform: translate(-25px, -25px) scale(1)}}"
    },
    counts: {
        layers1: 'infinite',
        layerTr: 'infinite'
    },
    durations: {
        layers1: '1s',
        layerTr: '1s'
    }
} satisfies Theme['animation'];