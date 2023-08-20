
export type ToCHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ToCActiveType =
	| 'none'
	| 'lowest'
	| 'highest'
	| 'all'
	| 'lowest-parents'
	| 'highest-parents';

export type ToCScrollBehaviour = 'smooth' | 'instant';

export type ToCHeadingFilterFn = (heading: HTMLHeadingElement) => boolean;

export type ToCScrollFn = (id: string) => void;