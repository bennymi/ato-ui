import type { Rule } from '@unocss/core';

import type { Theme } from '@unocss/preset-wind';

export const animationRules: Rule[] = [
	[
		'fill-mode-both',
		{
			'animation-fill-mode': 'both'
		}
	]
];

export const animation = {
	keyframes: {
		rotate360: '{from{transform: rotate(0deg)}to{transform: rotate(360deg)}}',
		rotateSquare360:
			'{0% {transform: rotate(0deg)} 50% {transform: rotate(360deg)} 100% {transform: rotate(0deg)}}',
		layers1: '{0% {box-shadow: 0px 0px 0 0px} 90%, 100% {box-shadow: 20px 20px 0 -4px}}',
		layerTr:
			'{0% {transform: translate(0, 0) scale(1)} 100% {transform: translate(-25px, -25px) scale(1)}}',
		flipXY: `{0% {transform: perspective(200px) rotateX(0deg) rotateY(0deg)} 50% {transform: perspective(200px) rotateX(-180deg) rotateY(0deg)} 100% {transform: perspective(200px) rotateX(-180deg) rotateY(-180deg)}}`,
		barSlide:
			'{0% {transform: translateX(40px)} 50% {transform: translateX(-30px)} 100% {transform: translateX(40px)}}',
		squareShapeShift: `{
            0% {border-radius: 50%;}
            12.5% {border-radius: 0 50% 50% 50%; transform: rotate(45deg);}
            25% {border-radius: 0 0 50% 50%; transform: rotate(90deg);}
            37.5% {border-radius: 0 0 0 50%; transform: rotate(135deg);}
            50% {border-radius: 0; transform: rotate(180deg);}
            62.5% {border-radius: 50% 0 0 0; transform: rotate(225deg);}    
            75% {border-radius: 50% 50% 0 0; transform: rotate(270deg);}
            87.5% {border-radius: 50% 50% 50% 0; transform: rotate(315deg);}
            100% {border-radius: 50%; transform: rotate(360deg);}
        }`,
		foldingSquares2: `{
            0% {transform: translate(0, 0) rotateX(0) rotateY(0);}
            25% {transform: translate(100%, 0) rotateX(0) rotateY(180deg);}
            50% {transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);}
            75% {transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);}
            100% {transform: translate(0, 0) rotateX(0) rotateY(360deg);}
        }`,
		// 0%, 80%, 100% {box-shadow: 0 2.5em 0 -1.3em}
		// 40% {box-shadow: 0 2.5em 0 0}
		// 0%, 80%, 100% {box-shadow: 0 0 0 -1.3em}
		// 40% {box-shadow: 0 0 0 0}
		// 0%, 80%, 100% {transform: scale(1, 1)}
		// 40% {transform: scale(0.1, 0.1)}
		bblFadeInOut: `{
            0%, 20%, 80%, 100% {opacity: 1}
            40% {opacity: 0.2}
            60% {opacity: 0.6}
        }`
	},
	counts: {
		rotate360: 'infinite',
		rotateSquare360: 'infinite',
		layers1: 'infinite',
		layerTr: 'infinite',
		flipXY: 'infinite',
		barSlide: 'infinite',
		squareShapeShift: 'infinite',
		foldingSquares1: 'infinite',
		foldingSquares2: 'infinite',
		bblFadeInOut: 'infinite'
	},
	timingFns: {
		rotateSquare360: 'ease',
		barSlide: 'ease-in-out',
		foldingSquares: 'ease',
		foldingSquares2: 'ease',
		bblFadeInOut: 'ease-in-out'
	},
	durations: {
		rotate360: '1.1s',
		rotateSquare360: '4s',
		layers1: '1s',
		layerTr: '1s',
		flipXY: '1.2s',
		barSlide: '1.8s',
		squareShapeShift: '2s',
		foldingSquares1: '4s',
		foldingSquares2: '2s',
		bblFadeInOut: '1.8s'
	}
} satisfies Theme['animation'];
