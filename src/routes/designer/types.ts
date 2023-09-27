export type ThemeColor =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'surface'
	| 'success'
	| 'warning'
	| 'error';

export type Roundedness = 'rounded-none' | 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';

export type RoundedAriaType = 'button' | 'button icon' | 'container' | 'switch' | 'input';

export type ShadeValues = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

type ColorManipulation = {
	color: string;
	lighten_values: number[];
	darken_values: number[];
};

export type LocalStorageColor = {
	[key in ThemeColor]: ColorManipulation;
};

type ButtonVariables = {
	py: number;
	px: number;
	font: number;
};

type LocalStorageRoundedness = {
	container: string;
	input: string;
	switch: string;
	btn: string;
	icon: string;
}

type LocalStorageButtons = {
	sm: ButtonVariables;
	md: ButtonVariables;
	lg: ButtonVariables;
	xl: ButtonVariables;
};

export type LocalStorageTheme = {
	colors: LocalStorageColor;
	rounded: LocalStorageRoundedness;
	btns: LocalStorageButtons;
};

export type Contrast = {
	on_color: string;
	contrast: number;
};

export type Shade = Contrast & {
	color: string;
};

export type PaletteShades = {
	[key in ShadeValues]: Shade;
};

export type Palette = {
	[key in ShadeValues]: string;
};

export type Rgb = {
	r: number;
	g: number;
	b: number;
};

export type FullTheme = {
	[key in ThemeColor]: PaletteShades;
};

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type Options = {
	container_radius: string[];
	btn_sizes: ButtonSize[];
	btn_radius: string[];
	btn_icon_radius: string[];
	btns: {
		[key in ButtonSize]: {
			title: string;
			py: number[];
			px: number[];
			font: number[];
		};
	};
};
