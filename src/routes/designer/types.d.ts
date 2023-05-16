export type ThemeColor =
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'surface'
		| 'success'
		| 'warning'
		| 'error';

export type ShadeValues = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type Theme = {
    [key in ThemeColor]: string;
};

export type Contrast = {
	onColor: string,
	contrast: number,
}

export type Shade = Contrast & {
	color: string
}

export type PaletteShades = {
	[key in ShadeValues]: Shade;
}

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