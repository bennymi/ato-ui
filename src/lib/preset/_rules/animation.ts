import type { Theme } from "@unocss/preset-wind";

export const animation = {
    keyframes: {
        layers1: "{0% {box-shadow: 0px 0px 0 0px} 90%, 100% {box-shadow: 20px 20px 0 -4px}}",
        layerTr: "{0% {transform: translate(0, 0) scale(1)} 100% {transform: translate(-25px, -25px) scale(1)}}",
        flipXY: `{0% {transform: perspective(200px) rotateX(0deg) rotateY(0deg)} 50% {transform: perspective(200px) rotateX(-180deg) rotateY(0deg)} 100% {transform: perspective(200px) rotateX(-180deg) rotateY(-180deg)}}`,
        barSlide: "{0% {transform: translateX(40px)} 50% {transform: translateX(-30px)} 100% {transform: translateX(40px)}}"
    },
    counts: {
        layers1: 'infinite',
        layerTr: 'infinite',
        flipXY: 'infinite',
        barSlide: 'infinite',
    },
    timingFns: {
        barSlide: 'ease-in-out'
    },
    durations: {
        layers1: '1s',
        layerTr: '1s',
        flipXY: '1.2s',
        barSlide: '1.8s',
    }
} satisfies Theme['animation'];