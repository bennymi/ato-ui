export type ThemeColor =
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'surface'
		| 'success'
		| 'warning'
		| 'error';

export type Theme = {
    [key in ThemeColor]: string;
};

export type Palette = {
	[key: number]: string;
};

export type Rgb = {
	r: number;
	g: number;
	b: number;
};

export type FullTheme = {
	[key in ThemeColor]: Palette;
};