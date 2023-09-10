export type RadioItem = {
	value: string;
	label: string;
	subLabel?: string;
	icon?: string;
};

export type RegularRadioItem = {
	value: string;
	label: string;
};

export type RadioItemSize = 'sm' | 'md' | 'lg';

export type RadioGroupOrientation = 'horizontal' | 'vertical';

export type RegularRadioItemSizeDefinitions = Record<
	RadioItemSize,
	{ out: string; in: string; text: string }
>;
